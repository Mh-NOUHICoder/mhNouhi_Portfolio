import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "~/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
// import Head from "./head";

export const metadata: Metadata = {
  metadataBase: new URL("https://mhnouhi.vercel.app/"),

  title: {
    default: "Mh Nouhi | Full-Stack & AI Developer",
    template: "%s | Mh Nouhi",
  },

  description:
    "Full-Stack & AI Developer building scalable web apps with Next.js, AI integrations, and modern cloud technologies.",

  keywords: [
    "Mh Nouhi",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Portfolio",
    "Web Developer Morocco",
  ],

  authors: [{ name: "Mh Nouhi" }],

  openGraph: {
    title: "Mh Nouhi | Full-Stack & AI Developer",
    description:
      "Explore AI-powered applications, hackathon projects, and modern full-stack systems.",
    url: "https://yourdomain.com",
    siteName: "Mh Nouhi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mh Nouhi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mh Nouhi | Full-Stack & AI Developer",
    description:
      "Building scalable AI-powered web applications.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/Mh-logo.svg",
    shortcut: "/Mh-logo.svg",
    apple: "/Mh-logo.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <head>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
