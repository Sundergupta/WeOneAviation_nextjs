import HomeClient from "../screen/HomeClient";

/* ✅ SERVER-SIDE SEO (REAL SSR) */
export const metadata = {
  title: "Pilot Training Institute in India | CPL Course & Commercial Pilot Training",
  description:
    "Join We One Aviation for expert pilot training in India. Enroll in CPL course, commercial pilot training & DGCA guidance. Start your aviation career today.",
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

// 👇 Schema objects
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to complete pilot training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PPL: 6-12 months | CPL: 12-18 months | ATPL: Additional experience after CPL."
      }
    },
    {
      "@type": "Question",
      "name": "What is the salary of a commercial pilot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level first officers earn ₹1.5–3 lakh/month, senior captains earn ₹5–10 lakh/month."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a scholarship for pilot training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We One Aviation Academy offers up to 25% scholarship on select courses."
      }
    },
    {
      "@type": "Question",
      "name": "Is We One Aviation Academy DGCA approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, fully approved by DGCA India. Also ICAO aligned and ISO 9001:2015 certified."
      }
    },
    {
      "@type": "Question",
      "name": "Where is We One Aviation Academy located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7, New Delhi - 110077. Call: +91 93556 11996"
      }
    },
    {
      "@type": "Question",
      "name": "What are DGCA ground classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DGCA ground classes cover Meteorology, Navigation, Air Regulations, and Technical subjects required to clear DGCA exams for a pilot license."
      }
    },
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for pilot training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum age 17 years, 10+2 with Physics and Mathematics, Class 1 Medical Certificate from an approved examiner."
      }
    }
  ]
};

const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Aviation Courses at We One Aviation Academy",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Commercial Pilot License (CPL)",
        "description": "DGCA approved CPL training. 18-24 months. Eligibility: 10+2 PCM.",
        "url": "https://www.weoneaviation.com/commercial-pilot-license",
        "provider": {
          "@type": "Organization",
          "name": "We One Aviation Academy"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "ATPL - Airline Transport Pilot License",
        "description": "Advanced ATPL training. 6 months. Eligibility: CPL holder.",
        "url": "https://www.weoneaviation.com/courses/atpl",
        "provider": {
          "@type": "Organization",
          "name": "We One Aviation Academy"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "DGCA Ground Classes",
        "description": "Comprehensive DGCA exam preparation. 6-12 months. Eligibility: 10+2 PCM.",
        "url": "https://www.weoneaviation.com/dgca-ground-classes",
        "provider": {
          "@type": "Organization",
          "name": "We One Aviation Academy"
        }
      }
    }
  ]
};

const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "We One Aviation Academy",
  "url": "https://www.weoneaviation.com",
  "logo": "https://www.weoneaviation.com/logo.png",
  "description": "India's premier DGCA approved aviation training academy. CPL, PPL, ATPL, SPL courses. 3500+ pilots trained since 2009 with 98% pass rate.",
  "foundingDate": "2009",
  "telephone": "+919355611996",
  "email": "info@weoneaviation.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "accreditedBy": {
    "@type": "Organization",
    "name": "Directorate General of Civil Aviation (DGCA)",
    "url": "https://www.dgca.gov.in"
  }
};

export default function HomePage() {
  return (
    <>
      {/* 👇 Schema Scripts — server rendered, Google can read these */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />

      {/* Your existing client component */}
      <HomeClient />
    </>
  );
}