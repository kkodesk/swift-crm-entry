const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="font-semibold text-foreground">QuickCRM</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="mailto:hello@quickcrm.io" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 QuickCRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
