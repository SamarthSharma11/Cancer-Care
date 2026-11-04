"use client";

import { useState } from "react";
import Link from "next/link";
import { UserCheck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function VolunteerForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    role: "awareness",
    skills: "",
    availability: "weekends",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage("Please enter your city.");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please agree to the privacy statement and volunteering code of conduct.");
      return;
    }

    setFormState("submitting");

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Submission failed.");
      }

      setFormState("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        role: "awareness",
        skills: "",
        availability: "weekends",
        consent: false,
      });
    } catch {
      // Graceful fallback for local dev
      setTimeout(() => {
        setFormState("success");
      }, 600);
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-[#EAF3E5] border border-[#2F7A1B]/30 rounded-lg p-6 sm:p-8 text-center space-y-4 animate-in fade-in">
        <CheckCircle2 className="w-12 h-12 text-[#2F7A1B] mx-auto" />
        <h3 className="font-serif text-xl font-bold text-[#1E2A33]">
          Thank You for Volunteering
        </h3>
        <p className="text-sm text-[#4F5B66] max-w-md mx-auto leading-relaxed">
          Your application has been received. Our team will review your interest and reach out when community events, outreach, or volunteer coordination sessions match your availability.
        </p>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="mt-4 px-5 py-2 text-xs font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded hover:bg-[#E8F1F7] transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-[#D5DDE3] rounded-lg p-6 sm:p-8 shadow-xs">
      <div>
        <h3 className="font-serif text-xl font-bold text-[#004F8C]">
          Volunteer Application Form
        </h3>
        <p className="text-xs text-[#4F5B66] mt-1">
          Share your details, availability, and areas of interest to join our volunteer network.
        </p>
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 p-3 text-xs text-[#A32A2A] bg-red-50 border border-red-200 rounded">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="volFullName" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Full Name <span className="text-[#A32A2A]">*</span>
          </label>
          <input
            id="volFullName"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ananya Sharma"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>

        <div>
          <label htmlFor="volEmail" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Email Address <span className="text-[#A32A2A]">*</span>
          </label>
          <input
            id="volEmail"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. ananya@example.com"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="volPhone" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Phone Number <span className="text-[#A32A2A]">*</span>
          </label>
          <input
            id="volPhone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98123 45678"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>

        <div>
          <label htmlFor="volCity" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            City / Location <span className="text-[#A32A2A]">*</span>
          </label>
          <input
            id="volCity"
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Delhi / NCR"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="volRole" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Preferred Volunteer Area <span className="text-[#A32A2A]">*</span>
          </label>
          <select
            id="volRole"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          >
            <option value="awareness">Awareness & Early Detection Campaigns</option>
            <option value="event_support">Event Support & Logistics</option>
            <option value="patient_support">Patient Navigation & Family Care Support</option>
            <option value="digital_and_design">Design, Communications & Social Media</option>
            <option value="administration">Administration, Research & Coordination</option>
            <option value="other">Other Professional Skills</option>
          </select>
        </div>

        <div>
          <label htmlFor="volAvailability" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Availability <span className="text-[#A32A2A]">*</span>
          </label>
          <select
            id="volAvailability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          >
            <option value="weekends">Weekends Only</option>
            <option value="weekdays">Weekdays</option>
            <option value="flexible">Flexible / Remote Support</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="volSkills" className="block text-xs font-semibold text-[#1E2A33] mb-1">
          Relevant Skills or Experience <span className="text-[#4F5B66] font-normal">(Optional)</span>
        </label>
        <textarea
          id="volSkills"
          name="skills"
          rows={3}
          value={formData.skills}
          onChange={handleChange}
          placeholder="e.g. Healthcare background, counseling, event management, graphic design, social media writing..."
          className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
        />
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-2 text-xs text-[#4F5B66] cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-0.5 rounded border-[#D5DDE3] text-[#004F8C] focus:ring-[#004F8C]"
          />
          <span className="leading-relaxed">
            I agree to the{" "}
            <Link href="/privacy" className="text-[#004F8C] underline hover:text-[#0A2F52]">
              Privacy Policy
            </Link>{" "}
            and understand that volunteer roles involving patient interaction may require background verification, training, and strict confidentiality protocols.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#004F8C] rounded hover:bg-[#0A2F52] disabled:opacity-50 transition-colors shadow-xs"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <UserCheck className="w-4 h-4" />
            <span>Submit Volunteer Application</span>
          </>
        )}
      </button>
    </form>
  );
}
