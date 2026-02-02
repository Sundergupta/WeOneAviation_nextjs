"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane } from "lucide-react";

export default function LoadingAnimation({ onComplete, duration = 3000 }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            onComplete && onComplete();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <div className="fixed inset-0 z-50 overflow-hidden ">
                    {/* Left Shutter */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        exit={{ x: "-100%" }}
                        transition={{
                            duration: 1.2,
                            delay: 1.5,
                            ease: [0.65, 0, 0.35, 1],
                        }}
                        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
                    />

                    {/* Right Shutter */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 1.2,
                            delay: 1.5,
                            ease: [0.65, 0, 0.35, 1],
                        }}
                        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900"
                    />

                    {/* Center Line */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 1.5 }}
                        className="absolute top-0 left-1/2 w-px h-full bg-white/20 -translate-x-1/2"
                    />

                    {/* Airplane */}
                    <motion.div
                        initial={{ y: "100vh", opacity: 0, scale: 0.8 }}
                        animate={{
                            y: ["100vh", "80vh", "60vh", "40vh", "20vh", "-20vh"],
                            opacity: [0, 1, 1, 1, 1, 0],
                            scale: [0.8, 1, 1.1, 1.2, 1.3, 1.4],
                            rotate: [0, -5, -8, -10, -12, -15],
                        }}
                        transition={{
                            duration: 2.5,
                            ease: [0.34, 1.56, 0.64, 1],
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                        }}
                        className="absolute left-1/2 -translate-x-1/2 z-10"
                    >
                        <div className="relative">
                            <Plane className="w-16 h-16 text-white drop-shadow-xl" />

                            {/* Vapor Trail */}
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={{
                                    opacity: [0, 0.6, 0.4, 0.2],
                                    scaleY: [0, 1, 1.5, 2],
                                }}
                                transition={{ duration: 2, delay: 0.3 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-white/40 to-transparent blur-sm"
                            />

                            {/* Glow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Loading Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
                        transition={{
                            duration: 2.5,
                            times: [0, 0.1, 0.8, 1],
                        }}
                        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-xl tracking-wider"
                    >
                        Taking Off...
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.5 }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-400 via-white to-blue-400"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 2.5 }}
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
