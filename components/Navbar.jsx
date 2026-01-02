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
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [pilotOpen, setPilotOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const closeAll = () => {
        setCoursesOpen(false);
        setPilotOpen(false);
        setServicesOpen(false);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        closeAll();
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                closeAll();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav ref={navbarRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                {/* LOGO */}
                <Link href="/" className="navbar-logo" onClick={handleLinkClick}>
                    <Image src="/Logo.webp" alt="WeOne Aviation" width={140} height={60} />
                </Link>

                {/* MENU */}
                <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link
                            href="/about-us"
                            className={`nav-link ${pathname === "/about-us" ? "active" : ""}`}
                            onClick={handleLinkClick}
                        >
                            About Us
                        </Link>
                    </li>

                    {/* PILOT TRAINING */}
                    <li className="dropdown">
                        <button className="nav-link" onClick={() => setCoursesOpen(!coursesOpen)}>
                            Pilot Training ▼
                        </button>
                        {coursesOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/commercial-pilot-license" onClick={handleLinkClick}>
                                        Commercial Pilot License
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dgca-ground-classes-in-india" onClick={handleLinkClick}>
                                        DGCA Ground Classes
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* PILOT CAREER */}
                    <li className="dropdown">
                        <button className="nav-link" onClick={() => setPilotOpen(!pilotOpen)}>
                            Pilot Career ▼
                        </button>
                        {pilotOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/dgca-computer-number" onClick={handleLinkClick}>
                                        DGCA Computer Number
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dgca-class-2-class-1-medical" onClick={handleLinkClick}>
                                        DGCA Medical
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* AVIATION SERVICES */}
                    <li className="dropdown">
                        <button className="nav-link" onClick={() => setServicesOpen(!servicesOpen)}>
                            Aviation Services ▼
                        </button>
                        {servicesOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/pilot-training" onClick={handleLinkClick}>
                                        Pilot Training Consultancy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/chartered-services" onClick={handleLinkClick}>
                                        Charter Services
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a
                            href="https://dgcaexam.com"
                            target="_blank"
                            className="nav-link"
                            rel="noopener noreferrer"
                        >
                            DGCA Prep
                        </a>
                    </li>

                    <li>
                        <Link
                            href="/blogs"
                            className={`nav-link ${pathname === "/blogs" ? "active" : ""}`}
                            onClick={handleLinkClick}
                        >
                            Blogs
                        </Link>
                    </li>
                </ul>

                {/* HAMBURGER */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </nav>
    );
}
