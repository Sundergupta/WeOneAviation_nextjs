import "./style.css";
import Image from "next/image";

export const metadata = {
    title: "Aircraft Sale & Purchase – Buying & Advisory Services",
    description:
        "Professional aircraft sale and purchase advisory services for new and used aircraft with complete end-to-end support.",
};

export default function AircraftSalePurchase() {
    return (
        <div className="aircraft-page">

            {/* Breadcrumb */}
            <nav className="breadcrumb">
                Home <span>/</span> Aircraft Sale & Purchase
            </nav>

            {/* Header */}
            <section className="header-section">
                <div>
                    <h1>Aircraft Sale & Purchase</h1>
                    <p>End-to-End Advisory for New & Used Aircraft</p>
                </div>
                <button className="enquire-btn">Enquire Now</button>
            </section>

            {/* Images */}
            <section className="image-section">
                <div className="image-box">
                    <Image
                        src="/assets/Aircraft/aircraft (2).png"
                        alt="Aircraft Sale Purchase Services"
                        fill
                        className="image"
                        priority
                    />
                </div>

                <div className="image-box">
                    <Image
                        src="/assets/Aircraft/aircraft.png"
                        alt="Aircraft Buying Advisory"
                        fill
                        className="image"
                        priority
                    />
                </div>
            </section>

            {/* Content */}
            <section className="content-section">
                <p>
                    <strong>FLY SPACE</strong> has a proven track record of advising clients through the
                    complete aircraft purchase process for both new and pre-owned aircraft.
                </p>

                <p>
                    We conduct detailed consultations to identify the most suitable aircraft
                    category based on:
                </p>

                <ul>
                    <li>Price & age</li>
                    <li>Cabin size & layout</li>
                    <li>Payload & range</li>
                    <li>Runway performance</li>
                    <li>Residual value</li>
                    <li>Crew requirements</li>
                </ul>

                <p>
                    We assist with budgeting, aircraft shortlisting, physical inspections,
                    negotiations, legal documentation, and pre-purchase surveys.
                </p>

                <p>
                    Post-purchase, we manage registration, title verification, delivery,
                    and import/export formalities to ensure smooth aircraft induction.
                </p>

                <h2>Popular Aircraft Options</h2>
                <ul className="aircraft-list">
                    <li>King Air B200 / C-90 / B-350</li>
                    <li>Learjet 45</li>
                    <li>Phenom 100</li>
                    <li>Pilatus PC-12</li>
                    <li>CRJ 100</li>
                    <li>Citation XLS</li>
                    <li>Challenger 604</li>
                    <li>ATR 42 / 72-600</li>
                    <li>Airbus A320</li>
                    <li>Boeing 737</li>
                </ul>
            </section>

            {/* Related Services */}
            <section className="related-section">
                <h2>Related Services</h2>

                <div className="related-cards">
                    <div className="card">
                        <h3>Pilot Training</h3>
                        <p>Customized crew training programs tailored to operational needs.</p>
                        <button>Learn More</button>
                    </div>

                    <div className="card">
                        <h3>Charter Services</h3>
                        <p>Government-approved private charter aircraft with expert pilots.</p>
                        <button>Learn More</button>
                    </div>

                    <div className="card">
                        <h3>Aviation Placement</h3>
                        <p>Career assistance and placement support for aviation professionals.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="contact-section">
                <h2>Chat with us on WhatsApp</h2>
                <input type="text" placeholder="Your Phone Number" />
                <textarea placeholder="Write your message here"></textarea>
                <button className="contact-btn">Contact Us</button>
            </section>

        </div>
    );
}
