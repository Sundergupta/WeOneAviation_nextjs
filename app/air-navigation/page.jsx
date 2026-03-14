import Image from "next/image";
import "./style.css";

export const metadata = {
    title: "DGCA Subject Air Navigation – All Details 2026",
    description:
        "Master Air Navigation for DGCA CPL & PPL exams — expert-led classes in Delhi at We One Aviation Academy. Full syllabus, modules, eligibility & career benefits.",
};

export default function AirNavigation() {
    return (
        <main className="dgca-page">
            <header className="dgca-hero">
                <div className="dgca-hero-inner">
                    <p className="dgca-subject-label">DGCA Subject</p>
                    <h1>Air Navigation — All Details 2026</h1>
                    <p className="dgca-subtitle">
                        Master Air Navigation for DGCA CPL &amp; PPL exams — expert-led
                        classes in Delhi
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
                    alt="Air Navigation DGCA Course"
                    width={900}
                    height={500}
                    className="dgca-hero-image"
                    priority
                />
            </header>

            <div className="dgca-badges">
                <span className="dgca-badge">📄 Paper 2 — DGCA Exam</span>
                <span className="dgca-badge">✈️ CPL / PPL Eligibility</span>
                <span className="dgca-badge">📍 Delhi Location</span>
                <span className="dgca-badge">✅ 100% Pass Rate</span>
            </div>

            <section className="dgca-intro">
                <p>
                    Looking for the best Air Navigation course in India? Whether you're
                    preparing for your Commercial Pilot License (CPL) or Private Pilot
                    License (PPL), mastering Air Navigation is essential for every pilot's
                    success in both DGCA exams and real-world flying.
                </p>
                <p>
                    At We One Aviation Academy, we offer comprehensive, practical,
                    DGCA-approved Air Navigation training in Delhi. We combine real-time
                    navigation tools, expert faculty, and hands-on practice that goes beyond
                    the textbook.
                </p>
            </section>

            <aside className="dgca-toc">
                <h2>Contents</h2>
                <ol>
                    <li>What is Air Navigation?</li>
                    <li>Why Our Air Navigation Course Stands Out</li>
                    <li>Topics Covered (Module-Wise Breakdown)</li>
                    <li>What You Will Learn</li>
                    <li>Who Can Enroll?</li>
                    <li>Career Benefits After Navigation Training</li>
                </ol>
            </aside>

            <section className="dgca-section">
                <h2>What is Air Navigation?</h2>
                <p>
                    Air Navigation is the process of determining your position, deciding
                    where you want to go, and safely guiding the aircraft there. You'll
                    learn to use maps, measure distances, correct for wind, and utilize
                    navigation tools such as GPS, VORs, and compasses.
                </p>
                <p>
                    Whether flying by day or night, in clear skies or clouds, good
                    navigation keeps you on track and safe.
                </p>

                <h3>Air Navigation Involves:</h3>
                <ul className="dgca-icon-list">
                    <li>
                        <span>👁️</span>
                        <div>
                            <strong>Visual Navigation (Pilotage):</strong> Navigating by
                            visual reference to landmarks on the ground.
                        </div>
                    </li>
                    <li>
                        <span>✏️</span>
                        <div>
                            <strong>Dead Reckoning (DR):</strong> Calculating current position
                            based on a known past position, speed, heading, and elapsed time.
                        </div>
                    </li>
                    <li>
                        <span>📡</span>
                        <div>
                            <strong>Radio Navigation (VOR, ADF, DME):</strong> Using
                            ground-based radio navigation aids to determine position and track.
                        </div>
                    </li>
                    <li>
                        <span>🛰️</span>
                        <div>
                            <strong>GPS Navigation and Satellite Systems:</strong> Using
                            satellite-based positioning systems for accurate en-route and
                            approach navigation.
                        </div>
                    </li>
                    <li>
                        <span>🗺️</span>
                        <div>
                            <strong>RNAV (Area Navigation):</strong> Allowing aircraft to fly
                            on any desired flight path within coverage of ground-based aids or
                            satellites.
                        </div>
                    </li>
                    <li>
                        <span>🖥️</span>
                        <div>
                            <strong>Flight Management Systems (FMS):</strong> Automated
                            navigation systems that manage the complete flight plan from takeoff
                            to landing.
                        </div>
                    </li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>Why Our Air Navigation Course Stands Out</h2>
                <p>
                    Here's what makes We One Aviation the preferred choice for air
                    navigation training in India:
                </p>
                <table className="dgca-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Expert Trainers</td>
                            <td>DGCA-certified instructors with airline experience</td>
                        </tr>
                        <tr>
                            <td>Full DGCA Syllabus Coverage</td>
                            <td>From Time/Distance/Speed formulas to Radio Aids</td>
                        </tr>
                        <tr>
                            <td>Live Flight Planning</td>
                            <td>With actual VFR/IFR charts, NOT just theory</td>
                        </tr>
                        <tr>
                            <td>Simulator Sessions</td>
                            <td>Practice navigation scenarios and in-flight re-routing</td>
                        </tr>
                        <tr>
                            <td>Notes &amp; Question Bank</td>
                            <td>Includes DGCA pattern questions &amp; mock tests</td>
                        </tr>
                        <tr>
                            <td>Guaranteed Results</td>
                            <td>High success rate in DGCA Navigation Paper</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="dgca-section">
                <h2>Topics Covered in Air Navigation Course</h2>
                <p>
                    We cover the full DGCA Navigation syllabus in a practical, simplified
                    way:
                </p>

                <h3>Module-Wise Breakdown:</h3>
                <div className="dgca-modules">
                    <div className="dgca-module">
                        <span className="dgca-module-num">01</span>
                        <div>
                            <strong>Introduction to Navigation</strong>
                            <p>Great Circle, Rhumb Line, Air Position, Fixes</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">02</span>
                        <div>
                            <strong>Time &amp; Direction Calculations</strong>
                            <p>UTC, LMT, ZT, Magnetic/True bearings</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">03</span>
                        <div>
                            <strong>Map Reading &amp; Charts</strong>
                            <p>Mercator and Lambert charts, VFR/IFR chart usage</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">04</span>
                        <div>
                            <strong>Dead Reckoning (DR) Navigation</strong>
                            <p>Wind triangle, Groundspeed, True Airspeed, ETA</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">05</span>
                        <div>
                            <strong>Radio Navigation Aids</strong>
                            <p>VOR, ADF, DME, ILS, MLS — real-time plotting</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">06</span>
                        <div>
                            <strong>GPS &amp; RNAV Techniques</strong>
                            <p>Satellite Navigation, WAAS, RAIM, RNP concepts</p>
                        </div>
                    </div>
                    <div className="dgca-module">
                        <span className="dgca-module-num">07</span>
                        <div>
                            <strong>Flight Planning Techniques</strong>
                            <p>
                                Alternate airports, Notams, Met conditions, Airspace
                                classifications
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dgca-section">
                <h2>What You Will Learn in Our Air Navigation Course</h2>
                <p>
                    Our course covers both the basics and advanced parts of navigation,
                    including:
                </p>
                <ul className="dgca-checklist">
                    <li>How to read aeronautical maps</li>
                    <li>How to measure direction and distance</li>
                    <li>How to plan a flight and estimate time</li>
                    <li>How to use navigation tools like VOR, ADF, DME, and GPS</li>
                    <li>How to communicate position with Air Traffic Control (ATC)</li>
                    <li>How to stay on course even in poor visibility</li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>Who Can Enroll in Air Navigation Course?</h2>
                <p>Perfect for:</p>
                <ul className="dgca-icon-list">
                    <li>
                        <span>✈️</span>
                        <div>
                            <strong>CPL Students:</strong> Preparing for Navigation Paper
                            (Paper 2) of DGCA exams.
                        </div>
                    </li>
                    <li>
                        <span>🛩️</span>
                        <div>
                            <strong>PPL Students:</strong> Wanting accurate flight planning
                            skills for real-world flying.
                        </div>
                    </li>
                    <li>
                        <span>🏫</span>
                        <div>
                            <strong>Flying School Cadets:</strong> Under DGCA syllabus at any
                            approved flying school.
                        </div>
                    </li>
                    <li>
                        <span>🏆</span>
                        <div>
                            <strong>ATPL / Airline-Bound Candidates:</strong> Aspiring ATPL or
                            airline-bound candidates wanting advanced navigation skills.
                        </div>
                    </li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>Career Benefits After Navigation Training</h2>
                <ul className="dgca-checklist">
                    <li>Clear DGCA exam with confidence</li>
                    <li>Excel in airline interviews &amp; simulator tests</li>
                    <li>Ability to navigate in low visibility or emergencies</li>
                    <li>Higher confidence in solo and cross-country flying</li>
                    <li>Readiness for international aviation standards (ICAO)</li>
                </ul>

                <div className="dgca-cta">
                    <button className="dgca-btn">Join Air Navigation Course</button>
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