-- ==============================================================================
-- Cancer Care & Cure Foundation Website
-- Database Schema (PostgreSQL / Supabase)
-- Version 1.0 (Draft) | Companion to PRD, TRD and App Flow
-- ==============================================================================

-- 1. ENUMERATIONS
create type enquiry_type as enum (
  'patient_assistance',
  'csr_partnership',
  'donation',
  'volunteering',
  'media',
  'other'
);

create type record_status as enum ('new', 'in_progress', 'closed');

create type volunteer_role as enum (
  'event_support',
  'awareness',
  'patient_support',
  'administration',
  'digital_and_design',
  'other'
);

create type availability as enum ('weekdays', 'weekends', 'flexible');
create type staff_role as enum ('admin', 'staff');
create type email_status as enum ('pending', 'sent', 'failed');
create type request_type as enum ('access', 'correction', 'deletion');
create type donation_status as enum ('created', 'pending', 'paid', 'failed', 'refunded');

-- 2. PHASE 1 TABLES

-- 2.1 Staff Profiles (extends auth.users)
create table if not exists staff_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role staff_role not null default 'staff',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- 2.2 Contact Submissions
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 2 and 100),
  email text not null check (char_length(email) <= 254),
  phone text check (phone ~ '^[0-9+()\- ]{7,20}$'),
  enquiry_type enquiry_type not null,
  message text not null check (char_length(message) between 10 and 2000),
  consent_at timestamptz not null default now(),
  consent_version text not null default 'v1.0',
  status record_status not null default 'new',
  assigned_to uuid references staff_profiles(user_id),
  ip_hash text,
  closed_at timestamptz,
  delete_after date
);

create index if not exists contact_status_created_idx on contact_submissions (status, created_at desc);
create index if not exists contact_type_idx on contact_submissions (enquiry_type);
create index if not exists contact_email_idx on contact_submissions (lower(email));
create index if not exists contact_delete_after_idx on contact_submissions (delete_after) where delete_after is not null;

-- 2.3 Volunteer Applications
create table if not exists volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 2 and 100),
  email text not null check (char_length(email) <= 254),
  phone text not null check (phone ~ '^[0-9+()\- ]{7,20}$'),
  city text not null check (char_length(city) between 2 and 80),
  role volunteer_role not null,
  skills text check (char_length(skills) <= 500),
  availability availability not null,
  consent_at timestamptz not null default now(),
  consent_version text not null default 'v1.0',
  status record_status not null default 'new',
  assigned_to uuid references staff_profiles(user_id),
  ip_hash text,
  closed_at timestamptz,
  delete_after date
);

create index if not exists volunteer_status_created_idx on volunteer_applications (status, created_at desc);
create index if not exists volunteer_role_city_idx on volunteer_applications (role, city);
create index if not exists volunteer_delete_after_idx on volunteer_applications (delete_after) where delete_after is not null;

-- 2.4 Staff Notes
create table if not exists staff_notes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  author_id uuid not null references staff_profiles(user_id),
  record_type text not null check (record_type in ('contact', 'volunteer')),
  record_id uuid not null,
  note text not null check (char_length(note) between 1 and 2000)
);

create index if not exists staff_notes_record_idx on staff_notes (record_type, record_id, created_at);

-- 2.5 Email Events (Retry state & outbox)
create table if not exists email_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  record_type text not null check (record_type in ('contact', 'volunteer', 'donation')),
  record_id uuid not null,
  purpose text not null check (purpose in ('staff_notification', 'acknowledgement', 'receipt')),
  status email_status not null default 'pending',
  attempts int not null default 0,
  last_error text,
  next_attempt timestamptz,
  sent_at timestamptz
);

create index if not exists email_events_due_idx on email_events (next_attempt) where status = 'pending';

-- 2.6 Rate Limit Hits
create table if not exists rate_limit_hits (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  route text not null,
  ip_hash text not null
);

create index if not exists rate_limit_lookup_idx on rate_limit_hits (route, ip_hash, created_at desc);

-- 2.7 Data Requests (India DPDP Act 2023)
create table if not exists data_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  type request_type not null,
  details text check (char_length(details) <= 1000),
  status record_status not null default 'new',
  due_by date,
  resolved_at timestamptz,
  handled_by uuid references staff_profiles(user_id)
);

-- 2.8 Audit Log
create table if not exists audit_log (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  actor_id uuid references staff_profiles(user_id),
  action text not null,
  record_type text,
  record_id uuid,
  detail jsonb not null default '{}'::jsonb
);

create index if not exists audit_log_record_idx on audit_log (record_type, record_id, created_at desc);

-- 3. PHASE 2 TABLES (Online Donations)
create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  amount_paise bigint not null check (amount_paise > 0),
  currency char(3) not null default 'INR',
  status donation_status not null default 'created',
  donor_name text not null,
  donor_email text not null,
  donor_phone text,
  donor_pan_enc bytea,
  gateway text not null check (gateway in ('razorpay', 'cashfree')),
  gateway_order_id text not null unique,
  gateway_payment_id text unique,
  receipt_number text unique,
  receipt_issued_at timestamptz,
  consent_at timestamptz not null,
  consent_version text not null
);

create table if not exists payment_webhook_events (
  id uuid primary key default gen_random_uuid(),
  received_at timestamptz not null default now(),
  gateway text not null,
  event_id text not null,
  event_type text not null,
  signature_ok boolean not null,
  donation_id uuid references donations(id),
  payload jsonb not null,
  processed_at timestamptz,
  unique (gateway, event_id)
);

create table if not exists receipt_counters (
  financial_year text primary key,
  last_number int not null default 0
);

-- 4. ROW LEVEL SECURITY (RLS)
alter table contact_submissions enable row level security;
alter table volunteer_applications enable row level security;
alter table staff_profiles enable row level security;
alter table staff_notes enable row level security;
alter table email_events enable row level security;
alter table rate_limit_hits enable row level security;
alter table data_requests enable row level security;
alter table audit_log enable row level security;
alter table donations enable row level security;
alter table payment_webhook_events enable row level security;
alter table receipt_counters enable row level security;

create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from staff_profiles
    where user_id = auth.uid() and active
  );
$$;

create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from staff_profiles
    where user_id = auth.uid() and active and role = 'admin'
  );
$$;

create policy staff_read_contact on contact_submissions
  for select to authenticated using (is_staff());

create policy staff_update_contact on contact_submissions
  for update to authenticated using (is_staff()) with check (is_staff());

create policy staff_read_volunteer on volunteer_applications
  for select to authenticated using (is_staff());

create policy staff_update_volunteer on volunteer_applications
  for update to authenticated using (is_staff()) with check (is_staff());

create policy staff_read_notes on staff_notes
  for select to authenticated using (is_staff());

create policy staff_add_notes on staff_notes
  for insert to authenticated with check (is_staff() and author_id = auth.uid());

create policy admin_manage_staff on staff_profiles
  for all to authenticated using (is_admin()) with check (is_admin());

create policy staff_read_self on staff_profiles
  for select to authenticated using (user_id = auth.uid());

create policy staff_read_requests on data_requests
  for select to authenticated using (is_staff());

create policy staff_update_requests on data_requests
  for update to authenticated using (is_staff()) with check (is_staff());

create policy admin_read_audit on audit_log
  for select to authenticated using (is_admin());
