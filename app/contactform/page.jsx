"use client";

import { useState, useRef } from "react";

const FIELDS = [
    {
        id: "name",
        label: "Full name",
        type: "text",
        placeholder: "John Smith",
        validate: (v) => v.trim().length > 1,
        error: "Please enter your name",
        icon: (
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "email",
        label: "Email address",
        type: "email",
        placeholder: "john@example.com",
        validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        error: "Please enter a valid email",
        icon: (
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "phone",
        label: "Phone number",
        type: "tel",
        placeholder: "+91 98765 43210",
        validate: (v) => v.trim().length > 7,
        error: "Please enter your phone number",
        icon: (
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.042 11.042 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
    const [focused, setFocused] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const formRef = useRef(null);

    const handleChange = (id, val) => {
        setValues((v) => ({ ...v, [id]: val }));
        if (errors[id]) setErrors((e) => ({ ...e, [id]: false }));
    };

    const getBarWidth = (id) => {
        const v = values[id] || "";
        if (!v.length) return "0%";
        const max = id === "message" ? 80 : 30;
        return Math.min(100, Math.round((v.length / max) * 100)) + "%";
    };

    const isValid = (id) => {
        const f = FIELDS.find((f) => f.id === id);
        if (f) return f.validate(values[id]);
        return (values.message || "").trim().length > 4;
    };

    const barColor = (id) => (isValid(id) ? "#16a34a" : "#0b63d6");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        [...FIELDS, { id: "message", validate: (v) => v.trim().length > 4 }].forEach(({ id, validate }) => {
            if (!validate(values[id] || "")) newErrors[id] = true;
        });
        if (Object.keys(newErrors).length) { setErrors(newErrors); return; }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await res.json();
            if (data.success) setSuccess(true);
        } catch {
            // handle silently — you can add error toast here
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setValues({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setSuccess(false);
    };

    return (
        <>
            <style>{`
        @keyframes cp-fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cp-slideIn { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
        @keyframes cp-spin { to{transform:rotate(360deg)} }
        @keyframes cp-pulse { 0%,100%{opacity:1} 50%{opacity:.45} }
        @keyframes cp-checkPop { 0%{transform:scale(0) rotate(-10deg);opacity:0} 70%{transform:scale(1.15) rotate(3deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
        .cp-card { animation: cp-fadeUp .45s cubic-bezier(.22,.68,0,1.2) both; }
        .cp-field-0 { animation: cp-fadeUp .35s .25s both; }
        .cp-field-1 { animation: cp-fadeUp .35s .32s both; }
        .cp-field-2 { animation: cp-fadeUp .35s .39s both; }
        .cp-field-3 { animation: cp-fadeUp .35s .46s both; }
        .cp-btn-wrap { animation: cp-fadeUp .35s .53s both; }
        .cp-tag { animation: cp-slideIn .4s .1s both; }
        .cp-title { animation: cp-slideIn .4s .16s both; }
        .cp-sub { animation: cp-slideIn .4s .22s both; }
        .cp-check { animation: cp-checkPop .5s cubic-bezier(.22,.68,0,1.4) both; }
        .cp-s1 { animation: cp-fadeUp .35s .15s both; }
        .cp-s2 { animation: cp-fadeUp .35s .25s both; }
        .cp-s3 { animation: cp-fadeUp .35s .35s both; }
        .cp-pulse { animation: cp-pulse 1.8s infinite; }
        .cp-input:hover { border-color: rgba(11,99,214,0.35) !important; }
        .cp-btn:hover:not(:disabled) { background:#094fae !important; transform:translateY(-1px) !important; box-shadow:0 4px 14px rgba(11,99,214,0.28) !important; }
        .cp-btn:active:not(:disabled) { transform:translateY(0) !important; box-shadow:none !important; }
        .cp-reset:hover { background:rgba(0,0,0,0.04) !important; }
      `}</style>

            <div style={{ minHeight: "100vh", background: "#f4f6f9", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
                <div style={{ width: "100%", maxWidth: "460px" }}>
                    <div className="cp-card" style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #e5e7eb", overflow: "hidden" }}>

                        {/* Header */}
                        <div style={{ background: "#0b63d6", padding: "26px 28px 22px", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", width: "200px", height: "200px", top: "-80px", right: "-60px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)" }} />
                            <div style={{ position: "absolute", width: "110px", height: "110px", bottom: "-55px", left: "-25px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
                            <div className="cp-tag" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.25)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", color: "#fff", marginBottom: "13px" }}>
                                <span className="cp-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#93c5fd", display: "inline-block" }} />
                                We respond in 24h
                            </div>
                            <h1 className="cp-title" style={{ fontSize: "22px", fontWeight: "600", color: "#fff", margin: "0 0 4px" }}>Get in touch</h1>
                            <p className="cp-sub" style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", margin: 0 }}>Fill in the form and we'll get back to you.</p>
                        </div>

                        {!success ? (
                            <form onSubmit={handleSubmit} style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                                {FIELDS.map(({ id, label, type, placeholder, error, icon }, i) => (
                                    <div key={id} className={`cp-field-${i}`}>
                                        <label style={{ fontSize: "12px", fontWeight: "600", color: focused === id ? "#0b63d6" : "#374151", marginBottom: "5px", display: "block", transition: "color .18s", letterSpacing: "0.2px" }}>
                                            {label}
                                        </label>
                                        <div style={{ position: "relative" }}>
                                            <span style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: focused === id ? "#0b63d6" : "#9ca3af", pointerEvents: "none", display: "flex", alignItems: "center", transition: "color .18s" }}>
                                                {icon}
                                            </span>
                                            <input
                                                type={type}
                                                placeholder={placeholder}
                                                value={values[id]}
                                                onChange={(e) => handleChange(id, e.target.value)}
                                                onFocus={() => setFocused(id)}
                                                onBlur={() => setFocused("")}
                                                className="cp-input"
                                                style={{
                                                    width: "100%", boxSizing: "border-box",
                                                    padding: "9px 12px 9px 36px", fontSize: "14px",
                                                    color: "#111827", background: errors[id] ? "#fef2f2" : "#f9fafb",
                                                    border: `1.5px solid ${errors[id] ? "#fca5a5" : focused === id ? "#0b63d6" : "#e5e7eb"}`,
                                                    borderRadius: "9px", outline: "none", fontFamily: "inherit",
                                                    boxShadow: focused === id ? "0 0 0 3px rgba(11,99,214,0.1)" : "none",
                                                    transition: "border-color .18s, box-shadow .18s, background .18s",
                                                }}
                                            />
                                        </div>
                                        <div style={{ height: "2px", background: "#f0f0f0", borderRadius: "2px", marginTop: "4px", overflow: "hidden" }}>
                                            <div style={{ height: "100%", width: getBarWidth(id), background: barColor(id), borderRadius: "2px", transition: "width .3s, background .3s" }} />
                                        </div>
                                        {errors[id] && <p style={{ fontSize: "12px", color: "#dc2626", margin: "3px 0 0" }}>{error}</p>}
                                    </div>
                                ))}

                                {/* Message */}
                                <div className="cp-field-3">
                                    <label style={{ fontSize: "12px", fontWeight: "600", color: focused === "message" ? "#0b63d6" : "#374151", marginBottom: "5px", display: "block", transition: "color .18s", letterSpacing: "0.2px" }}>
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Tell us what you need..."
                                        rows={4}
                                        value={values.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused("")}
                                        className="cp-input"
                                        style={{
                                            width: "100%", boxSizing: "border-box",
                                            padding: "9px 12px", fontSize: "14px",
                                            color: "#111827", background: errors.message ? "#fef2f2" : "#f9fafb",
                                            border: `1.5px solid ${errors.message ? "#fca5a5" : focused === "message" ? "#0b63d6" : "#e5e7eb"}`,
                                            borderRadius: "9px", outline: "none", fontFamily: "inherit",
                                            resize: "vertical", lineHeight: "1.55",
                                            boxShadow: focused === "message" ? "0 0 0 3px rgba(11,99,214,0.1)" : "none",
                                            transition: "border-color .18s, box-shadow .18s, background .18s",
                                        }}
                                    />
                                    <div style={{ height: "2px", background: "#f0f0f0", borderRadius: "2px", marginTop: "4px", overflow: "hidden" }}>
                                        <div style={{ height: "100%", width: getBarWidth("message"), background: barColor("message"), borderRadius: "2px", transition: "width .3s, background .3s" }} />
                                    </div>
                                    {errors.message && <p style={{ fontSize: "12px", color: "#dc2626", margin: "3px 0 0" }}>Please enter your message</p>}
                                </div>

                                <div className="cp-btn-wrap">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="cp-btn"
                                        style={{
                                            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                            background: "#0b63d6", color: "#fff", border: "none",
                                            borderRadius: "9px", padding: "11px 20px", fontSize: "14px",
                                            fontWeight: "600", cursor: loading ? "not-allowed" : "pointer",
                                            opacity: loading ? 0.7 : 1, fontFamily: "inherit",
                                            transition: "background .18s, transform .12s, box-shadow .18s",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span style={{ width: "14px", height: "14px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "cp-spin .65s linear infinite", display: "inline-block" }} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                                                    <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "44px 28px", textAlign: "center" }}>
                                <div className="cp-check" style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#ecfdf5", border: "2px solid #a7f3d0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="cp-s1" style={{ fontSize: "17px", fontWeight: "600", color: "#111827", margin: 0 }}>Message sent!</p>
                                <p className="cp-s2" style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>We'll get back to you within 24 hours.</p>
                                <button onClick={reset} className="cp-reset" style={{ marginTop: "4px", background: "none", border: "0.5px solid #e5e7eb", borderRadius: "8px", padding: "8px 18px", fontSize: "13px", color: "#6b7280", cursor: "pointer", fontFamily: "inherit", transition: "background .15s" }}>
                                    Send another message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}