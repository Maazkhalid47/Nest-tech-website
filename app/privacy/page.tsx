import BackLink from "@/components/BackLink";

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>
      <div className="legal-content">
        <p>Effective Date: July 19, 2026</p>
        <p>
          Nest Technologies (&quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;) respects your privacy and is committed to
          protecting the personal information you share with us. This
          Privacy Policy explains what information we collect through our
          website, how we use it, and the choices available to you.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you interact with our website, we may collect the following
          information:
        </p>
        <p>
          <strong>Information You Provide</strong>
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Company name (if provided)</li>
          <li>Project details or messages submitted through our contact form</li>
        </ul>
        <p>
          <strong>Information Collected Automatically</strong>
        </p>
        <p>
          When you visit our website, certain technical information may be
          collected automatically, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Date and time of access</li>
          <li>Referring website</li>
        </ul>
        <p>
          This information is collected for analytics, security, and
          performance monitoring purposes.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and project requests.</li>
          <li>Communicate regarding our services.</li>
          <li>Improve our website and user experience.</li>
          <li>Maintain website security and reliability.</li>
          <li>Analyze website traffic and performance.</li>
          <li>Comply with legal obligations where required.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information.</p>

        <h2>3. Cookies and Analytics</h2>
        <p>
          Our website may use cookies and similar technologies to improve
          functionality and understand how visitors use our website.
        </p>
        <p>
          These technologies may include analytics services that help us
          measure website traffic and improve performance.
        </p>
        <p>
          You may disable cookies through your browser settings, although
          some features of the website may not function as intended.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may use trusted third-party providers to operate our website
          and business, including services for hosting, analytics,
          communications, and form submissions.
        </p>
        <p>
          These providers process information only as necessary to perform
          their services and are responsible for protecting the information
          they receive.
        </p>

        <h2>5. Data Retention</h2>
        <p>We retain personal information only for as long as necessary to:</p>
        <ul>
          <li>Respond to your inquiry</li>
          <li>Provide requested services</li>
          <li>Meet legal or regulatory obligations</li>
          <li>Maintain appropriate business records</li>
        </ul>
        <p>
          When information is no longer required, it is securely deleted or
          anonymized where appropriate.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and
          organizational measures to protect personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>
          While we strive to protect your information, no method of
          internet transmission or electronic storage is completely secure.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your location and applicable laws, you may have the
          right to:
        </p>
        <ul>
          <li>Request access to your personal information.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Object to certain processing activities.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information
          below.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Our website and services are intended for businesses and
          individuals aged 18 or older. We do not knowingly collect personal
          information from children.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes
          to our business, legal requirements, or website functionality.
        </p>
        <p>
          Any updates will be posted on this page with a revised effective
          date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy or how we
          handle your information, please contact us at:
        </p>
        <p>
          Nest Technologies
          <br />
          Email: <a href="mailto:info@nesttechnologies.io">info@nesttechnologies.io</a>
          <br />
          Location: Karachi, Pakistan
        </p>
      </div>
    </div>
  );
}
