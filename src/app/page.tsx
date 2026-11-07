import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Compass,
  Building2,
  Users,
  ArrowRight,
  HandHeart,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E8F1F7] via-white to-white border-b border-[#D5DDE3] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C5D8E6] text-xs font-semibold text-[#004F8C] mb-5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2F7A1B]" />
                <span>Cancer Care & Cure Foundation, Delhi</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004F8C] tracking-tight leading-[1.18] mb-5">
                Compassion That Becomes Action
              </h1>

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#B45309] font-bold italic mb-6">
                Together, We Give Hope. Together, We Save Lives.
              </p>

              <p className="text-base sm:text-lg text-[#1E2A33] leading-relaxed mb-5 text-justify">
                Cancer is not only a medical challenge; it can also create significant emotional and financial pressure for patients and their families. Cancer Care & Cure Foundation is being developed with the aim of helping financially disadvantaged cancer patients access appropriate support, information, and resources.
              </p>

              <p className="text-base sm:text-lg text-[#4F5B66] leading-relaxed mb-8 text-justify">
                Our goal is to bring together individuals, corporate partners, healthcare institutions, and philanthropic organisations to help reduce financial barriers to cancer care. Any assistance will depend on programme availability, eligibility, verified need, available funds, and applicable law.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/patient-assistance"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#004F8C] rounded-lg hover:bg-[#0A2F52] shadow-sm transition-colors text-center"
                >
                  <span>Seek Patient Assistance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded-lg hover:bg-[#E8F1F7] transition-colors text-center"
                >
                  <span>Support Our Mission</span>
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-1.5 px-4 py-3 text-sm sm:text-base font-semibold text-[#4F5B66] hover:text-[#004F8C] transition-colors text-center"
                >
                  <span>Read Founder's Story</span>
                </Link>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#BAC9D6] shadow-xl bg-white aspect-[4/3] group">
                <Image
                  src="/images/home-care.jpg"
                  alt="Cancer Care & Cure Foundation - Compassionate Care and Patient Support"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F52]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#E8F1F7] block mb-1">
                    Care, Dignity & Hope
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                    Standing beside cancer patients and families every step of the journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="border-2 border-[#BAC9D6] bg-[#EAEFF5] rounded-2xl p-8 sm:p-12 text-center max-w-[860px] mx-auto shadow-xs">
            <span className="text-xs uppercase font-bold tracking-widest text-[#004F8C] mb-2 block">
              Our Vision
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0A2F52] leading-snug">
              “A society where financial hardship does not prevent people affected by cancer from seeking essential medical care.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* How We Hope to Help (4 Pillars) */}
      <section className="py-16 bg-[#E8F1F7] border-y border-[#BAC9D6]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px] mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C] mb-3">
              How We Hope to Help
            </h2>
            <p className="text-base text-[#4F5B66] leading-relaxed">
              We work with patients, caregivers, hospitals, and community partners across these core focus areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-[#EAEFF5] p-6 sm:p-7 rounded-xl border border-[#BAC9D6] space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-white border border-[#BAC9D6] text-[#004F8C] flex items-center justify-center shadow-2xs">
                <HandHeart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33]">
                Financial Assistance
              </h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                Consider financial assistance for eligible cancer-related expenses when a funded programme is available, subject to clear eligibility and verification rules.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 sm:p-7 rounded-xl border border-[#BAC9D6] space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-white border border-[#BAC9D6] text-[#14788B] flex items-center justify-center shadow-2xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33]">
                Patient & Caregiver Navigation
              </h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                Help patients and caregivers find reliable information about hospitals, oncology centres, government welfare schemes, and charitable support resources.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 sm:p-7 rounded-xl border border-[#BAC9D6] space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-white border border-[#BAC9D6] text-[#2F7A1B] flex items-center justify-center shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33]">
                Awareness & Early Detection
              </h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                Promote cancer education, dispel stigma, and encourage timely consultation with qualified healthcare professionals before disease progression.
              </p>
            </div>

            <div className="bg-[#EAEFF5] p-6 sm:p-7 rounded-xl border border-[#BAC9D6] space-y-3.5 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-white border border-[#BAC9D6] text-[#0A2F52] flex items-center justify-center shadow-2xs">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33]">
                Responsible Partnerships
              </h3>
              <p className="text-sm sm:text-base text-[#4F5B66] leading-relaxed text-justify">
                Build accountable collaborations with individual donors, corporate CSR teams, hospitals, and community institutions to maximise real assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways for Different Audiences */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[680px] mx-auto mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004F8C] mb-3">
              Connect With Us
            </h2>
            <p className="text-sm sm:text-base text-[#4F5B66]">
              Choose the path that fits your current needs or your desire to contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Patients */}
            <div className="border border-[#BAC9D6] rounded-xl p-6 sm:p-7 bg-[#EAEFF5] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-semibold text-[#14788B] uppercase tracking-wider block mb-2">
                  Patients & Families
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33] mb-3">
                  Need Help or Guidance?
                </h3>
                <p className="text-sm text-[#4F5B66] leading-relaxed mb-6">
                  Learn about our assistance criteria, how to reach out, and what documents are required once a support programme is active.
                </p>
              </div>
              <Link
                href="/patient-assistance"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004F8C] hover:text-[#0A2F52] hover:underline"
              >
                <span>Read Assistance Guidelines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 2: CSR Partners */}
            <div className="border border-[#BAC9D6] rounded-xl p-6 sm:p-7 bg-[#EAEFF5] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-semibold text-[#004F8C] uppercase tracking-wider block mb-2">
                  Corporate CSR
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33] mb-3">
                  Create Scalable Impact
                </h3>
                <p className="text-sm text-[#4F5B66] leading-relaxed mb-6">
                  Partner with us under Schedule VII healthcare initiatives. We adhere to transparent reporting, fund utilisation, and legal documentation.
                </p>
              </div>
              <Link
                href="/csr"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004F8C] hover:text-[#0A2F52] hover:underline"
              >
                <span>Explore CSR Partnerships</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 3: Volunteers */}
            <div className="border border-[#BAC9D6] rounded-xl p-6 sm:p-7 bg-[#EAEFF5] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-semibold text-[#2F7A1B] uppercase tracking-wider block mb-2">
                  Join The Team
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2A33] mb-3">
                  Volunteer Your Skills
                </h3>
                <p className="text-sm text-[#4F5B66] leading-relaxed mb-6">
                  Contribute your time, empathy, and professional skills in awareness drives, logistics, communication, or patient guidance.
                </p>
              </div>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004F8C] hover:text-[#0A2F52] hover:underline"
              >
                <span>Volunteer Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote & Commitment Banner */}
      <section className="bg-[#0A2F52] text-white py-14 sm:py-18">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px] mx-auto text-center space-y-5">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                <Image
                  src="/images/founder.jpg"
                  alt="Sushil Sharma - Founder, Cancer Care & Cure Foundation"
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5D8E6] block">
                  Sushil Sharma • Founder
                </span>
                <span className="text-[11px] text-[#C5D8E6]/80 italic">
                  Pancreatic Cancer Survivor (2019)
                </span>
              </div>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl italic leading-snug text-white">
              “Cancer can touch your body, but not your soul.”
            </blockquote>
            <p className="text-xs sm:text-sm text-[#C5D8E6] leading-relaxed">
              Having personally survived pancreatic cancer in 2019, I know firsthand the courage and financial strength this battle demands. Our commitment is to ensure that no patient is abandoned to fight in silence.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0A2F52] bg-white rounded hover:bg-[#E8F1F7] transition-colors"
              >
                <span>Read the Full Founder's Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
