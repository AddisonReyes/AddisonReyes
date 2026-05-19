import { EMAIL, LINKEDIN_URL, RESUME_URL } from "@/lib/constants";

const footerLinks = [
  ["Certifications", "https://certificates-4fx.pages.dev/"],
  ["LeetCode", "https://leetcode.com/u/AddisonReyes/"],
  ["Email", `mailto:${EMAIL}`],
  ["LinkedIn", LINKEDIN_URL],
  ["Resume", RESUME_URL]
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/40 py-10 px-6 border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-libre">
        <p>&copy; {year} Addison Reyes. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-8 uppercase tracking-widest text-xs">
          {footerLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
              rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className="hover:text-fuchsia-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
