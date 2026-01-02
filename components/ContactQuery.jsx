"use client";

import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactQuery() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

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
