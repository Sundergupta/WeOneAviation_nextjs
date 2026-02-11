"use client";
import { useEffect, useRef, useState } from "react";
import "./PilotStepsLoader.css";

const stepsData = [
    {
        title: "10th and 12th Board Verification Certificate",
        desc:
            "Get your 10th and 12th marksheets officially verified. This is needed to confirm your academic qualifications, especially Physics and Math in Class 12, before starting pilot training.",
    },
    {
        title: "Medical Tests",
        desc:
            "Clear DGCA Class 2 and Class 1 medical tests to ensure you meet the health standards required for a pilot.",
    },
    {
        title: "Ground Classes",
        desc:
            "Begin your CPL theory training covering Meteorology, Navigation, and Air Regulations.",
    },
    {
        title: "Flight Training",
        desc:
            "Train at a flying school in India or abroad and complete a minimum of 200 flying hours.",
    },
    {
        title: "Airline Preparation",
        desc:
            "Prepare for airline selections with simulators, mock interviews, and aptitude tests.",
    },
];

export default function PilotStepsLoader() {
    const stepRefs = useRef([]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStep(Number(entry.target.dataset.index));
                    }
                });
            },
            { threshold: 0.5 }
        );

        stepRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="steps-wrapper">
            <h2 className="steps-title">How to Become a Pilot?</h2>

            <div className="timeline">
                <div className="timeline-line">
                    <div
                        className="timeline-progress"
                        style={{
                            height: `${(activeStep / (stepsData.length - 1)) * 100}%`,
                        }}
                    />
                </div>

                <div className="steps">
                    {stepsData.map((step, index) => (
                        <section
                            key={index}
                            data-index={index}
                            ref={(el) => (stepRefs.current[index] = el)}
                            className={`step ${index <= activeStep ? "visible" : ""}`}
                        >
                            <div
                                className={`dot ${index <= activeStep ? "active" : ""}`}
                            >
                                ✓
                            </div>

                            <div className="step-content">
                                <h3>Step {index + 1}</h3>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
