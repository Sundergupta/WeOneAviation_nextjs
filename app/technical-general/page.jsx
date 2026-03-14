import Image from "next/image";
import "./style.css";

export const metadata = {
    title: "DGCA Subject Technical General – All Details 2026",
    description:
        "The backbone of your pilot training — understand how your aircraft truly works. Technical General for DGCA CPL & PPL at We One Aviation Academy.",
};

export default function TechnicalGeneral() {
    return (
        <main className="dgca-page">
            <header className="dgca-hero">
                <div className="dgca-hero-inner">
                    <p className="dgca-subject-label">DGCA Subject</p>
                    <h1>Technical General — All Details 2026</h1>
                    <p className="dgca-subtitle">
                        The backbone of your pilot training — understand how your aircraft
                        truly works
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
                    alt="Technical General DGCA Course"
                    width={900}
                    height={500}
                    className="dgca-hero-image"
                    priority
                />
            </header>

            <div className="dgca-badges">
                <span className="dgca-badge">✈️ CPL / PPL Eligibility</span>
                <span className="dgca-badge">📦 7 Modules — Topics Covered</span>
                <span className="dgca-badge">📚 Core Subject — CPL Syllabus</span>
                <span className="dgca-badge">✅ 100% Pass Rate</span>
            </div>

            <section className="dgca-intro">
                <p>
                    At We One Aviation, the Technical General subject is the backbone of
                    your pilot training journey. Whether you're preparing for a Commercial
                    Pilot License (CPL) or Private Pilot License (PPL), mastering Technical
                    General ensures you're not just flying the aircraft — you're
                    understanding how it works.
                </p>
            </section>

            <aside className="dgca-toc">
                <h2>Contents</h2>
                <ol>
                    <li>What Is Technical General in Pilot Training?</li>
                    <li>Key Topics Covered in Technical General</li>
                    <li>Why Technical General is Crucial for Every Pilot</li>
                    <li>How We One Aviation Teaches It Better</li>
                </ol>
            </aside>

            <section className="dgca-section">
                <h2>What Is Technical General in Pilot Training?</h2>
                <p>
                    Technical General covers the mechanical, structural, and system-related
                    aspects of an aircraft. This subject is essential for understanding what
                    makes an airplane fly, how its systems operate, and how pilots can
                    troubleshoot or prevent mechanical failures in real-world flight
                    situations.
                </p>
                <p>
                    It bridges the gap between theory and practice, helping future pilots
                    confidently operate, monitor, and respond to the aircraft's technical
                    behavior.
                </p>
            </section>

            <section className="dgca-section">
                <h2>Key Topics Covered in Technical General</h2>
                <p>
                    Here's a detailed breakdown of what students learn in this subject at
                    We One Aviation:
                </p>

                <div className="dgca-modules">
                    <div className="dgca-module">
                        <span className="dgca-module-num">01</span>
                        <div>
                            <strong>Aircraft Structure and Materials</strong>
                            <p>Fuselage, wings, tailplane, and landing gear. Types of materials used in aircraft construction (aluminium, composites, etc.). Load distribution and structural integrity.</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">02</span>
                        <div>
                            <strong>Aerodynamics and Flight Controls</strong>
                            <p>Lift, drag, thrust, and weight. Stability and control. Primary and secondary flight control systems.</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">03</span>
                        <div>
                            <strong>Engines and Propulsion</strong>
                            <p>Piston vs. Jet Engines. Turboprop and turbojet functioning. Engine cooling, lubrication, and ignition systems. Propeller pitch and RPM control.</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">04</span>
                        <div>
                            <strong>Aircraft Systems</strong>
                            <p>Fuel systems and fuel management. Hydraulic systems for brakes and landing gear. Electrical systems and alternators. Propeller pitch and RPM control systems.</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">05</span>
                        <div>
                            <strong>Instruments and Avionics</strong>
                            <p>Gyroscopic and pressure instruments. Glass cockpits and digital displays. Autopilot and flight management systems (FMS).</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">06</span>
                        <div>
                            <strong>Landing Gear and Brakes</strong>
                            <p>Retractable vs. fixed gear. Anti-skid systems. Shock absorption and wheel types.</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">07</span>
                        <div>
                            <strong>Fire Detection and Protection</strong>
                            <p>Types of extinguishers used in aviation. Fire zones and suppression systems. Warning systems and emergency protocols.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dgca-section">
                <h2>Why Technical General is Crucial for Every Pilot</h2>
                <p>
                    Technical General forms the backbone of safe flight operations. Here's
                    why every serious pilot must master this subject:
                </p>
                <ul className="dgca-icon-list">
                    <li>
                        <span>🎯</span>
                        <div>
                            <strong>Enhanced Situational Awareness:</strong> Know exactly what's
                            happening when a system fails.
                        </div>
                    </li>
                    <li>
                        <span>🧠</span>
                        <div>
                            <strong>Smarter Decision-Making:</strong> Respond to abnormal
                            situations calmly and correctly.
                        </div>
                    </li>
                    <li>
                        <span>📡</span>
                        <div>
                            <strong>Better Communication:</strong> Speak the language of
                            engineers, ATC, and ground crew.
                        </div>
                    </li>
                    <li>
                        <span>📝</span>
                        <div>
                            <strong>Exam Readiness:</strong> Essential for clearing the DGCA
                            CPL/PPL exams with confidence.
                        </div>
                    </li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>How We One Aviation Teaches It Better</h2>
                <p>
                    At We One Aviation, we don't just teach Technical General — we bring it
                    to life.
                </p>
                <ul className="dgca-checklist">
                    <li>Visual-based learning using aircraft models, system diagrams, and animations.</li>
                    <li>Visits to real aircraft for practical exposure to components.</li>
                    <li>Regular mock tests based on DGCA standards.</li>
                    <li>Interactive whiteboard sessions &amp; recorded lectures.</li>
                    <li>Access to latest DGCA question bank.</li>
                </ul>
                <p>
                    Whether you're aiming for your CPL, PPL, or ATPL in the future, our
                    expert instructors will ensure your technical base is rock solid.
                </p>

                <div className="dgca-cta">
                    <button className="dgca-btn">Join Technical General Course</button>
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