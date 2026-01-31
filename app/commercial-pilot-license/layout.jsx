"use client";

import { usePathname } from "next/navigation";
import SideMenu from "@/components/SideMenu";
import styles from "./styles.module.css";

const menuItems = [
    { name: "CPL Overview", path: "/commercial-pilot-license" },
    { name: "Eligibility", path: "/commercial-pilot-license/eligibility" },
    { name: "Syllabus", path: "/commercial-pilot-license/syllabus" },
    { name: "Salary", path: "/commercial-pilot-license/salary" },
    { name: "Admission Process", path: "/commercial-pilot-license/admission-process" },
];

// ✅ Map routes to headings
const headingMap = {
    "/commercial-pilot-license": "Commercial Pilot License",
    "/commercial-pilot-license/eligibility": "Commercial Pilot License Eligibility",
    "/commercial-pilot-license/syllabus": "Commercial Pilot License Syllabus",
    "/commercial-pilot-license/salary": "Commercial Pilot License Salary",
    "/commercial-pilot-license/admission-process":
        "Commercial Pilot License Admission Process",
};

// Map routes to hero background images (override per page)
const backgroundMap = {
    "/commercial-pilot-license": "/assets/home-page-slider/slider1.webp",
    "/commercial-pilot-license/eligibility": "/assets/home-page-slider/slider2.webp",
    "/commercial-pilot-license/syllabus": "/assets/home-page-slider/slider3.webp",
    "/commercial-pilot-license/salary": "/assets/home-page-slider/slider4.webp",
    "/commercial-pilot-license/admission-process": "/assets/home-page-slider/slider5.webp",
};

export default function CplLayout({ children }) {
    const pathname = usePathname();

    // ✅ Fallback if path not found
    const heading =
        headingMap[pathname] || "Commercial Pilot License";

    // select background for current route (fallback to default)
    const backgroundImageUrl = backgroundMap[pathname] || "/assets/home-page-slider/slider1.webp";

    return (
        <>
            {/* HERO */}
            <section
                className="hero-section"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <h1>{heading}</h1>
                </div>
            </section>

            {/* TWO COLUMN */}
            <div className={styles.manuContainer}>
                <SideMenu items={menuItems} />
                <main className={styles.contentColumn}>
                    {children}
                </main>
            </div>
        </>
    );
}
