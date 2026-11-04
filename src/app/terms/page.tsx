import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for accessing and using the Cancer Care & Cure Foundation website.",
};

export default function TermsPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="border-b border-[#D5DDE3] pb-6 mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-[#004F8C] block mb-2">
            Governance & Rules
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C]">
            Terms of Use
          </h1>
          <p className="text-xs text-[#4F5B66] mt-2">
            Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              1. Website Information
            </h2>
            <p>
              This website is intended to provide general information about Cancer Care & Cure Foundation and its proposed activities. Content may be updated, corrected, or removed at any time without prior notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              2. No Medical Advice or Emergency Care
            </h2>
            <p>
              Website content is for general information and public awareness only. It is <strong>not medical advice, clinical diagnosis, or medical treatment</strong>.
            </p>
            <p>
              Always consult a qualified healthcare professional regarding any medical diagnosis or treatment decisions. In a medical crisis, immediately contact emergency ambulance services (112 / 108) or visit your nearest hospital emergency department.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              3. No Guarantee of Assistance
            </h2>
            <p>
              Information about proposed programmes does not constitute a guarantee that a programme is operational or that any individual will receive financial support. All assistance is strictly subject to formal programme authorization, verified eligibility, documentary validation, available foundation funds, and applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              4. Contributions and Partnerships
            </h2>
            <p>
              Do not make financial contributions or transfers unless the foundation has officially confirmed that it is legally authorised to receive them and has supplied verified institutional payment instructions. Tax benefits, CSR recognition, and receipts are subject to applicable statutory approvals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#0A2F52]">
              5. Third-Party Links & Resources
            </h2>
            <p>
              For public convenience, the website may refer to external hospital directories, government welfare portals, or charitable databases. The foundation has no control over external platforms, and visitors must review the respective privacy policies and terms of those third-party sites.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#D5DDE3]">
            <p className="text-xs text-[#4F5B66]">
              Questions or comments regarding these Terms of Use may be directed to:{" "}
              <a href="mailto:cccf.cancer@gmail.com" className="text-[#004F8C] underline font-medium">
                cccf.cancer@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
