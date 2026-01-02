"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/cpl.css";

export default function EligibilityClient() {
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
                    <h1>Commercial Pilot License Eligibility</h1>
                    <h2>Commercial Pilot License</h2>
                </div>
            </section>

            <div className="menu-layout">
                {/* <aside className="left-menu side-menu-column">
                    <ul className="side-menu">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={pathname === item.href ? "menu-link active" : "menu-link"}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside> */}

                <section className="content-box cpl-container">
                    <div className="cpl-section">
                        <h1>Commercial Pilot License (CPL) Eligibility</h1>
                        <p>
                            The first essential step for someone who dreams about aviation as a profession is to earn a <strong>Commercial Pilot License (CPL)</strong>. The CPL enables professional aircraft operation and provides entry into airline, charter and cargo service roles. Before starting a pilot training program students need to understand the specifications that will determine their admission. Here’s a detailed overview of the eligibility to become a pilot and apply for a commercial pilot licence course in India.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Age Requirement</h2>
                        <p>
                            A candidate qualifying for a CPL in India needs to reach <strong>17 years</strong> old before applying for enrollment. The license processing begins at age 17 but the candidate will obtain it after completing their 18th birthday.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Educational Qualification</h2>
                        <p>
                            A solid academic base forms the essential foundation required to turn into a professional pilot. The educational requirement begins at the <strong>10+2 (senior secondary)</strong> level alongside science subjects according to set criteria.
                        </p>
                        <p><strong>10+2 (Senior Secondary) or equivalent</strong></p>
                        <p>It is mandatory to study Physics and Mathematics as your core subjects.</p>
                        <p>
                            Candidates who lack Physics and Math in their 10+2 education must separately take these courses either through NIOS (National Institute of Open Schooling) or any authorized educational institution. The standards for commercial pilot course eligibility require a specific academic background.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Medical Fitness</h2>
                        <p>
                            High levels of physical and mental fitness are required for safe aircraft operation. Each pilot candidate needs to obtain a medical certification from an examiner approved by the DGCA. The medical certification includes:
                        </p>
                        <ul>
                            <li>Class 2 Medical Certificate (initial requirement for Student Pilot License)</li>
                            <li>Class 1 Medical Certificate (mandatory for CPL issuance)</li>
                        </ul>
                        <p>The medical exam evaluates these specific elements:</p>
                        <ul>
                            <li>Vision standards: 6/6 in one eye and 6/9 in the other (correctable with glasses)</li>
                            <li>Hearing, blood pressure, ECG, and overall physical health</li>
                        </ul>
                    </div>

                    <div className="cpl-section">
                        <h2>Language Proficiency</h2>
                        <p>
                            English proficiency stands as a mandatory requirement because aviation communication and documentation as well as all examination materials operate in the English language. The DGCA may require candidates to pass an English Language Proficiency (ELP) test.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Nationality and Citizenship</h2>
                        <p>
                            Foreign nationals who seek a CPL in India must fulfill additional requirements which may include security clearance and conversion of foreign licenses. Indian citizens and OCI holders are eligible subject to standard checks.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Student Pilot License (SPL)</h2>
                        <p>
                            Candidates must first obtain a Student Pilot License (SPL) to enroll in the CPL program. The candidate needs to fulfil three requirements to obtain an SPL.
                        </p>
                        <ul>
                            <li>Be at least 16 years old</li>
                            <li>Pass an oral/written examination on basic aviation subjects</li>
                            <li>Pass a Class 2 medical exam</li>
                        </ul>
                    </div>

                    <div className="cpl-section">
                        <h2>Flying Hours</h2>
                        <p>
                            The CPL eligibility requires candidates to complete at least <strong>200 hours</strong> of flying. These include:
                        </p>
                        <ul>
                            <li>100 hours as Pilot-in-Command (PIC)</li>
                            <li>20 hours of cross-country flying</li>
                            <li>10 hours of instrument flying</li>
                            <li>5 hours of night flying</li>
                        </ul>
                    </div>

                    <div className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            Meet the educational, medical, and flight-hour requirements and enrol in a DGCA-approved flying school to begin your journey toward becoming a commercial pilot.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
