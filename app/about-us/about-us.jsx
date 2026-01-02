"use client";

import { useEffect, useState } from "react";
import "./about-us.css";
import Image from "next/image";

const AboutUs = () => {
    const [seo, setSeo] = useState(null);

    useEffect(() => {
        fetch("https://weoneaviation-backend.onrender.com/api/pages/slug/about-us")
            .then((res) => res.json())
            .then((data) => setSeo(data.page))
            .catch((err) => console.log("SEO Fetch Error:", err));
    }, []);

    useEffect(() => {
        if (!seo) return;

        document.title = seo.metaTitle || "About Us | We One Aviation";

        const metaDesc = document.querySelector("meta[name='description']");
        if (metaDesc) {
            metaDesc.setAttribute("content", seo.metaDescription || "");
        } else {
            const m = document.createElement("meta");
            m.name = "description";
            m.content = seo.metaDescription || "";
            document.head.appendChild(m);
        }
    }, [seo]);

    const advantages = [
        { icon: "🎯", title: "Personalized Coaching", description: "Tailored guidance matching your learning style for optimal understanding." },
        { icon: "👨‍🏫", title: "Expert Faculty", description: "Learn crucial concepts from experienced, airline-rated instructors." },
        { icon: "⏰", title: "Flexible Scheduling", description: "Study at your own pace with adaptable online class timings." },
        { icon: "💰", title: "Affordable Courses", description: "Receive premium ground school education at competitive prices." },
        { icon: "❓", title: "24/7 Doubt-Clearing", description: "Never get stuck – access round-the-clock support from experts." },
        { icon: "🤝", title: "Dedicated Support", description: "We are fully committed to your success, every step of the way." },
    ];

    return (
        <div className="about-us">

            {/* HERO */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Your Flight Path Starts <span className="highlight">Here</span>
                        </h1>
                        <p className="hero-subtitle">
                            Comprehensive DGCA Ground School, Type Rating Prep, and Pilot Career Services.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">Start Your Journey</button>
                            <button className="btn btn-secondary">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="who-we-are-section">
                <div className="container about-container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="title-pill">Who We Are</h2>

                            <p className="intro-text">
                                We One Aviation is a premier aviation organization offering pilot training,
                                aviation consulting, charter services, and aviation support across India.
                            </p>

                            <p className="intro-text">
                                <strong>Pilot Training:</strong> DGCA Ground Classes, CPL preparation,
                                airline readiness, and structured mentorship.
                            </p>

                            <div className="cta-container">
                                <button className="cta-button">Get in Touch</button>
                            </div>
                        </div>

                        <div className="about-image">
                            <Image src="/assets/About2.webp" alt="Cockpit" width={600} height={400} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ATC ADVANTAGE */}
            <section className="atc-advantage">
                <div className="container">
                    <h2 className="section-title">The ATC Advantage</h2>
                    <div className="advantages-grid">
                        {advantages.map((item, index) => (
                            <div key={index} className="advantage-card">
                                <div className="advantage-icon">{item.icon}</div>
                                <h3 className="advantage-title">{item.title}</h3>
                                <p className="advantage-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="mission-section">
                <div className="mission-container">
                    <div className="mission-image-wrapper">
                        <Image src="/assets/About2.webp" alt="Aircraft" width={600} height={400} />
                    </div>

                    <div className="mission-content">
                        <div className="mission-pill">✈️ Our Mission</div>
                        <h2 className="mission-title">Our Mission</h2>
                        <p className="mission-text">
                            To empower aviation aspirants and clients by delivering safe,
                            affordable, excellence-driven aviation services.
                        </p>

                        <button className="btn-get-in-touch">
                            Get In Touch →
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
