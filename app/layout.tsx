import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oluwalonimi Oyepariola | Software Engineer",
  description:
    "Software Engineer based in London. MSc Software Engineering at the University of East London. Building full-stack systems with Node.js, PostgreSQL, React and Next.js.",
  metadataBase: new URL("https://oluwalonimioyepariola.com"),
  openGraph: {
    title: "Oluwalonimi Oyepariola | Software Engineer",
    description:
      "Software Engineer based in London. Full-stack systems with Node.js, PostgreSQL, React and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
