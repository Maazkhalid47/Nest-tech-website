"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (formState === "success") {
    return (
      <main className="min-h-screen bg-background pt-16">
        <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Message Sent
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for reaching out. We&apos;ll review your message and get back to you within 1-2 business days.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-2xl">
            <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
              Get in Touch
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              Start a Conversation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Tell us about your project. We&apos;ll get back to you within 1-2 business days.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              {/* Project Type & Budget */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="projectType" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Project Type <span className="text-accent">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="software">Software Development</option>
                    <option value="infrastructure">Infrastructure & Systems</option>
                    <option value="hardware">Hardware Integration</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="research">Research & Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label 
                    htmlFor="budget" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k+">$250,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tell us about your project <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  placeholder="Describe your project, goals, and any specific challenges you're facing..."
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4">
                <p className="text-sm text-muted-foreground">
                  <span className="text-accent">*</span> Required fields
                </p>
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      Sending...
                      <Send className="w-4 h-4 animate-pulse" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:hello@nesttechnologies.dev" 
                      className="text-sm text-foreground hover:text-accent transition-colors"
                    >
                      hello@nesttechnologies.dev
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-sm text-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-mono">01</span>
                    <span>We review your submission within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-mono">02</span>
                    <span>Initial response within 1-2 business days</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-mono">03</span>
                    <span>Discovery call to discuss your project in detail</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-mono">04</span>
                    <span>Proposal with scope, timeline, and investment</span>
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Working Hours
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
