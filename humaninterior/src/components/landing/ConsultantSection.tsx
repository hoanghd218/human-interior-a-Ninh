"use client";

const ConsultantSection = () => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="consultant-section" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center justify-between gap-8 md:gap-12">
                <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#333] font-display">
                        Bạn muốn Book lịch Tư vấn Kiến trúc sư trước sự kiện
                    </h3>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    {/* Design Consultant Button */}
                    <button
                        className="bg-[#E05C3E] hover:bg-[#C8482D] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 uppercase text-base tracking-wide min-w-[240px] cursor-pointer animate-ripple"
                        onClick={scrollToRegister}
                    >
                        TỰ TAY THIẾT KẾ
                        <span className="material-symbols-outlined font-bold">arrow_forward</span>
                    </button>

                    {/* Construction Consultant Button */}
                    <button
                        className="bg-white hover:bg-orange-50 text-[#E05C3E] border-2 border-[#E05C3E] px-8 py-4 rounded-lg font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 uppercase text-base tracking-wide min-w-[240px] cursor-pointer"
                        onClick={scrollToRegister}
                    >
                        TÙY CHỈNH 3D CÓ SẴN
                        <span className="material-symbols-outlined font-bold">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ConsultantSection;
