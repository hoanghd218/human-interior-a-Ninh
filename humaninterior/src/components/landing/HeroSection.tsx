"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
    // Countdown Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 12,
        minutes: 48,
        seconds: 0,
    });

    useEffect(() => {
        // Set target date to 5 days, 12 hours, 48 minutes from now (for demo purposes)
        // In production, replace this with your actual Event Date, e.g., new Date("2026-12-31T00:00:00")
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5);
        targetDate.setHours(targetDate.getHours() + 12);
        targetDate.setMinutes(targetDate.getMinutes() + 48);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[90vh] w-full overflow-hidden flex flex-col items-center justify-center pb-16 pt-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Human Interior Showroom"
                    className="w-full h-full object-cover object-center"
                    src="/assets/showroom-bg.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20">
                <h1 className="font-display flex flex-col items-center mb-6">
                    <span className="text-white font-light text-[32px] md:text-[48px] tracking-[0.1em] mb-2 md:mb-0">
                        ĐẠI TIỆC KHAI TRƯƠNG
                    </span>
                    <span className="text-[48px] md:text-[80px] font-bold leading-none text-gradient-gold uppercase tracking-tight text-center">
                        SHOWROOM HUMAN INTERIOR
                    </span>
                </h1>

                {/* Countdown Timer */}
                <div className="flex gap-4 md:gap-8 mb-12 items-start justify-center liquid-glass-dark px-8 py-6 rounded-2xl">
                    <div className="text-center w-[70px] md:w-[100px]">
                        <div className="text-4xl md:text-6xl font-thin text-white font-sans tabular-nums">
                            {String(timeLeft.days).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-sm text-[#D4AF37] uppercase tracking-widest mt-2 font-medium">
                            Ngày
                        </div>
                    </div>
                    <div className="text-4xl md:text-6xl font-thin text-white/50 font-sans mt-[-5px]">:</div>
                    <div className="text-center w-[70px] md:w-[100px]">
                        <div className="text-4xl md:text-6xl font-thin text-white font-sans tabular-nums">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-sm text-[#D4AF37] uppercase tracking-widest mt-2 font-medium">
                            Giờ
                        </div>
                    </div>
                    <div className="text-4xl md:text-6xl font-thin text-white/50 font-sans mt-[-5px]">:</div>
                    <div className="text-center w-[70px] md:w-[100px]">
                        <div className="text-4xl md:text-6xl font-thin text-white font-sans tabular-nums">
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-sm text-[#D4AF37] uppercase tracking-widest mt-2 font-medium">
                            Phút
                        </div>
                    </div>
                    <div className="text-4xl md:text-6xl font-thin text-white/50 font-sans mt-[-5px]">:</div>
                    <div className="text-center w-[70px] md:w-[100px]">
                        <div className="text-4xl md:text-6xl font-thin text-white font-sans tabular-nums">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-sm text-[#D4AF37] uppercase tracking-widest mt-2 font-medium">
                            Giây
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="https://human-interior-a-ninh-app-render.vercel.app/"
                    target="_blank"
                    className="btn-gradient-gold text-white font-bold py-4 px-12 rounded-lg shadow-glow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-400 flex items-center justify-center gap-3 uppercase tracking-wider text-base md:text-lg animate-ripple-gold iridescent-border"
                >
                    <span>GIỮ CHỖ VIP & NHẬN QUÀ TẶNG</span>
                    <span className="material-symbols-outlined">confirmation_number</span>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
