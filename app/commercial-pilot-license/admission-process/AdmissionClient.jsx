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
        <main>
            {/* <section
                className="hero-section"
            // style={{
            //     backgroundImage: "url('/assets/home page slider/generate a videos of airplane.jpg')",
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <div className="container">
                    <h1>Commercial Pilot License Admission Process</h1>
                </div>
            </section> */}

            <div className="menu-layout">


                <section className="content-box cpl-container">
                    <div className="cpl-section">

                        <p>
                            Dreaming of a career in aviation? The Commercial Pilot License Admission journey begins with pilots
                            understanding all process requirements. The admission process checks eligibility and aptitude alongside
                            readiness to start professional pilot training. Each phase of Commercial Pilot License qualification and
                            learning to fly alone without an instructor receives strict guidelines from the DGCA (Directorate General
                            of Civil Aviation) in India.
                        </p>
                        <p>
                            The following guide provides you with details on CPL training application procedures and start-up
                            instructions.
                        </p>
                    </div>

                    <div className="cpl-section">
                        <h2>Contact Now</h2>
                    </div>

                    <div className="cpl-section">
                        <h2>Check Eligibility Requirements</h2>
                        <p>Make sure you fulfill all eligibility standards before starting your application:</p>
                        <ul>
                            <li> <b>Age:</b> Training for the license starts at age 17 but the license is issued at age 18.</li>
                            <li> <b>Education:</b> Students need to complete their 10+2 by obtaining Physics and Mathematics from a recognized board.</li>
                            <li> <b>Medical Fitness:</b> Applicants must get their Class 2 followed by class 1 Medical Certificates from medical examiners recognized by DGCA.</li>
                            <li> <b>English Proficiency:</b> Must be able to read, write, and understand English.</li>
                        </ul>
                        <p>The initial requirement stands as the core element of Commercial Pilot License Admission Process initiation.</p>
                    </div>

                    <div className="cpl-section">
                        <h2>Choose a DGCA-Approved Flying School</h2>
                        <p>Choosing the correct training institution stands as a vital component throughout the Commercial Pilot License Admission Process. Look for a school that:</p>
                        <ul>
                            <li>Is approved by the DGCA</li>
                            <li>Has experienced instructors</li>
                            <li>Offers modern aircraft and simulators</li>
                            <li>Provides complete ground and flight training</li>
                        </ul>
                        <p>After selection you must fill out the school’s enrollment form while providing documents and making your first fee payment.</p>
                    </div>

                    <div className="cpl-section">
                        <h2>Ground School & DGCA Exams</h2>
                        <p>Students must study core subjects Air Navigation together with Meteorology, Air Regulations, Technical General and Technical Specific at ground school training. Candidates need to clear exams conducted by DGCA concerning these subjects before their training progression.</p>
                    </div>

                    <div className="cpl-section">
                        <h2>Flight Training & Logging Flying Hours</h2>
                        <p>You need to meet the requirement of 200 flight hours which includes solo flights, cross-country flights, instrument flights, and night flights. The logbook contains essential training information that serves as a basis for CPL certificate issuance.</p>
                    </div>

                    <div className="cpl-section">
                        <h2>Apply for Commercial Pilot License</h2>
                        <p>After passing all exams and completing flight hours:</p>
                        <ul>
                            <li>Submit your logbook and documents to DGCA</li>
                            <li>Undergo Class 1 medical revalidation</li>
                            <li>Apply for CPL issuance</li>
                        </ul>
                    </div>

                    <div className="cpl-section">
                        <h2>Admission Procedure at We One Aviation Academy</h2>
                        <p>We One Aviation Academy provides students with a friendly admission process that leads to Commercial Pilot License enrollment. Our admission process includes:</p>
                        <ul>
                            <li>Initial Counseling: Understand your goals and assess your eligibility.</li>
                            <li>Document Verification: Academic data together with medical records are evaluated.</li>
                            <li>Application Submission: Applicants need to finish the CPL admission form by providing all necessary information.</li>
                            <li>Medical Support: Assistance in scheduling Class 2 and Class 1 medical tests.</li>
                            <li>Orientation & Enrollment: After shortlisting candidates they must join an orientation meeting to begin their ground training.</li>
                            <li>Loan & EMI Assistance: Our support services provide education loan options and EMI solutions to eligible students.</li>
                        </ul>
                        <p>We will support you through the entire training program starting from your initial counseling until you pass your final flight test.</p>
                    </div>

                    <div className="cpl-section cpl-final">
                        <h2>Final Thoughts</h2>
                        <p>The Commercial Pilot License Admission Process consists of multiple stages which let only the most
                            qualified and ready candidates obtain their wings. You can follow the procedure to become a commercial
                            pilot if you have the proper guidance while remaining dedicated along with using the right training
                            opportunities. Select an established DGCA-approved academy that meets your requirements when
                            kickstarting your aviation career.</p>
                        <p>At We One Aviation Academy we focus on supporting flight dreams through expert instruction and
                            modern educational facilities and career-focused training methods.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
