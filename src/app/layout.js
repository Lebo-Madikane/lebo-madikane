import "../styles/global.scss";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { personSchema } from "../lib/schema";
import { websiteSchema } from "../lib/schema";

// Configure Bricolage Grotesque (primary font)
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

// Configure Inter (secondary font)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadata for search results(Technical SEO)
export const metadata = {
  metadataBase: new URL("https://lebo-madikane-seven.vercel.app"),

  title: {
    default: "Software Developer & Digital Marketer",
    template: "%s | Lebo Madikane",
  },

  description: "Explore the portfolio of Lebo Madikane, a software developer, content creator, SEO specialist and digital marketer.",

  verification: {
    google: "JRLgTu3QN-KQoxD6LbFryIdZtXmxLcnNSDis4LFhUxM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>

      <body>
        
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
        
        {children}
      
      </body>

    </html>
  );
}
