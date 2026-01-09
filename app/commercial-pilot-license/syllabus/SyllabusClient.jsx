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
        <main className="commercial-pilot-license">

            {/* ================= HERO SECTION ================= */}
            {/* <section className="hero-section">
                <div className="container">
                    <h1>Commercial Pilot License Syllabus</h1>
                </div>
            </section> */}

            {/* ================= MAIN LAYOUT ================= */}
            <div className="cpl-content-wrapper">

                {/* ================= SIDE MENU ================= */}

                {/* ================= CONTENT ================= */}
                <section className="cpl-container">

                    {/* INTRO */}
                    <section className="cpl-section">

                        <p>
                            A commercial pilot license syllabus was designed to teach aspiring pilots the necessary skills
                            which will enable them to carry out safe aircraft operations efficiently. The CPL syllabus meets
                            DGCA (Directorate General of Civil Aviation) standards through a combination of ground instruction
                            and flight training that produces fully prepared candidates for aviation success. The following
                            sections provide you with an in-depth review of the learning subjects in Commercial Pilot License
                            training programs within India.
                        </p>
                    </section>

                    {/* GROUND TRAINING */}
                    <section className="cpl-section">
                        <h2>Ground Training Subjects</h2>
                        <p>
                            Theoretical learning at ground school serves as the essential starting point for becoming a pilot.
                            The commercial pilot license syllabus for ground school teaches these necessary subjects:
                        </p>
                        <ul>
                            <li>
                                <strong>Air Navigation:</strong> Flight planning together with radio navigation and instrument
                                flying and global positioning systems make up the subject matter.
                            </li>
                            <li>
                                <strong>Aviation Meteorology:</strong> The training provides knowledge about weather patterns
                                together with cloud formations and wind systems and their effects on flight operations.
                            </li>
                            <li>
                                <strong>Air Regulation:</strong> Students gain knowledge of the rules from DGCA besides ICAO
                                regulations and general aviation laws.
                            </li>
                            <li>
                                <strong>Technical General:</strong> Focuses on the basic working of aircraft systems, engines,
                                and instruments.
                            </li>
                            <li>
                                <strong>Technical Specific:</strong> Training for the aircraft type that a candidate operates
                                during their flight education period.
                            </li>
                            <li>
                                <strong>Radio Telephony (RTR):</strong> Trains students in aviation communication, standard
                                phraseology, and emergency procedures.
                            </li>
                        </ul>
                        <p>
                            Instructors teach subjects through classroom sessions and online resources as well as conducting
                            mock tests to ensure students pass their DGCA examinations.
                        </p>
                    </section>

                    {/* FLIGHT TRAINING */}
                    <section className="cpl-section">
                        <h2>Flight Training Modules</h2>
                        <p>
                            Students must complete flight training as a practical requirement for the commercial pilot
                            license syllabus:
                        </p>
                        <ul>
                            <li>
                                <strong>Basic Maneuvers:</strong> Take-off and landing procedures together with straight-and-
                                level flight and turns and climbing and descending flights.
                            </li>
                            <li>
                                <strong>Cross-Country Flights:</strong> Navigation exercises between different airfields.
                            </li>
                            <li>
                                <strong>Instrument Flying:</strong> Training includes flying using instruments alone to
                                duplicate low-visibility conditions.
                            </li>
                            <li>
                                <strong>Night Flying:</strong> Flight operations during night conditions.
                            </li>
                            <li>
                                <strong>Solo Flying:</strong> Independent flying operations help develop personal confidence
                                as well as flying expertise.
                            </li>
                        </ul>
                        <p>
                            To earn a commercial pilot license students need at least 200 hours of flight schooling that must
                            cover required hours for solo flights, cross-country flights and instrument flight tasks.
                        </p>
                    </section>

                    {/* FINAL THOUGHTS */}
                    <section className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>
                            The official commercial pilot license syllabus exists as a carefully designed program which
                            prepares future pilots for actual aviation duties. Students receive both academic instruction
                            and flight training at this facility which prepares them for professional pilot competence and
                            confidence levels. Competence in ground and flight subjects creates pilots who are prepared to
                            manage different climate situations and corporate rules as well as airline protocol.
                        </p>
                        <p>
                            The syllabus stands as the essential prerequisite for aviation students interested in reaching
                            cockpit positions.
                        </p>
                    </section>

                </section>
            </div>
        </main>
    );
}
