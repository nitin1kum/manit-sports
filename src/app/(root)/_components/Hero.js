"use client"

import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {

    const eventDate = new Date("April 10, 2025 12:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = eventDate - now;
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className='hero h-screen relative flex justify-center items-center'>
            <div className="text-black">
                <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r text-black text-center p-6 overflow-hidden">
                    <motion.div
                        className="text-5xl sm:text-7xl font-extrabold drop-shadow-lg tracking-wide flex flex-col items-end"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <section class="wrapper">
                            <div class="top">MANIT</div>
                            <div class="bottom" aria-hidden="true">MANIT</div>
                        </section>

                        <div class="masking-container">
                            <h1 class="masked-text text-5xl sm:text-7xl font-bold">Sports</h1>
                        </div>

                    </motion.div>

                    <motion.p
                        className="mt-4 text-lg sm:text-2xl max-w-3xl font-light italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        The most anticipated sports festival is finally happening after 10 years! Be part of history.
                    </motion.p>

                    <motion.div
                        className="mt-6 flex gap-6 text-2xl sm:text-4xl font-bold bg-white text-blue-900 p-4 rounded-2xl shadow-lg backdrop-blur-md bg-opacity-20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <span>{timeLeft.days}d</span>
                        <span>{timeLeft.hours}h</span>
                        <span>{timeLeft.minutes}m</span>
                        <span>{timeLeft.seconds}s</span>
                    </motion.div>
                </section>
            </div>
        </div>
    )
}

export default Hero