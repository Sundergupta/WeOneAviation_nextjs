"use client";
import { useEffect, useRef, useState } from "react";
import "./PilotStepsLoader.css";

const stepsData = [
    {
        title: "10th and 12th Board Verification Certificate",
        desc:
            "Get your 10th and 12th marksheets officially verified. This confirms Physics and Math in Class 12 before starting pilot training.",
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
                        const index = Number(entry.target.dataset.index);
                        setActiveStep(index);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        stepRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const progressWidth = `${(activeStep / (stepsData.length - 1)) * 100}%`;

    return (
        <div className="steps-wrapper">
            <h2 className="steps-title">How to Become a Pilot?</h2>

            {/* Progress Loader */}
            <div className="loader">
                <div className="bar" style={{ width: progressWidth }}></div>

                <div className="check-bar-container">
                    <div></div>
                    {stepsData.map((_, i) => (
                        <div
                            key={i}
                            className={`check ${i <= activeStep ? "active" : ""}`}
                        >
                            ✓
                        </div>
                    ))}
                </div>
            </div>

            {/* Steps */}
            {stepsData.map((step, index) => (
                <section
                    key={index}
                    data-index={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className={`step ${index <= activeStep ? "visible" : ""}`}
                >
                    <h3>Step {index + 1}</h3>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                </section>
            ))}
        </div>
    );
}
