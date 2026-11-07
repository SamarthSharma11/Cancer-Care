import type { Metadata } from "next";
import Image from "next/image";
import {
  Users,
  Megaphone,
  HeartHandshake,
  PenTool,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer With Us",
  description:
    "Join Cancer Care & Cure Foundation as a volunteer. Contribute your time, skills, and compassion across awareness campaigns, event support, and patient care initiatives.",
};

export default function VolunteerPage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#2F7A1B] mb-2 block">
              Join Our Community
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              Bring Your Time, Skills, and Compassion
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              We welcome individuals interested in contributing their energy to a community that treats cancer patients and their families with dignity, empathy, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Application Form */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Volunteer Areas & Guardrails */}
            <div className="lg:col-span-5 space-y-8">
              {/* Volunteer Hero Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#BAC9D6] shadow-xl bg-white mb-6">
                <Image
                  src="/images/volunteer.jpg"
                  alt="Volunteers supporting Cancer Care & Cure Foundation"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0A2F52] mb-3">
                  Ways You Can Help
                </h2>
                <p className="text-base text-[#4F5B66] leading-relaxed text-justify">
                  Volunteers are the backbone of community outreach. We offer diverse opportunities matching different schedules and capabilities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
                  <Megaphone className="w-5 h-5 text-[#004F8C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1E2A33]">
                      Awareness & Community Outreach
                    </h3>
                    <p className="text-sm text-[#4F5B66] leading-relaxed">
                      Assisting at educational kiosks, screening camps, and community talks in neighborhoods and colleges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
                  <PenTool className="w-5 h-5 text-[#14788B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1E2A33]">
                      Writing, Translation & Design
                    </h3>
                    <p className="text-sm text-[#4F5B66] leading-relaxed">
                      Helping translate informational leaflets into Hindi/regional languages, creating digital infographics, or writing patient resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
                  <ClipboardList className="w-5 h-5 text-[#2F7A1B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1E2A33]">
                      Administrative & Research Coordination
                    </h3>
                    <p className="text-sm text-[#4F5B66] leading-relaxed">
                      Helping maintain directory listings of hospital welfare desks, government schemes, and NGO aid registries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 border border-[#BAC9D6] rounded-xl bg-[#EAEFF5] shadow-xs hover:shadow-md transition-shadow">
                  <HeartHandshake className="w-5 h-5 text-[#0A2F52] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1E2A33]">
                      Fundraising & Donor Engagement
                    </h3>
                    <p className="text-sm text-[#4F5B66] leading-relaxed">
                      Coordinating community giving drives, corporate CSR presentations, and charity engagement initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safeguarding notice */}
              <div className="p-4 bg-[#FFF4E0] border-l-4 border-[#C88A1B] rounded-r text-xs text-[#7A4F00] space-y-1">
                <p className="font-semibold text-[#5C3A00]">Patient Safeguarding Requirement:</p>
                <p className="leading-relaxed">
                  Roles directly interacting with cancer patients or caregivers may require identification verification, orientation training, and strict adherence to our privacy and patient confidentiality charter.
                </p>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
