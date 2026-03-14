"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./HomeClient.css";
import Link from "next/link";
import PilotStepsLoader from "../components/PilotStepsLoader";
import TrainingCards from "@/components/TrainingCards";
import ReviewCard from "../components/ReviewCard";
import Slider from "../components/Slider";
import Map from "../components/Map";

export default function HomeClient() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const companies = [
        { id: 1, name: "AirIndiaExpress", image: "/assets/Air-india-express-logo.png" },
        { id: 2, name: "AirIndia", image: "/assets/air-india-logo.png" },
        { id: 3, name: "IndiGo", image: "/assets/indigo.webp" },
        { id: 4, name: "AirIndiaExpress", image: "/assets/Air-india-express-logo.png" },
        { id: 5, name: "Spicejet", image: "/assets/SpiceJet-Logo.webp" },
        { id: 6, name: "StarAir", image: "/assets/star-air-logo.webp" },
    ];

    const slides = [
        {
            title: "BEST PILOT TRAINING IN INDIA",
            subtitle:
                "Join Best Pilot Training Institute In India. Get world-class flight training, DGCA classes, and expert guidance to kickstart your aviation career.",
            image: "/assets/home-page-slider/slider5.webp",
            button1: { label: "Contact Us", href: "/components/ContactForm" },
            button2: { label: "Learn More", href: "/pilot-training" },
        },
        {
            title: "We Deliver 3000+ Pilots To India Since 2011",
            subtitle:
                "Clear Your DGCA Exam In First Attempt With We One Aviation Academy",
            image: "/assets/home-page-slider/slider4.webp",
            button1: { label: "View Courses", href: "/dgca-ground-classes" },
            button2: { label: "Meet Instructors", href: "/about-us" },
        },
        {
            title: "From Ground to Sky",
            subtitle:
                "Premier DGCA Exam Coaching & Flight Training for Aspiring Pilots",
            image: "/assets/home-page-slider/slider1.webp",
            button1: { label: "Success Stories", href: "/about-us" },
            button2: { label: "Apply Now", href: "/components/ContactForm" },
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const duplicatedCompanies = [...companies, ...companies, ...companies];

    return (
        <>
            <div className="home">
                {/* ================= HERO SLIDER ================= */}
                <section className="hero-slider">
                    <div className="slides-container">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentSlide ? "active" : ""}`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className="slide-overlay"></div>
                                <div className="slide-content">
                                    <div className="slide-text">
                                        <h1 className="slide-title">
                                            {slide.title.split(" ").map((word, i, arr) =>
                                                i === arr.length - 1 ? (
                                                    <span key={i} className="highlight">
                                                        {" "}
                                                        {word}
                                                    </span>
                                                ) : (
                                                    <span key={i}> {word}</span>
                                                )
                                            )}
                                        </h1>
                                        <p className="slide-subtitle">{slide.subtitle}</p>
                                        <div className="slide-buttons">
                                            <Link href={slide.button1.href}>
                                                <button className="btn btn-primary">
                                                    {slide.button1.label}
                                                </button>
                                            </Link>
                                            <Link href={slide.button2.href}>
                                                <button className="btn btn-secondary">
                                                    {slide.button2.label}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="slider-arrow slider-arrow-prev"
                        onClick={() =>
                            setCurrentSlide(
                                (currentSlide - 1 + slides.length) % slides.length
                            )
                        }
                    >
                        ‹
                    </button>

                    <button
                        className="slider-arrow slider-arrow-next"
                        onClick={() =>
                            setCurrentSlide((currentSlide + 1) % slides.length)
                        }
                    >
                        ›
                    </button>

                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? "active" : ""}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </section>

                {/* ================= COURSE HIGHLIGHTS ================= */}
                <section className="course-highlights">
                    <div className="container">
                        <h2>Our Premier Pilot Training Programs</h2>
                        <div className="highlights-grid">
                            <div className="highlight-card">
                                <div className="highlight-icon">✈️</div>
                                <h3>Commercial Pilot License</h3>
                                <p>
                                    Dreaming of Becoming a Commercial Pilot? Get DGCA-approved
                                    training, expert mentorship and hands-on flight experience.
                                </p>
                                <Link href="/commercial-pilot-license">
                                    <button className="highlight-btn">Learn More</button>
                                </Link>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">📖</div>
                                <h3>DGCA-CPL Ground Classes</h3>
                                <p>
                                    Master Every DGCA Subject & Fly High! Our DGCA Ground Classes
                                    make learning easy & effective.
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="highlight-btn">Learn More</button>
                                </Link>
                            </div>

                            <div className="highlight-card">
                                <div className="highlight-icon">🎓</div>
                                <h3>Enroll in Flying School</h3>
                                <p>
                                    We train future pilots with state-of-the-art aircraft, expert
                                    instructors, and guaranteed career guidance.
                                </p>
                                <Link href="/dgca-ground-classes-in-india">
                                    <button className="highlight-btn">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= COURSE DETAILS ================= */}
                <section className="course-details">
                    <div className="container">
                        <h2>Course Duration, Fee & Schedule</h2>
                        <p className="section-subtitle">
                            Details of Pilot Courses, Fees and Schedule of Our Batches.
                        </p>

                        <div className="courses-grid">
                            <div className="course-card">
                                <h3>DGCA CPL Ground Classes</h3>
                                <p>
                                    Theoretical preparation for DGCA exams required to obtain a
                                    pilot's license.
                                </p>
                                <div className="course-info">
                                    <p><strong>Fees:</strong> 2.20-2.90 Lakh</p>
                                    <p><strong>Duration:</strong> 6 Months</p>
                                    <p><strong>Mode:</strong> Offline / Online</p>
                                </div>
                                <Link href="/dgca-ground-classes">
                                    <button className="highlight-btn">Explore Course</button>
                                </Link>
                            </div>

                            <div className="course-card">
                                <h3>CPL Flight Training (India / Abroad)</h3>
                                <p>
                                    After DGCA exams, complete 200 hours of flying in India or
                                    abroad.
                                </p>
                                <div className="course-info">
                                    <p><strong>Fees:</strong> 50–65 Lakh</p>
                                    <p><strong>Duration:</strong> 1–1.5 Years</p>
                                </div>
                                <Link href="/flying-schools-In-usa">
                                    <button className="highlight-btn">Explore Course</button>
                                </Link>
                            </div>

                            <div className="course-card">
                                <h3>Commercial Pilot Licence (CPL)</h3>
                                <p>
                                    Complete end-to-end CPL training including theory and flying.
                                </p>
                                <div className="course-info">
                                    <p><strong>Fees:</strong> 50–70 Lakh</p>
                                    <p><strong>Duration:</strong> 2–3 Years</p>
                                </div>
                                <Link href="/commercial-pilot-license">
                                    <button className="highlight-btn">Explore Course</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= GRADUATES ================= */}
                <section className="graduates-hired-section">
                    <div className="section-container">
                        <h2 className="section-title">
                            We Deliver 3000+ Pilots To India Since 2011
                        </h2>

                        <div className="slider-container">
                            <div className="slider-track">
                                {duplicatedCompanies.map((company, index) => (
                                    <div className="company-card" key={index}>
                                        <Image
                                            src={company.image}
                                            alt={company.name}
                                            width={150}
                                            height={80}
                                            className="company-logo"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= REVIEWS ================= */}
                <section className="review-section">
                    <div className="container">
                        <Slider />
                    </div>
                </section>

                {/* ================= DGCA SUBJECTS ================= */}
                <section className="dgca-subjects">
                    <div className="container">
                        <h2>Master Yourself For DGCA Exam With All These Subjects</h2>

                        <div className="subjects-grid">
                            <div className="subject-card">
                                <h3>1. Air Navigation</h3>
                                <p>
                                    Air Navigation is the science of safely guiding an aircraft from
                                    one point to another using various navigational aids, instruments,
                                    and calculations.
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="subject-btn">
                                        Click to explore more! 🚀
                                    </button>
                                </Link>
                            </div>

                            <div className="subject-card">
                                <h3>2. Air Regulations</h3>
                                <p>
                                    Air Regulations are the rules every pilot must follow to ensure
                                    safe and legal flying. These laws cover everything from airspace
                                    restrictions to communication protocols.
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="subject-btn">
                                        Click to find out more! ✈️
                                    </button>
                                </Link>
                            </div>

                            <div className="subject-card">
                                <h3>3. Aviation Meteorology</h3>
                                <p>
                                    Aviation Meteorology helps pilots understand weather conditions
                                    that affect flight safety and performance.
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="subject-btn">
                                        Click to explore more! 🌤️
                                    </button>
                                </Link>
                            </div>

                            <div className="subject-card">
                                <h3>4. Technical General (Aircraft & Engines)</h3>
                                <p>
                                    This subject covers the fundamental workings of aircraft and their
                                    engines, helping pilots understand how their machines operate.
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="subject-btn">
                                        Click to explore more! ⚙️
                                    </button>
                                </Link>
                            </div>

                            <div className="subject-card">
                                <h3>5. Radio Telephony (RTR)</h3>
                                <p>
                                    Radio Telephony (RTR) is the backbone of pilot communication with
                                    Air Traffic Control (ATC).
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="subject-btn">
                                        Click to explore more! 📡
                                    </button>
                                </Link>
                            </div>

                            <div className="subject-card">
                                <h3>6. Technical Specific (Type of Aircraft)</h3>
                                <p>
                                    This subject focuses on the technical details of specific aircraft
                                    models, ensuring pilots understand their assigned aircraft inside
                                    and out.
                                </p>
                                <Link href="/dgca-ground-classes">
                                    <button className="subject-btn">
                                        Click to explore more! 🛩️
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= WHY CHOOSE US ================= */}
                <section className="why-choose-us">
                    <div className="container">
                        <h2>Why Choose We One Aviation </h2>
                        <p className="section-subtitle">
                            All Your Aviation Needs Under One Roof
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>Approved Training Programs</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>Experienced Instructors & Mentors</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>State-of-the-Art Training Facilities</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>100% Placement Assistance</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>Comprehensive CPL & DGCA Ground Classes</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>Flexible Payment & Loan Options</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>Personalized Learning Approach</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>International Training Tie-Ups</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-check">✅</span>
                                <span>Proven Track Record of Success</span>
                            </div>
                        </div>

                        {/* CTA linking to about-us and contact */}
                        <div style={{ textAlign: "center", marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/about-us">
                                <button className="highlight-btn">About Us</button>
                            </Link>
                            <Link href="/components/ContactForm">
                                <button className="highlight-btn">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= FEATURES SECTION ================= */}
                <section className="features-section">
                    <div className="container">
                        <div className="features-header">
                            <h2>Why Choose Our Aviation Training?</h2>
                            <p>
                                Experience world-class pilot training with industry-leading
                                features and support
                            </p>
                        </div>

                        <div className="features-grid">
                            <Link href="/about-us" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="feature-card">
                                    <div className="feature-icon">👨‍✈️</div>
                                    <h3>Airline Instructors</h3>
                                    <p>
                                        Learn directly from experienced pilots & engineers currently
                                        active in major airlines.
                                    </p>
                                </div>
                            </Link>

                            <Link href="/components/ContactForm" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="feature-card">
                                    <div className="feature-icon">💬</div>
                                    <h3>24/7 Doubt Support</h3>
                                    <p>
                                        Get your questions answered anytime with dedicated support from
                                        our expert faculty.
                                    </p>
                                </div>
                            </Link>

                            <Link href="/dgca-ground-classes" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="feature-card">
                                    <div className="feature-icon">📊</div>
                                    <h3>Structured Curriculum</h3>
                                    <p>
                                        Master the complete DGCA syllabus with our organized,
                                        exam-focused online ground school.
                                    </p>
                                </div>
                            </Link>

                            <Link href="/dgca-ground-classes" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="feature-card">
                                    <div className="feature-icon">⏰</div>
                                    <h3>Flexible Online Classes</h3>
                                    <p>
                                        Study at your own pace with adaptable schedules fitting your
                                        personal commitments.
                                    </p>
                                </div>
                            </Link>

                            <Link href="/about-us" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="feature-card">
                                    <div className="feature-icon">📈</div>
                                    <h3>High Success Rate</h3>
                                    <p>
                                        Benefit from proven teaching methods and rigorous mock tests
                                        designed for exam success.
                                    </p>
                                </div>
                            </Link>

                            <Link href="/pilot-training" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="feature-card">
                                    <div className="feature-icon">🎯</div>
                                    <h3>Specialized Training</h3>
                                    <p>
                                        Access additional courses like RTR(A) preparation and Type
                                        Rating guidance.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= TRAINING PROGRAMS ================= */}
                <section className="training-programs">
                    <div className="container">
                        <div className="programs-header">
                            <h2>Our Core Training Programs</h2>
                            <p>
                                Expert-led online ground school and specialized preparation
                                courses designed for your success in DGCA exams and beyond.
                            </p>
                        </div>

                        <div className="programs-divider"></div>

                        <div className="programs-grid">
                            <div className="program-card">
                                <div
                                    className="program-image"
                                    style={{
                                        backgroundImage: "url(/assets/GroundSchool.jpg)",
                                    }}
                                ></div>
                                <div className="program-content">
                                    <h3>CPL & ATPL Ground School</h3>
                                    <p>
                                        Comprehensive online classes covering all DGCA subjects –
                                        Navigation, Meteorology, Regulations, and Technical.
                                    </p>
                                    <Link href="/dgca-ground-classes">
                                        <button className="learn-more-btn">Learn More</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="program-card">
                                <div
                                    className="program-image"
                                    style={{
                                        backgroundImage: "url(/assets/RTR.jpeg)",
                                    }}
                                ></div>
                                <div className="program-content">
                                    <h3>RTR(A) Radio Telephony</h3>
                                    <p>
                                        Master aviation communication protocols and prepare for the
                                        Radio Telephony Restricted (Aeronautical) license exam.
                                    </p>
                                    <Link href="/dgca-ground-classes">
                                        <button className="learn-more-btn">Learn More</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="program-card">
                                <div
                                    className="program-image"
                                    style={{
                                        backgroundImage: "url(/assets/TypeRatingPrep.jpeg)",
                                    }}
                                ></div>
                                <div className="program-content">
                                    <h3>Type Rating Prep</h3>
                                    <p>
                                        Affordable guidance for A320 & B737 pre/post type rating,
                                        covering questions for major airline exams.
                                    </p>
                                    <Link href="/pilot-training">
                                        <button className="learn-more-btn">Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <PilotStepsLoader />

                {/* ================= REVIEWS ================= */}
                <section className="review-section">
                    <div className="container">
                        <Slider />
                    </div>
                </section>
            </div>
        </>
    );
}