"use client";

import Image from "next/image";
import "./floating-buttons.css";

export default function FloatingContactButtons() {
    const phoneNumber = "9355611996";

    return (
        <div className="floating-buttons">
            {/* WhatsApp */}
            <a
                href={`https://wa.me/91${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <Image
                    src="/assets/whatsapp.png"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                />
            </a>

            {/* Call */}
            <a
                href={`tel:+91${phoneNumber}`}
                className="floating-btn call"
                aria-label="Call Now"
            >
                <Image
                    src="/assets/call.png"
                    alt="Call"
                    width={26}
                    height={26}
                />
            </a>
        </div>
    );
}
