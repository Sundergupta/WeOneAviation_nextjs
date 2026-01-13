import Image from "next/image";
import "./style.css";

const blogs = [
    {
        id: 1,
        category: "Flight Simulator",
        title: "Pilot Training in Delhi",
        image: "/assets/GroundSchool.jpg",
        duration: "08 hr 12 mins",

        date: "February 13, 2025",
        description:
            "DGCA PRACTICE PAPER   Pilot Training in Delhi Private Pilot License (PPL) Course Fees Full Form of CPL | Commercial...",
        comments: 0,
    },
    {
        id: 2,
        category: "PPL",
        title: "Private Pilot License (PPL) Course Fees",
        image: "/assets/about2.webp",
        duration: "06 hr 3 mins",

        date: "February 10, 2025",
        description:
            "Enroll In Our Private Pilot License Course Private Pilot License (PPL) Course Fees-2025 If Your Dream To Become a Pilot....",
        comments: 0,
    },
    {
        id: 3,
        category: "CPL",
        title: "Full Form of CPL | Commercial Pilot License",
        image: "/assets/TypeRatingPrep.jpeg",
        duration: "01 hr 2 mins",

        date: "January 28, 2025",
        description:
            "CPL Full Form: Meaning in Aviation, Cricket, Marketing, and More Have you ever come across the term CPL and wondered what...",
        comments: 1,
    },
    {
        id: 4,
        category: "DGCA",
        title:
            "Master the DGCA CPL Exam: Complete Guide to Syllabus, Subjects, and Success Tips",
        image: "/assets/GroundSchool.jpg",
        duration: "05 hr 10 mins",

        date: "January 21, 2025",
        description:
            "Detailed DGCA Exam Subjects covering Principles of Flight, Navigation, Meteorology, and more...",
        comments: 0,
    },
    {
        id: 5,
        category: "Aviation",
        title: "Aviation Course After 12th: Detailed Fees and Admission Guide",
        image: "/assets/about2.webp",
        duration: "04 hr 20 mins",
        // author: "admin",
        date: "January 2, 2025",
        description:
            "Student pursuing an aviation course after 12th with detailed fee structure and career opportunities...",
        comments: 0,
    },
];

export default function BlogsPage() {
    return (
        <section className="programs-section">
            {/* PAGE HEADER */}
            <div className="blogs-header">
                <h1>Our Latest Blogs</h1>
                <p>
                    Welcome to the newest blog page of <strong>WeOne Aviation</strong>! As a
                    leading name in the aviation training industry, WeOne Aviation is
                    committed to providing aspiring pilots with the knowledge, skills, and
                    experiences needed to excel in the skies. Our blog is your go-to
                    resource for the latest news, insights, and updates in the world of
                    aviation. Here, you’ll find expert advice, success stories from our
                    graduates, and detailed information on our innovative training
                    programs. Join us as we explore the fascinating world of aviation and
                    guide you on your journey to becoming a top-notch pilot. Fly high with
                    WeOne Aviation!
                </p>
            </div>
            <br />

            {/* BLOG GRID */}
            <div className="programs-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="program-card">
                        {/* IMAGE */}
                        <div className="program-image">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={260}
                            />
                            <span className="duration-badge">⏱ {blog.duration}</span>
                        </div>

                        {/* CONTENT */}
                        <div className="program-content">
                            <span className="category">{blog.category}</span>

                            <h3 className="program-title">{blog.title}</h3>

                            <div className="meta">
                                {/* <span>👤 {blog.author}</span> */}
                                <span>📅 {blog.date}</span>
                            </div>

                            <p className="program-desc">{blog.description}</p>

                            <div className="program-footer">
                                <span className="comments">💬 {blog.comments}</span>
                                <a href="https://weoneaviation.in/pilot-training-in-delhi" className="read-more">
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
