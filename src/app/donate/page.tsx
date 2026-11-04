import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  AlertTriangle,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate / Support Our Mission",
  description:
    "Support Cancer Care & Cure Foundation. Learn about authorized contribution channels, verification instructions, and our commitment to transparency.",
};

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#004F8C] mb-2 block">
              Support Our Work
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              Your Support Can Help Build a Network of Care
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              We are working towards building a responsible foundation that can support eligible patients, share reliable information, and connect vulnerable families with essential resources.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px] mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C] mb-3">
              Ways to Support Our Mission
            </h2>
            <p className="text-sm text-[#4F5B66]">
              Every contribution directly expands our ability to stand beside patients in their most difficult hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-[#D5DDE3] rounded-lg p-6 bg-[#F7F9FA] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#004F8C] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">
                Individual Contributions
              </h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Direct financial contributions once the foundation is legally authorised and able to receive them through official banking channels.
              </p>
            </div>

            <div className="border border-[#D5DDE3] rounded-lg p-6 bg-[#F7F9FA] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#14788B] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">
                Corporate Partnerships
              </h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                CSR grants and corporate partnerships, subject to applicable eligibility, Section 135 compliance, and institutional agreements.
              </p>
            </div>

            <div className="border border-[#D5DDE3] rounded-lg p-6 bg-[#F7F9FA] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#2F7A1B] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">
                Employee Giving Campaigns
              </h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Workplace payroll giving, matched funding drives, and awareness campaigns organized by concerned corporate teams.
              </p>
            </div>

            <div className="border border-[#D5DDE3] rounded-lg p-6 bg-[#F7F9FA] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#0A2F52] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">
                In-Kind Assistance
              </h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Donations of medical supplies, nutritional supplements, or professional services after prior review and formal approval.
              </p>
            </div>

            <div className="border border-[#D5DDE3] rounded-lg p-6 bg-[#F7F9FA] space-y-2.5">
              <div className="w-9 h-9 rounded bg-[#E8F1F7] text-[#004F8C] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1E2A33]">
                Volunteer Support
              </h3>
              <p className="text-xs text-[#4F5B66] leading-relaxed">
                Contributing your time, expertise, language skills, or outreach energy to expand patient support in your locality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Use Policy */}
      <section className="py-14 bg-[#F7F9FA] border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#004F8C]">
              Fund Use & Stewardship Policy
            </h2>
            <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
              Contributions, where accepted, will be used in accordance with applicable law, the foundation’s governing documents, donor restrictions formally accepted by the foundation, and approved programme policies.
            </p>
            <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
              * Please note: A donation will not be earmarked for a particular named patient unless expressly agreed in writing and legally permissible under Indian charity regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Official Inquiry Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="bg-[#E8F1F7] border border-[#C5D8E6] rounded-xl p-8 sm:p-10 text-center max-w-[680px] mx-auto space-y-5">
            <h3 className="font-serif text-2xl font-bold text-[#004F8C]">
              Request Verified Giving Information
            </h3>
            <p className="text-xs sm:text-sm text-[#4F5B66] leading-relaxed">
              To request our official bank transfer details or speak with a trustee regarding philanthropic support:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-semibold text-[#004F8C]">
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
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] transition-colors"
              >
                <span>Send Support Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Instructions & Fraud Warning at the end of page */}
      <section className="py-10 bg-white border-t border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="bg-[#FFF4E0] border-l-4 border-[#C88A1B] p-5 sm:p-6 rounded-r shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-[#5C3A00]">
              <AlertTriangle className="w-5 h-5 text-[#C88A1B] flex-shrink-0" />
              <h3 className="font-serif text-base font-bold">
                Important Contribution Instructions & Transparency Guarantee
              </h3>
            </div>
            <p className="text-xs text-[#7A4F00] leading-relaxed">
              <strong>Please contact us before sending money or in-kind contributions.</strong> Official banking details are issued only upon formal coordination. Never transfer funds to any personal individual bank account or unverified third-party UPI links. Tax exemptions (Section 80G) and official receipts are issued only in compliance with valid statutory approvals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
