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
                                Trải Nghiệm Thực Tế
                            </h3>
                            <p className="text-gray-300 text-base font-light leading-relaxed font-sans">
                                Tự tay chạm và cảm nhận vật liệu thật, sau đó áp dụng vào bản vẽ 3D <span className="text-white font-medium">trong 30s</span>.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Furniture */}
                    <div className="px-6 py-4 flex flex-col items-center gap-5 group cursor-default">
                        <div className="liquid-glass-dark p-4 rounded-2xl">
                            <span className="material-symbols-outlined text-[56px] text-[#D4AF37] font-thin group-hover:scale-110 transition-transform duration-500">chair</span>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg md:text-xl font-display font-semibold uppercase text-white tracking-widest">
                                Tối Ưu Chi Phí
                            </h3>
                            <p className="text-gray-300 text-base font-light leading-relaxed font-sans">
                                Loại bỏ 100% rủi ro lãng phí khi mua đồ không hợp không gian. Ngắm nhìn kết quả <span className="text-white font-medium">trước khi chi tiền</span>.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Decor */}
                    <div className="px-6 py-4 flex flex-col items-center gap-5 group cursor-default">
                        <div className="liquid-glass-dark p-4 rounded-2xl">
                            <span className="material-symbols-outlined text-[56px] text-[#D4AF37] font-thin group-hover:scale-110 transition-transform duration-500">category</span>
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
        </section>
    );
};

export default ValuePropsSection;
