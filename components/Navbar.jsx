"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
    const navbarRef = useRef(null);
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [pilotOpen, setPilotOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        closeAllDropdowns();
    };

    const closeMenu = () => setIsOpen(false);

    const closeAllDropdowns = () => {
        setPilotOpen(false);
        setCoursesOpen(false);
        setServicesOpen(false);
        setActiveSubmenuIndex(null);
    };

    const toggleDropdown = (setter, state) => {
        closeAllDropdowns();
        setter(!state);
        if (isOpen) setIsOpen(true);
    };

    const handleSubmenuClick = (index) => {
        setActiveSubmenuIndex(activeSubmenuIndex === index ? null : index);
    };

    const handleLinkClick = () => {
        closeMenu();
        closeAllDropdowns();
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleOutside = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                if (!isOpen) closeAllDropdowns();
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [isOpen]);

    const isActive = (path) => pathname === path;

    const coursesData = [
        {
            title: "Commercial Pilot License (CPL)",
            submenu: [
                { name: "Commercial Pilot License", path: "/commercial-pilot-license" },
                { name: "DGCA CPL Ground Classes", path: "/dgca-ground-classes-in-india" },
                { name: "Air Navigation", path: "/air-navigation" },
                { name: "Aviation Meteorology", path: "/aviation-meteorology" },
                { name: "Air Regulations", path: "/air-regulations" },
                { name: "Technical General", path: "/technical-general" },
                { name: "RTR (A)", path: "/rtr-a" },
                { name: "CPL Simulator", path: "/cpl-simulator" },
            ],
        },
        {
            title: "Airline Preparatory Classes",
            path: "/airline-preparatory-classes",
            submenu: [
                { name: "Interview Preparation", path: "/interview-preparation" },
                { name: "Simulator Assessment", path: "/simulator-assessment" },
                { name: "Psychometric Testing", path: "/psychometric-testing" },
                { name: "Group Exercises", path: "/group-exercises" },
                { name: "Technical Knowledge", path: "/technical-knowledge" },
                { name: "CRM Training", path: "/crm-training" }
            ]
        }
    ];

    const servicesData = [
        { name: "Pilot Training Consultancy", path: "/pilot-training" },
        { name: "Charter Services", path: "/chartered-services" },
        { name: "Aircraft Sale & Purchase", path: "/aircraft-sale-purchase" },
        { name: "Airport Ground Handling", path: "/airport-ground-handling-service" },
        { name: "Aviation Placement", path: "/aviation-placement-service" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navbarRef}>
            <div className="navbar-container">
                {/* LOGO */}
                <div className="navbar-logo">
                    <Link href="/" onClick={handleLinkClick}>
                        <Image
                            src="/assets/Logo.webp"
                            alt="We One Aviation"
                            width={150}
                            height={65}
                            priority
                        />

                    </Link>
                </div>

                {/* MENU */}
                <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    <li className="navbar-item">
                        <Link
                            href="/about-us"
                            className={`navbar-link ${isActive("/about-us") ? "active-link" : ""}`}
                            onClick={handleLinkClick}
                        >
                            About Us
                        </Link>
                    </li>

                    {/* PILOT TRAINING */}
                    <li className="navbar-item dropdown-parent">
                        <span
                            className="navbar-link dropdown-btn"
                            onClick={() => toggleDropdown(setCoursesOpen, coursesOpen)}
                        >
                            Pilot Training ▼
                        </span>

                        <ul className={`dropdown-menu ${coursesOpen ? "active" : ""}`}>
                            {coursesData.map((course, index) => (
                                <li
                                    key={index}
                                    className={`dropdown-item-with-submenu ${activeSubmenuIndex === index ? "active" : ""
                                        }`}
                                >
                                    <span
                                        className="dropdown-link has-submenu"
                                        onClick={() => handleSubmenuClick(index)}
                                    >
                                        {course.title} →
                                    </span>

                                    <ul
                                        className={`sub-dropdown-menu ${activeSubmenuIndex === index ? "active" : ""
                                            }`}
                                    >
                                        {course.submenu.map((item, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={item.path}
                                                    className="sub-dropdown-link"
                                                    onClick={handleLinkClick}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* PILOT CAREER */}
                    <li className="navbar-item dropdown-parent">
                        <span
                            className="navbar-link dropdown-btn"
                            onClick={() => toggleDropdown(setPilotOpen, pilotOpen)}
                        >
                            Pilot Career ▼
                        </span>

                        <ul className={`dropdown-menu ${pilotOpen ? "active" : ""}`}>
                            <li>
                                <Link href="/dgca-computer-number" className="dropdown-link">
                                    Apply For DGCA Computer Number
                                </Link>
                            </li>
                            <li>
                                <Link href="/dgca-medical" className="dropdown-link">
                                    DGCA Class 1 & 2 Medical
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* AVIATION SERVICES */}
                    <li className="navbar-item dropdown-parent">
                        <span
                            className="navbar-link dropdown-btn"
                            onClick={() => toggleDropdown(setServicesOpen, servicesOpen)}
                        >
                            Aviation Services ▼
                        </span>

                        <ul className={`dropdown-menu ${servicesOpen ? "active" : ""}`}>
                            {servicesData.map((s, i) => (
                                <li key={i}>
                                    <Link href={s.path} className="dropdown-link">
                                        {s.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="navbar-item">
                        <a
                            href="https://dgcaexam.com/"
                            className="navbar-link"
                            target="_blank"
                        >
                            DGCA Prep
                        </a>
                    </li>

                    <li className="navbar-item">
                        <Link
                            href="/blogs"
                            className={`navbar-link ${isActive("/blogs") ? "active-link" : ""}`}
                        >
                            Blogs
                        </Link>
                    </li>
                </ul>

                {/* HAMBURGER */}
                <div
                    className={`navbar-toggle ${isOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </div>
            </div>
        </nav>
    );
}
