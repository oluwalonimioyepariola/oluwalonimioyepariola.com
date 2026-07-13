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
  applicationName: "Oluwalonimi Oyepariola",
  openGraph: {
    title: "Oluwalonimi Oyepariola | Software Engineer",
    siteName: "Oluwalonimi Oyepariola",
    description:
      "Software Engineer based in London. Full-stack systems with Node.js, PostgreSQL, React and Next.js.",
    type: "website",
  },
};

// Tells Google the site's name (shown in search results instead of the bare
// domain) and that the site represents a person, linking the social profiles
// as the same identity. https://developers.google.com/search/docs/appearance/site-names
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Oluwalonimi Oyepariola",
      alternateName: "oluwalonimioyepariola.com",
      url: "https://oluwalonimioyepariola.com/",
    },
    {
      "@type": "Person",
      name: "Oluwalonimi Oyepariola",
      jobTitle: "Software Engineer",
      url: "https://oluwalonimioyepariola.com/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of East London",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Bowen University",
        },
      ],
      sameAs: [
        "https://github.com/oluwalonimioyepariola/",
        "https://www.linkedin.com/in/oluwalonimi-oyepariola-115343273/",
        "https://x.com/oluwalonimi_oye",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
