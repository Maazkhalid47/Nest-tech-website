"use client";

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

  function handleSubmit() {
    const n = name.trim();
    const e = email.trim();
    const m = message.trim();
    if (!n || !e || !m) {
      fireToast("Please fill in your name, email, and message.");
      return;
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
    const mailto = `mailto:maazking47@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;

    fireToast(
      "Thank you for reaching out! We've received your message and will get back to you within one business day."
    );
    setName("");
    setEmail("");
    setCompany("");
    setBudget("");
    setMessage("");
  }

  return (
    <>
      <div className="contact-form" id="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Company (Optional)</label>
          <input
            type="text"
            placeholder="Your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Project Budget (Optional)</label>
          <input
            type="text"
            placeholder="e.g. $5,000 - $10,000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="form-submit" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
      <div className={`toast${toast.show ? " show" : ""}`}>{toast.text}</div>
    </>
  );
}
