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
            {/* INTRO */}
            <section className="cpl-section">


                <p>
                    If you dream of becoming a professional pilot, understanding the Commercial Pilot License syllabus is
                    one of the first and most important steps. Many students focus only on flying hours, but in reality, strong
                    theoretical knowledge is what builds a safe, confident, and skilled pilot. The pilot syllabus forms the
                    backbone of your entire aviation career.
                </p>

                <p>
                    This guide explains the CPL syllabus, subjects, and what you can expect during pilot training in a simple
                    and human-friendly way.
                </p>
            </section>

            <section className="cpl-section">
                <h2> What Is the Commercial Pilot License Syllabus? </h2>

                <p>
                    The commercial pilot license syllabus includes all the theoretical subjects that a pilot must study and
                    clear before being issued a CPL. These subjects help pilots understand how aircraft fly, how weather
                    affects operations, how navigation works, and what aviation laws must be followed.
                </p>

                <p>
                    In India, the syllabus is regulated by DGCA, and students must clear the DGCA CPL exam syllabus as
                    part of their training. Similar structures are followed globally, with slight differences based on the aviation
                    authority.
                </p>
            </section>

            <section className="cpl-section">
                <h2> Pilot Syllabus – Why Theory Matters in Flying </h2>

                <p>
                    The pilot syllabus is not just about passing exams. It prepares you to make real-life decisions in the
                    cockpit. During training, pilots learn how to plan flights, read weather charts, calculate fuel, and
                    understand aircraft systems.
                </p>

                <p>
                    A strong pilot training syllabus ensures that when something unexpected happens in the air, the pilot
                    knows exactly how to respond calmly and safely.
                </p>
            </section>

            <section className="cpl-section">
                <h2> CPL Exam Syllabus – Main Subjects Explained </h2>

                <p>
                    The CPL exam syllabus consists of multiple theory papers. These papers are often referred to as CPL
                    exam subjects and must be cleared individually.
                </p>

                <h4>Air Navigation</h4>
                <p>
                    Air Navigation focuses on flight planning, time-speed-distance calculations, charts, and radio navigation.
                    Many students find this subject challenging, but it is also one of the most important CPL subjects.
                </p>

                <h4>Aviation Meteorology</h4>
                <p>
                    This subject helps pilots understand weather patterns, clouds, winds, storms, and how weather impacts
                    flight safety. Meteorology is a critical commercial pilot license subject because weather plays a major role
                    in aviation.
                </p>

                <h4>Air Regulations</h4>
                <p>
                    Air Regulations cover aviation laws, rules of the air, licensing requirements, and operational procedures.
                    This subject ensures pilots fly legally and responsibly.
                </p>

                <h4>Technical General</h4>
                <p>
                    Technical General explains how aircraft systems work, including engines, instruments, electrical systems,
                    and aircraft performance.
                </p>

                <h4>Technical Specific</h4>
                <p>
                    Technical Specific focuses on the particular aircraft type a pilot is training on. Each aircraft has its own
                    CPL subject under Technical Specific.
                </p>
            </section>

            <section className="cpl-section">
                <h2> DGCA CPL Exam Syllabus – What Indian Students Should Know </h2>

                <p>
                    For students training in India, the DGCA CPL exam syllabus is mandatory. The syllabus for CPL DGCA is
                    designed to test conceptual understanding rather than memorization.
                </p>

                <p>
                    Students must clear all subjects as part of the syllabus for CPL before applying for a Commercial Pilot
                    License.
                </p>
            </section>

            <section className="cpl-section">
                <h2> Syllabus for Pilot Training vs Flying Practice </h2>

                <p>
                    While the syllabus for pilot theory focuses on classroom learning, flying training focuses on practical
                    skills. Both go hand in hand. A pilot who understands theory well performs better during flight training.
                </p>

                <p>The pilot training syllabus helps pilots:</p>
                <ul>
                    <li>Fly more confidently</li>
                    <li>Handle emergencies better</li>
                    <li>Understand aircraft behavior</li>
                    <li>Improve overall safety</li>
                </ul>
            </section>

            <section className="cpl-section">
                <h2> Why Understanding the CPL Syllabus Early Helps </h2>

                <p>Knowing the CPL syllabus in advance helps students:</p>
                <ul>
                    <li>Prepare mentally for training</li>
                    <li>Choose the right ground classes</li>
                    <li>Plan study time effectively</li>
                    <li>Reduce exam stress</li>
                    <li>Avoid repeated exam attempts</li>
                </ul>

                <p>
                    Most professional flight academies structure their training strictly according to the official commercial pilot
                    license syllabus.
                </p>
            </section>

            <section className="cpl-section cpl-final">
                <h2> Final Thoughts </h2>

                <p>
                    The Commercial Pilot License syllabus is not just about clearing exams—it is about becoming a responsible and knowledgeable professional pilot. From navigation and meteorology to regulations and aircraft systems, every subject in the CPL exam syllabus plays a vital role in aviation safety.
                </p>

                <p>
                    If you truly want to succeed as a pilot, respect the syllabus, understand the concepts, and build strong
                    theoretical foundations alongside your flying skills.
                </p>
            </section>

        </main>
    );
}
