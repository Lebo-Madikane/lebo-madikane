import { Bricolage_Grotesque, Inter } from "next/font/google";
import "../styles/global.scss";

// Configure Bricolage Grotesque (primary font)
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-gricolage-grotesque",
  subsets: ["latin"],
});

// Configure Inter (secondary font)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lebo Madikane - A Web Developer and Content Creator",
  description: "I build digital experiences and empower brands through design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
