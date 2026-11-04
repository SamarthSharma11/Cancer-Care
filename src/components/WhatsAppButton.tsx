"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "919810414100", // Official foundation helpline
  defaultMessage = "Hello Cancer Care & Cure Foundation, I would like to inquire about patient assistance and support.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Cancer Care & Cure Foundation on WhatsApp (opens in new tab)"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Need Help? Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
