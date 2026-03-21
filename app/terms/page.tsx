import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service — Studio",
  description: "Terms and conditions for using Studio's website and services.",
}

const sections = [
  {
    title: "Introduction",
    content: `Welcome to Studio. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.

These Terms apply to all visitors, users, and others who access or use our services. We may update these Terms from time to time, and we will notify you of any material changes by posting the new Terms on this page.`,
  },
  {
    title: "Use of the Website",
    content: `You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.

You must not misuse our services by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful. You must not attempt to gain unauthorized access to our services, the server on which our services are stored, or any server, computer, or database connected to our services.`,
  },
  {
    title: "Intellectual Property",
    content: `All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Studio or its content suppliers and is protected by international copyright laws.

The compilation of all content on this website is the exclusive property of Studio and is protected by international copyright laws. All software used on this website is the property of Studio or its software suppliers and is protected by international copyright laws.

You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service, use of the service, or access to the service without express written permission from us.`,
  },
  {
    title: "User Accounts",
    content: `When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.

You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`,
  },
  {
    title: "Service Modifications",
    content: `We reserve the right to withdraw or amend our services, and any service or material we provide on the website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the services is unavailable at any time or for any period.

From time to time, we may restrict access to some parts of the website, or the entire website, to users, including registered users. We may update the content on this website from time to time, but its content is not necessarily complete or up-to-date.`,
  },
  {
    title: "Limitation of Liability",
    content: `In no event shall Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.

This limitation applies regardless of whether the damages are based on warranty, contract, tort, or any other legal theory, and whether or not we have been informed of the possibility of such damages.`,
  },
  {
    title: "Governing Law",
    content: `These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Studio operates, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`,
  },
  {
    title: "Contact Information",
    content: `If you have any questions about these Terms, please contact us at legal@studio.dev. We will make every effort to respond to your inquiry within a reasonable timeframe.`,
  },
]

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Please read these terms carefully before using our website and services.
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
            If you have any questions about these Terms, please{" "}
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
