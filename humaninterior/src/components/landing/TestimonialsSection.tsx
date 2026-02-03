"use client";

import VideoShort from "@/components/ui/VideoShort";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-[100px] bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-[32px] font-bold text-[#333] font-display mb-4">
                    Khách Hàng Nói Về Chúng Tôi
                </h2>
                <p className="text-[#555] max-w-2xl mx-auto">
                    Sự hài lòng của khách hàng là minh chứng rõ nét nhất cho chất lượng.
                </p>
                <div className="w-24 h-1 bg-[#E05C3E] mx-auto mt-6"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <VideoShort
                    videoId="8YulUh_QZK4"
                    title="Anh Minh - Eco Retreat"
                    subtitle="Tận hưởng sự thư thái tuyệt đối trong không gian Modern Minimal."
                    thumbnail="/images/testimonials/anh_minh_eco_retreat.png"
                />

                <VideoShort
                    videoId="zYoERJBWUeg"
                    title="Chị Lan - Vinhome Grand Park"
                    subtitle="Đẳng cấp hội tụ trong từng đường nét nội thất Luxury tinh tế."
                    thumbnail="/images/testimonials/chi_lan_vinhome.png"
                />

                <VideoShort
                    videoId="XyeZZhhwRqI"
                    title="Chị Thảo - Sala Thủ Thiêm"
                    subtitle="Vẻ đẹp quyến rũ vượt thời gian của phong cách Neo-Classical."
                    thumbnail="/images/testimonials/chi_thao_sala.png"
                />
            </div>
        </section>
    );
};

export default TestimonialsSection;
