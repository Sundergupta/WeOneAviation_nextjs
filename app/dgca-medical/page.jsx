import Image from "next/image";
import "./style.css";

export const metadata = {
    title: "DGCA Class 1 & Class 2 Medical – Complete Guide for Pilots",
    description:
        "Complete guide for DGCA Class 1 and Class 2 medical examinations in India. Eligibility, process, standards, validity and requirements for pilots.",
};

export default function DgcaMedical() {
    return (
        <div className="dgca-container">
            <h1 className="dgca-title">
                Guide for DGCA Class 2 Medical and DGCA Class 1 Medical
            </h1>

            <Image
                src="/assets/About2.webp"
                alt="DGCA Medical Examination"
                width={900}
                height={500}
                className="dgca-image"
                priority
            />

            <p className="dgca-text">
                Aspiring pilots in India are required to undergo specific medical
                assessments to ensure they meet the necessary mental and physical health
                standards for aviation. The Directorate General of Civil Aviation (DGCA)
                mandates two primary medical examinations — DGCA Class II and DGCA Class I
                medical certifications. Both assessments are critical to starting and
                progressing in a pilot’s career.
            </p>

            <p className="dgca-text">
                In this guide, we will delve into the requirements, procedures, and
                validity for each of these medical certifications, ensuring that you are
                well-prepared for each step.
            </p>

            <h2>Overview of DGCA Class II and Class I Medical Examinations</h2>
            <p>
                To become a licensed pilot in India, DGCA mandates medical certifications
                to verify that pilots meet stringent health standards. These examinations
                are designed to assess overall fitness, detect any medical conditions
                that could impair flying ability, and ensure the safety of passengers
                and crew.
            </p>

            <ul>
                <li>
                    <b>Class II Medical Certificate</b> – Required initially for a Student
                    Pilot License (SPL) and to start flight training.
                </li>
                <li>
                    <b>Class I Medical Certificate</b> – Necessary for obtaining a
                    Commercial Pilot License (CPL) and for operating as a commercial pilot.
                </li>
            </ul>

            <h2>DGCA Class II Medical Examination</h2>
            <p>
                The DGCA Class II medical examination is the entry-level certification
                for individuals aspiring to begin their pilot training. This
                certification is mandatory for obtaining a Student Pilot License (SPL)
                and enrolling in a DGCA-approved flight school.
            </p>

            <h3>Who Needs a Class II Medical Certificate?</h3>
            <ul>
                <li>Student Pilot License (SPL) applicants</li>
                <li>Private Pilot License (PPL) holders</li>
                <li>Flight Radio Telephone Operator’s License holders</li>
            </ul>

            <h3>Class II Medical Standards</h3>
            <ul>
                <li>
                    <b>Physical Requirements</b> – Basic physical health requirements to
                    ensure general fitness
                </li>
                <li>
                    <b>Vision Requirements</b> – Acceptable eyesight with or without
                    corrective lenses
                </li>
                <li>
                    <b>Hearing Requirements</b> – Standard hearing ability for effective
                    communication
                </li>
            </ul>

            <h3>Steps to Obtain a Class II Medical Certificate</h3>
            <ol>
                <li>Register on the eGCA portal for DGCA Class II medical</li>
                <li>Select a DGCA-approved medical examiner</li>
                <li>Undergo the required medical tests</li>
                <li>Submit all medical reports to the approved doctor</li>
                <li>Receive your DGCA Class II medical assessment</li>
            </ol>

            <h2>DGCA Class I Medical Examination</h2>
            <p>
                After obtaining a Class II medical certificate, pilots aiming for a
                Commercial Pilot License (CPL) must clear the DGCA Class I medical
                examination. This medical is more comprehensive and ensures that pilots
                are physically and mentally fit for commercial flying operations.
            </p>

            <h3>Who Needs a Class I Medical Certificate?</h3>
            <ul>
                <li>Commercial Pilot License (CPL) holders</li>
                <li>Airline Transport Pilot License (ATPL) holders</li>
                <li>Flight Engineers</li>
            </ul>

            <p>
                DGCA Class I medical examination includes advanced tests such as ECG,
                blood tests, chest X-ray, audiometry, ophthalmology assessment, and
                psychological evaluation depending on the candidate’s profile.
            </p>

            <p>
                For more detailed information, candidates should consult DGCA-approved
                medical examiners or authorized medical centers.
            </p>
        </div>
    );
}
