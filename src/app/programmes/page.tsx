import type { Metadata } from "next";
import Link from "next/link";
import {
  HandHeart,
  Compass,
  Sparkles,
  HeartHandshake,
  Users,
  ShieldAlert,
  ArrowRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Explore Cancer Care & Cure Foundation programmes: Patient Assistance, Treatment Navigation, Awareness & Education, Caregiver Support, and Community Engagement.",
};

export default function ProgrammesPage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#14788B] mb-2 block">
              Core Initiatives
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              Our Programmes & Focus Areas
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              We focus on practical, responsible interventions designed to lessen the physical, emotional, and economic impact of cancer on vulnerable families.
            </p>
          </div>
        </div>
      </section>

      {/* Status Note */}
      <section className="py-8 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 p-4 bg-[#F7F9FA] border border-[#D5DDE3] rounded-lg text-xs text-[#4F5B66] leading-relaxed">
            <Info className="w-4 h-4 text-[#004F8C] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Programme Status:</strong> The areas below represent our planned and developing framework. Programmes are rolled out as formal approvals, hospital affiliations, and dedicated funding tranches become active.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          {/* Programme A */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#BAC9D6] rounded-2xl p-6 sm:p-8 bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAC9D6] text-[#004F8C] flex items-center justify-center font-serif font-bold text-xl shadow-2xs">
                A
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Patient Assistance Programme
              </h2>
              <p className="text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
                We aim to develop a process for considering requests from cancer patients experiencing financial hardship. Depending on available funds, verified need, eligibility criteria, and programme rules, support may include assistance towards approved treatment-related costs or referral to credible support resources.
              </p>
              <p className="text-xs sm:text-sm text-[#4F5B66] italic">
                * Note: Assistance cannot be guaranteed and is subject to rigorous documentary verification and available allocated budget.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link
                href="/patient-assistance"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded-lg hover:bg-[#E8F1F7] transition-colors shadow-2xs"
              >
                <span>How to Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Programme B */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#BAC9D6] rounded-2xl p-6 sm:p-8 bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAC9D6] text-[#14788B] flex items-center justify-center font-serif font-bold text-xl shadow-2xs">
                B
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Treatment Navigation & Information Desk
              </h2>
              <p className="text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
                A cancer diagnosis can be overwhelming. We aim to help patients and caregivers navigate treatment pathways, hospital support desks, government schemes (such as Ayushman Bharat / PMJAY and state welfare relief), and charitable assistance resources.
              </p>
              <p className="text-xs sm:text-sm text-[#4F5B66]">
                The foundation provides navigational and informational guidance only; we do not provide clinical diagnosis or replace qualified medical professionals.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded-lg hover:bg-[#E8F1F7] transition-colors shadow-2xs"
              >
                <span>Enquire With Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Programme C */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#BAC9D6] rounded-2xl p-6 sm:p-8 bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAC9D6] text-[#2F7A1B] flex items-center justify-center font-serif font-bold text-xl shadow-2xs">
                C
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Awareness & Early-Detection Education
              </h2>
              <p className="text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
                Early detection remains the single greatest determinant of survival in oncology. We aim to support community educational activities and screening awareness drives that encourage individuals to recognise warning signs, understand risk factors, and consult clinicians promptly.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded-lg hover:bg-[#E8F1F7] transition-colors shadow-2xs"
              >
                <span>Join Awareness Drives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Programme D */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#BAC9D6] rounded-2xl p-6 sm:p-8 bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAC9D6] text-[#0A2F52] flex items-center justify-center font-serif font-bold text-xl shadow-2xs">
                D
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Emotional Support & Caregiver Awareness
              </h2>
              <p className="text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
                Cancer affects the entire family ecosystem. Where resources and suitable professional partners are available, we aim to connect patients and caregivers with appropriate peer support circles, psycho-oncology counseling references, and community networks.
              </p>
            </div>
          </div>

          {/* Programme E */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#BAC9D6] rounded-2xl p-6 sm:p-8 bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-1 flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#BAC9D6] text-[#004F8C] flex items-center justify-center font-serif font-bold text-xl shadow-2xs">
                E
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Community & Volunteer Engagement
              </h2>
              <p className="text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
                Involving committed volunteers and community partners in education, outreach, administration, translation, and communication suited to their skills and the foundation’s patient safeguarding policies.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#004F8C] rounded-lg hover:bg-[#0A2F52] transition-colors shadow-2xs"
              >
                <span>Volunteer With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Safeguards & Guardrails */}
      <section className="py-16 bg-[#E8F1F7] border-b border-[#C5D8E6]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto bg-white border border-[#D5DDE3] rounded-xl p-8 sm:p-10">
            <div className="flex items-center gap-3 text-[#004F8C] mb-4">
              <ShieldAlert className="w-6 h-6 text-[#A32A2A]" />
              <h2 className="font-serif text-2xl font-bold text-[#1E2A33]">
                Programme Safeguards & Principles
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-[#4F5B66] list-disc list-inside leading-relaxed">
              <li>
                Programmes will depend on available resources and written eligibility criteria.
              </li>
              <li>
                Requests may require supporting identity, medical, income, or cost-estimate documents, handled strictly with privacy safeguards.
              </li>
              <li>
                A donation or enquiry does not guarantee assistance, treatment outcomes, or preferential access to medical services.
              </li>
              <li>
                The foundation will not promise medical outcomes or replace advice from qualified clinicians.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
