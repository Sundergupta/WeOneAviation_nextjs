import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ContactQuery from "../components/ContactQuery";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "About Us | WeOne Aviation",
  description: "Learn about WeOne Aviation, India’s trusted pilot training institute.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning   /* ✅ FIXES hydration mismatch caused by extensions */
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable}`} /* ✅ APPLY FONTS */
        style={{ paddingTop: "70px" }}
      >
        <Navbar />
        <ContactQuery />   {/* ✅ unchanged */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
