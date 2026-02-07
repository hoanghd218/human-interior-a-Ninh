"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import VideoShort from "@/components/ui/VideoShort";

const testimonials = [
    {
        videoId: "8YulUh_QZK4",
        title: "Anh Minh - Eco Retreat",
        subtitle: "Tận hưởng sự thư thái tuyệt đối trong không gian Modern Minimal.",
        thumbnail: "/images/testimonials/anh_minh_eco_retreat.png",
    },
    {
        videoId: "zYoERJBWUeg",
        title: "Chị Lan - Vinhome Grand Park",
        subtitle: "Đẳng cấp hội tụ trong từng đường nét nội thất Luxury tinh tế.",
        thumbnail: "/images/testimonials/chi_lan_vinhome.png",
    },
    {
        videoId: "XyeZZhhwRqI",
        title: "Chị Thảo - Sala Thủ Thiêm",
        subtitle: "Vẻ đẹp quyến rũ vượt thời gian của phong cách Neo-Classical.",
        thumbnail: "/images/testimonials/chi_thao_sala.png",
    },
    {
        videoId: "8YulUh_QZK4",
        title: "Anh Phong - Masteri An Phú",
        subtitle: "Không gian sống hoàn hảo với thiết kế tối giản đầy tinh tế.",
        thumbnail: "/images/testimonials/anh_minh_eco_retreat.png",
    },
    {
        videoId: "zYoERJBWUeg",
        title: "Chị Hương - The Estella",
        subtitle: "Phong cách Scandinavian ấm áp, gần gũi thiên nhiên.",
        thumbnail: "/images/testimonials/chi_lan_vinhome.png",
    },
    {
        videoId: "XyeZZhhwRqI",
        title: "Anh Khoa - Sunrise City",
        subtitle: "Industrial loft hiện đại, cá tính và độc đáo.",
        thumbnail: "/images/testimonials/chi_thao_sala.png",
    },
    {
        videoId: "8YulUh_QZK4",
        title: "Chị Mai - Vinhome Central Park",
        subtitle: "Thiết kế Japandi tinh tế, hài hòa giữa phương Đông và phương Tây.",
        thumbnail: "/images/testimonials/anh_minh_eco_retreat.png",
    },
    {
        videoId: "zYoERJBWUeg",
        title: "Anh Tuấn - Feliz En Vista",
        subtitle: "Phong cách Contemporary sang trọng, đậm chất riêng biệt.",
        thumbnail: "/images/testimonials/chi_lan_vinhome.png",
    },
    {
        videoId: "XyeZZhhwRqI",
        title: "Chị Ngọc - Diamond Island",
        subtitle: "Không gian Mediterranean tràn ngập ánh sáng và sức sống.",
        thumbnail: "/images/testimonials/chi_thao_sala.png",
    },
    {
        videoId: "8YulUh_QZK4",
        title: "Anh Đức - Palm Heights",
        subtitle: "Art Deco đương đại, tinh hoa của sự xa hoa và nghệ thuật.",
        thumbnail: "/images/testimonials/anh_minh_eco_retreat.png",
    },
];

const TestimonialsSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const checkScrollButtons = useCallback(() => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    useEffect(() => {
        checkScrollButtons();
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener("scroll", checkScrollButtons);
            window.addEventListener("resize", checkScrollButtons);
            return () => {
                slider.removeEventListener("scroll", checkScrollButtons);
                window.removeEventListener("resize", checkScrollButtons);
            };
        }
    }, [checkScrollButtons]);

    const scroll = useCallback((direction: "left" | "right") => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth * 0.8;
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <section id="testimonials" className="py-[100px] bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1C1917] font-display mb-4 tracking-wide">
                    Khách Hàng Nói Về Chúng Tôi
                </h2>
                <p className="text-[#44403C] max-w-2xl mx-auto font-sans font-light text-lg">
                    Sự hài lòng của khách hàng là minh chứng rõ nét nhất cho chất lượng.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#D4AF37] mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Full-width slider container */}
            <div className="relative w-full">
                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    aria-label="Scroll left"
                    className={`absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${canScrollLeft
                        ? "opacity-100 hover:bg-[#E05C3E] hover:text-white hover:scale-110"
                        : "opacity-30 cursor-not-allowed"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    aria-label="Scroll right"
                    className={`absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${canScrollRight
                        ? "opacity-100 hover:bg-[#E05C3E] hover:text-white hover:scale-110"
                        : "opacity-30 cursor-not-allowed"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Slider Track */}
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    className={`flex justify-center gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-8 lg:px-16 py-4 scroll-smooth ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                        }`}
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] transition-all duration-400 hover:scale-[1.02] hover:shadow-golden liquid-glass rounded-2xl overflow-hidden"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <VideoShort
                                videoId={testimonial.videoId}
                                title={testimonial.title}
                                subtitle={testimonial.subtitle}
                                thumbnail={testimonial.thumbnail}
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Scroll Indicator Dots */}
            <div className="flex justify-center gap-3 mt-8 mb-12">
                {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            if (sliderRef.current) {
                                const scrollAmount = (sliderRef.current.scrollWidth - sliderRef.current.clientWidth) * (i / (Math.ceil(testimonials.length / 3) - 1));
                                sliderRef.current.scrollTo({
                                    left: scrollAmount,
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className="w-3 h-3 rounded-full bg-[#D4AF37]/30 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F2D06B] transition-all duration-400 cursor-pointer hover:scale-150 hover:shadow-glow"
                        aria-label={`Go to slide group ${i + 1}`}
                    />
                ))}
            </div>

            {/* CTA Buttons - Matching Image 2 */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 mt-8">
                <a
                    className="bg-[#E05C3E] hover:bg-[#C8482D] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 uppercase text-base tracking-wide min-w-[240px] cursor-pointer"
                    href="https://human-interior-a-ninh-app-render.vercel.app/"
                >
                    TỰ TAY THIẾT KẾ
                </a>
                <a
                    className="bg-white hover:bg-orange-50 text-[#E05C3E] border-2 border-[#E05C3E] px-8 py-4 rounded-lg font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 uppercase text-base tracking-wide min-w-[240px] cursor-pointer"
                    href="https://human-interior-a-ninh-app-render.vercel.app/"
                >
                    TÙY CHỈNH 3D CÓ SẴN
                </a>
            </div>
        </section>
    );
};

export default TestimonialsSection;
