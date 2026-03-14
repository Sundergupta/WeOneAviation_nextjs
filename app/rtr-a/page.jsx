import Image from "next/image";
import "./style.css";

export const metadata = {
    title: "DGCA Subject RTR (Aero) – Radio Telephony License 2026",
    description:
        "The License Every Professional Pilot Needs — RTR (Aero) training for DGCA CPL & PPL at We One Aviation Academy. Full syllabus, exam format & career benefits.",
};

export default function RTRAero() {
    return (
        <main className="dgca-page">
            <header className="dgca-hero">
                <div className="dgca-hero-inner">
                    <p className="dgca-subject-label">DGCA Subject</p>
                    <h1>RTR (Aero) — Radio Telephony License</h1>
                    <p className="dgca-subtitle">
                        The License Every Professional Pilot Needs — We One Aviation Academy
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
                    alt="RTR Aero DGCA Course"
                    width={900}
                    height={500}
                    className="dgca-hero-image"
                    priority
                />
            </header>

            <div className="dgca-badges">
                <span className="dgca-badge">🏛️ WPC / DGCA Issued By</span>
                <span className="dgca-badge">📄 2 Parts — Exam Format</span>
                <span className="dgca-badge">🎙️ Oral — Exam Mode</span>
                <span className="dgca-badge">✅ Mandatory For All Pilots</span>
            </div>

            <section className="dgca-intro">
                <p>
                    When it comes to becoming a licensed commercial pilot in India,
                    clearing the RTR exam is just as important as passing your DGCA ground
                    subjects or logging flying hours. At We One Aviation, we help students
                    understand the real-world relevance of RTR and prepare them thoroughly
                    to ace this vital qualification.
                </p>
            </section>

            <aside className="dgca-toc">
                <h2>Contents</h2>
                <ol>
                    <li>What is RTR (Aero)?</li>
                    <li>Why is RTR Mandatory for Pilots?</li>
                    <li>RTR Exam Format – What to Expect</li>
                    <li>RTR Syllabus Highlights</li>
                    <li>How We One Aviation Prepares You for RTR</li>
                    <li>Who Needs RTR?</li>
                </ol>
            </aside>

            <section className="dgca-section">
                <h2>What is RTR (Aero)?</h2>
                <p>
                    RTR (Aero) stands for Radio Telephony Restricted (Aeronautical) — a
                    government-issued license that authorizes pilots to legally operate
                    aircraft radio communication equipment in Indian airspace.
                </p>
                <p>
                    It is issued by the Wireless Planning and Coordination (WPC) Wing under
                    the Ministry of Communications, and is mandatory for all pilots who
                    intend to:
                </p>
                <ul className="dgca-checklist">
                    <li>Communicate with ATC (Air Traffic Control)</li>
                    <li>Operate aircraft radios in controlled airspace</li>
                    <li>Fly in Indian commercial or general aviation sectors</li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>Why is RTR Mandatory for Pilots?</h2>
                <p>
                    Clear and precise radio communication is the lifeline of aviation
                    safety. RTR ensures that pilots:
                </p>
                <ul className="dgca-checklist">
                    <li>Know standard aviation phraseology</li>
                    <li>Can handle radio failures or emergency calls</li>
                    <li>Understand aircraft call signs, squawk codes, and radar vectors</li>
                    <li>Communicate professionally with ATC in both normal and high-pressure scenarios</li>
                </ul>
                <p>
                    Simply put, you can't fly commercially without an RTR license in India.
                </p>
            </section>

            <section className="dgca-section">
                <h2>RTR Exam Format – What to Expect</h2>
                <p>
                    The RTR exam is conducted by WPC and DGCA, and is divided into two
                    parts:
                </p>
                <table className="dgca-table">
                    <thead>
                        <tr>
                            <th>Part</th>
                            <th>Description</th>
                            <th>Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Part I</td>
                            <td>Practical Communication Test (ATC simulation and phraseology usage)</td>
                            <td>Oral</td>
                        </tr>
                        <tr>
                            <td>Part II</td>
                            <td>Viva on rules, regulations, procedures, and emergency communication</td>
                            <td>Oral</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Passing both parts is compulsory. The exam tests your confidence,
                    clarity, and command over real-world aviation communication.
                </p>
            </section>

            <section className="dgca-section">
                <h2>RTR Syllabus Highlights</h2>
                <p>Here's what you'll be trained on at We One Aviation Academy:</p>
                <ul className="dgca-checklist">
                    <li>Standard phraseology used in Indian and international airspace</li>
                    <li>VHF/UHF radio communication handling</li>
                    <li>Emergency callouts (Mayday, Pan-Pan)</li>
                    <li>Position reports, taxi clearances, and enroute communication</li>
                    <li>Knowledge of ICAO Annex 10, Indian Telegraph Rules</li>
                    <li>Meteorological terms and Q codes (QNH, QFE, QDM, etc.)</li>
                    <li>Radio equipment handling, call signs, and procedures</li>
                </ul>
            </section>

            <section className="dgca-section">
                <h2>How We One Aviation Prepares You for RTR</h2>
                <p>
                    At We One Aviation, we provide intensive RTR training through
                    experienced instructors and ex-ATC professionals.
                </p>
                <ul className="dgca-checklist">
                    <li>One-on-one mock viva sessions.</li>
                    <li>Daily phraseology drills and script-based simulations.</li>
                    <li>Group discussions for confidence building.</li>
                    <li>Voice clarity training and callout practice.</li>
                    <li>Access to past RTR questions and exam feedback.</li>
                </ul>
                <p>Our goal? To make you not just exam-ready, but airspace-ready.</p>
            </section>

            <section className="dgca-section">
                <h2>Who Needs RTR?</h2>
                <ul className="dgca-icon-list">
                    <li>
                        <span>✈️</span>
                        <div>
                            <strong>Commercial Pilot License (CPL) Applicants:</strong> RTR is
                            mandatory for all CPL candidates flying in Indian airspace.
                        </div>
                    </li>
                    <li>
                        <span>🛩️</span>
                        <div>
                            <strong>Private Pilots:</strong> Intending to fly solo in controlled
                            airspace across India.
                        </div>
                    </li>
                    <li>
                        <span>🌍</span>
                        <div>
                            <strong>Foreign License Holders:</strong> Converting their CPL to
                            India must clear RTR as part of the process.
                        </div>
                    </li>
                    <li>
                        <span>🎓</span>
                        <div>
                            <strong>Flight Instructors and Cadet Pilots:</strong> Applying for
                            type rating require a valid RTR license.
                        </div>
                    </li>
                </ul>
                <p>
                    The RTR license is not just another test — it's your gateway to safe,
                    professional communication in the skies. At We One Aviation, we ensure
                    you're confident, clear, and competent when you take that mic in your
                    hand — because in aviation, every word matters.
                </p>

                <div className="dgca-cta">
                    <button className="dgca-btn">Join RTR (Aero) Course</button>
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