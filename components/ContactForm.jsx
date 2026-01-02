"use client";

import { useState } from "react";
import "./ContactQuery.css";

export default function ContactForm({ onClose }) {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("✅ Form submitted successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus(data.message || "❌ Submission failed");
            }
        } catch {
            setStatus("❌ Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-overlay" onClick={onClose}>
            <div className="contact-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <h2>Contact Us</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                    {status && <p className="form-status">{status}</p>}
                </form>
            </div>
        </div>
    );
}
