"use client";

const ConsultantSection = () => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="consultant-section" className="py-12 bg-gradient-to-b from-white to-gray-50/50 border-t border-gray-100 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #E05C3E 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center flex flex-col items-center gap-6">
                    {/* Main Heading with Visual Hierarchy */}
                    <h3 className="text-2xl md:text-4xl font-bold text-[#171717] font-display leading-tight max-w-3xl">
                        Bạn muốn{' '}
                        <span className="relative inline-block">
                            <span className="text-[#E05C3E] relative z-10 bg-gradient-to-r from-[#E05C3E] to-[#C8482D] bg-clip-text text-transparent">
                                Book lịch Tư vấn Kiến trúc sư
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#E05C3E]/10 -z-0 rounded-sm"></span>
                        </span>
                        {' '}trước sự kiện
                    </h3>

                    {/* Animated Down Arrow with Pulse */}
                    <div className="flex flex-col items-center gap-3 mt-2">
                        <div className="relative">
                            {/* Pulse Ring */}
                            <div className="absolute inset-0 w-14 h-14 rounded-full bg-[#E05C3E]/20 animate-ping"></div>

                            {/* Main Icon */}
                            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#E05C3E] to-[#C8482D] flex items-center justify-center shadow-lg shadow-[#E05C3E]/30 animate-bounce">
                                <span className="material-symbols-outlined text-white text-3xl font-light">
                                    keyboard_arrow_down
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultantSection;
