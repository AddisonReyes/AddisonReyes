import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Fullstack software engineer building production-ready web applications with TypeScript frontends, Python/Django/FastAPI backends, automation, Data/AI workflows, PostgreSQL, Docker deployment, and Rust for performance-critical services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://addisonreyes.com"),
  title: "Addison Reyes | Software Engineer",
  description,
  authors: [{ name: "Addison Reyes" }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Addison Reyes | Software Engineer",
    description,
    url: "/",
    siteName: "Addison Reyes",
    images: [{ url: "/img/minift.webp", alt: "MiniFT dashboard interface" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Addison Reyes | Software Engineer",
    description,
    images: ["/img/minift.webp"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
