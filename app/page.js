import HomeClient from "../screen/HomeClient";

/* ✅ SERVER-SIDE SEO (REAL SSR) */
export const metadata = {
  title: "Best Pilot Training Institute in India | DGCA CPL Classes",
  description:
    "We One Aviation offers DGCA CPL ground classes, expert guidance, and pilot training support for aspiring aviation professionals in India. ",
  keywords: [
    "pilot training institute in India",
    "DGCA ground classes",
    "CPL course India",
    "commercial pilot license India",
    "aviation academy India",
    "pilot training Delhi",
    "DGCA CPL training",
    "flight training India"
  ],
  alternates: {
    canonical: "https://www.weoneaviation.com/",
  },
  openGraph: {
    title: "Best Pilot Training Institute in India – We One Aviation",
    description:
      "DGCA-approved CPL & pilot training academy in India. Ground classes, flight training & airline preparation with proven results.",
    url: "https://www.weoneaviation.com/",
    siteName: "We One Aviation",
    images: [
      {
        url: "https://www.weoneaviation.com/assets/og-home.webp",
        width: 1200,
        height: 630,
        alt: "We One Aviation – Pilot Training Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pilot Training Institute in India – We One Aviation",
    description:
      "DGCA-approved pilot training, CPL courses & aviation ground classes in India.",
    images: ["https://www.weoneaviation.com/assets/og-home.webp"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
