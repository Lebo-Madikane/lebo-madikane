import "../styles/global.scss";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { personSchema } from "../lib/schema";
import { websiteSchema } from "../lib/schema";
import { GoogleAnalytics } from "@next/third-parties/google";

// Configure Bricolage Grotesque (primary font)
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: 'swap'
});

// Configure Inter (secondary font)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap'
});

// Metadata for search results(Technical SEO)
export const metadata = {
  metadataBase: new URL("https://lebo-madikane-seven.vercel.app"),

  title: {
    default: "Software Developer, Content Creator, and Digital Marketer",
    template: "%s | Lebo Madikane",
  },

  description: "Explore the portfolio of Lebo Madikane, a software developer, content creator, SEO specialist and digital marketer.",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "JRLgTu3QN-KQoxD6LbFryIdZtXmxLcnNSDis4LFhUxM",
    other: {
      "msvalidate.01": "D14BAA799B19168937DBECFDFA345AAB",
    },
  },

  openGraph: {
    title: "Software Developer, Content Creator, and Digital Marketer | Lebo Madikane",
    description: "Explore the portfolio of Lebo Madikane, a software developer, content creator, SEO specialist and digital marketer.",
    url: "https://lebo-madikane-seven.vercel.app",
    siteName: "Lebo Madikane",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lebo Madikane — Software Developer and Digital Marketer' }],
    type: "website"
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Software Developer, Content Creator, and Digital Marketer | Lebo Madikane",
    description: "Explore the portfolio of Lebo Madikane, a software developer, content creator, SEO specialist and digital marketer.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>

      <body>
        
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <GoogleAnalytics gaId="G-5VY3NYFE19" />
      
      </body>

    </html>
  );
}
