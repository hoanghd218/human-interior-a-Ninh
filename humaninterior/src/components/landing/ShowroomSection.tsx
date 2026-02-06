"use client";

import Link from "next/link";

const ShowroomSection = () => {
    return (
        <section className="py-24 bg-[#F9F9F9] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#E05C3E]/10 text-[#E05C3E] text-sm font-semibold mb-4">
                        KHÔNG GIAN SANG TRỌNG
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#171717] font-display">
                        Địa chỉ Showroom <span className="text-[#E05C3E]">Human Interior</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Trải nghiệm không gian nội thất đẳng cấp, nơi khách hàng của bạn sẽ được tư vấn và chăm sóc tận tình.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-6 md:mb-8">
                        <p className="text-sm md:text-base text-gray-500 font-medium">
                            MIDORI PARK, Bình Dương
                        </p>
                    </div>

                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-2xl aspect-video md:aspect-[21/9]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0123!2d106.6775949!3d11.0695783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1a3e1e1e1e1%3A0x1234567890abcdef!2sMIDORI%20PARK!5e0!3m2!1sen!2s!4v1738741000000!5m2!1sen!2s"
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

                    <div className="text-center mt-8">
                        <a
                            href="https://maps.app.goo.gl/3rGo9dqpZMBLvGaz9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E05C3E] text-white font-bold hover:bg-[#C8482D] transition-colors shadow-lg hover:shadow-xl text-sm md:text-base cursor-pointer"
                        >
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Chỉ đường trên Google Maps</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowroomSection;
