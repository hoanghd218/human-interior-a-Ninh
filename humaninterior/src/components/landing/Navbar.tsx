"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [showFloatingBar, setShowFloatingBar] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const consultantSection = document.getElementById('consultant-section');

            let shouldHide = false;
            if (consultantSection) {
                const rect = consultantSection.getBoundingClientRect();
                shouldHide = rect.top < window.innerHeight;
            }

            if (scrollY > 300 && !shouldHide) {
                setShowFloatingBar(true);
            } else {
                setShowFloatingBar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-200 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-10 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                            <svg viewBox="0 0 40 40" className="w-full h-full fill-[#333]">
                                <path d="M7 2H9.53659V38H7V2Z" fill="#A8893A" />
                                <path d="M30.4634 2H33V38H30.4634V2Z" fill="#A8893A" />
                                <path d="M13.6585 2H9.53659V4.23009H12.5488C14.578 4.23009 15.1911 6.67257 15.2439 7.89381V13.469H20.1585V11.5575H17.4634V7.89381C17.4634 3.43363 14.9268 2.10619 13.6585 2Z" fill="#A8893A" />
                                <path d="M26.5 2H30.622V4.23009H27.6098C25.5805 4.23009 24.9675 6.67257 24.9146 7.89381V13.469H20V11.5575H22.6951V7.89381C22.6951 3.43363 25.2317 2.10619 26.5 2Z" fill="#A8893A" />
                                <path d="M13.6585 38H9.53659V35.7699H12.5488C14.578 35.7699 15.1911 33.3274 15.2439 32.1062V26.531H20.1585V28.4425H17.4634V32.1062C17.4634 36.5664 14.9268 37.8938 13.6585 38Z" fill="#A8893A" />
                                <path d="M26.5 38H30.622V35.7699H27.6098C25.5805 35.7699 24.9675 33.3274 24.9146 32.1062V26.531H20V28.4425H22.6951V32.1062C22.6951 36.5664 25.2317 37.8938 26.5 38Z" fill="#A8893A" />
                                <path d="M15.8204 15.9308C16.3392 15.9308 16.8149 16.008 17.2472 16.1625C17.6844 16.3121 18.0783 16.5101 18.429 16.7562C18.7846 16.9976 19.0968 17.2534 19.3659 17.5237C19.5388 17.683 19.6973 17.8471 19.8415 18.0161C19.9904 18.185 20.1297 18.3492 20.2594 18.5084C20.3747 18.3492 20.4972 18.1923 20.6269 18.0378C20.7567 17.8833 20.9224 17.712 21.1242 17.5237C21.5277 17.1183 22.0249 16.7514 22.6159 16.4232C23.2116 16.0949 23.9058 15.9308 24.6984 15.9308C25.4287 15.9308 26.0916 16.1094 26.6874 16.4666C27.2879 16.819 27.7635 17.2969 28.1142 17.9002C28.4697 18.4988 28.6475 19.1649 28.6475 19.8986C28.6475 20.4537 28.5442 20.9751 28.3376 21.4626C28.1358 21.9453 27.8548 22.3701 27.4945 22.7369C27.1341 23.099 26.7138 23.3838 26.2334 23.5913C25.7578 23.794 25.2461 23.8954 24.6984 23.8954C24.17 23.8954 23.6848 23.8206 23.2428 23.671C22.8056 23.5165 22.4093 23.321 22.0538 23.0845C21.7031 22.8431 21.3932 22.5921 21.1242 22.3315C20.9512 22.1577 20.7927 21.9863 20.6486 21.8174C20.5044 21.6436 20.3747 21.4771 20.2594 21.3178C20.1297 21.4771 19.9904 21.6436 19.8415 21.8174C19.6973 21.9863 19.5388 22.1577 19.3659 22.3315C19.0968 22.5921 18.7846 22.8431 18.429 23.0845C18.0783 23.321 17.6844 23.5165 17.2472 23.671C16.8149 23.8206 16.3392 23.8954 15.8204 23.8954C15.0806 23.8954 14.4104 23.7168 13.8099 23.3596C13.2093 23.0024 12.7313 22.5221 12.3758 21.9187C12.0203 21.3154 11.8426 20.642 11.8426 19.8986C11.8426 19.3484 11.9435 18.8343 12.1452 18.3564C12.3518 17.8737 12.6353 17.4513 12.9956 17.0893C13.3607 16.7273 13.7834 16.4449 14.2639 16.2422C14.7491 16.0346 15.2679 15.9308 15.8204 15.9308ZM13.4856 19.8986C13.4856 20.3331 13.5889 20.7289 13.7955 21.0861C14.0068 21.4385 14.2879 21.7208 14.6386 21.9332C14.9941 22.1408 15.388 22.2446 15.8204 22.2446C16.296 22.2446 16.7308 22.136 17.1247 21.9187C17.5187 21.7015 17.8814 21.4336 18.2129 21.115C18.429 20.8978 18.6188 20.6879 18.7822 20.4851C18.9455 20.2824 19.092 20.0869 19.2217 19.8986C19.092 19.7249 18.9479 19.539 18.7894 19.3411C18.6356 19.1384 18.4435 18.9284 18.2129 18.7112C17.8958 18.3926 17.5355 18.1247 17.1319 17.9075C16.7332 17.6903 16.296 17.5817 15.8204 17.5817C15.388 17.5817 14.9941 17.6879 14.6386 17.9002C14.2879 18.1078 14.0068 18.3878 13.7955 18.7401C13.5889 19.0877 13.4856 19.4739 13.4856 19.8986ZM27.0044 19.8986C27.0044 19.4739 26.8987 19.0877 26.6874 18.7401C26.4808 18.3878 26.2021 18.1078 25.8514 17.9002C25.5055 17.6879 25.1212 17.5817 24.6984 17.5817C24.3718 17.5817 24.0643 17.6323 23.7761 17.7337C23.4878 17.8302 23.2188 17.9654 22.969 18.1392C22.7191 18.3081 22.4885 18.4988 22.2772 18.7112C22.0177 18.9574 21.8016 19.1963 21.6286 19.428C21.4605 19.6549 21.3404 19.8117 21.2683 19.8986C21.398 20.0869 21.5445 20.2824 21.7079 20.4851C21.8712 20.6879 22.061 20.8978 22.2772 21.115C22.6086 21.4336 22.9714 21.7015 23.3653 21.9187C23.764 22.136 24.2084 22.2446 24.6984 22.2446C25.1212 22.2446 25.5055 22.1408 25.8514 21.9332C26.2021 21.7208 26.4808 21.4385 26.6874 21.0861C26.8987 20.7289 27.0044 20.3331 27.0044 19.8986Z" fill="#A8893A" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-display tracking-wide text-[#333]">
                                Human Interior
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-6 items-center text-sm font-medium text-[#555]">
                        <Link href="#value-props" className="hover:text-[#E05C3E] transition-colors scroll-smooth whitespace-nowrap">
                            VỀ CHÚNG TÔI
                        </Link>
                        <Link href="#featured-projects" className="hover:text-[#E05C3E] transition-colors scroll-smooth whitespace-nowrap">
                            DỰ ÁN THI CÔNG
                        </Link>
                        <Link href="#testimonials" className="hover:text-[#E05C3E] transition-colors scroll-smooth whitespace-nowrap">
                            CÔNG TRÌNH THỰC TẾ
                        </Link>
                        <Link href="#vip-benefits" className="hover:text-[#E05C3E] transition-colors scroll-smooth whitespace-nowrap">
                            ƯU ĐÃI
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex">
                        <Link
                            href="https://human-interior-a-ninh-app-render.vercel.app/"
                            target="_blank"
                            className="bg-[#E05C3E] text-white hover:bg-[#C8482D] px-5 py-2.5 rounded-lg font-bold transition-all duration-300 uppercase text-xs tracking-wide flex items-center gap-2 shadow-lg animate-ripple whitespace-nowrap"
                        >
                            TỰ TAY THIẾT KẾ - NHẬN BÁO GIÁ NGAY
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className="text-[#333] hover:text-[#E05C3E] cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: '80px' }} // Start below the header
            >
                <div className="flex flex-col p-8 space-y-6 text-center">
                    <Link
                        href="#value-props"
                        className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        VỀ CHÚNG TÔI
                    </Link>
                    <Link
                        href="#featured-projects"
                        className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        DỰ ÁN THI CÔNG
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        CÔNG TRÌNH THỰC TẾ
                    </Link>
                    <Link
                        href="#vip-benefits"
                        className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        ƯU ĐÃI
                    </Link>
                    <div className="pt-8 border-t border-gray-100">
                        <Link
                            href="https://human-interior-a-ninh-app-render.vercel.app/"
                            target="_blank"
                            className="bg-[#E05C3E] text-white hover:bg-[#C8482D] w-full py-3 rounded-lg font-bold transition-all duration-300 uppercase text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg animate-ripple"
                        >
                            TỰ TAY THIẾT KẾ
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
