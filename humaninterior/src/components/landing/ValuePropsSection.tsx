"use client";

const ValuePropsSection = () => {
    return (
        <section id="value-props" className="py-[100px] relative">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Modern Luxury Living Room"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsbWw4_B4KZYNgbRTuTy38OVdNehPIJYi3jEsXREKQ-qZh88lYiNffMDs5CDoskr86EbpJWp1VgtzrDPRrKaCkrlDoISuGt68rjz8abbbbcRwSIE5Mg6rcDUUOMnVhWDxmizuX8QyF53hxPY23BWhxoUhm3bE7FriyJD3aG5-ejjhQeyU3bbPcZLyLY7v4-dk9xLMzCl3If8FP7ZdTn3IjsaxKiB2PE0TPSI8hXEIDA4luDU3b0muvZE_F8lwqw37PdmdXxr90g648"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {/* Column 1: Materials */}
                    <div className="px-6 py-4 flex flex-col items-center gap-5 group cursor-default">
                        <div className="liquid-glass-dark p-4 rounded-2xl">
                            <span className="material-symbols-outlined text-[56px] text-[#D4AF37] font-thin group-hover:scale-110 transition-transform duration-500">visibility</span>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg md:text-xl font-display font-semibold uppercase text-white tracking-widest">
                                Thay Đổi Vật Liệu
                            </h3>
                            <div className="space-y-1">
                                <p className="text-gray-300 text-base font-light leading-relaxed font-sans">
                                    Tùy chỉnh 3D theo vật liệu thực tế lựa chọn <span className="text-white font-medium">trong 30s</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Furniture */}
                    <div className="px-6 py-4 flex flex-col items-center gap-5 group cursor-default">
                        <div className="liquid-glass-dark p-4 rounded-2xl">
                            <span className="material-symbols-outlined text-[56px] text-[#D4AF37] font-thin group-hover:scale-110 transition-transform duration-500">group</span>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg md:text-xl font-display font-semibold uppercase text-white tracking-widest">
                                Thay Đổi Nội Thất
                            </h3>
                            <div className="space-y-1">
                                <p className="text-gray-300 text-base font-light leading-relaxed font-sans">
                                    Nhìn thấy đồ đẹp ghép vào thiết ngay <span className="text-white font-medium">trong 1 phút</span>.
                                </p>
                                <p className="text-gray-300 text-base font-light leading-relaxed font-sans">
                                    Tránh lãng phí khi chọn sai sofa, bàn ăn, ...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Decor */}
                    <div className="px-6 py-4 flex flex-col items-center gap-5 group cursor-default">
                        <div className="liquid-glass-dark p-4 rounded-2xl">
                            <span className="material-symbols-outlined text-[56px] text-[#D4AF37] font-thin group-hover:scale-110 transition-transform duration-500">emoji_events</span>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg md:text-xl font-display font-semibold uppercase text-white tracking-widest">
                                Thay Đổi Từng Đồ Decor
                            </h3>
                            <p className="text-gray-300 text-base font-light leading-relaxed font-sans">
                                Thấy được, chạm được, ưng ý là <span className="text-white font-medium">thay ngay trong 3D</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Aligned Premium Gold CTA */}
            <div className="mt-16 flex flex-col items-center relative z-10">
                <div className="relative group">
                    {/* Golden Glow Effect */}
                    <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <a
                        href="https://human-interior-a-ninh-app-render.vercel.app/"
                        className="btn-gradient-gold relative inline-flex items-center gap-4 px-10 py-5 text-white rounded-2xl font-display font-bold transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.5)] hover:-translate-y-1.5 active:scale-95 overflow-hidden group"
                    >
                        {/* Skew Shimmer Layer (aligned with Giữ Chỗ VIP style) */}
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <span className="relative z-10 uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
                            TÙY CHỈNH 3D CÓ SẴN
                        </span>

                        <span className="material-symbols-outlined text-xl relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ValuePropsSection;
