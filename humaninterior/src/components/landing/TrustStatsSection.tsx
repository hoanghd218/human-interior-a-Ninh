"use client";

import Counter from "@/components/ui/Counter";

const TrustStatsSection = () => {
    return (
        <section className="py-16 bg-[#171717] text-white border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center gap-2 p-4">
                        <span className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-display">
                            <Counter end={350} suffix="+" />
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
                            Dự án đã thực hiện
                        </span>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center gap-2 p-4 pl-8">
                        <span className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-display">
                            <Counter end={10} suffix="+" />
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
                            Năm kinh nghiệm
                        </span>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center gap-2 p-4 pl-8">
                        <span className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-display">
                            <Counter end={98} suffix="%" />
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
                            Khách hàng hài lòng
                        </span>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center gap-2 p-4 pl-8">
                        <span className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-display">
                            <Counter end={50} suffix="+" />
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
                            Đối tác chiến lược
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustStatsSection;
