import "./style.css";

const DynamicPage = ({ data }) => {
    if (!data) return null;

    return (
        <div className="dynamic-page">

            {/* ---------------- HEADER ---------------- */}
            {data.header && (
                <header className="dynamic-header">
                    <div className="header-overlay">
                        <h1>{data.header.title}</h1>
                        {data.header.subtitle && <p>{data.header.subtitle}</p>}
                    </div>
                </header>
            )}

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="dynamic-content">
                {Array.isArray(data.sections) &&
                    data.sections.map((section, index) => (
                        <section key={index} className="dynamic-section card">

                            {section.title && <h2>{section.title}</h2>}

                            {section.description && (
                                <p className="section-desc">{section.description}</p>
                            )}

                            {/* SECTION LEVEL TABLE */}
                            {section.table &&
                                Array.isArray(section.table.headers) &&
                                Array.isArray(section.table.rows) && (
                                    <div className="table-wrapper">
                                        <table className="dynamic-table">
                                            <thead>
                                                <tr>
                                                    {section.table.headers.map((head, h) => (
                                                        <th key={h}>{head}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.table.rows.map((row, r) => (
                                                    <tr key={r}>
                                                        {row.map((cell, c) => (
                                                            <td key={c}>{cell}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                            {Array.isArray(section.subsections) &&
                                section.subsections.map((sub, i) => (
                                    <div key={i} className="dynamic-subsection">

                                        {/* Sub Heading */}
                                        {sub.heading && <h3>{sub.heading}</h3>}

                                        {/* Sub Description */}
                                        {sub.description && (
                                            <p className="sub-desc">{sub.description}</p>
                                        )}

                                        {/* ---------------- LIST (STRING + OBJECT SAFE) ---------------- */}
                                        {Array.isArray(sub.list) && (
                                            <ul className="styled-list">
                                                {sub.list.map((item, j) => (
                                                    <li key={j}>

                                                        {/* STRING ITEM */}
                                                        {typeof item === "string" && item}

                                                        {/* OBJECT ITEM */}
                                                        {typeof item === "object" && item !== null && (
                                                            <div className="list-object">

                                                                {item.title && (
                                                                    <strong className="list-title">
                                                                        {item.title}
                                                                    </strong>
                                                                )}

                                                                {item.description && (
                                                                    <p className="list-desc">
                                                                        {item.description}
                                                                    </p>
                                                                )}

                                                                {/* LINKS */}
                                                                {Array.isArray(item.links) && (
                                                                    <ul className="nested-links">
                                                                        {item.links.map((link, k) => (
                                                                            <li key={k}>
                                                                                <a
                                                                                    href={link.url}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                >
                                                                                    {link.label}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}

                                                                {/* STEPS */}
                                                                {Array.isArray(item.steps) && (
                                                                    <ol className="nested-steps">
                                                                        {item.steps.map((step, s) => (
                                                                            <li key={s}>{step}</li>
                                                                        ))}
                                                                    </ol>
                                                                )}

                                                                {/* SMS FORMAT */}
                                                                {item.format && (
                                                                    <p>
                                                                        <strong>Format:</strong> {item.format}
                                                                    </p>
                                                                )}

                                                                {item.example && (
                                                                    <p>
                                                                        <strong>Example:</strong> {item.example}
                                                                    </p>
                                                                )}

                                                                {item.number && (
                                                                    <p>
                                                                        <strong>Send to:</strong> {item.number}
                                                                    </p>
                                                                )}

                                                                {/* SINGLE LINK */}
                                                                {item.link && (
                                                                    <p>
                                                                        <a
                                                                            href={item.link.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            {item.link.label}
                                                                        </a>
                                                                    </p>
                                                                )}

                                                            </div>
                                                        )}

                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* ---------------- TABLE ---------------- */}
                                        {sub.table &&
                                            Array.isArray(sub.table.headers) &&
                                            Array.isArray(sub.table.rows) && (
                                                <div className="table-wrapper">
                                                    <table className="dynamic-table">
                                                        <thead>
                                                            <tr>
                                                                {sub.table.headers.map((head, h) => (
                                                                    <th key={h}>{head}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {sub.table.rows.map((row, r) => (
                                                                <tr key={r}>
                                                                    {row.map((cell, c) => (
                                                                        <td key={c}>{cell}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                    </div>
                                ))}
                        </section>
                    ))}
            </main>

            {/* ---------------- FOOTER ---------------- */}
            {data.footer && (
                <footer className="dynamic-footer">
                    <p>{data.footer.text}</p>
                </footer>
            )}

        </div>
    );
};

export default DynamicPage;
