"use client";

import React from "react";
import Image from "next/image";

/* ================= COUNTRY DATA ================= */
const COUNTRIES_DATA = [
    { name: "USA", flag: "🇺🇸", top: "25%", left: "20%", courseInfo: "Advanced Data Science Bootcamp (In-Person & Online)" },
    { name: "Canada", flag: "🇨🇦", top: "15%", left: "35%", courseInfo: "Software Engineering Masterclass (Virtual)" },
    { name: "Spain", flag: "🇪🇸", top: "50%", left: "48%", courseInfo: "European FinTech Regulation Workshop" },
    { name: "Lithuania", flag: "🇱🇹", top: "30%", left: "55%", courseInfo: "Blockchain Fundamentals Certification" },
    { name: "Italy", flag: "🇮🇹", top: "38%", left: "55%", courseInfo: "UI/UX Design for Mobile Applications" },
    { name: "Bahrain", flag: "🇧🇭", top: "45%", left: "60%", courseInfo: "Middle East Regional Leadership Summit" },
    { name: "India", flag: "🇮🇳", top: "52%", left: "65%", courseInfo: "AI & Machine Learning Specialization" },
    { name: "Vietnam", flag: "🇻🇳", top: "48%", left: "78%", courseInfo: "Digital Marketing & SEO Strategy Course" },
    { name: "South Africa", flag: "🇿🇦", top: "70%", left: "55%", courseInfo: "Renewable Energy Project Management" },
    { name: "Australia", flag: "🇦🇺", top: "70%", left: "80%", courseInfo: "Cloud Infrastructure Management Certification" },
    { name: "New Zealand", flag: "🇳🇿", top: "80%", left: "85%", courseInfo: "Cyber Security Essentials for Small Businesses" },
];

/* ================= PIN LABEL ================= */
const PinLabel = ({ flag, name }) => (
    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-md border border-gray-100">
        <span className="text-xl">{flag}</span>
        <span className="text-sm font-semibold text-gray-800">{name}</span>
    </div>
);

/* ================= COUNTRY PIN ================= */
const CountryPin = ({ data }) => {
    return (
        <div
            className="country-pin-wrapper group"
            style={{ top: data.top, left: data.left }}
        >
            <div className="pin-label-visible">
                <PinLabel flag={data.flag} name={data.name} />
            </div>

            <div className="pin-marker"></div>

            <div className="tooltip-hidden">
                <div className="tooltip-content shadow-xl">
                    <p className="text-xs font-medium text-blue-900 leading-tight">
                        {data.courseInfo}
                    </p>
                    <div className="tooltip-arrow"></div>
                </div>
            </div>
        </div>
    );
};

/* ================= MAP COMPONENT ================= */
const Map = () => {
    return (
        <>
            {/* ================= INLINE CSS (UNCHANGED) ================= */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        .map-wrapper {
          position: relative;
          width: 90vw;
          max-width: 1200px;
          height: 50vw;
          max-height: 600px;
          margin: 0 auto;
          background-color: #fcfcfc;
          border-radius: 2rem;
          box-shadow: 0 10px 30px rgba(13, 71, 161, 0.08);
          overflow: hidden;
        }

        .world-map-graphic {
          position: absolute;
          inset: 0;
          background-image: url('/assets/map.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
        }

        .country-pin-wrapper {
          position: absolute;
          z-index: 10;
          cursor: pointer;
        }

        .pin-label-visible {
          transform: translate(-50%, -100%);
        }

        .pin-marker {
          width: 10px;
          height: 10px;
          background-color: #0d47a1;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 0 4px rgba(13, 71, 161, 0.3);
        }

        .tooltip-hidden {
          position: absolute;
          opacity: 0;
          visibility: hidden;
          top: -120%;
          left: 50%;
          transform: translateX(-50%) scale(0.95);
          transition: all 0.3s ease;
        }

        .country-pin-wrapper:hover .tooltip-hidden {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) scale(1);
        }

        .tooltip-content {
          background-color: #e3f2fd;
          padding: 10px 14px;
          border-radius: 8px;
          position: relative;
          white-space: nowrap;
        }

        .tooltip-arrow {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #e3f2fd;
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .map-wrapper {
            height: 70vw;
          }
          .pin-label-visible {
            transform: translate(-50%, -100%) scale(0.8);
          }
        }
      `}</style>

            {/* ================= LAYOUT ================= */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center p-4 w-full max-w-7xl mx-auto">
                {/* TITLE */}
                <div className="p-8 md:p-12 w-full md:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                        Global Training <br /> Foot Print
                    </h1>
                    <p className="text-gray-500 mt-4 text-lg">
                        Hover over a location to see the flagship course offered in that region.
                    </p>
                </div>

                {/* MAP */}
                <div className="map-wrapper w-full md:w-2/3">
                    <div className="world-map-graphic"></div>

                    {COUNTRIES_DATA.map((country) => (
                        <CountryPin key={country.name} data={country} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Map;
