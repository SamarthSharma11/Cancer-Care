import { AlertTriangle, PhoneCall } from "lucide-react";

interface EmergencyNoticeProps {
  className?: string;
}

export default function EmergencyNotice({ className = "" }: EmergencyNoticeProps) {
  return (
    <div
      role="alert"
      className={`bg-[#FFF4E0] border-l-4 border-[#C88A1B] p-4 sm:p-5 rounded-r shadow-xs ${className}`}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#C88A1B] flex-shrink-0 mt-0.5" />
        <div className="space-y-1.5 text-sm text-[#7A4F00]">
          <h2 className="font-serif font-bold text-base text-[#5C3A00]">
            Emergency Medical Disclaimer
          </h2>
          <p className="leading-relaxed">
            Cancer Care & Cure Foundation is <strong>not an emergency medical service</strong> and does not maintain hospital facilities or emergency response teams.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs">
            <span className="font-semibold text-[#5C3A00]">
              If a patient is facing an acute medical crisis:
            </span>
            <span className="inline-flex items-center gap-1 font-bold text-[#A32A2A]">
              <PhoneCall className="w-3.5 h-3.5" />
              Dial 112 (National Emergency) / 108 (Ambulance)
            </span>
            <span>or visit the nearest hospital casualty immediately.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
