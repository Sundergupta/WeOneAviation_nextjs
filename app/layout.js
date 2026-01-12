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

// export const metadata = {
//   title: "About Us | WeOne Aviation",
//   description: "Learn about WeOne Aviation, India’s trusted pilot training institute.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <ContactQuery />
        {children}
        <Footer />
      </body>
    </html>
  );
}