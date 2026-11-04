import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  FileCheck2,
  FileText,
  Users2,
  HeartHandshake,
  AlertCircle,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CSR & Corporate Partnerships",
  description:
    "Partner with Cancer Care & Cure Foundation to support underprivileged cancer patients through structured CSR initiatives, awareness drives, and employee engagement.",
};

export default function CSRPage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#004F8C] mb-2 block">
              Corporate Social Responsibility
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              CSR & Corporate Partnerships
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              Partner with us to create meaningful, transparent support for cancer patients and families facing acute financial hardship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[800px] space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2F52]">
              Partner With Us to Create Meaningful Support
            </h2>
            <p className="text-base sm:text-lg text-[#1E2A33] leading-relaxed text-justify">
              We invite companies, corporate CSR teams, philanthropic foundations, and employee groups to explore structured, ethical ways of improving cancer outcomes for disadvantaged communities.
            </p>
            <p className="text-base sm:text-[17px] text-[#4F5B66] leading-relaxed text-justify">
              Cancer creates catastrophic expenditure for low-income households. Through collaborative CSR funding, corporations can make direct, measurable contributions toward lifesaving treatment interventions, diagnostic access, nutritional stability, and preventive health literacy.
            </p>
          </div>
        </div>
      </section>

      {/* Potential Areas of Collaboration */}
      <section className="py-16 bg-[#F7F9FA] border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px] mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C] mb-3">
              Potential Areas of Collaboration
            </h2>
            <p className="text-sm text-[#4F5B66]">
              Co-create programmes aligned with Schedule VII of the Companies Act, 2013 (Healthcare, Preventive Oncology, and Poverty Alleviation).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#D5DDE3] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#004F8C] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">Patient Assistance Funds</h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Dedicated patient assistance funds, subject to applicable law, transparent medical verification, and approved programme criteria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D5DDE3] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#14788B] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">Cancer Awareness & Education</h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Corporate health literacy sessions, public screening awareness drives, and symptom education for underserved employee or community clusters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D5DDE3] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#2F7A1B] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">Patient Navigation Desks</h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Supporting navigation services that help underprivileged families understand diagnostic reports and access government welfare schemes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D5DDE3] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#0A2F52] flex items-center justify-center">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">Caregiver Support Initiatives</h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Programmes to counsel, equip, and relieve family members caring for patients through long chemo/radiotherapy regimens.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D5DDE3] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#004F8C] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">Employee Volunteering & Matching</h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Employee payroll giving, volunteer days, matched corporate giving, and internal cancer awareness talks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D5DDE3] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#14788B] flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">In-Kind & Professional Services</h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                In-kind healthcare supplies, diagnostic equipment support, or professional advisory aligned with programme requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability & Reporting */}
      <section className="py-16 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Accountability, Reporting & Governance
              </h2>
              <p className="text-sm text-[#1E2A33] leading-relaxed">
                We aim to establish appropriate governance, documentation, fund-use tracking, and outcome reporting for all supported projects.
              </p>
              <p className="text-sm text-[#4F5B66] leading-relaxed">
                Reports, fund utilisation certificates (UCs), audit reports, or impact assessments will be provided in complete alignment with corporate compliance mandates where applicable and formally agreed.
              </p>
            </div>

            <div className="bg-[#FFF4E0] border border-[#C88A1B] rounded-xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-[#7A4F00]">
                <AlertCircle className="w-5 h-5 text-[#C88A1B] flex-shrink-0" />
                <h3 className="font-serif text-lg font-bold text-[#5C3A00]">
                  Before Making a CSR Contribution
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7A4F00] leading-relaxed">
                CSR eligibility depends on applicable legal requirements and the foundation’s actual statutory status and documentation. Please contact us to discuss any proposed activity and request current supporting documents.
              </p>
              <p className="text-xs text-[#5C3A00] font-medium leading-relaxed">
                * Note: Do not assume that the foundation holds CSR-1 registration, Section 12A/80G, or specific exemptions unless these are confirmed in writing with official registration certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Box */}
      <section className="py-16 bg-[#E8F1F7]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#D5DDE3] rounded-xl p-8 sm:p-10 text-center max-w-[700px] mx-auto space-y-5">
            <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
              Initiate a CSR Dialogue
            </h2>
            <p className="text-sm text-[#4F5B66]">
              Our leadership is available to discuss your organization's CSR priorities, project proposals, and legal documentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2 text-sm font-semibold text-[#004F8C]">
              <a
                href="mailto:cccf.cancer@gmail.com"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>cccf.cancer@gmail.com</span>
              </a>
              <a
                href="tel:+919810414100"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9810414100</span>
              </a>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] transition-colors"
              >
                <span>Submit CSR Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
