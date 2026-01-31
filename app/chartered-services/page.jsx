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
            desc: "Twin-engine turboprop ideal for short business routes with high reliability.",
            specs: "King Air B200 is a twin-engine turboprop aircraft known for reliability and versatility. It's commonly used for business travel, air ambulance, and government missions. It offers a cruise speed of ~280 knots, range around 1,800 NM, seats 6–9 passengers, and can operate from short runways, making it a trusted aircraft worldwide ✈️."
        },
        {
            name: "King Air C-90",
            image: "/king_air_c_90.jpeg",
            desc: "Compact turboprop aircraft suitable for regional charter operations.",
            specs: "King Air C90 is a light twin-engine turboprop aircraft known for efficiency, reliability, and short-runway performance. It's widely used for business travel, charter, and training. The aircraft cruises at ~250 knots, has a range of about 1,200 NM, and typically seats 5–7 passengers, making it ideal for short to mid-range flights ✈️"
        },
        {
            name: "King Air B-350",
            image: "/king_air_b_350.jpeg",
            desc: "Luxury turboprop with extended range and spacious cabin.",
            specs: "King Air B350 is a large, twin-engine turboprop aircraft known for comfort, long range, and strong performance. It's commonly used for business aviation, air ambulance, and government operations. It cruises at ~312 knots, offers a range of around 1,800 NM, seats 8–11 passengers, and performs well from short and high-altitude runways, making it one of the most capable aircraft in its class ✈️."
        },
        {
            name: "Learjet 45",
            image: "/learjet_45.jpeg",
            desc: "High-speed light business jet with stand-up cabin comfort.",
            specs: "Learjet 45 is a light business jet offering high cruise speed and efficient performance, suitable for short to mid-range routes. It typically seats 7–9 passengers and is valued for its smooth handling and quick climb capability ✈️"
        },
        {
            name: "Phenom 100",
            image: "/phenom_100.jpeg",
            desc: "Modern entry-level jet offering efficiency, comfort, and speed.",
            specs: "Phenom 100 is a modern very light jet designed for short-haul travel with low operating costs. It features advanced avionics, a comfortable cabin, and seating for 4–6 passengers, ideal for regional business trips ✈️"
        },
        {
            name: "Premier 1A",
            image: "/premier_1A.jpeg",
            desc: "Light jet with excellent climb rate and superior runway performance.",
            specs: "Premier 1A is a fast light jet with one of the widest cabins in its class. It is commonly used for corporate and charter flying, seats 6–7 passengers, and offers a good balance of speed and cabin comfort ✈️"
        },
        {
            name: "Pilatus PC 12/47",
            image: "/pilatus_pc_1247.jpeg",
            desc: "Single-engine turboprop known for safety and versatility.",
            specs: "Pilatus PC-12/47 is a highly versatile single-engine turboprop known for short and unpaved runway operations. It is widely used for business travel, cargo transport, and air ambulance missions, with a spacious and adaptable cabin ✈️"
        },
        {
            name: "CRJ 100",
            image: "/crj_100.jpeg",
            desc: "Regional jet ideal for group and corporate charter travel.",
            specs: "CRJ 100 is a regional jet aircraft designed for airline operations, typically configured for 50 passengers. It is optimized for short-haul commercial routes and known for its reliability in regional airline service ✈️"
        },
        {
            name: "Citation 560XLS",
            image: "/citation_560_xls.jpeg",
            desc: "Midsize jet with long range and wide-cabin comfort.",
            specs: "Citation 560 XLS is a popular mid-size business jet offering excellent range, fuel efficiency, and passenger comfort. It features a stand-up cabin for most passengers and is widely used for corporate and charter flights ✈️"
        },
        {
            name: "Challenger 604",
            image: "/challenger_604.jpeg",
            desc: "Large-cabin business jet designed for long-haul executive travel.",
            specs: "Challenger 604 is a large-cabin, long-range jet designed for intercontinental and transcontinental travel. It offers a spacious, quiet cabin, high payload capability, and is commonly used for VIP, corporate, and government missions ✈️"
        },
        {
            name: "Hawker 750 / 850 / 900",
            image: "/hawker_750_850_900.jpeg",
            desc: "Reliable midsize jets well known for comfort and performance.",
            specs: "Hawker 750 / 850 / 900 family consists of mid-size business jets known for solid performance, dependable systems, and comfortable cabins. They are widely used in charter and corporate aviation for regional and continental routes ✈️"
        },
        {
            name: "Air Ambulance",
            image: "/air_ambulance.jpeg",
            desc: "Fully equipped medical aircraft for emergency patient transfers.",
            specs: "Air Ambulance aircraft are specially equipped for medical evacuation and patient transfer, fitted with stretchers, oxygen systems, monitors, and life-support equipment, operated with trained medical staff for critical and non-critical patient transport ✈️"
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
                                {selectedAircraft.specs && (
                                    <>
                                        {typeof selectedAircraft.specs === 'string' ? (
                                            <p className="aircraft-specs">{selectedAircraft.specs}</p>
                                        ) : (
                                            <div className="aircraft-specs">
                                                {selectedAircraft.specs.intro && (
                                                    <p><strong>Overview:</strong> {selectedAircraft.specs.intro}</p>
                                                )}
                                                {selectedAircraft.specs.highlights && (
                                                    <div>
                                                        <strong>Highlights:</strong>
                                                        <ul>
                                                            {selectedAircraft.specs.highlights.map((h, idx) => (
                                                                <li key={idx}>{h}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                {selectedAircraft.specs.whyPopular && (
                                                    <p><strong>Why Popular:</strong> {selectedAircraft.specs.whyPopular}</p>
                                                )}
                                                {selectedAircraft.specs.summary && (
                                                    <p><strong>Summary:</strong> {selectedAircraft.specs.summary}</p>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
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
