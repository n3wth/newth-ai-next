import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./refined-globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oliver Newth - AI Developer",
  description: "Engineering at the intersection of AI and human creativity. Building tools that amplify developer capabilities.",
  keywords: ["AI", "Developer", "Machine Learning", "Software Engineering"],
  authors: [{ name: "Oliver Newth" }],
  openGraph: {
    title: "Oliver Newth - AI Developer",
    description: "Engineering at the intersection of AI and human creativity.",
    url: "https://newth.ai",
    siteName: "Oliver Newth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Newth - AI Developer",
    description: "Engineering at the intersection of AI and human creativity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
