"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/cpl.css";

export default function SalaryClient() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Commercial Pilot License", href: "/commercial-pilot-license" },
        { name: "Eligibility", href: "/commercial-pilot-license/eligibility" },
        { name: "Syllabus", href: "/commercial-pilot-license/syllabus" },
        { name: "Salary", href: "/commercial-pilot-license/salary" },
        { name: "Admission", href: "/commercial-pilot-license/admission-process" },
    ];

    return (
        <main className="salary-page">

            {/* ================= MAIN LAYOUT ================= */}
            <div className="cpl-content-wrapper">

                {/* ================= CONTENT ================= */}
                <section className="salary-container">
                    {/* INTRO */}
                    <section className="cpl-section">


                        <p>
                            The commercial pilot license salary is one of the biggest reasons why aviation attracts thousands of
                            students every year. Becoming a commercial pilot offers not just prestige but also strong financial growth
                            over time. However, pilot salaries vary depending on experience, aircraft type, airline, and country.
                        </p>

                        <p>
                            This guide explains commercial pilot starting pay, CPL salary growth, and what pilots can realistically
                            expect after completing training.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2> What Is Commercial Pilot License Salary? </h2>

                        <p>
                            The commercial pilot license salary refers to the earnings a pilot receives after obtaining a CPL and flying
                            professionally. A CPL allows pilots to work with airlines, charter companies, cargo operators, corporate
                            aviation, or training academies.
                        </p>

                        <p>
                            Salary levels increase steadily as pilots gain flight hours, aircraft ratings, and operational experience.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2> Commercial Pilot Starting Pay – Entry Level Earnings </h2>

                        <p>
                            Commercial pilot starting pay is the income earned during the initial phase of a pilot’s career, usually as a
                            First Officer.
                        </p>

                        <h3>Average Starting Salary Overview</h3>
                        <ul>
                            <li>Entry-level airline pilot (India): ₹1.5 – ₹3.5 lakh per month</li>
                            <li>International airlines: USD 3,000 – 6,000 per month</li>
                            <li>Charter & business aviation: ₹1 – ₹2.5 lakh per month</li>
                        </ul>

                        <p>Starting pay depends heavily on the airline, aircraft type, and demand for pilots.</p>
                    </section>

                    <section className="cpl-section">
                        <h2> CPL Salary Growth with Experience </h2>

                        <p>
                            A pilot’s CPL salary grows significantly with flight hours and seniority.
                        </p>

                        <h3>How Experience Impacts CPL Wages</h3>
                        <ul>
                            <li>0–500 flight hours: Entry-level salary</li>
                            <li>1,500+ flight hours: Strong salary growth</li>
                            <li>Captain upgrade: Salary may double or triple</li>
                        </ul>

                        <p>Long-haul and wide-body captains earn some of the highest CPL wages in aviation.</p>
                    </section>

                    <section className="cpl-section">
                        <h2> Factors That Affect Commercial Pilot Salary </h2>

                        <p>
                            Several factors influence commercial pilot training salary and long-term earnings.
                        </p>

                        <h3>Key Salary Influencing Factors</h3>
                        <ul>
                            <li>Aircraft type (turboprop, jet, wide-body)</li>
                            <li>Airline or operator</li>
                            <li>Domestic vs international routes</li>
                            <li>Total flight hours</li>
                            <li>Rank (First Officer or Captain)</li>
                        </ul>

                        <p>This is why pilot license salary differs from one pilot to another.</p>
                    </section>

                    <section className="cpl-section">
                        <h2> Pilot License Salary by Career Path </h2>

                        <p>
                            After completing CPL, pilots can choose different career paths, each with different salary ranges.
                        </p>

                        <h3>Airline Pilot Salary</h3>
                        <p>Airline pilots enjoy the highest earning potential and structured salary growth.</p>

                        <h4><b> Charter & Corporate Pilot Salary </b></h4>
                        <p>Charter pilots earn competitive pay with flexible schedules and varied operations.</p>

                        <h5><b>Cargo Pilot Salary</b></h5>
                        <p>Cargo pilots often earn stable salaries with international exposure.</p>

                        <h6><b> Pilot Trainer Salary</b></h6>
                        <p>A pilot trainer salary is usually lower initially but ideal for building flight hours and experience.</p>
                    </section>

                    <section className="cpl-section">
                        <h2> Pilot Training Salary – Early Career Reality </h2>

                        <p>
                            Many students ask about pilot training salary, but training itself does not provide income. Salary begins
                            only after obtaining a CPL and securing employment.
                        </p>

                        <p>Junior pilots and instructors may earn modest pay initially while gaining experience.</p>
                    </section>

                    <section className="cpl-section">
                        <h2> Commercial Pilot Course Salary – Is It Worth It? </h2>

                        <p>
                            The commercial pilot course salary potential makes pilot training a long-term investment. Although
                            training costs are high, pilots often recover this investment within the first few years of airline
                            employment.
                        </p>
                    </section>

                    <section className="cpl-section">
                        <h2> Commercial Pilot Training Salary vs Long-Term Earnings </h2>

                        <p>
                            While commercial pilot training salary is low during early stages, long-term earnings, global opportunities,
                            and career stability make aviation one of the most rewarding professions.
                        </p>
                    </section>

                    <section className="cpl-section cpl-final">
                        <h2> Final Thoughts on Commercial Pilot License Salary </h2>

                        <p>
                            The commercial pilot license salary depends on multiple factors, but the career offers strong growth,
                            global opportunities, and long-term financial stability. Although commercial pilot starting pay may seem
                            modest, experience and upgrades lead to significant income increases.
                        </p>

                        <p>
                            For those passionate about flying, a CPL opens doors to one of the most respected and well-paid
                            careers worldwide.
                        </p>
                    </section>

                </section>
            </div>
        </main>
    );
}
