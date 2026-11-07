import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldAlert,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Cancer Care & Cure Foundation. Reach our Delhi office by email, telephone, or online enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="bg-[#E8F1F7] border-b border-[#C5D8E6] py-12 sm:py-16">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="max-w-[760px]">
            <span className="text-xs uppercase font-bold tracking-wider text-[#004F8C] mb-2 block">
              Reach Our Team
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#004F8C] mb-4">
              Contact Cancer Care & Cure Foundation
            </h1>
            <p className="text-base text-[#1E2A33] leading-relaxed">
              Whether you are an individual seeking guidance, a corporate partner exploring CSR collaboration, or a prospective volunteer, we are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D5DDE3]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contacts */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0A2F52] mb-3">
                  Direct Contact Channels
                </h2>
                <p className="text-base text-[#4F5B66] leading-relaxed text-justify">
                  We aim to respond to all legitimate communications as resources permit during standard foundation working hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 border border-[#BAC9D6] rounded-lg bg-[#EBF1F6] space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#004F8C] font-semibold text-xs uppercase tracking-wider">
                    <Mail className="w-4 h-4" />
                    <span>Email Enquiries</span>
                  </div>
                  <p className="text-sm text-[#1E2A33] font-medium">
                    <a href="mailto:cccf.cancer@gmail.com" className="hover:text-[#004F8C] underline">
                      cccf.cancer@gmail.com
                    </a>
                  </p>
                  <p className="text-xs text-[#4F5B66]">
                    Dedicated inbox for General Enquiries, CSR, and Patient Assistance.
                  </p>
                </div>

                <div className="p-4 border border-[#BAC9D6] rounded-lg bg-[#EBF1F6] space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#004F8C] font-semibold text-xs uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Helpline & Phone</span>
                  </div>
                  <p className="text-sm text-[#1E2A33] font-medium">
                    <a href="tel:+919810414100" className="hover:text-[#004F8C] underline">
                      +91 9810414100
                    </a>
                  </p>
                  <p className="text-xs text-[#4F5B66]">
                    Monday to Friday, 10:00 AM – 5:00 PM IST
                  </p>
                </div>

                <div className="p-4 border border-[#BAC9D6] rounded-lg bg-[#EBF1F6] space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#004F8C] font-semibold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Office Address</span>
                  </div>
                  <address className="not-italic text-sm text-[#1E2A33] leading-relaxed">
                    Cancer Care & Cure Foundation<br />
                    96 A, Pocket-C, Mayur Vihar, Phase-2,<br />
                    Delhi-110091, India
                  </address>
                </div>
              </div>

              {/* Guardrails Reminder */}
              <div className="p-4 bg-[#FFF4E0] border-l-4 border-[#C88A1B] rounded-r text-xs text-[#7A4F00] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#5C3A00]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Sensitive Data Guardrail</span>
                </div>
                <p className="leading-relaxed">
                  Please do not send detailed medical scans, pathological records, government identity numbers (Aadhaar/PAN), or bank statements through this contact form.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Overview */}
      <section className="py-12 bg-[#F7F9FA]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="border border-[#D5DDE3] rounded-xl overflow-hidden bg-white shadow-xs">
            <div className="p-4 sm:p-6 border-b border-[#D5DDE3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-base text-[#1E2A33]">
                  Location: Mayur Vihar Phase-2, Delhi
                </h3>
                <p className="text-xs text-[#4F5B66]">
                  96 A, Pocket-C, Mayur Vihar, Phase-2, Delhi-110091, India
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Mayur+Vihar+Phase+2+Delhi+110091"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#004F8C] hover:underline"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
            {/* Safe Interactive Map Embed */}
            <div className="w-full h-64 sm:h-80 bg-[#E8F1F7]">
              <iframe
                title="Cancer Care & Cure Foundation Location Map"
                src="https://maps.google.com/maps?q=Pocket-C,+Mayur+Vihar+Phase-2,+Delhi+110091&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
