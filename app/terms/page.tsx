import BackLink from "@/components/BackLink";

export default function TermsPage() {
  return (
    <div className="page-wrap">
      <BackLink href="/" />
      <p className="section-tag" style={{ marginBottom: 16 }}>
        Legal
      </p>
      <h1
        style={{
          fontSize: "clamp(32px,4vw,56px)",
          fontWeight: 300,
          letterSpacing: "-.025em",
          color: "var(--white)",
          marginBottom: 48,
        }}
      >
        Terms of Service
      </h1>
      <div className="legal-content">
        <p>Effective Date: July 19, 2026</p>
        <p>
          Welcome to the Nest Technologies website. By accessing or using
          this website, you agree to comply with these Terms of Service.
        </p>
        <p>If you do not agree with these terms, please do not use this website.</p>

        <h2>1. About Us</h2>
        <p>
          Nest Technologies is a product engineering studio providing
          software development, product strategy, UI/UX design, cloud
          engineering, and technology consulting services.
        </p>
        <p>
          We operate in accordance with Islamic Shariah principles and do
          not knowingly provide services that facilitate, promote, or enable
          activities or content prohibited under those principles or
          applicable law.
        </p>

        <h2>2. Shariah Compliance and Restricted Services</h2>
        <p>
          Nest Technologies does not provide services for, support, or
          knowingly participate in projects, features, products, or content
          that include, promote, or provide grounds for anything forbidden
          under Islamic Shariah principles or applicable law.
        </p>
        <p>This includes, without limitation:</p>
        <ul>
          <li>interest-based financing, lending, or other riba-related systems;</li>
          <li>gambling, betting, wagering, or games of chance;</li>
          <li>pornography, nudity, sexually explicit material, obscene material, or vulgar content;</li>
          <li>software, platforms, or tools primarily intended for music creation, distribution, promotion, or playback;</li>
          <li>alcohol, drugs, or other unlawful or impermissible goods, services, or promotions;</li>
          <li>any other content, feature, or use case that we reasonably determine to be inconsistent with Islamic Shariah principles or applicable law.</li>
        </ul>
        <p>
          We reserve the right to refuse, suspend, or terminate any inquiry,
          proposal, project, feature, or deliverable that falls within these
          categories or that we reasonably believe may lead to such use.
        </p>

        <h2>3. Scope Changes and Project Conduct</h2>
        <p>
          If, during a project, a client requests changes that introduce
          prohibited elements, or if we determine that an agreed feature is
          moving toward a prohibited use, we may pause the work, request
          clarification, propose alternatives, or withdraw from the relevant
          portion of the project or the project as a whole.
        </p>
        <p>
          We are not liable if, mid-project, the client decides to include
          such features or any related features within the scope, or if we
          discover mid-project that an agreed feature is moving in that
          direction.
        </p>
        <p>
          We are also not liable for delays, losses, missed deadlines, or
          business consequences arising from our refusal to implement such
          changes or from our decision to stop work on any prohibited or
          potentially prohibited part of the project.
        </p>
        <p>
          Any completed lawful work remains payable in accordance with the
          applicable written agreement.
        </p>

        <h2>4. Website Use</h2>
        <p>You may use this website solely for lawful purposes.</p>
        <p>You agree not to:</p>
        <ul>
          <li>violate any applicable laws or regulations;</li>
          <li>attempt to gain unauthorized access to our systems;</li>
          <li>interfere with the operation or security of the website;</li>
          <li>use the website in a manner that may harm Nest Technologies or other users.</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          Unless otherwise stated, all content on this website—including
          text, graphics, branding, logos, icons, designs, layouts, images,
          and original materials—is the property of Nest Technologies and is
          protected by applicable intellectual property laws.
        </p>
        <p>
          You may not reproduce, distribute, modify, or republish any
          content without prior written permission.
        </p>
        <p>
          Project names, trademarks, and logos belonging to clients remain
          the property of their respective owners and are displayed only
          for portfolio purposes where permitted.
        </p>

        <h2>6. Project Inquiries</h2>
        <p>
          Submitting an inquiry through our contact form does not create a
          contractual relationship.
        </p>
        <p>
          Any proposal, estimate, timeline, or quotation provided by Nest
          Technologies is informational until confirmed through a separate
          written agreement.
        </p>
        <p>
          We reserve the right to decline any project or request that
          conflicts with our values, our Shariah-compliant operating
          principles, or applicable law.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to external websites for
          informational purposes.
        </p>
        <p>
          We are not responsible for the content, privacy practices, or
          availability of third-party websites.
        </p>

        <h2>8. Disclaimer</h2>
        <p>
          The information provided on this website is offered on an
          &quot;as is&quot; and &quot;as available&quot; basis.
        </p>
        <p>
          While we strive to keep our content accurate and current, we make
          no warranties regarding the completeness, reliability, or
          availability of the information presented.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Nest
          Technologies shall not be liable for any indirect, incidental,
          consequential, or special damages arising from the use of this
          website.
        </p>
        <p>
          Our total liability relating to website use shall not exceed the
          amount paid by the user for accessing the website, if any.
        </p>
        <p>
          Nothing in these Terms shall limit or exclude liability that
          cannot be limited or excluded under applicable law.
        </p>

        <h2>10. Changes to the Website</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any part
          of the website without prior notice.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>These Terms of Service may be updated from time to time.</p>
        <p>
          Updated versions will be published on this page with a revised
          effective date.
        </p>
        <p>
          Continued use of the website after changes become effective
          constitutes acceptance of the updated Terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and interpreted in accordance
          with the laws of Pakistan, without regard to conflict of law
          principles.
        </p>

        <h2>13. Contact</h2>
        <p>For questions regarding these Terms of Service, please contact:</p>
        <p>
          Nest Technologies
          <br />
          Email: <a href="mailto:maazking47@gmail.com">maazking47@gmail.com</a>
          <br />
          Location: Karachi, Pakistan
        </p>
      </div>
    </div>
  );
}
