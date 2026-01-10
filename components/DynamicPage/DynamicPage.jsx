import styles from "./DynamicPage.module.css";

export default function DynamicPage({ data }) {
    return (
        <div className={styles.dynamicPage}>

            {/* ---------- HEADER ---------- */}
            {data.header && (
                <header className={styles.dynamicHeader}>
                    <div className={styles.headerOverlay}>
                        <h1>{data.header.title}</h1>
                        <p>{data.header.subtitle}</p>
                    </div>
                </header>
            )}

            {/* ---------- CONTENT ---------- */}
            <main className={styles.dynamicContent}>
                {data.sections?.map((section, index) => (
                    <section key={index} className={`${styles.card} ${styles.dynamicSection}`}>
                        <h2>{section.title}</h2>

                        {section.description && (
                            <p className={styles.sectionDesc}>{section.description}</p>
                        )}

                        {section.subsections?.map((sub, i) => (
                            <div key={i} className={styles.dynamicSubsection}>
                                {sub.heading && <h3>{sub.heading}</h3>}

                                {sub.list && (
                                    <ul className={styles.styledList}>
                                        {sub.list.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {sub.table && (
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.dynamicTable}>
                                            <thead>
                                                <tr>
                                                    {sub.table.headers.map((h, k) => (
                                                        <th key={k}>{h}</th>
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
        </div>
    );
}
