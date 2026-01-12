// app/about-us/page.js

export async function generateMetadata() {
    try {
        const res = await fetch(
            "https://weoneaviation-backend.onrender.com/api/pages/slug/about-us",
            { cache: "no-store" }
        );

        const data = await res.json();
        const seo = data?.page || {};

        const title =
            seo.metaTitle || "About Us | WeOne Aviation";

        const description =
            seo.metaDescription ||
            "Learn about WeOne Aviation, a leading pilot training institute in India offering DGCA-approved aviation courses.";

        const canonical = "https://www.weoneaviation.com/about-us";

        return {
            title,
            description,

            alternates: {
                canonical,
            },

            openGraph: {
                title,
                description,
                url: canonical,
                siteName: "WeOne Aviation",
                images: [
                    {
                        url: "https://www.weoneaviation.com/assets/About2.webp",
                        width: 1200,
                        height: 630,
                        alt: "About WeOne Aviation",
                    },
                ],
                type: "website",
            },

            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: [
                    "https://www.weoneaviation.com/assets/About2.webp",
                ],
            },
        };
    } catch (error) {
        return {
            title: "About Us | WeOne Aviation",
            description:
                "Learn about WeOne Aviation, India’s trusted pilot training institute.",
        };
    }
}

import AboutUs from "./about-us";

export default function AboutUsPage() {
    return <AboutUs />;
}
