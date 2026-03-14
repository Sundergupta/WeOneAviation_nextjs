import Image from "next/image";
import "./style.css";

export const metadata = {
    title: "DGCA Subject Air Regulations – Complete Guide 2026",
    description:
        "Complete Guide for DGCA Exams and Pilot Training — Air Regulations for CPL & PPL at We One Aviation Academy. Full syllabus, modules, eligibility & career benefits.",
};

export default function AirRegulations() {
    return (
        <main className="dgca-page">
            <header className="dgca-hero">
                <div className="dgca-hero-inner">
                    <p className="dgca-subject-label">DGCA Subject</p>
                    <h1>Air Regulations — Complete Guide</h1>
                    <p className="dgca-subtitle">
                        Complete Guide for DGCA Exams and Pilot Training — We One Aviation
                        Academy
                    </p>
                    <div className="dgca-hero-actions">
                        <button className="dgca-btn" href="/contactform">
                            Get Free Counselling
                        </button>
                        <button className="dgca-btn dgca-btn-outline" href="/dgca-ground-classes-in-india">
                            Explore Courses →
                        </button>
                    </div>
                    <div className="dgca-stats">
                        <div className="dgca-stat">
                            <strong>3500+</strong>
                            <span>Pilots Trained</span>
                        </div>
                        <div className="dgca-stat">
                            <strong>16+</strong>
                            <span>Years Experience</span>
                        </div>
                        <div className="dgca-stat">
                            <strong>100%</strong>
                            <span>Placement Support</span>
                        </div>
                    </div>
                </div>

                <Image
                    src="/assets/GroundSchool.jpg"
                    alt="Air Regulations DGCA Course"
                    width={900}
                    height={500}
                    className="dgca-hero-image"
                    priority
                />
            </header>

            <div className="dgca-badges">
                <span className="dgca-badge">✈️ CPL / PPL Eligibility</span>
                <span className="dgca-badge">🌐 ICAO &amp; DGCA Standards</span>
                <span className="dgca-badge">📄 6 Papers — DGCA Exam</span>
                <span className="dgca-badge">📚 Core Subject — CPL Syllabus</span>
            </div>

            <section className="dgca-intro">
                <p>
                    Air Regulations refer to the set of rules and procedures governing
                    civil aviation to ensure safe, efficient, and orderly air navigation.
                    In India, these rules are laid down by the Directorate General of Civil
                    Aviation (DGCA) under the Ministry of Civil Aviation.
                </p>
                <p>
                    They cover aspects like licensing, aircraft operations, airworthiness,
                    safety norms, crew duties, airspace usage, and compliance with
                    international standards (ICAO).
                </p>
            </section>

            <aside className="dgca-toc">
                <h2>Contents</h2>
                <ol>
                    <li>What Are Air Regulations?</li>
                    <li>Air Regulations in DGCA CPL Syllabus</li>
                    <li>Important Civil Aviation Documents</li>
                    <li>ICAO and Its Importance</li>
                    <li>Pilot Legal Responsibilities</li>
                    <li>Tips to Prepare for Air Regulation Exam (DGCA)</li>
                </ol>
            </aside>

            <section className="dgca-section">
                <h2>What Are Air Regulations?</h2>
                <p>
                    Air Regulations are a set of official rules, procedures, and legal
                    guidelines that govern all aspects of civil aviation. These regulations
                    ensure that aircraft operate safely, efficiently, legally, and
                    harmoniously in national and international airspace.
                </p>
                <p>They are designed to:</p>
                <ul className="dgca-checklist">
                    <li>Prevent collisions and airspace conflicts</li>
                    <li>Define how aircraft should be flown (rules of the air)</li>
                    <li>Establish pilot licensing and medical standards</li>
                    <li>Regulate aircraft maintenance and airworthiness</li>
                    <li>Enforce duty time limits for crew</li>
                    <li>Protect passengers, property, and the environment</li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>Air Regulations in DGCA CPL Syllabus</h2>
                <p>
                    If you're preparing for the Commercial Pilot License (CPL) examination
                    in India, Air Regulation is a core theoretical subject. It ensures that
                    every aspiring pilot is well-versed with national and international
                    aviation law and responsibilities in the airspace.
                </p>

                <h3>Topics Covered:</h3>
                <div className="dgca-modules">
                    <div className="dgca-module">
                        <span className="dgca-module-num">01</span>
                        <div>
                            <strong>ICAO – International Civil Aviation Organization</strong>
                            <p>Objectives, Structure, Functions, Annexes (especially Annex 1, 2, 6, 8, 9, 11, 12)</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">02</span>
                        <div>
                            <strong>Chicago Convention (1944)</strong>
                            <p>Freedoms of the Air, Sovereignty of Airspace, ICAO Doc 7300</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">03</span>
                        <div>
                            <strong>DGCA Structure &amp; Role</strong>
                            <p>Formation, Duties and Powers, CARs (Civil Aviation Requirements)</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">04</span>
                        <div>
                            <strong>Rules of the Air (ROTA)</strong>
                            <p>Visual Flight Rules (VFR), Instrument Flight Rules (IFR), Right of Way, Collision Avoidance, Signals, Lights, Markings</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">05</span>
                        <div>
                            <strong>Airspace Classification</strong>
                            <p>Controlled/Uncontrolled Airspace, FIR, Control Zones (CTR), Terminal Control Area (TMA), Area Control Centre (ACC)</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">06</span>
                        <div>
                            <strong>Licensing Rules</strong>
                            <p>Eligibility for PPL, CPL, ATPL, Renewal, Validity, Endorsements, Flight Duty Time Limitations (FDTL)</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">07</span>
                        <div>
                            <strong>Flight Duty Time Limitations (FDTL)</strong>
                            <p>Maximum Duty Hours, Rest Periods</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">08</span>
                        <div>
                            <strong>Aircraft Documents &amp; Responsibilities</strong>
                            <p>Journey Log, Certificate of Registration (C of R), Certificate of Airworthiness (C of A)</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">09</span>
                        <div>
                            <strong>Emergency Procedures and Communication Failures</strong>
                            <p></p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">10</span>
                        <div>
                            <strong>Air Traffic Services</strong>
                            <p>ATC roles, Flight Plans, ATIS, METAR, NOTAM</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dgca-section">
                <h2>Important Civil Aviation Documents</h2>
                <table className="dgca-table">
                    <thead>
                        <tr>
                            <th>Document</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CARs (Civil Aviation Requirements)</td>
                            <td>DGCA regulations that must be followed by all Indian aviation operators</td>
                        </tr>
                        <tr>
                            <td>AIP (Aeronautical Information Publication)</td>
                            <td>Contains details of airports, rules, and services</td>
                        </tr>
                        <tr>
                            <td>NOTAM (Notice to Airmen)</td>
                            <td>Temporary changes or important alerts</td>
                        </tr>
                        <tr>
                            <td>METAR/TAF</td>
                            <td>Meteorological updates for aviation</td>
                        </tr>
                        <tr>
                            <td>Flight Plan</td>
                            <td>Mandatory for IFR and cross-country flights</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="dgca-section">
                <h2>ICAO and Its Importance</h2>
                <p>
                    The International Civil Aviation Organization (ICAO) is a UN body that
                    standardizes global aviation. Its Annexes form the backbone of aviation
                    law worldwide. For instance:
                </p>
                <ul className="dgca-icon-list">
                    <li>
                        <span>📋</span>
                        <div>
                            <strong>Annex 2</strong> — Rules of the Air
                        </div>
                    </li>
                    <li>
                        <span>✈️</span>
                        <div>
                            <strong>Annex 6</strong> — Operation of Aircraft
                        </div>
                    </li>
                    <li>
                        <span>📡</span>
                        <div>
                            <strong>Annex 11</strong> — Air Traffic Services
                        </div>
                    </li>
                </ul>
                <p>
                    India, as a member state, follows ICAO SARPs (Standards and Recommended
                    Practices) while tailoring its own regulations through the DGCA.
                </p>
                <p>India's aviation law is based on:</p>
                <ul className="dgca-checklist">
                    <li>Aircraft Act, 1934</li>
                    <li>Aircraft Rules, 1937</li>
                </ul>
                <p>
                    These are the legislative foundations of all aviation regulations,
                    updated over time through CARs and DGCA orders.
                </p>
            </section>

            <section className="dgca-section">
                <h2>Pilot Legal Responsibilities</h2>
                <p>As a licensed pilot, you're responsible for:</p>
                <ul className="dgca-checklist">
                    <li>Ensuring the aircraft is airworthy</li>
                    <li>Carrying all documents on board</li>
                    <li>Following ATC instructions</li>
                    <li>Avoiding restricted/prohibited zones</li>
                    <li>Logging flight time correctly</li>
                    <li>Declaring emergencies appropriately</li>
                </ul>
                <p>
                    Failure to comply with Air Regulations can result in license
                    suspension, penalties, or even criminal liability.
                </p>
            </section>

            <section className="dgca-section">
                <h2>Tips to Prepare for Air Regulation Exam (DGCA)</h2>
                <ul className="dgca-checklist">
                    <li>Start with ICAO &amp; DGCA basics</li>
                    <li>Focus on Annex 2 and CARs</li>
                    <li>Memorize classifications, signals, documents</li>
                    <li>Practice mock tests &amp; previous year DGCA question papers</li>
                </ul>

                <div className="dgca-cta">
                    <button className="dgca-btn">Join Air Regulations Course</button>
                    <p className="dgca-note">
                        We One Aviation Academy – Delhi's trusted name for DGCA Ground
                        Classes.
                    </p>
                </div>
            </section>

            <footer className="dgca-footer">
                <div>
                    <h4>Our Latest Blogs</h4>
                    <ul>
                        <li>Flight Simulator Practice in Pilot Training</li>
                        <li>Pilot Training in Delhi (Feb 13, 2026)</li>
                        <li>PPL Course Fees (Feb 10, 2026)</li>
                        <li>DGCA Exam Subjects Guide (Jan 21, 2026)</li>
                    </ul>
                </div>

                <div className="dgca-footer-right">
                    <p>
                        Learn how to become a commercial pilot with our CPL-certified
                        training programs.
                    </p>
                </div>
            </footer>
        </main>
    );
}