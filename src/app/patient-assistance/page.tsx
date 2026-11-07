import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ShieldAlert,
  FileText,
  PhoneCall,
  Mail,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import EmergencyNotice from "@/components/EmergencyNotice";

export const metadata: Metadata = {
  title: "Patient Assistance & Support",
  description:
    "Learn how Cancer Care & Cure Foundation assists underprivileged cancer patients, eligibility criteria, and step-by-step guidance on how to reach out.",
};

export default function PatientAssistancePage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#14788B] mb-2 block">
              Patient Care & Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              Patient Assistance & Support
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              Facing cancer is physically, emotionally, and financially exhausting. We are here to guide you respectfully and explore all available relief avenues.
            </p>
          </div>
        </div>
      </section>

      {/* How to Contact Us / Process */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-10">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C]">
                How to Seek Assistance
              </h2>
              <p className="text-base sm:text-lg text-[#1E2A33] leading-relaxed text-justify">
                A cancer diagnosis can bring difficult medical, emotional, and financial questions. Cancer Care & Cure Foundation aims to develop a respectful, dignified process for people seeking information or financial aid.
              </p>
              <p className="text-base text-[#4F5B66] leading-relaxed text-justify">
                Our team assists patients and caregivers through transparent communication, providing direction on hospital desks, scheme entitlements, and required documentation before application review.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#BAC9D6] shadow-xl bg-white">
                <Image
                  src="/images/patient-assistance.jpg"
                  alt="Compassionate patient support and medical navigation"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-2 max-w-[880px]">
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[#EAEFF5] border border-[#BAC9D6] rounded-xl shadow-xs hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#004F8C] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                1
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2A33]">
                  Initial Contact
                </h3>
                <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                  Email us at{" "}
                  <a href="mailto:cccf.cancer@gmail.com" className="font-semibold text-[#004F8C] underline">
                    cccf.cancer@gmail.com
                  </a>{" "}
                  or call our helpline at{" "}
                  <a href="tel:+919810414100" className="font-semibold text-[#004F8C] underline">
                    +91 9810414100
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[#EAEFF5] border border-[#BAC9D6] rounded-xl shadow-xs hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#004F8C] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                2
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2A33]">
                  Briefly Explain Your Situation
                </h3>
                <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                  Briefly state the type of support, hospital navigation, or financial information you are seeking.{" "}
                  <strong className="text-[#A32A2A]">
                    Do not send medical files or bank details in your initial enquiry.
                  </strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[#EAEFF5] border border-[#BAC9D6] rounded-xl shadow-xs hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#004F8C] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                3
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2A33]">
                  Eligibility & Documentation Guidance
                </h3>
                <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                  If an appropriate support programme is currently active, our team will explain its specific eligibility rules, required documentation (e.g. income certificate, hospital estimate), and timelines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[#EAEFF5] border border-[#BAC9D6] rounded-xl shadow-xs hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#004F8C] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                4
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2A33]">
                  Transparent Review
                </h3>
                <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                  Requests are reviewed fairly based on verified need, approved programme criteria, available funds, and compliance with charitable trust regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensitive Data Guardrails Notice */}
      <section className="py-12 bg-[#F7F9FA] border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#D5DDE3] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-[#004F8C]">
              <ShieldAlert className="w-5 h-5 text-[#A32A2A]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">
                Important Information & Privacy Rules
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#4F5B66] list-disc list-inside leading-relaxed">
              <li>
                Submitting an enquiry does not guarantee financial assistance or any other service.
              </li>
              <li>
                Support strictly depends on programme availability, eligibility, document verification, and available foundation funds.
              </li>
              <li>
                The foundation does not provide emergency medical services, clinical diagnosis, or medical treatment.
              </li>
              <li>
                For urgent symptoms or acute crises, contact your treating hospital or national emergency lines immediately.
              </li>
              <li>
                <strong>Do not email full medical records, Aadhaar/identity cards, or bank details</strong> unless specifically requested through our verified encrypted process.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Direct Contact Action */}
      <section className="py-16 bg-[#E8F1F7]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-[640px] mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#004F8C]">
              Need Help With Navigation?
            </h3>
            <p className="text-xs sm:text-sm text-[#4F5B66] leading-relaxed">
              Reach out to our helpline team. We will listen respectfully and guide you towards relevant hospital help desks and support avenues.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] transition-colors"
              >
                <span>Fill Assistance Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:+919810414100"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded hover:bg-[#E8F1F7] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Helpline: +91 9810414100</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice at the end of page */}
      <section className="py-8 bg-white border-t border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <EmergencyNotice />
        </div>
      </section>
    </div>
  );
}
