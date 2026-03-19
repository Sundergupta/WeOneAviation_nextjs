"use client";

import { useState, useEffect } from "react";
import ContactForm from "./contactform.jsx";

export default function ContactQuery() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ Auto-open every 15 seconds
    useEffect(() => {
        if (!mounted) return;

        const timer = setInterval(() => {
            setOpen(true);
        }, 15000);

        return () => clearInterval(timer);
    }, [mounted]);

    // ✅ Safe body mutation
    useEffect(() => {
        if (!mounted) return;

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open, mounted]);

    if (!mounted) return null;

    return (
        <>
            {!open && (
                <div className="query-tab" onClick={() => setOpen(true)}>
                    Query
                </div>
            )}

            {open && <ContactForm onClose={() => setOpen(false)} />}
        </>
    );
}