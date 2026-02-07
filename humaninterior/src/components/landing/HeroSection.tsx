"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Countdown Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 12,
        minutes: 48,
        seconds: 0,
    });

    useEffect(() => {
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
        <section className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Background Image - Single Static per orientation */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={isMobile ? "/images/showroom-3d/A1.webp" : "/images/showroom-3d/A2.webp"}
                    alt="Human Interior Showroom"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                {/* Subtle gradient to protect text visibility without clouding the image */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>

            {/* Logo - Top Left */}
            <Link
                href="/"
                className="absolute top-6 left-6 z-30 flex items-center gap-2 md:gap-3 group"
            >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-xl">
                        <path d="M7 2H9.53659V38H7V2Z" fill="#A8893A" />
                        <path d="M30.4634 2H33V38H30.4634V2Z" fill="#A8893A" />
                        <path d="M13.6585 2H9.53659V4.23009H12.5488C14.578 4.23009 15.1911 6.67257 15.2439 7.89381V13.469H20.1585V11.5575H17.4634V7.89381C17.4634 3.43363 14.9268 2.10619 13.6585 2Z" fill="#A8893A" />
                        <path d="M26.5 2H30.622V4.23009H27.6098C25.5805 4.23009 24.9675 6.67257 24.9146 7.89381V13.469H20V11.5575H22.6951V7.89381C22.6951 3.43363 25.2317 2.10619 26.5 2Z" fill="#A8893A" />
                        <path d="M13.6585 38H9.53659V35.7699H12.5488C14.578 35.7699 15.1911 33.3274 15.2439 32.1062V26.531H20.1585V28.4425H17.4634V32.1062C17.4634 36.5664 14.9268 37.8938 13.6585 38Z" fill="#A8893A" />
                        <path d="M26.5 38H30.622V35.7699H27.6098C25.5805 35.7699 24.9675 33.3274 24.9146 32.1062V26.531H20V28.4425H22.6951V32.1062C22.6951 36.5664 25.2317 37.8938 26.5 38Z" fill="#A8893A" />
                        <path d="M15.8204 15.9308C16.3392 15.9308 16.8149 16.008 17.2472 16.1625C17.6844 16.3121 18.0783 16.5101 18.429 16.7562C18.7846 16.9976 19.0968 17.2534 19.3659 17.5237C19.5388 17.683 19.6973 17.8471 19.8415 18.0161C19.9904 18.185 20.1297 18.3492 20.2594 18.5084C20.3747 18.3492 20.4972 18.1923 20.6269 18.0378C20.7567 17.8833 20.9224 17.712 21.1242 17.5237C21.5277 17.1183 22.0249 16.7514 22.6159 16.4232C23.2116 16.0949 23.9058 15.9308 24.6984 15.9308C25.4287 15.9308 26.0916 16.1094 26.6874 16.4666C27.2879 16.819 27.7635 17.2969 28.1142 17.9002C28.4697 18.4988 28.6475 19.1649 28.6475 19.8986C28.6475 20.4537 28.5442 20.9751 28.3376 21.4626C28.1358 21.9453 27.8548 22.3701 27.4945 22.7369C27.1341 23.099 26.7138 23.3838 26.2334 23.5913C25.7578 23.794 25.2461 23.8954 24.6984 23.8954C24.17 23.8954 23.6848 23.8206 23.2428 23.671C22.8056 23.5165 22.4093 23.321 22.0538 23.0845C21.7031 22.8431 21.3932 22.5921 21.1242 22.3315C20.9512 22.1577 20.7927 21.9863 20.6486 21.8174C20.5044 21.6436 20.3747 21.4771 20.2594 21.3178C20.1297 21.4771 19.9904 21.6436 19.8415 21.8174C19.6973 21.9863 19.5388 22.1577 19.3659 22.3315C19.0968 22.5921 18.7846 22.8431 18.429 23.0845C18.0783 23.321 17.6844 23.5165 17.2472 23.671C16.8149 23.8206 16.3392 23.8954 15.8204 23.8954C15.0806 23.8954 14.4104 23.7168 13.8099 23.3596C13.2093 23.0024 12.7313 22.5221 12.3758 21.9187C12.0203 21.3154 11.8426 20.642 11.8426 19.8986C11.8426 19.3484 11.9435 18.8343 12.1452 18.3564C12.3518 17.8737 12.6353 17.4513 12.9956 17.0893C13.3607 16.7273 13.7834 16.4449 14.2639 16.2422C14.7491 16.0346 15.2679 15.9308 15.8204 15.9308ZM13.4856 19.8986C13.4856 20.3331 13.5889 20.7289 13.7955 21.0861C14.0068 21.4385 14.2879 21.7208 14.6386 21.9332C14.9941 22.1408 15.388 22.2446 15.8204 22.2446C16.296 22.2446 16.7308 22.136 17.1247 21.9187C17.5187 21.7015 17.8814 21.4336 18.2129 21.115C18.429 20.8978 18.6188 20.6879 18.7822 20.4851C18.9455 20.2824 19.092 20.0869 19.2217 19.8986C19.092 19.7249 18.9479 19.539 18.7894 19.3411C18.6356 19.1384 18.4435 18.9284 18.2129 18.7112C17.8958 18.3926 17.5355 18.1247 17.1319 17.9075C16.7332 17.6903 16.296 17.5817 15.8204 17.5817C15.388 17.5817 14.9941 17.6879 14.6386 17.9002C14.2879 18.1078 14.0068 18.3878 13.7955 18.7401C13.5889 19.0877 13.4856 19.4739 13.4856 19.8986ZM27.0044 19.8986C27.0044 19.4739 26.8987 19.0877 26.6874 18.7401C26.4808 18.3878 26.2021 18.1078 25.8514 17.9002C25.5055 17.6879 25.1212 17.5817 24.6984 17.5817C24.3718 17.5817 24.0643 17.6323 23.7761 17.7337C23.4878 17.8302 23.2188 17.9654 22.969 18.1392C22.7191 18.3081 22.4885 18.4988 22.2772 18.7112C22.0177 18.9574 21.8016 19.1963 21.6286 19.428C21.4605 19.6549 21.3404 19.8117 21.2683 19.8986C21.398 20.0869 21.5445 20.2824 21.7079 20.4851C21.8712 20.6879 22.061 20.8978 22.2772 21.115C22.6086 21.4336 22.9714 21.7015 23.3653 21.9187C23.764 22.136 24.2084 22.2446 24.6984 22.2446C25.1212 22.2446 25.5055 22.1408 25.8514 21.9332C26.2021 21.7208 26.4808 21.4385 26.6874 21.0861C26.8987 20.7289 27.0044 20.3331 27.0044 19.8986Z" fill="#A8893A" />
                    </svg>
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-xl md:text-2xl font-bold font-display tracking-wide text-white leading-none drop-shadow-lg">
                        Human Interior
                    </span>
                    <span className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-[0.15em]">
                        Member of HISPACE.AI
                    </span>
                </div>
            </Link>

            {/* Content Bottom Bar - Ultra Premium & Minimal */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-6 md:pb-12">
                    <div className="backdrop-blur-xl bg-black/40 rounded-2xl md:rounded-[2rem] p-4 md:p-8 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                            {/* Outstanding Event Title */}
                            <div className="flex flex-col">
                                <h1 className="text-xl md:text-4xl font-bold text-white tracking-tight leading-normal italic group">
                                    ĐẠI TIỆC <span className="text-gradient-gold not-italic">KHAI TRƯƠNG</span> SHOWROOM
                                    <div className="h-0.5 w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-500 rounded-full mt-1"></div>
                                </h1>
                            </div>

                            {/* Right Section: Countdown & CTA */}
                            <div className="flex items-center justify-between md:justify-end gap-4 md:gap-10">
                                {/* Countdown - Elegant Numerical Display */}
                                <div className="flex items-center gap-2 md:gap-4">
                                    {[
                                        { value: timeLeft.days, label: 'Ngày' },
                                        { value: timeLeft.hours, label: 'Giờ' },
                                        { value: timeLeft.minutes, label: 'Phút' },
                                        { value: timeLeft.seconds, label: 'Giây' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 md:gap-4">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xl md:text-4xl font-light text-white tabular-nums leading-none">
                                                    {String(item.value).padStart(2, '0')}
                                                </span>
                                                <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest mt-1">
                                                    {item.label}
                                                </span>
                                            </div>
                                            {idx < 3 && <span className="text-[#D4AF37] text-lg md:text-2xl font-extralight opacity-30">:</span>}
                                        </div>
                                    ))}
                                </div>

                                {/* VIP CTA Button */}
                                <Link
                                    href="https://human-interior-a-ninh-app-render.vercel.app/"
                                    target="_blank"
                                    className="btn-gradient-gold text-white font-bold py-3 px-6 md:py-5 md:px-10 rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-2 md:gap-3 uppercase tracking-[0.15em] text-xs md:text-sm whitespace-nowrap overflow-hidden relative group"
                                >
                                    <span className="relative z-10">Giữ Chỗ VIP</span>
                                    <span className="material-symbols-outlined text-lg md:text-xl relative z-10 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
