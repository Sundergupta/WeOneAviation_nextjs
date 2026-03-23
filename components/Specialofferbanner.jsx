"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function WeOneAviationBanner() {
    const [hidden, setHidden] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const timerRef = useRef(null);
    const countdownRef = useRef(null);

    const handleClose = () => {
        setHidden(true);
        let secs = 20;
        setCountdown(secs);
        countdownRef.current = setInterval(() => {
            secs -= 1;
            setCountdown(secs);
            if (secs <= 0) {
                clearInterval(countdownRef.current);
                setCountdown(null);
                setHidden(false);
            }
        }, 1000);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
            clearInterval(countdownRef.current);
        };
    }, []);

    if (hidden) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <div
                    style={{
                        background: "linear-gradient(135deg, #0b1f3a 0%, #0e2d5a 100%)",
                        border: "1px solid rgba(56,189,248,0.3)",
                        borderRadius: "50px",
                        padding: "10px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0 0 24px rgba(56,189,248,0.15)",
                        cursor: "pointer",
                        fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                    onClick={() => {
                        clearInterval(countdownRef.current);
                        setCountdown(null);
                        setHidden(false);
                    }}
                >
                    <span style={{ fontSize: "18px" }}>✈️</span>
                    <span style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Special Offer • {countdown}s
                    </span>
                    <div style={{
                        width: "36px", height: "4px", borderRadius: "2px",
                        background: "rgba(56,189,248,0.2)",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            height: "100%",
                            width: `${(countdown / 20) * 100}%`,
                            background: "#38bdf8",
                            transition: "width 1s linear",
                            borderRadius: "2px"
                        }} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');

                @keyframes slideInRight {
                    from { transform: translateX(120%); opacity: 0; }
                    to   { transform: translateX(0);   opacity: 1; }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(251,146,60,0.4); }
                    50%       { box-shadow: 0 0 0 8px rgba(251,146,60,0); }
                }
                @keyframes blink-dot {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.3; }
                }
                @keyframes scan-line {
                    0%   { top: 0%; opacity: 0.6; }
                    100% { top: 100%; opacity: 0; }
                }
                .woa-banner {
                    animation: slideInRight 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                .woa-cta-btn {
                    animation: pulse-glow 2s ease-in-out infinite;
                }
                .woa-live-dot {
                    animation: blink-dot 1.2s ease-in-out infinite;
                }
                .woa-scan::after {
                    content: '';
                    position: absolute;
                    left: 0; right: 0; height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent);
                    animation: scan-line 3s linear infinite;
                }
            `}</style>

            <div
                className="woa-banner"
                style={{
                    position: "fixed",
                    right: "24px",
                    top: "38%",
                    transform: "translateY(-50%)",
                    zIndex: 9999,
                    width: "360px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
            >
                {/* Background layers */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(145deg, #060f20 0%, #0a1a38 40%, #071428 100%)",
                }} />
                {/* Grid overlay */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                }} />
                {/* Radial highlight */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(14,60,120,0.5) 0%, transparent 70%)",
                }} />
                {/* Scan line effect */}
                <div className="woa-scan" style={{ position: "absolute", inset: 0, overflow: "hidden" }} />

                {/* Close button */}
                <button
                    onClick={handleClose}
                    aria-label="Close"
                    style={{
                        position: "absolute", top: "10px", right: "10px", zIndex: 10,
                        width: "22px", height: "22px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "11px", fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        lineHeight: 1,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                    ✕
                </button>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 2, padding: "20px 20px 18px 20px" }}>

                    {/* Top row: live badge + seats warning */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span className="woa-live-dot" style={{
                                width: "7px", height: "7px", borderRadius: "50%",
                                background: "#4ade80", display: "inline-block", flexShrink: 0
                            }} />
                            <span style={{ fontSize: "10px", color: "#4ade80", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                Live Offer
                            </span>
                        </div>
                        <div style={{
                            background: "rgba(251,146,60,0.12)",
                            border: "1px solid rgba(251,146,60,0.35)",
                            borderRadius: "20px",
                            padding: "2px 10px",
                            fontSize: "10px",
                            color: "#fb923c",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}>
                            🔥 Only 4 Seats Left
                        </div>
                    </div>

                    {/* Headline */}
                    <div style={{ marginBottom: "6px" }}>
                        <p style={{ fontSize: "11px", color: "rgba(148,163,184,0.8)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px", fontFamily: "'Barlow', sans-serif" }}>
                            Your Cockpit Awaits
                        </p>
                        <h2 style={{
                            fontSize: "32px", fontWeight: 900, lineHeight: 1,
                            color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em",
                            marginBottom: "2px"
                        }}>
                            Fly Commercial.<br />
                            <span style={{ color: "#38bdf8" }}>Pay Less.</span>
                        </h2>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(56,189,248,0.4), transparent)", margin: "12px 0" }} />

                    {/* Price block */}
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "14px", marginBottom: "14px" }}>
                        <div>
                            <p style={{ fontSize: "10px", color: "rgba(148,163,184,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px", fontFamily: "'Barlow', sans-serif" }}>
                                Full CPL Training
                            </p>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                                <span style={{ fontSize: "42px", fontWeight: 900, color: "#fb923c", lineHeight: 1, letterSpacing: "-0.01em" }}>
                                    $35K
                                </span>
                                <span style={{ fontSize: "13px", color: "rgba(148,163,184,0.5)", textDecoration: "line-through", paddingBottom: "4px", fontFamily: "'Barlow', sans-serif" }}>
                                    $42K
                                </span>
                            </div>
                            <p style={{ fontSize: "10px", color: "rgba(148,163,184,0.5)", marginTop: "2px", fontFamily: "'Barlow', sans-serif" }}>
                                ≈ ₹29–32 Lakhs · EMI Available
                            </p>
                        </div>
                        {/* Mini stat */}
                        <div style={{
                            marginLeft: "auto",
                            background: "rgba(56,189,248,0.08)",
                            border: "1px solid rgba(56,189,248,0.2)",
                            borderRadius: "10px",
                            padding: "8px 12px",
                            textAlign: "center",
                            flexShrink: 0,
                        }}>
                            <p style={{ fontSize: "22px", fontWeight: 900, color: "#38bdf8", lineHeight: 1 }}>3000+</p>
                            <p style={{ fontSize: "9px", color: "rgba(148,163,184,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "2px", fontFamily: "'Barlow', sans-serif" }}>Pilots<br />Placed</p>
                        </div>
                    </div>

                    {/* USP pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {["DGCA Approved", "100% Placement", "Since 2011"].map(tag => (
                            <span key={tag} style={{
                                fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "rgba(148,163,184,0.7)",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "4px",
                                padding: "3px 8px",
                                fontFamily: "'Barlow', sans-serif",
                            }}>
                                ✓ {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Row */}
                    <div style={{ display: "flex", gap: "8px" }}>
                        <a
                            href="/contactform"
                            className="woa-cta-btn"
                            style={{
                                flex: 1,
                                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                                background: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
                                color: "#fff",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "13px", fontWeight: 800,
                                letterSpacing: "0.1em", textTransform: "uppercase",
                                padding: "11px 16px",
                                borderRadius: "10px",
                                textDecoration: "none",
                                transition: "transform 0.15s, filter 0.15s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "scale(1.02)"; }}
                            onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "scale(1)"; }}
                        >
                            <span>✈</span> Claim Seat Now
                        </a>
                        <a
                            href="/dgca-ground-classes"
                            style={{
                                display: "flex", alignItems: "center", justifyContent: "center",
                                background: "rgba(56,189,248,0.08)",
                                border: "1px solid rgba(56,189,248,0.3)",
                                color: "#38bdf8",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "12px", fontWeight: 700,
                                letterSpacing: "0.08em", textTransform: "uppercase",
                                padding: "11px 14px",
                                borderRadius: "10px",
                                textDecoration: "none",
                                whiteSpace: "nowrap",
                                transition: "all 0.15s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.15)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(56,189,248,0.08)"; }}
                        >
                            View Courses
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}