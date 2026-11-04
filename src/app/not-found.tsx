import Link from "next/link";
import { ArrowLeft, Home, HeartHandshake, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-[#F7F9FA] flex items-center justify-center min-h-[60vh]">
      <div className="max-w-[560px] mx-auto px-4 text-center space-y-6">
        <span className="text-xs font-bold tracking-widest text-[#004F8C] uppercase">
          404 Error • Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A2F52]">
          We Couldn't Find That Page
        </h1>
        <p className="text-sm text-[#4F5B66] leading-relaxed">
          The link you followed may be broken or the page may have been moved. If you are looking for support or information about Cancer Care & Cure Foundation, please use the links below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/patient-assistance"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#14788B] bg-white border border-[#14788B] rounded hover:bg-[#E8F1F7] transition-colors"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Patient Assistance</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#4F5B66] bg-white border border-[#D5DDE3] rounded hover:text-[#004F8C] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
