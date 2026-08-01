import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy — Nest Technologies",
  description: "How Nest Technologies collects, uses, and protects your personal information.",
}

const sections = [
  {
    title: "Introduction",
    content: `ur information when you visit our website or use our services.

By using our services, you consent to the data practices described in this policy. We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal data and how we will treat it.`,
  },
  {
    title: "Information We Collect",
    content: `We collect several types of information from and about users of our services, including:

Personal Information: Name, email address, phone number, and other contact details you provide when filling out forms on our website or contacting us directly.

Usage Data: Information about how you use our website and services, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.

Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect about you for various purposes, including:

To provide and maintain our services, including monitoring the usage of our services.

To notify you about changes to our services and to provide customer support.

To gather analysis or valuable information so that we can improve our services.

To detect, prevent, and address technical issues and security vulnerabilities.

To send you newsletters, marketing materials, and other information that may be of interest to you, where you have consented to receive such communications.`,
  },
  {
    title: "Data Sharing and Disclosure",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:

Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service.

Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.

Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.

While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We regularly review our security procedures and consider appropriate new technologies and methods.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

The right to access, update, or delete the information we have on you.

The right to rectification if your information is inaccurate or incomplete.

The right to object to our processing of your personal information.

The right to request that we restrict the processing of your personal information.

The right to data portability, allowing you to request a copy of your data in a structured, machine-readable format.

To exercise any of these rights, please contact us using the information provided below.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. This Privacy Policy applies only to information collected by our website.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of the services after any modifications indicates your acceptance of the updated Privacy Policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@nesttechnologies.dev. We will make every effort to respond to your inquiry within a reasonable timeframe and address any concerns you may have.`,
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: January 2024
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.title} className="border-t border-border pt-8">
              <div className="flex gap-6">
                <span className="text-sm font-mono text-muted-foreground w-8 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            If you have any questions about this Privacy Policy, please{" "}
            <Link href="/#contact" className="text-foreground hover:underline">
              contact us
            </Link>
            .
          </p>
        </footer>
      </article>
    </main>
  )
}
