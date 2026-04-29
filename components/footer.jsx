"use client";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

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

                    {/* Social Media Icons — circular, icon only */}
                    <div className="footer-social">

                        <a href="https://www.facebook.com/share/1AokxHk8Yv/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            aria-label="Follow us on Facebook"
                        >
                            <FacebookIcon />
                        </a>

                        <a href="https://www.instagram.com/we_one_aviation?igsh=aTJ0YnphMGs3b2Fl&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-btn"
                            aria-label="Follow us on Instagram"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
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
                            <Link href="/contactform"><Image src="/assets/link.png" alt="" width={20} height={20} /> Contact</Link>
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

                    <a href="https://www.google.com/maps/place/We+One+Aviation+%7C+Best+Pilot+Training+in+India+%7C+DGCA+Ground+Classes/@28.5851015,77.0687024,728m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d1b17bf11e435:0x8cf5aa89eaca03cc!8m2!3d28.5850968!4d77.0712773!16s%2Fg%2F11c2k3g7f9?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/addres.png"
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