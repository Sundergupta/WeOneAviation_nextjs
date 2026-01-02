"use client";

import React from "react";

export default function ReviewCard({ reviewer = "User", text = "Great experience!" }) {
    return (
        <div className="review-card">
            <strong>{reviewer}</strong>
            <p>{text}</p>
        </div>
    );
}
