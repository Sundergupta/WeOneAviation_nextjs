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
        <main className="commercial-pilot-license">

            {/* INTRO */}
            <section className="cpl-section">


                <p>
                    Becoming a commercial pilot is a dream career for many aviation aspirants. However, before enrolling in
                    a flying school or starting flight training, it is important to clearly understand the Commercial Pilot License
                    eligibility criteria. The requirements to become a pilot are set by aviation authorities and include age,
                    education, medical fitness, and regulatory approvals.
                </p>

                <p>
                    This guide explains commercial pilot eligibility, educational qualifications, medical standards, and pilot
                    training requirements in a clear and structured manner.
                </p>
            </section>

            {/* CPL */}
            <section className="cpl-section">
                <h2> What Is a Commercial Pilot License (CPL)? </h2>
                <p>
                    A Commercial Pilot License (CPL) allows a pilot to fly aircraft professionally and earn remuneration. After
                    meeting the commercial pilot license eligibility, candidates can pursue careers with airlines, charter
                    operators, cargo companies, corporate aviation, and flight training organizations.
                </p>
            </section>

            {/* CPL vs PPL Comparison Table */}



            {/* REQUIREMENTS */}
            <section className="cpl-section">
                <h3> Requirements to Become a Pilot </h3>
                <p>
                    The requirements to become a pilot are defined by aviation authorities such as DGCA (India), FAA
                    (USA), or EASA (Europe). While regulations vary slightly by country, the core eligibility criteria remain
                    similar worldwide.
                </p>

                <h3> Basic Requirements to Become a Pilot </h3>
                <ul>
                    <li>Minimum age requirement</li>
                    <li>Educational qualifications</li>
                    <li>Medical fitness certification</li>
                    <li>English language proficiency</li>
                    <li>Completion of required flight training hours</li>
                </ul>

                <p>Meeting these requirements is the first step toward professional pilot training.</p>
            </section>

            {/* QUALIFICATIONS */}
            <section className="cpl-section">
                <h2> Qualifications to Become a Pilot </h2>
                <p>
                    One of the most common questions students ask is about the qualifications to become a pilot.
                </p>

                <h3> Educational Qualifications </h3>
                <p>To meet commercial pilot eligibility, a candidate must have:</p>

                <ul>
                    <li>Passed 10+2 (or equivalent)</li>
                    <li>Studied Physics and Mathematics as compulsory subjects</li>
                </ul>

                <p>
                    Students who did not study Physics or Mathematics can still qualify by completing these subjects through
                    open schooling or equivalent boards.
                </p>

                <p>These pilot education requirements are mandatory for CPL training.</p>
            </section>

            {/* AGE */}
            <section className="cpl-section">
                <h2> Age Criteria – Eligibility to Become a Pilot </h2>
                <p>Understanding the eligibility to become a pilot includes meeting age requirements.</p>

                <ul>
                    <li>Minimum age to start flying training: 17 years</li>
                    <li>Minimum age to obtain a Commercial Pilot License: 18 years</li>
                </ul>

                <p>This age requirement applies to most aviation authorities globally.</p>
            </section>

            {/* MEDICAL */}
            <section className="cpl-section">
                <h2> Commercial Pilot Eligibility – Medical Requirements </h2>
                <p>
                    Medical fitness is one of the most critical aspects of commercial pilot eligibility.
                </p>

                <h3> Medical Certification </h3>
                <ul>
                    <li>Class 1 Medical Certificate is mandatory</li>
                    <li>Conducted by approved aviation medical examiners</li>
                    <li>Includes vision, hearing, ECG, blood tests, and overall health assessment</li>
                </ul>

                <p>
                    Candidates must meet strict medical standards to ensure flight safety. Medical clearance is essential
                    before beginning flight training.
                </p>
            </section>

            {/* TRAINING */}
            <section className="cpl-section">
                <h2> Pilot Training Eligibility & Flight Training Requirements </h2>
                <p>Meeting pilot training eligibility involves more than just education and age.</p>

                <h3> Flight Training Requirements </h3>
                <p>To qualify for a CPL, a candidate must complete:</p>

                <ul>
                    <li>Minimum 200 flight hours (varies by country)</li>
                    <li>Solo flying hours</li>
                    <li>Cross-country flights</li>
                    <li>Instrument flying hours</li>
                    <li>Multi-engine training (if applicable)</li>
                </ul>

                <p>These commercial pilot requirements ensure pilots are trained to professional standards.</p>
            </section>

            {/* SKILLS */}
            <section className="cpl-section">
                <h2> Pilot Course Eligibility & Skill Requirements </h2>
                <p>Pilot course eligibility also includes non-academic skills essential for aviation.</p>

                <h3> Key Skills Required </h3>
                <ul>
                    <li>Good communication skills</li>
                    <li>Strong decision-making ability</li>
                    <li>Situational awareness</li>
                    <li>Discipline and responsibility</li>
                    <li>Proficiency in English language</li>
                </ul>

                <p>These pilot qualifications required are evaluated throughout training.</p>
            </section>

            {/* QUALIFICATIONS FOR CPL TRAINING */}
            <section className="cpl-section">
                <h2> Qualifications for Commercial Pilot Training </h2>
                <p>The qualifications for commercial pilot training combine academic, medical, and practical standards.</p>

                <h3> To summarize, candidates must have: </h3>
                <ul>
                    <li>10+2 with Physics & Mathematics</li>
                    <li>Class 1 Medical Certificate</li>
                    <li>Valid passport</li>
                    <li>Aviation authority registration (such as DGCA Computer Number)</li>
                </ul>

                <p>These qualifications for pilot training are checked before license issuance.</p>
            </section>

            {/* COMMERCIAL PILOT COURSE ELIGIBILITY */}
            <section className="cpl-section">
                <h2> Commercial Pilot Course Eligibility </h2>
                <p>
                    Commercial pilot course eligibility may vary slightly depending on the country where training is
                    undertaken.
                </p>

                <h3> Example (India – DGCA) </h3>
                <ul>
                    <li>10+2 with Physics & Mathematics</li>
                    <li>DGCA Class 1 Medical</li>
                    <li>Minimum age: 18 years</li>
                    <li>DGCA exams cleared</li>
                </ul>

                <p>This is also referred to as CPL course eligibility or commercial pilot training eligibility.</p>
            </section>

            {/* ELIGIBILITY FOR AVIATION COURSE */}
            <section className="cpl-section">
                <h2> Eligibility for Aviation Course – Additional Factors </h2>
                <p>Apart from core requirements, eligibility for aviation course also depends on:</p>

                <ul>
                    <li>Financial planning for training</li>
                    <li>Ability to clear theoretical exams</li>
                    <li>Long-term commitment to aviation career</li>
                    <li>Willingness to relocate for training</li>
                </ul>

                <p>Aviation training is demanding, and commitment plays a key role in success.</p>
            </section>

            {/* CHECKLIST */}
            <section className="cpl-section">
                <h2> Commercial Pilot Licence Eligibility – Final Checklist </h2>

                <p>Here is a simple checklist for commercial pilot licence eligibility:</p>

                <ul>
                    <li>✅ Minimum age: 18 years</li>
                    <li>✅ 10+2 with Physics & Mathematics</li>
                    <li>✅ Class 1 Medical fitness</li>
                    <li>✅ Required flight training hours</li>
                    <li>✅ Cleared aviation authority exams</li>
                </ul>

                <p>If you meet these conditions, you are eligible to apply for a CPL.</p>
            </section>
            <section className="cpl-section cpl-compare">
                <h2> Commercial Pilot License Eligibility vs Private Pilot License (PPL) </h2>
                <p className="muted">Many students confuse CPL with PPL eligibility.</p>

                <div className="cpl-table-wrap">
                    <table className="cpl-compare-table">
                        <thead>
                            <tr>
                                <th>Aspect</th>
                                <th>PPL</th>
                                <th>CPL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Purpose</td>
                                <td>Recreational</td>
                                <td>Professional</td>
                            </tr>
                            <tr>
                                <td>Medical</td>
                                <td>Class 2</td>
                                <td>Class 1</td>
                            </tr>
                            <tr>
                                <td>Education</td>
                                <td>Recommended</td>
                                <td>Mandatory</td>
                            </tr>
                            <tr>
                                <td>Flight Hours</td>
                                <td>~40–60</td>
                                <td>~200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    This comparison helps clarify  commercial pilot license eligibility  requirements.
                </p>
            </section>
            {/* CAREER OPPORTUNITIES */}
            <section className="cpl-section">
                <h2> Career Opportunities After Meeting CPL Eligibility </h2>
                <p>Once you fulfill commercial pilot requirements, career options include:</p>

                <ul>
                    <li>Airline pilot</li>
                    <li>Charter & business aviation</li>
                    <li>Cargo pilot</li>
                    <li>Flight instructor</li>
                    <li>Corporate aviation</li>
                </ul>

                <p>Meeting the eligibility criteria opens doors to global aviation careers.</p>
            </section>


            {/* FINAL CONCLUSION */}
            <section className="cpl-section cpl-final">
                <h2> Final Conclusion </h2>
                <p>
                    Understanding Commercial Pilot License eligibility is the most important first step toward becoming a
                    professional pilot. From educational qualifications and medical fitness to flight training and exams, every
                    requirement plays a crucial role.
                </p>
                <p>
                    If you meet the requirements to become a pilot and are passionate about aviation, a career as a
                    commercial pilot offers global opportunities, professional growth, and a rewarding lifestyle.
                </p>
            </section>

        </main>
    );
}
