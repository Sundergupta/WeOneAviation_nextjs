"use client";

import { cn } from "./ui/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { easingFunctions } from "@/lib/animations/easing";
import { getUrgencyOfferDate } from "@/lib/utils/urgency-date";
// import { CountdownTimer } from "@/components/shared/CountdownTimer";

/* -------------------- Config -------------------- */
const aviationSecondary = "text-teal-600 dark:text-teal-400";
const urgencyButtonBorderGradient =
    "bg-gradient-to-r from-[#0C6E72] to-[#56A7B0]";

/* -------------------- Animation -------------------- */
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easingFunctions.easeOut,
        },
    },
};

export function UrgencyCTA({
    className,
    title,
    description,
    buttonLabel,
    buttonIcon: Icon = CalendarClock,
    buttonClassName,
}) {
    // Always returns a consistent date (e.g. 7 days from today)
    const { formattedEndDate } = getUrgencyOfferDate();

    const finalTitle = title || "Limited Time Offer!";
    const finalDescription =
        description ||
        `Enroll in any of our ground school batches by ${formattedEndDate} and secure a 20% discount on your course fees. Start your journey today!`;
    const finalButtonLabel =
        buttonLabel || `Enroll by ${formattedEndDate} for 20% Off`;

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={cn(
                "mt-32 max-md:mt-20 max-w-2xl mx-auto text-center p-8 md:px-10 md:py-14 bg-card border border-border/80 rounded-3xl shadow-lg",
                className
            )}
        >
            <h3 className="text-2xl font-semibold mb-3 text-teal-700 dark:text-teal-300">
                {finalTitle}
            </h3>

            <p className="mb-8 text-foreground/80">{finalDescription}</p>

            {/* Primary CTA */}
            <div className="relative inline-block mb-4 group">
                <div
                    className={cn(
                        "absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300",
                        urgencyButtonBorderGradient
                    )}
                />

                <Button
                    asChild
                    size="lg"
                    className={cn(
                        "relative px-7 py-4 rounded-lg flex items-center justify-center",
                        "bg-teal-600 text-white hover:bg-teal-700",
                        "dark:bg-teal-500 dark:hover:bg-teal-600",
                        "shadow-md hover:shadow-lg",
                        "transition-all duration-300 group-hover:scale-[1.03]",
                        buttonClassName
                    )}
                >
                    <Link href="/courses">
                        <Icon className="mr-2 h-5 w-5" />
                        {finalButtonLabel}
                    </Link>
                </Button>
            </div>

            {/* Countdown Placeholder */}
            <div className="mb-6">
                {/* <CountdownTimer targetDate={offerEndDate} /> */}
                <p className="text-sm text-foreground/60">
                    ( Offer expires soon! )
                </p>
            </div>

            {/* Secondary CTA */}
            <Button
                asChild
                variant="link"
                className={cn(
                    "text-base conversion-button",
                    aviationSecondary,
                    "hover:text-teal-500 dark:hover:text-teal-300"
                )}
                data-conversion="true"
            >
                <Link
                    href={{
                        pathname: "/contact",
                        hash: "contact-form",
                        query: {
                            subject: "Consultation Request",
                            message:
                                "I would like to schedule a consultation to discuss the courses and the limited-time offer.",
                        },
                    }}
                >
                    Limited seats! Schedule a consultation →
                </Link>
            </Button>
        </motion.div>
    );
}
