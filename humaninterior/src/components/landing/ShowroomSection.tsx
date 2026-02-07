"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const showroomImages = [
    { src: "/images/showroom-3d/A1.webp", label: "Không gian tổ chức sự kiện" },
    { src: "/images/showroom-3d/B1.webp", label: "Văn phòng làm việc mở" },
    { src: "/images/showroom-3d/C1.webp", label: "Phòng họp chuyên nghiệp" },
    { src: "/images/showroom-3d/D1.webp", label: "Khu vực trưng bày" },
    { src: "/images/showroom-3d/F1.webp", label: "Không gian sáng tạo" },
    { src: "/images/showroom-3d/A2.webp", label: "Event Space Detail" },
    { src: "/images/showroom-3d/B2.webp", label: "Co-working Detail" },
];

const ShowroomSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

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
                window.addEventListener("resize", checkScrollButtons);
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

    return (
        <section id="showroom" className="py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Matching Partners Style */}
                <div className="text-center mb-16 px-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#E05C3E]/10 text-[#E05C3E] text-xs md:text-sm font-bold mb-4 tracking-widest uppercase">
                        KHÔNG GIAN SANG TRỌNG
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#171717] font-display leading-tight uppercase tracking-tight">
                        Địa chỉ Showroom <span className="text-[#E05C3E]">Human Interior</span>
                    </h2>
                    <p className="text-gray-500 mx-auto text-lg font-light leading-relaxed">
                        Trải nghiệm <span className="text-[#171717] font-medium">không gian nội thất đẳng cấp</span>, nơi bạn sẽ được <span className="text-[#E05C3E] font-medium">tư vấn và chăm sóc tận tình</span>.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative mb-12 group">
                    <div
                        ref={sliderRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-8 px-4 md:px-0 -mx-4 md:mx-0"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {showroomImages.map((item, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-[300px] md:w-[450px] aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group/item"
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-bold text-lg">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center transition-all duration-300 z-20 ${canScrollLeft ? "opacity-100 scale-100 hover:bg-[#E05C3E] hover:text-white" : "opacity-0 scale-90 pointer-events-none"}`}
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center transition-all duration-300 z-20 ${canScrollRight ? "opacity-100 scale-100 hover:bg-[#E05C3E] hover:text-white" : "opacity-0 scale-90 pointer-events-none"}`}
                    >
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>

                {/* Google Maps Section - Integrated */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#171717]">
                            <span className="text-[#E05C3E]">Bản đồ</span> vị trí
                        </h3>
                        <p className="text-gray-500 font-medium">MIDORI PARK, Bình Dương</p>
                    </div>

                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 shadow-2xl aspect-video md:aspect-[21/9]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5867406848333!2d106.6797949!3d11.0695783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cf004a539e8d%3A0xc7f36629f670191a!2sHUMAN%20INTERIOR!5e0!3m2!1sen!2s!4v1770367967138!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Human Interior Showroom Location"
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://maps.app.goo.gl/3rGo9dqpZMBLvGaz9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#E05C3E] text-white font-bold hover:bg-[#C8482D] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                        >
                            <span className="material-symbols-outlined">map</span>
                            <span>Chỉ đường trên Google Maps</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowroomSection;
