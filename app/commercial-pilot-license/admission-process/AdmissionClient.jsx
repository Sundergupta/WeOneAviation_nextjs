"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/cpl.css";

export default function AdmissionClient() {
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
                    The Commercial Pilot License Admission Process is the first major milestone for anyone dreaming of
                    becoming a professional pilot. Many students assume that pilot training begins directly with flying, but in
                    reality, there is a structured commercial pilot license admission procedure that candidates must follow.
                </p>

                <p>
                    From eligibility checks to medical tests and the entrance exam for commercial pilot, this guide explains
                    the complete CPL admission process in a simple and easy-to-understand way.
                </p>
            </section>

            {/* CPL */}
            <section className="cpl-section">
                <h2> What Is the Commercial Pilot License Admission Process? </h2>
                <p>
                    The Commercial Pilot License Admission Process refers to the official steps a student must complete to
                    enroll in a CPL training program. This process ensures that candidates meet the academic, medical, and
                    aptitude requirements needed to safely undergo pilot training.
                </p>

                <p>
                    The commercial pilot license admission procedure may slightly vary between countries and flying schools,
                    but the core steps remain largely the same.
                </p>
            </section>

            {/* REQUIREMENTS */}
            <section className="cpl-section">
                <h3> Eligibility Criteria for CPL Admission </h3>
                <p>Before starting the CPL admission process, candidates must meet basic eligibility requirements.</p>

                <h3> Educational Requirements </h3>
                <ul>
                    <li>Completion of 10+2 with Physics and Mathematics</li>
                    <li>Open schooling students may also be eligible (subject to authority approval)</li>
                </ul>

                <h3> Age Requirement </h3>
                <ul>
                    <li>Minimum age: 17 years to start training</li>
                    <li>Minimum age: 18 years for CPL issuance</li>
                </ul>

                <p>
                    Meeting these criteria allows students to move forward with the CPL admission formalities.
                </p>
            </section>

            {/* QUALIFICATIONS */}
            <section className="cpl-section">
                <h2> Entrance Exam for Commercial Pilot </h2>
                <p>
                    The entrance exam for commercial pilot is conducted by many flying academies to assess a candidate’s
                    basic aptitude and academic readiness.
                </p>

                <h3> What Does the Entrance Exam Include? </h3>
                <ul>
                    <li>Mathematics and Physics basics</li>
                    <li>Logical reasoning</li>
                    <li>English comprehension</li>
                    <li>Aptitude and psychometric tests</li>
                </ul>

                <p>
                    Some academies refer to this test as the CPL entrance exam, and clearing it is an essential part of the
                    Commercial Pilot License Admission Process.
                </p>
            </section>

            {/* AGE */}
            <section className="cpl-section">
                <h2> Medical Examination – Mandatory Step </h2>
                <p>
                    A Class 1 Medical Certificate is compulsory for commercial pilot license admission.
                </p>

                <h3> Medical Requirements Include </h3>
                <ul>
                    <li>Vision and hearing tests</li>
                    <li>Blood and urine tests</li>
                    <li>ECG and chest X-ray</li>
                    <li>General physical fitness evaluation</li>
                </ul>

                <p>
                    Clearing the medical exam early helps avoid delays during the CPL admission process.
                </p>
            </section>

            {/* MEDICAL */}
            <section className="cpl-section">
                <h2> CPL Admission Process – Step by Step </h2>
                <p>The CPL admission process typically follows these stages:</p>

                <h3> Step 1: Application Submission </h3>
                <p>Students apply to a flying school by submitting academic records and personal details.</p>

                <h3> Step 2: Entrance Test </h3>
                <p>The entrance exam for commercial pilot evaluates academic and mental readiness.</p>

                <h3> Step 3: Interview & Aptitude Assessment </h3>
                <p>Candidates may face a personal interview and aptitude evaluation.</p>

                <h3> Step 4: Medical Clearance </h3>
                <p>Obtaining Class 1 medical certification is mandatory.</p>

                <h3> Step 5: Admission Confirmation </h3>
                <p>Once all steps are cleared, CPL admission is confirmed.</p>
            </section>

            {/* TRAINING */}
            <section className="cpl-section">
                <h2> Commercial Pilot License Admission Without Entrance Exam </h2>
                <p>
                    Some international flying schools may offer commercial pilot license admission without a formal entrance
                    test. However, students are still assessed through interviews and medical examinations.
                </p>

                <p>
                    In India, most reputed academies prefer an entrance exam for commercial pilot to ensure training quality
                    and safety standards.
                </p>
            </section>

            {/* SKILLS */}
            <section className="cpl-section">
                <h2> Documents Required for CPL Admission </h2>
                <p>Common documents needed for CPL admission process include:</p>

                <ul>
                    <li>10+2 mark sheets</li>
                    <li>Passport</li>
                    <li>Medical certificate</li>
                    <li>Birth certificate</li>
                    <li>Passport-size photographs</li>
                </ul>

                <p>Proper documentation ensures a smooth commercial pilot license admission experience.</p>
            </section>

            {/* QUALIFICATIONS FOR CPL TRAINING */}
            <section className="cpl-section">
                <h2> Why the CPL Admission Process Matters </h2>
                <p>
                    The Commercial Pilot License Admission Process is designed to select candidates who are mentally,
                    physically, and academically fit for aviation training. It reduces training risks and increases the chances of
                    successful course completion.
                </p>

                <p>
                    Choosing the right academy and understanding the CPL admission process helps students save time, money, and
                    effort.
                </p>
            </section>

            {/* COMMERCIAL PILOT COURSE ELIGIBILITY */}
            <section className="cpl-section">
                <h2> Final Thoughts </h2>
                <p>
                    The Commercial Pilot License Admission Process is structured to prepare students for the demanding world of
                    aviation. From clearing the entrance exam for commercial pilot to completing medical evaluations, each step
                    plays a crucial role in shaping a future pilot.
                </p>
                <p>
                    If you meet the eligibility criteria and are passionate about flying, completing the commercial pilot license
                    admission procedure is your first step toward an exciting aviation career.
                </p>
            </section>


        </main>
    );
}