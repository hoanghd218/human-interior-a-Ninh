"use client";

import Link from "next/link";

const VipBenefitsSection = () => {
    return (
        <section id="vip-benefits" className="py-[100px] bg-[#F9F9F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-display leading-[1.3] md:leading-normal font-medium text-[#1C1917] uppercase tracking-[0.05em]">
                        <span className="text-[#E05C3E] font-bold inline-block mr-2">ĐẶC QUYỀN VIP</span>
                        GIỚI HẠN TRONG SỰ KIỆN
                    </h2>

                    <div className="flex justify-center">
                        <Link
                            href="https://ai.hispace.ai"
                            target="_blank"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden rounded-sm transition-all duration-400 border border-[#D4AF37] hover:bg-[#D4AF37]/10 w-full md:w-auto max-w-3xl liquid-glass iridescent-border"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                                <span className="font-sans text-lg text-[#1C1917] italic text-center leading-relaxed">
                                    Chỉ còn <span className="text-[#E05C3E] font-bold">12/50</span> suất quà tặng đặc biệt dành cho khách mời đăng ký sớm
                                </span>
                            </div>
                            <span className="material-symbols-outlined text-[#D4AF37] text-2xl group-hover:translate-x-1 transition-transform duration-400">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>

                <div id="vip-benefits" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Card 1: Free Design (Best Seller) - SWAPPED TO LEFT */}
                    <div className="group relative h-[420px] rounded-[12px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-glow hover:-translate-y-2 ring-1 ring-[#D4AF37]/20 cursor-pointer">
                        <img
                            alt="Architect Sketching"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="/images/projects/model-house-2br-v1/V6.webp"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>

                        {/* TOP CONTENT */}
                        <div className="absolute top-0 left-0 w-full p-8 pt-8 z-20">
                            <span className="inline-block border border-[#D4AF37] text-[#D4AF37] bg-black/80 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm mb-6">
                                Best Seller
                            </span>
                            <div className="space-y-2">
                                <p className="text-white/90 text-lg font-light leading-relaxed">
                                    Miễn phí Gói Tư vấn chuyên sâu cùng Kiến trúc sư cho KH.
                                </p>
                                <p className="font-display text-[#D4AF37] text-xl">
                                    Số lượng có hạn: 20 bộ
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 text-[#D4AF37] opacity-80 transition-opacity duration-300 group-hover:opacity-100 z-10">
                            <span className="material-symbols-outlined text-[60px] font-thin">architecture</span>
                        </div>

                        {/* BOTTOM CONTENT */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold font-display mb-2 text-white">
                                Miễn Phí 100% Thiết Kế
                            </h3>
                            <p className="text-white/80 text-sm font-light italic">
                                Khi ký hợp đồng thi công trọn gói ngay tại sự kiện.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Gift Set - SWAPPED TO CENTER */}
                    {/* Card 2: Gift Set - SWAPPED TO CENTER */}
                    <div className="group relative h-[420px] rounded-[12px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-glow hover:-translate-y-2 cursor-pointer">
                        <img
                            alt="Interior Decor"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="/images/projects/model-house-2br-b1/B10.webp"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>

                        {/* TOP CONTENT */}
                        <div className="absolute top-0 left-0 w-full p-8 pt-8 z-20">
                            <span className="inline-block border border-white/40 text-white bg-black/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm mb-6">
                                Signature
                            </span>
                            <div className="space-y-2">
                                <p className="text-white/90 text-lg font-light leading-relaxed">
                                    Bộ sưu tập Pha lê nghệ thuật cao cấp.
                                </p>
                                <p className="font-display text-[#D4AF37] text-xl">
                                    Phiên bản giới hạn
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 text-[#D4AF37] opacity-80 transition-opacity duration-300 group-hover:opacity-100 z-10">
                            <span className="material-symbols-outlined text-[60px] font-thin">redeem</span>
                        </div>

                        {/* BOTTOM CONTENT */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold font-display mb-2 text-white">
                                Bộ Quà Tặng Pha Lê
                            </h3>
                            <p className="text-white/80 text-sm font-light italic">
                                Dành cho Khách mời Book lịch Tư vấn cùng Kiến trúc sư trưởng.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Limited Offer */}
                    <div className="group relative h-[420px] rounded-[12px] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-glow hover:-translate-y-2 cursor-pointer">
                        <img
                            alt="Abstract Timer"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="/images/projects/japfa/C3.webp"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>

                        {/* TOP CONTENT */}
                        <div className="absolute top-0 left-0 w-full p-8 pt-8 z-20">
                            <span className="inline-block border border-white/40 text-white bg-black/50 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm mb-6">
                                Limited
                            </span>
                            <div className="space-y-2">
                                <p className="text-white/90 text-lg font-light leading-relaxed">
                                    Chương trình bốc thăm trúng thưởng xe SH Mode.
                                </p>
                                <p className="font-display text-[#D4AF37] text-xl">
                                    Dành cho 01 Khách May Mắn
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 text-[#D4AF37] opacity-80 transition-opacity duration-300 group-hover:opacity-100 z-10">
                            <span className="material-symbols-outlined text-[60px] font-thin">timer</span>
                        </div>

                        {/* BOTTOM CONTENT */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold font-display mb-2 text-white">
                                Ưu Đãi Có Hạn
                            </h3>
                            <p className="text-white/80 text-sm font-light italic mb-4">
                                Dành cho Khách mời Đặt cọc Hợp đồng Thiết kế.
                            </p>
                            <button
                                className="text-[#D4AF37] font-bold text-sm uppercase tracking-wide hover:underline flex items-center gap-2 bg-transparent border-none cursor-pointer"
                                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Đăng ký ngay <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-[#555] italic text-lg">
                        * Cùng nhiều phần quà ý nghĩa cho tất cả Khách mời đã Check-in tại sự kiện
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VipBenefitsSection;
