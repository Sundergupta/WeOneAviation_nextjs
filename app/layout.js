import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingAnimation from "../components/LoadingAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ContactQuery from "../components/ContactQuery";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Schema Objects
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "We One Aviation Academy",
  "alternateName": "WeOne Aviation",
  "url": "https://www.weoneaviation.com",
  "logo": "https://www.weoneaviation.com/logo.png",
  "description": "India's premier DGCA approved aviation training academy. CPL, PPL, ATPL, SPL courses. 3500+ pilots trained since 2009.",
  "foundingDate": "2009",
  "email": "info@weoneaviation.in",
  "telephone": "+919355611996",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/weoneaviation",
    "https://www.instagram.com/weoneaviation",
    "https://www.linkedin.com/company/weoneaviation",
    "https://www.youtube.com/@weoneaviation"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "We One Aviation Academy",
  "url": "https://www.weoneaviation.com",
  "telephone": "+919355611996",
  "email": "info@weoneaviation.in",
  "description": "India's premier DGCA approved aviation training academy. 3500+ pilots trained with 98% pass rate.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "₹₹₹"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "We One Aviation Academy",
  "url": "https://www.weoneaviation.com"
};

export const metadata = {
  title: "We One Aviation Academy | Best Pilot Training Institute in India",
  description: "India's premier approved aviation training academy. CPL, PPL, ATPL, SPL courses. 3500 pilots trained. Free career counselling available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LoadingAnimation />
        <Navbar />
        <ContactQuery />
        {children}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}