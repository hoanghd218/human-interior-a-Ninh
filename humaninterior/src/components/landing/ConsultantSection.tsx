"use client";

const ConsultantSection = () => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="consultant-section" className="py-6 bg-white border-t border-gray-100 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center justify-between gap-8 md:gap-12">
                <div className="text-center md:text-left flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-[#333] font-display">
                        Bạn muốn Book lịch Tư vấn Kiến trúc sư trước sự kiện
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default ConsultantSection;
