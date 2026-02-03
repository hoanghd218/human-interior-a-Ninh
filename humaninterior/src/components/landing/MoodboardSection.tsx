"use client";

const MoodboardSection = () => {
    return (
        <>
            <div className="mb-16 text-center px-4 relative">
                <span className="block text-[#D4AF37] text-xs font-bold tracking-[0.2em] mb-3 uppercase">
                    Human Interior Design
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-[#171717] uppercase tracking-[0.15em] leading-tight">
                    Không Gian Sáng Tạo<br className="hidden md:block" /> Tùy Chỉnh Human Interior
                </h2>
            </div>
            <section id="moodboard" className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-4 gap-0">
                    <div className="relative group h-full">
                        <img
                            alt="Interior Detail Japfa"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="/images/projects/japfa/B12.webp"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="relative group h-full">
                        <img
                            alt="Luxury Material Concept"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="/images/projects/model-house-2br-v1/V11.webp"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="relative group h-full">
                        <img
                            alt="Gold Fixture Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="/images/projects/model-house-2br-b1/B12.webp"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="relative group h-full">
                        <img
                            alt="Architectural Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="/images/projects/model-house-1br-a1/A7.webp"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>

                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-16 pointer-events-none text-center px-4">

                    <h3 className="text-white font-display text-4xl md:text-6xl tracking-[0.15em] uppercase mb-6 drop-shadow-2xl">
                        Moodboard <span className="font-light text-[#D4AF37]">&</span> Materials
                    </h3>

                    <div className="space-y-3 max-w-2xl mx-auto">
                        <p className="text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
                            Kết nối Bản vẽ Ý tưởng với Vật liệu thực tế
                        </p>
                        <p className="text-white/80 text-sm md:text-base italic font-serif tracking-wide drop-shadow-md">
                            &quot;Gia chủ là người Quyết định tính thực tế bản 3D ngôi nhà của mình,<br className="hidden md:block" /> đừng quá phụ thuộc Kiến trúc sư&quot;
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MoodboardSection;
