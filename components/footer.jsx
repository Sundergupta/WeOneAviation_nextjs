"use client";

import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* COLUMN 1 */}
                <div className="footer-col">
                    <h3 className="footer-title">We One Aviation</h3>
                    <p className="footer-desc">
                        We One Aviation is a leading pilot training academy dedicated to helping
                        aspiring aviators build successful careers. CPL training, international
                        flight programs, expert mentorship, and placement support.
                    </p>
                </div>

                {/* COLUMN 2 */}
                <div className="footer-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link href="/"><Image src="/assets/link.png" alt="" width={20} height={20} /> Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us"><Image src="/assets/link.png" alt="" width={20} height={20} /> About Us</Link>
                        </li>
                        <li>
                            <Link href="/commercial-pilot-license"><Image src="/assets/link.png" alt="" width={20} height={20} /> Training Programs</Link>
                        </li>
                        <li>
                            <Link href="/blogs"><Image src="/assets/link.png" alt="" width={20} height={20} /> Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact-us"><Image src="/assets/link.png" alt="" width={20} height={20} /> Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div className="footer-col">
                    <h3 className="footer-title">How to reach us?</h3>
                    <ul className="footer-links">
                        <li>
                            <Image src="/assets/location.png" alt="" width={20} height={20} />
                            C-404, 3rd Floor, Near Ramphal Chowk
                        </li>
                        <li>Sector-7, Dwarka, New Delhi - 110075</li>
                        <li>
                            <Image src="/assets/Call.png" alt="" width={20} height={20} />
                            +91-9355611996
                        </li>
                        <li>
                            <Image src="/assets/Call.png" alt="" width={20} height={20} />
                            +91-9355566991
                        </li>
                        <li>
                            <Image src="/assets/Email.png" alt="" width={20} height={20} />
                            weoneaviation8@gmail.com
                        </li>
                    </ul>
                </div>

                {/* COLUMN 4 */}
                <div className="footer-col">
                    <h3 className="footer-title">Our Location</h3>
                    <a
                        href="https://www.google.com/maps?q=C-404,+3rd+Floor,+Near+Ramphal+Chowk,+Sector-7,+Dwarka,+New+Delhi+-+110075"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/adress.png"
                            alt="Our Location"
                            width={250}
                            height={180}
                            className="map-image"
                        />
                    </a>
                </div>

            </div>
        </footer>
    );
}
