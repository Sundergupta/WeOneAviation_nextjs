"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/cpl.css";

export default function SyllabusClient() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Commercial Pilot License", href: "/commercial-pilot-license" },
        { name: "Eligibility", href: "/commercial-pilot-license/eligibility" },
        { name: "Syllabus", href: "/commercial-pilot-license/syllabus" },
        { name: "Salary", href: "/commercial-pilot-license/salary" },
        { name: "Admission", href: "/commercial-pilot-license/admission-process" },
    ];

    return (
        <main>
            <section
                className="hero-section"
            // style={{
            //     backgroundImage: "url('/assets/home page slider/generate a videos of airplane.jpg')",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <div className="container">
                    <h1>Commercial Pilot License Syllabus</h1>
                    <h2>Commercial Pilot License</h2>
                </div>
            </section>

            <div className="menu-layout">


                <section className="content-box cpl-container">
                    <div className="cpl-section">
                        <h1>Commercial Pilot License Syllabus</h1>
                        <p>
                            A commercial pilot license syllabus is designed to teach aspiring pilots the necessary skills which will
                            enable them to carry out safe aircraft operations efficiently. The CPL syllabus meets DGCA standards through a combination of ground instruction and flight training that prepares candidates for aviation success.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Ground Training Subjects</h2>
                        <p>
                            Theoretical learning at ground school serves as the essential starting point for becoming a pilot. The commercial pilot license syllabus for ground school teaches these necessary subjects:
                        </p>
                        <ul>
                            <li><strong>Air Navigation</strong></li>
                            <li><strong>Aviation Meteorology</strong></li>
                            <li><strong>Air Regulation</strong></li>
                            <li><strong>Technical General</strong></li>
                            <li><strong>Technical Specific</strong></li>
                            <li><strong>Radio Telephony (RTR)</strong></li>
                        </ul>
                    </div>

                    <div className="cpl-section">
                        <h2>Flight Training Modules</h2>
                        <p>
                            Students must complete flight training as a practical requirement for the commercial pilot license syllabus:
                        </p>
                        <ul>
                            <li><strong>Basic Maneuvers</strong></li>
                            <li><strong>Cross-Country Flights</strong></li>
                            <li><strong>Instrument Flying</strong></li>
                            <li><strong>Night Flying</strong></li>
                            <li><strong>Solo Flying</strong></li>
                        </ul>
                    </div>

                    <div className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            The official commercial pilot license syllabus prepares future pilots with both academic instruction and flight training, ensuring competence and confidence for professional flying careers.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
