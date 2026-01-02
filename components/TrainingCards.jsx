"use client";

import { useState } from "react";
import { trainingData, trainingCategories } from "./Data/trainingData";
import "./TrainingCards.css";

export default function TrainingCards() {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [selectedCourse, setSelectedCourse] = useState(null);

    const filteredCourses =
        selectedCategory === "All Courses"
            ? trainingData
            : trainingData.filter(
                (course) =>
                    course.title
                        .toLowerCase()
                        .includes(selectedCategory.toLowerCase()) ||
                    course.description
                        .toLowerCase()
                        .includes(selectedCategory.toLowerCase())
            );

    const handleBookDemo = (courseTitle) => {
        const course = trainingData.find((c) => c.title === courseTitle);
        setSelectedCourse(course);
        alert(`Booking demo for: ${courseTitle}`);
    };

    return (
        <div className="training-cards-section">
            <h1 className="section-title">Aviation Training Services</h1>

            {/* CATEGORY FILTER */}
            <div className="category-filter">
                {trainingCategories.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${selectedCategory === category ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* CARDS GRID */}
            <div className="training-cards-grid">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="training-card">
                        <div className="card-header">
                            <div className="course-badge">{course.level}</div>
                            <div className="course-duration">{course.duration}</div>
                        </div>

                        <div className="card-content">
                            <h2 className="card-title">{course.title}</h2>
                            <p className="card-description">{course.description}</p>

                            <div className="course-features">
                                <h4>What you&apos;ll learn:</h4>
                                <ul>
                                    {course.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button
                            className="demo-btn"
                            onClick={() => handleBookDemo(course.title)}
                        >
                            Book a Demo
                        </button>
                    </div>
                ))}
            </div>

            {filteredCourses.length === 0 && (
                <div className="no-courses">
                    <p>No courses found for &quot;{selectedCategory}&quot;</p>
                </div>
            )}
        </div>
    );
}
