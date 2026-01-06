import Link from "next/link";
import "./style.css";

export default function StructurePage({ data }) {
    if (!data) {
        return <p className="no-data">No data found</p>;
    }

    return (
        <div className="page-container">
            {/* HERO */}
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${data.hero.background})` }}
            >
                <h1>{data.hero.title}</h1>
                <p>{data.hero.subtitle}</p>
            </section>

            <div className="main-layout">
                {/* LEFT MENU */}
                <aside className="menu-section">
                    <h3>Pilot Training States</h3>
                    <ul>
                        {data.menu.map((item, i) => (
                            <li key={i}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* CONTENT */}
                <main className="content-section">
                    {data.sections.map((section, i) => (
                        <section key={i} className="section-block">
                            <h2>{section.title}</h2>

                            {section.paragraphs?.map((p, j) => (
                                <p key={j}>{p}</p>
                            ))}

                            {section.list && (
                                <ul>
                                    {section.list.map((item, k) => (
                                        <li key={k}>
                                            <strong>{item.title}:</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
}
