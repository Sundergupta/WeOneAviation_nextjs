"use client";

import { useState } from "react";
import "./style.css";

const Tag = ({ text }) => <span className="tag">{text}</span>;

export default function CharteredServices() {
    const [selectedAircraft, setSelectedAircraft] = useState(null);

    const aircrafts = [
        {
            name: "King Air B200",
            image: "/king_air_b200.jpeg",
            desc: "Twin-engine turboprop ideal for short business routes with high reliability."
        },
        {
            name: "King Air C-90",
            image: "/king_air_c_90.jpeg",
            desc: "Compact turboprop aircraft suitable for regional charter operations."
        },
        {
            name: "King Air B-350",
            image: "/king_air_b_350.jpeg",
            desc: "Luxury turboprop with extended range and spacious cabin."
        },
        {
            name: "Learjet 45",
            image: "/learjet_45.jpeg",
            desc: "High-speed light business jet with stand-up cabin comfort."
        },
        {
            name: "Phenom 100",
            image: "/phenom_100.jpeg",
            desc: "Modern entry-level jet offering efficiency, comfort, and speed."
        },
        {
            name: "Premier 1A",
            image: "/premier_1A.jpeg",
            desc: "Light jet with excellent climb rate and superior runway performance."
        },
        {
            name: "Pilatus PC 12/47",
            image: "/pilatus_pc_1247.jpeg",
            desc: "Single-engine turboprop known for safety and versatility."
        },
        {
            name: "CRJ 100",
            image: "/crj_100.jpeg",
            desc: "Regional jet ideal for group and corporate charter travel."
        },
        {
            name: "Citation 560XLS",
            image: "/citation_560_xls.jpeg",
            desc: "Midsize jet with long range and wide-cabin comfort."
        },
        {
            name: "Challenger 604",
            image: "/challenger_604.jpeg",
            desc: "Large-cabin business jet designed for long-haul executive travel."
        },
        {
            name: "Hawker 750 / 850 / 900",
            image: "/hawker_750_850_900.jpeg",
            desc: "Reliable midsize jets well known for comfort and performance."
        },
        {
            name: "Air Ambulance",
            image: "/air_ambulance.jpeg",
            desc: "Fully equipped medical aircraft for emergency patient transfers."
        }
    ];

    return (
        <div className="cs-page">
            {/* HERO */}
            <section className="hero">
                <div className="hero-left">
                    <nav className="breadcrumb">
                        <span>Home</span> <span className="sep">/</span>
                        <strong>Chartered Services</strong>
                    </nav>

                    <h1 className="title">Chartered Services</h1>

                    <p className="hero-sub">
                        In Dwarka, Delhi, book your Private Charter aircraft. Pilot with
                        government authorisation and expertise.
                    </p>

                    <div className="hero-cta">
                        <button className="btn primary">ENQUIRE NOW</button>
                        <a className="btn ghost" href="#more">
                            Click to know more
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="content" id="more">
                <article className="lead">
                    {/* ===== ABOUT SECTION (UNCHANGED) ===== */}
                    <h2 className="section-heading">About Our Charter Services</h2>

                    <p>
                        In Delhi, FLY SPACE offers private jets for individuals or businesses
                        — available 24/7. We provide luxury private jet and helicopter
                        services across India. Established in 2014, with over 18 years in Air
                        Charters, we ensure your business travel needs are met efficiently.
                    </p>

                    <p>
                        The management team, comprised of experienced and highly skilled
                        personnel, has created efficient processes that streamline
                        chartering services. FLY SPACE operates in-house air operations,
                        engineering, and maintenance, supported by qualified pilots and a
                        motivated ground handling crew.
                    </p>

                    <p className="emph">
                        Call immediately for low-cost private jets, business, or corporate
                        air jet fleets — tailored to your requirements.
                    </p>

                    {/* ===== FLEET SECTION ===== */}
                    <h2 className="section-heading" style={{ marginTop: "1.5rem" }}>
                        Our Charter Aircraft Fleet
                    </h2>

                    <div className="fleet-layout">
                        <ul className="offer-list clickable">
                            {aircrafts.map((aircraft, i) => (
                                <li
                                    key={i}
                                    onClick={() => setSelectedAircraft(aircraft)}
                                    className={
                                        selectedAircraft?.name === aircraft.name ? "active" : ""
                                    }
                                >
                                    {aircraft.name}
                                </li>
                            ))}
                        </ul>

                        {selectedAircraft ? (
                            <div className="aircraft-card">
                                <img
                                    src={selectedAircraft.image}
                                    alt={selectedAircraft.name}
                                    className="aircraft-image"
                                />
                                <h3>{selectedAircraft.name}</h3>
                                <p>{selectedAircraft.desc}</p>
                            </div>
                        ) : (
                            <div className="aircraft-placeholder">
                                Select an aircraft to view image & details
                            </div>
                        )}
                    </div>
                </article>

                {/* SIDEBAR */}
                <aside className="sidebar">
                    <div className="contact-card">
                        <h3>Contact Us to Know More</h3>
                        <p>
                            Reach out for private jet booking and charter service information.
                        </p>
                        <a className="btn primary full" href="/contact">
                            Contact Us
                        </a>
                    </div>

                    <div className="tags-card">
                        <h4>Tags</h4>
                        <div className="tags">
                            {["private jet", "air charter", "business jet", "delhi"].map(
                                (t, i) => (
                                    <Tag key={i} text={t} />
                                )
                            )}
                        </div>
                    </div>
                </aside>
            </main>

            {/* FOOTER */}
            <footer className="footer">
                <div>
                    <strong>Fly Space Delhi Aviation</strong> — Private jet and charter
                    excellence since 2014.
                </div>
                <div className="small">© {new Date().getFullYear()} Fly Space</div>
            </footer>
        </div>
    );
}
