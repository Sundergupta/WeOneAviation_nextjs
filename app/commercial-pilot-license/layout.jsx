import SideMenu from "@/components/SideMenu";
import styles from "./styles.module.css";

const menuItems = [
    { name: "CPL Overview", path: "/commercial-pilot-license" },
    { name: "Eligibility", path: "/commercial-pilot-license/eligibility" },
    { name: "Syllabus", path: "/commercial-pilot-license/syllabus" },
    { name: "Salary", path: "/commercial-pilot-license/salary" },
    { name: "Admission Process", path: "/commercial-pilot-license/admission-process" },
];

export default function CplLayout({ children }) {
    return (
        <>

            {/* HERO */}
            <section
                className="hero-section"
                style={{
                    backgroundImage: "url('/assets/home page slider/generate a videos of airplane.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <h1>Commercial Pilot License </h1>
                    <h2>Commercial Pilot License</h2>
                </div>
            </section>

            {/* TWO COLUMN */}
            <div className={styles.manuContainer}>
                <SideMenu items={menuItems} />
                <main className={styles.contentColumn}>{children}</main>
            </div>
        </>

    );
}
