import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Medical, Legal, and Operational Disclaimer of Cancer Care & Cure Foundation.",
};

export default function DisclaimerPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="border-b border-[#D5DDE3] pb-6 mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-[#A32A2A] block mb-2">
            Important Notice
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C]">
            Medical & Non-Profit Disclaimer
          </h1>
          <p className="text-xs text-[#4F5B66] mt-2">
            Last Updated: October 2026
          </p>
        </div>

        {/* Emergency Callout */}
        <div className="bg-[#FFF4E0] border-l-4 border-[#C88A1B] p-5 rounded-r mb-8 space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#5C3A00]">
            <AlertTriangle className="w-5 h-5 text-[#C88A1B]" />
            <span>Acute Medical Emergency Advisory</span>
          </div>
          <p className="text-sm sm:text-base text-[#7A4F00] leading-relaxed text-justify">
            Cancer Care & Cure Foundation is <strong>not an emergency service</strong> and does not provide urgent clinical intervention. If you or someone you care for is experiencing acute medical distress, dial national emergency helpline <strong>112 / 108</strong> or go to the nearest hospital emergency room without delay.
          </p>
        </div>

        <div className="space-y-8 text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              1. General Information Only
            </h2>
            <p>
              Website content is intended strictly for general information and public awareness. It does not constitute, and must never replace, professional medical diagnosis, clinical treatment plans, financial advice, or formal legal counsel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              2. No Medical Cures or Guaranteed Outcomes
            </h2>
            <p>
              The foundation does not promise a cure, guarantee any specific therapeutic outcome, or promise financial aid approval to any applicant. Any support offered will depend entirely on confirmed programme availability, written eligibility criteria, document verification, available resources, and applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              3. Proposed Programmes and Legal Status
            </h2>
            <p>
              References on this website to future or proposed programmes describe strategic intentions and should not be read as confirmation that those programmes are fully funded or operational.
            </p>
            <p>
              The foundation’s registration status, tax exemptions (e.g. 12A/80G), CSR-1 eligibility, and authority to accept public contributions must be confirmed directly in writing with our authorized officers before initiating any donation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              4. Contact for Clarifications
            </h2>
            <p>
              For questions regarding the scope of our foundation or this disclaimer, please reach us at:
            </p>
            <p className="text-xs font-semibold text-[#004F8C]">
              Email: <a href="mailto:cccf.cancer@gmail.com" className="underline">cccf.cancer@gmail.com</a> | Phone: +91 9810414100
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
