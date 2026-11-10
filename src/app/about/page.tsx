import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Eye,
  Target,
  Shield,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cancer Care & Cure Foundation, our mission, core values, objectives, and the personal story of founder Sushil Sharma.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#14788B] mb-2 block">
              About The Foundation
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              Building a Responsible, Compassionate Network of Care
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              Cancer Care & Cure Foundation is being developed to help people affected by cancer face their journey with greater support, dignity, and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Official Foundation Banner */}
      <section className="py-8 sm:py-10 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden border-2 border-[#BAC9D6] shadow-lg bg-[#EAEFF5] group">
            <Image
              src="/images/about-banner.jpg"
              alt="Cancer Care & Cure Foundation - Supporting Financially Disadvantaged Cancer Patients Across India"
              width={1024}
              height={512}
              priority
              className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-500"
              sizes="(max-width: 780px) 100vw, 780px"
            />
          </div>
        </div>
      </section>

      {/* Who We Are & Mission */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-[#004F8C]">
                Who We Are
              </h2>
              <p className="text-base sm:text-[17px] text-[#1E2A33] leading-relaxed text-justify">
                We aspire to work with patients and caregivers, healthcare institutions, community organisations, corporate partners, donors, and volunteers.
              </p>
              <p className="text-base sm:text-[17px] text-[#4F5B66] leading-relaxed text-justify">
                The nature and scale of our activities depend on the foundation’s legal status, available resources, hospital partnerships, and approved programme policies. We believe in building sustainable, transparent foundations before expanding promises.
              </p>
              <div className="p-4 bg-[#F7F9FA] border-l-4 border-[#004F8C] text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                <strong>Our Commitment:</strong> We aim to handle enquiries respectfully, assess requests fairly, safeguard personal information, and develop programmes only when appropriate systems and resources are in place.
              </div>
            </div>

            <div className="bg-[#E8F1F7] p-8 rounded-xl border border-[#C5D8E6] space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#004F8C] mb-2">
                  <Target className="w-5 h-5 text-[#14788B]" />
                  <h3 className="font-serif text-xl font-bold text-[#0A2F52]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base text-[#1E2A33] leading-relaxed text-justify">
                  To build a responsible, transparent, and compassionate support network that helps eligible cancer patients and their families access information, assistance, awareness initiatives, and appropriate support services.
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5D8E6]">
                <div className="flex items-center gap-2 text-[#004F8C] mb-2">
                  <Eye className="w-5 h-5 text-[#2F7A1B]" />
                  <h3 className="font-serif text-xl font-bold text-[#0A2F52]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base text-[#1E2A33] leading-relaxed text-justify">
                  A society where financial hardship does not prevent people affected by cancer from seeking essential medical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Founder */}
      <section className="py-16 sm:py-20 bg-[#F7F9FA] border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#D5DDE3] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Photo & Founder Profile Column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative w-52 sm:w-60 aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#D5DDE3] shadow-md bg-white">
                  <Image
                    src="/images/founder.jpg"
                    alt="Sushil Sharma - Founder, Cancer Care & Cure Foundation"
                    fill
                    sizes="(max-width: 768px) 240px, 300px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#004F8C]">
                    Sushil Sharma
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#14788B]">
                    Founder & Trustee
                  </p>
                  <p className="text-xs text-[#4F5B66] italic">
                    Pancreatic Cancer Survivor (2019)
                  </p>
                </div>
              </div>

              {/* Message Content Column */}
              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#004F8C] block mb-2">
                    Founder's Note
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2F52]">
                    A Personal Journey of Hope & Resolve
                  </h2>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[#1E2A33] leading-relaxed text-justify">
                  <p>
                    My vision for Cancer Care & Cure Foundation comes from a deeply personal journey. In 2019, I was diagnosed with pancreatic cancer. My journey through major surgery, chemotherapy, radiation therapy, and recovery taught me that facing cancer requires not only medical treatment but also courage, emotional strength, family support, and financial resources.
                  </p>
                  <p>
                    I experienced how physically and emotionally challenging cancer can be, and how the financial burden can make an already difficult situation even more overwhelming. My experience strengthened my desire to help people who may have the courage to fight cancer but lack the financial means to access the care they need.
                  </p>
                  <p>
                    Through this initiative, I hope to bring together corporate organisations, CSR partners, individual donors, philanthropic institutions, and compassionate people who share the belief that every life matters. The aim is to help ensure that financial hardship does not become an unnecessary barrier to seeking essential medical care.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5DDE3]">
                  <blockquote className="font-serif italic text-base sm:text-lg text-[#004F8C] border-l-4 border-[#004F8C] pl-4 py-2 bg-[#E8F1F7]/70 rounded-r">
                    “Cancer can touch your body, but not your soul.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px] mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C] mb-3">
              Our Key Objectives
            </h2>
            <p className="text-base text-[#4F5B66]">
              Clear, practical goals governing our operations and programme delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] space-y-2.5 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#2F7A1B]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">Treatment Aid</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Work towards financial assistance for eligible cancer-treatment expenses, subject to available funds and programme rules.
              </p>
            </div>

            <div className="p-6 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] space-y-2.5 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#2F7A1B]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">Information Access</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Support access to verified information about cancer surgery, chemotherapy, radiation therapy, prescribed medicines, and diagnostics.
              </p>
            </div>

            <div className="p-6 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] space-y-2.5 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#2F7A1B]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">Institutional Collaboration</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Collaborate with credible hospitals, cancer centres, healthcare professionals, and charitable institutions.
              </p>
            </div>

            <div className="p-6 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] space-y-2.5 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#2F7A1B]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">Corporate CSR</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Explore corporate and philanthropic partnerships where legal and eligibility requirements are met.
              </p>
            </div>

            <div className="p-6 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] space-y-2.5 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#2F7A1B]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">Education & Detection</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Promote public awareness, early detection education, and timely medical consultation with qualified oncologists.
              </p>
            </div>

            <div className="p-6 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] space-y-2.5 shadow-xs hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#2F7A1B]" />
              <h3 className="font-serif text-lg font-bold text-[#1E2A33]">Integrity & Privacy</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Maintain strict accountability, protect patient privacy, and use all philanthropic resources responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#E8F1F7] border-b border-[#C5D8E6]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C] mb-3">
              Our Guiding Values
            </h2>
            <p className="text-base text-[#4F5B66]">
              Every interaction with patients, donors, and partners is anchored in these six principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#EAEFF5] p-6 rounded-xl border border-[#BAC9D6] shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#004F8C] mb-2">Compassion</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Treating patients and their families with deep empathy, active listening, and respect at every step.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 rounded-xl border border-[#BAC9D6] shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#004F8C] mb-2">Dignity</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Protecting privacy and avoiding stigma or discrimination. Every patient deserves respectful support.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 rounded-xl border border-[#BAC9D6] shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#004F8C] mb-2">Integrity</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Handling all contributions, enquiries, and partner commitments responsibly and ethically.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 rounded-xl border border-[#BAC9D6] shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#004F8C] mb-2">Transparency</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Communicating eligibility, limitations, and fund use clearly without vague or misleading claims.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 rounded-xl border border-[#BAC9D6] shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#004F8C] mb-2">Collaboration</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Working closely with credible hospitals, doctors, and community partners to improve real reach.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 rounded-xl border border-[#BAC9D6] shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-serif text-lg font-bold text-[#004F8C] mb-2">Hope</h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed">
                Encouraging patients and caregivers constructively without making unrealistic or false medical promises.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] transition-colors"
            >
              <span>Get in Touch With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
