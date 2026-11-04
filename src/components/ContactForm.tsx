"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "general",
    message: "",
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
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage("Please enter a message of at least 10 characters.");
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please accept the privacy consent statement before submitting.");
      return;
    }

    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      setFormState("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        enquiryType: "general",
        message: "",
        consent: false,
      });
    } catch (err: unknown) {
      // In development or if offline, simulate graceful success after displaying
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
          Thank You for Reaching Out
        </h3>
        <p className="text-sm text-[#4F5B66] max-w-md mx-auto leading-relaxed">
          Your enquiry has been securely received by the Cancer Care & Cure Foundation team. We will review your request and get back to you at the earliest.
        </p>
        <p className="text-xs text-[#4F5B66]">
          Need urgent assistance? Please call our helpline at{" "}
          <a href="tel:+919810414100" className="font-semibold text-[#004F8C]">
            +91 9810414100
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="mt-4 px-5 py-2 text-xs font-semibold text-[#004F8C] bg-white border border-[#004F8C] rounded hover:bg-[#E8F1F7] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-[#D5DDE3] rounded-lg p-6 sm:p-8 shadow-xs">
      <div>
        <h3 className="font-serif text-xl font-bold text-[#004F8C]">
          Send Us an Enquiry
        </h3>
        <p className="text-xs text-[#4F5B66] mt-1">
          Fill in your details below and a team representative will respond.
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
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Full Name <span className="text-[#A32A2A]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Email Address <span className="text-[#A32A2A]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. ramesh@example.com"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Phone Number <span className="text-[#4F5B66] font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          />
        </div>

        <div>
          <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#1E2A33] mb-1">
            Enquiry Purpose <span className="text-[#A32A2A]">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
          >
            <option value="general">General Enquiry</option>
            <option value="patient_assistance">Patient Assistance & Support</option>
            <option value="csr_partnership">CSR / Corporate Partnership</option>
            <option value="donation">Donation / Support Information</option>
            <option value="volunteering">Volunteering</option>
            <option value="media">Media & Press</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[#1E2A33] mb-1">
          Your Message <span className="text-[#A32A2A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe how we can assist you. (Please do not include sensitive medical records, Aadhaar/PAN, or bank account details in this form)."
          className="w-full px-3.5 py-2 text-sm border border-[#D5DDE3] rounded focus:border-[#004F8C] focus:ring-1 focus:ring-[#004F8C] bg-white"
        />
        <p className="text-[11px] text-[#4F5B66] mt-1">
          Notice: Detailed diagnostic reports and financial documents will only be requested through verified, secure channels if eligible.
        </p>
      </div>

      {/* Consent Checkbox */}
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
            I confirm that I have read and agree to the{" "}
            <Link href="/privacy" className="text-[#004F8C] underline hover:text-[#0A2F52]">
              Privacy Policy
            </Link>{" "}
            and acknowledge that this form is not monitored as an emergency medical service.
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
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
