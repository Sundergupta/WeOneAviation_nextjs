import HomeClient from "../screen/HomeClient";

/* ✅ SERVER-SIDE SEO (REAL SSR) */
export const metadata = {
  title: "We One Aviation | Best Pilot Training in India",
  description:
    "Train to become a licensed pilot with We One Aviation Academy. DGCA Ground Classes, CPL courses, international flying schools & career support.",
  keywords: [
    "Pilot Training",
    "Aviation Academy",
    "DGCA",
    "CPL",
    "Commercial Pilot",
    "Flying School",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://weoneaviation.com/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
