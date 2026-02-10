"use client";

import React, { useEffect } from "react";
import { cn } from "./ui/utils";
import {
    BookUser,
    FileCheck2,
    GraduationCap,
    RadioTower,
    PlaneTakeoff,
    Briefcase,
    ChevronDown,
    CalendarClock,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
// import { Button } from "@/components/ui/button";
// import { UrgencyCTA } from "../components/UrgencyCTA";
import { easingFunctions } from "@/lib/animations/easing";

/* -------------------- Config -------------------- */
const aviationPrimary = "text-teal-700 dark:text-teal-300";
const aviationSecondary = "text-teal-600 dark:text-teal-400";

/* -------------------- Animations -------------------- */
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easingFunctions.easeOut,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easingFunctions.easeOut },
    },
};

const timelineItemVariant = (index) => ({
    hidden: {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easingFunctions.easeOut },
    },
});

/* -------------------- Data -------------------- */
const pathwaySteps = [
    {
        icon: BookUser,
        title: "Eligibility & Enrollment",
        description:
            "Meet basic requirements and enroll in our comprehensive ground school program.",
        details: [
            "**Age:** Minimum 16 years for SPL, 18 years for CPL.",
            "**Education:** 10+2 with Physics & Mathematics.",
            "**Medical:** DGCA Class 2 (Class 1 for CPL).",
            "**English:** Read, speak, write, understand English.",
        ],
    },
    {
        icon: GraduationCap,
        title: "Ground School Mastery",
        description: "Complete structured online DGCA classes.",
        details: [
            "**Subjects:** Navigation, Met, Air Reg, Tech Gen & Spec, RTR(A).",
            "**Format:** Live + recorded classes.",
            "**Assessments:** Topic tests & mock exams.",
            "**Support:** 24/7 doubt clearing.",
        ],
    },
    {
        icon: FileCheck2,
        title: "DGCA Exams",
        description: "Pass CPL/ATPL theoretical exams.",
        details: [
            "**Passing:** Minimum 70% per subject.",
            "**Structure:** MCQ-based exams.",
            "**Validity:** Subject validity as per DGCA.",
            "**Prep:** Question banks & mocks.",
        ],
    },
    {
        icon: RadioTower,
        title: "RTR(A) License",
        description: "Radio Telephony Restricted (Aeronautical).",
        details: [
            "**Part 1:** Practical transmission.",
            "**Part 2:** Oral regulations & procedures.",
            "**Training:** Full RTR(A) preparation.",
        ],
    },
    {
        icon: PlaneTakeoff,
        title: "Type Rating Prep",
        description: "A320 / B737 preparation (optional).",
        details: [
            "**Systems & SOPs**",
            "**Airline exam patterns**",
            "**Improves employability**",
        ],
    },
    {
        icon: Briefcase,
        title: "Airline Interview Ready",
        description: "HR + Technical interview preparation.",
        details: [
            "**Mock interviews**",
            "**Psychometric guidance**",
            "**Communication skills**",
        ],
    },
];

/* -------------------- Timeline Item -------------------- */
function AnimatedTimelineItem({ step, index }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={timelineItemVariant(index)}
            initial="hidden"
            animate={controls}
            className="relative flex items-start group"
        >
            <div
                className={cn(
                    "absolute top-5 left-6 md:left-1/2 w-5 h-5 rounded-full bg-teal-500 border-4 border-background transform -translate-x-1/2",
                    "group-hover:scale-110 transition"
                )}
            />

            <div
                className={cn(
                    "ml-14 w-full md:w-1/2 md:ml-0",
                    index % 2 === 0 ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto"
                )}
            >
                <Collapsible>
                    <Card className="border shadow-sm hover:shadow-md">
                        <div className="flex justify-between p-4 gap-3">
                            <div className="flex gap-3">
                                <div
                                    className={cn(
                                        "p-2 rounded-md bg-teal-100 dark:bg-teal-900",
                                        aviationSecondary
                                    )}
                                >
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </div>


                        </div>

                        <CollapsibleContent>
                            <div className="px-4 py-3 border-t text-sm">
                                <ul className="space-y-2">
                                    {step.details.map((detail, i) => (
                                        <li key={i}>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: detail.replace(
                                                        /\*\*(.*?)\*\*/g,
                                                        "<strong>$1</strong>"
                                                    ),
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CollapsibleContent>
                    </Card>
                </Collapsible>
            </div>
        </motion.div>
    );
}

/* -------------------- Main Component -------------------- */
export default function PilotPathway() {
    return (
        <motion.section
            id="pilot-pathway"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="py-16 md:py-24"
        >
            <div className="text-center mb-12">
                <motion.h2
                    variants={itemVariants}
                    className={cn("text-3xl md:text-4xl font-bold", aviationPrimary)}
                >
                    Your Pathway to the Cockpit
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground"
                >
                    A clear roadmap from enrollment to airline-ready pilot.
                </motion.p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-12">
                    {pathwaySteps.map((step, index) => (
                        <AnimatedTimelineItem
                            key={index}
                            step={step}
                            index={index}
                        />
                    ))}
                </div>
            </div>


        </motion.section>
    );
}
