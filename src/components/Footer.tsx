import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, AlertCircle, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A2F52] text-white border-t border-[#004F8C]">
      {/* Main Footer Content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Organization & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-xs overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Cancer Care & Cure Foundation"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg leading-tight">
                  Cancer Care & Cure
                </h3>
                <p className="text-xs text-[#C5D8E6] uppercase tracking-wider font-medium">
                  Foundation
                </p>
              </div>
            </div>

            <p className="text-sm text-[#C5D8E6] leading-relaxed">
              Together, We Give Hope. Together, We Save Lives.
            </p>

            <p className="text-xs text-[#C5D8E6]/90 leading-relaxed">
              Dedicated to easing emotional and financial strain for underprivileged cancer patients through treatment aid, nutrition, and compassionate guidance.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#C5D8E6] bg-[#004F8C]/40 px-2.5 py-1 rounded border border-[#004F8C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14788B]" />
                Non-Profit Healthcare Initiative
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-4 pb-1 border-b border-[#004F8C]/60 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#C5D8E6] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#C5D8E6] hover:text-white transition-colors">
                  About Us & Mission
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-[#C5D8E6] hover:text-white transition-colors">
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link href="/csr" className="text-[#C5D8E6] hover:text-white transition-colors">
                  CSR Partnerships
                </Link>
              </li>
              <li>
                <Link href="/patient-assistance" className="text-[#C5D8E6] hover:text-white transition-colors">
                  Patient Assistance
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-[#C5D8E6] hover:text-white transition-colors">
                  Volunteer With Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-[#C5D8E6] hover:text-white transition-colors">
                  Support Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#C5D8E6] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-4 pb-1 border-b border-[#004F8C]/60 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-[#C5D8E6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#14788B] flex-shrink-0 mt-1" />
                <address className="not-italic text-xs leading-relaxed">
                  Office Address:<br />
                  96 A, Pocket-C, Mayur Vihar, Phase-2,<br />
                  Delhi-110091, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#14788B] flex-shrink-0" />
                <a
                  href="tel:+919810414100"
                  className="text-xs hover:text-white transition-colors underline underline-offset-2"
                >
                  +91 9810414100
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#14788B] flex-shrink-0" />
                <a
                  href="mailto:cccf.cancer@gmail.com"
                  className="text-xs hover:text-white transition-colors underline underline-offset-2"
                >
                  cccf.cancer@gmail.com
                </a>
              </div>

              <div className="pt-3 border-t border-[#004F8C]/40">
                <p className="text-xs text-[#C5D8E6] leading-relaxed">
                  For assistance applications, volunteer registration, or corporate CSR queries, please reach out via our contact channels.
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Transparency */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-4 pb-1 border-b border-[#004F8C]/60 inline-block">
              Governance & Policies
            </h4>
            <ul className="space-y-2 text-sm text-[#C5D8E6]">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Medical & Legal Disclaimer
                </Link>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded bg-[#004F8C]/30 border border-[#004F8C]/60 text-xs text-[#C5D8E6]">
              <p className="font-medium text-white mb-1">Data Protection Pledge</p>
              <p className="text-[11px] leading-relaxed">
                We never sell or commercialise personal data. Medical documents are never collected through public web forms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#004F8C]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C5D8E6]">
          <p>© {currentYear} Cancer Care & Cure Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
