import type { Metadata } from "next";
import "./refined-globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
