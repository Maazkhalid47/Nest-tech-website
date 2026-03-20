import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: "Philosophy", href: "#philosophy" },
      { name: "Work", href: "#work" },
      { name: "Research", href: "#research" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { name: "GitHub", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-semibold text-lg tracking-tight text-foreground">
              Studio
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering and product development studio. Building software, systems, and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-foreground mb-4">Navigation</p>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-foreground mb-4">Connect</p>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
