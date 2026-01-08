"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactQuery() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // ✅ Ensure client-only rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ Safe body mutation (no hydration mismatch)
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
