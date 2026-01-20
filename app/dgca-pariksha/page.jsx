import "./style.css";

export const metadata = {
    title: "DGCA Pariksha – Eligibility, Syllabus, Exam Pattern & Preparation",
    description:
        "Complete guide for DGCA Pariksha – eligibility, syllabus, exam pattern, preparation tips, computer number & FAQs.",
};

const toc = [
    { id: "intro", label: "DGCA Pariksha" },
    { id: "mock", label: "CPL & ATPL Mock Test" },
    { id: "what", label: "What is DGCA Pariksha?" },
    { id: "why", label: "Why DGCA Pariksha Important?" },
    { id: "details", label: "Key Details" },
    { id: "eligibility", label: "Eligibility Criteria" },
    { id: "syllabus", label: "Syllabus" },
    { id: "pattern", label: "Exam Pattern" },
    { id: "apply", label: "How to Apply" },
    { id: "tips", label: "Preparation Tips" },
    { id: "faqs", label: "FAQs" },
];

export default function DgcaParikshaPage() {
    return (
        <main className="dgca-layout">
            {/* Sidebar */}
            <nav className="dgca-sidebar" aria-label="Table of contents">
                <h3>On This Page</h3>
                <ul>
                    {toc.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content */}
            <article className="dgca-content">
                <section id="intro">
                    <h1>DGCA Pariksha</h1>
                    <p>
                        DGCA Pariksha is a mandatory examination for aspiring pilots in India,
                        conducted by the Directorate General of Civil Aviation to ensure
                        aviation safety and regulatory knowledge.
                    </p>
                </section>

                <section id="mock">
                    <h2>CPL & ATPL Mock Test Series</h2>
                    <p>
                        Prepare using DGCA-aligned mock tests with real exam-level questions.
                    </p>
                    <button className="dgca-btn">Start Practice</button>
                </section>

                <section id="what">
                    <h2>What is DGCA Pariksha?</h2>
                    <p>
                        It includes multiple theory exams required for CPL, PPL, IR, and
                        FRTOL licenses in India.
                    </p>
                </section>

                <section id="why">
                    <h2>Why DGCA Pariksha Important?</h2>
                    <p>
                        Passing DGCA exams proves pilot competency in aviation regulations
                        and flight safety.
                    </p>
                </section>

                <section id="details">
                    <h2>Key Details</h2>
                    <ul>
                        <li>Conducted by DGCA</li>
                        <li>Online CBT mode</li>
                        <li>3–4 sessions yearly</li>
                        <li>Passing marks: 70%</li>
                    </ul>
                </section>

                <section id="eligibility">
                    <h2>Eligibility Criteria</h2>
                    <ul>
                        <li>Age: 17 (PPL), 18 (CPL)</li>
                        <li>10+2 with Physics & Maths</li>
                        <li>DGCA Medical Class 1 / 2</li>
                    </ul>
                </section>

                <section id="syllabus">
                    <h2>Syllabus</h2>
                    <p>Air Navigation, Air Regulations, Meteorology, Technical Subjects.</p>
                </section>

                <section id="pattern">
                    <h2>Exam Pattern</h2>
                    <ul>
                        <li>MCQ-based CBT</li>
                        <li>70% passing score</li>
                    </ul>
                </section>

                <section id="apply">
                    <h2>How to Apply</h2>
                    <ol>
                        <li>Create DGCA portal account</li>
                        <li>Apply for Computer Number</li>
                        <li>Choose subjects</li>
                        <li>Pay fees</li>
                    </ol>
                </section>

                <section id="tips">
                    <h2>Preparation Tips</h2>
                    <ul>
                        <li>Study DGCA books</li>
                        <li>Practice mock tests</li>
                        <li>Revise regularly</li>
                    </ul>
                </section>

                <section id="faqs">
                    <h2>FAQs</h2>
                    <p>Prepare consistently for success.</p>
                </section>
            </article>
        </main>
    );
}
