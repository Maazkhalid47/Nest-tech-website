"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<{ text: string; show: boolean }>({
    text: "",
    show: false,
  });

  function fireToast(text: string) {
    setToast({ text, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4200);
  }

  async function handleSubmit() {
    const n = name.trim();
    const e = email.trim();
    const m = message.trim();
    if (!n || !e || !m) {
      fireToast("Please fill in your name, email, and message.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        emailjs.init({ publicKey });
        await emailjs.send(serviceId, templateId, {
          from_name: n,
          from_email: e,
          company: company.trim() || "N/A",
          budget: budget.trim() || "N/A",
          message: m,
          recipient_email: "info@nesttechnologies.io",
        });

        fireToast(
          "Thank you for reaching out! We've received your message and will get back to you within one business day."
        );
        setName("");
        setEmail("");
        setCompany("");
        setBudget("");
        setMessage("");
        return;
      } catch (error) {
        console.error("EmailJS send failed", error);
      }
    }

    const subject = `New Project Inquiry from ${n}`;
    const bodyLines = [
      `Name: ${n}`,
      `Email: ${e}`,
      company.trim() ? `Company: ${company.trim()}` : null,
      budget.trim() ? `Project Budget: ${budget.trim()}` : null,
      "",
      m,
    ].filter(Boolean);
    const mailto = `mailto:info@nesttechnologies.io?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;

    fireToast(
      "Thank you for reaching out! Your email client has been opened with the message details."
    );
    setName("");
    setEmail("");
    setCompany("");
    setBudget("");
    setMessage("");
  }

  return (
    <>
      <div
        className="flex flex-col bg-[#f5f9f6] gap-5 rounded-lg border border-gray-300  p-10 max-[600px]:p-5"
        id="contact-form"
      >
        <div className="flex flex-col gap-2">
          <label className=" text-gray-400">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border bg-white border-gray-200 px-2 py-3 text-[15px] text-gray-700 outline-none transition-colors duration-200 focus:border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className=" text-gray-400">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded border bg-white border-gray-200 px-2 py-3 text-[15px] text-gray-700 outline-none transition-colors duration-200 focus:border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-400">
            Company (Optional)
          </label>
          <input
            type="text"
            placeholder="Your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="rounded border bg-white border-gray-200 px-2 py-3 text-[15px] text-gray-700 outline-none transition-colors duration-200 focus:border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-400">
            Project Budget (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. $5,000 - $10,000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="rounded border bg-white border-gray-200 px-2 py-3 text-[15px] text-gray-700 outline-none transition-colors duration-200 focus:border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="text-gray-400">
            Message
          </label>
          <textarea
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-30 resize-none rounded bg-white border border-gray-200 px-2 py-3 text-[15px] text-gray-700  outline-none transition-colors duration-200 focus:border-gray-400"
          />
        </div>

        <button
          className="self-start rounded border-0 bg-black px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-emerald-600"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </div>

      <div
        className={`fixed bottom-8 right-8 z-999 pointer-events-none rounded-md bg-[#141414] px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 max-[600px]:right-4 max-[600px]:bottom-4 ${toast.show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        {toast.text}
      </div>
    </>
  );
}