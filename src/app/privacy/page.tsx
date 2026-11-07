import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Cancer Care & Cure Foundation, outlining personal data handling, user rights under India's DPDP Act 2023, and security measures.",
};

export default function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="border-b border-[#D5DDE3] pb-6 mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-[#004F8C] block mb-2">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#4F5B66] mt-2">
            Last Updated: October 2026 | Compliant with India’s Digital Personal Data Protection (DPDP) Act, 2023
          </p>
        </div>

        <div className="space-y-8 text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              1. Information We May Receive
            </h2>
            <p>
              If you contact Cancer Care & Cure Foundation through our contact form, volunteer application, email, or telephone, we may receive your full name, email address, phone number, city, the nature of your enquiry, and any message you choose to provide.
            </p>
            <p>
              If a formal patient assistance programme is active, additional documentary information (such as income certificates, hospital treatment estimates, and identification) will only ever be requested through verified, secure channels.
            </p>
            <div className="p-3.5 bg-[#FFF4E0] border-l-4 border-[#C88A1B] text-xs sm:text-sm text-[#7A4F00] text-justify">
              <strong>Public Form Guardrail:</strong> We deliberately do not ask for or store clinical patient diagnosis records, complete medical scans, government identity numbers (Aadhaar / PAN), or bank account credentials on public website forms.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              2. How Your Information Is Used
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-[#4F5B66]">
              <li>To evaluate and respond to your enquiries, patient assistance questions, or CSR partnership proposals.</li>
              <li>To coordinate volunteer applications and assign outreach or administrative activities.</li>
              <li>To fulfill statutory, audit, and regulatory requirements applicable to Indian charitable organizations.</li>
              <li>To maintain internal audit logs and prevent abusive automated bot spam.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              3. Sharing and Security Safeguards
            </h2>
            <p>
              <strong>Personal information is never sold, rented, or commercialized.</strong>
            </p>
            <p>
              Data may be shared strictly with authorized personnel or trusted technology infrastructure providers (such as secure cloud hosting and email service providers) solely to deliver our services, enforce confidentiality covenants, or comply with court orders or applicable Indian laws.
            </p>
            <p>
              We implement industry-standard administrative, physical, and technical controls (including encrypted transmission and access-controlled databases). While no digital system is completely immune to risks, we take every reasonable measure to protect your data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              4. Data Retention and Deletion
            </h2>
            <p>
              Under our data retention charter, contact submissions and volunteer applications are reviewed periodically. Inquiries that have been closed and resolved will be retained for administrative recordkeeping (typically up to 12 months) and subsequently securely deleted or anonymised, unless longer retention is required for legal compliance or financial audits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              5. Your Rights & Privacy Inquiries
            </h2>
            <p>
              Under applicable Indian privacy law (including the DPDP Act, 2023), you have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request deletion of your information once processing purposes are fulfilled.
            </p>
            <p>
              For any privacy inquiries or to exercise your statutory rights, please write directly to our Data Protection point of contact at:
            </p>
            <div className="p-4 bg-[#EBF1F6] border border-[#BAC9D6] rounded-lg text-xs space-y-1 shadow-2xs">
              <p className="font-semibold text-[#1E2A33]">Cancer Care & Cure Foundation</p>
              <p>Email: <a href="mailto:cccf.cancer@gmail.com" className="text-[#004F8C] underline">cccf.cancer@gmail.com</a></p>
              <p>Office Address: 96 A, Pocket-C, Mayur Vihar, Phase-2, Delhi-110091, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
