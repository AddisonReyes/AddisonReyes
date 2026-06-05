import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Software engineer from the Dominican Republic building full-stack applications, backend systems, APIs, tooling, and indie games, with a focus on clean code, performance, user experience, and practical software.";

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
