import { footerLinks } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="footer-simple">
          <div className="footer-simple-links">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={
                  href.startsWith("http") || href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
                rel={
                  href.startsWith("http") || href.endsWith(".pdf")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="footer-link"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="footer-copy">
            &copy; {year} Addison Reyes. Santo Domingo, DR.
          </p>
        </div>
      </div>
    </footer>
  );
}
