"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const showroomImages = [
    // Event Space (Không gian tổ chức sự kiện)
    "/images/showroom-3d/A1.webp",
    "/images/showroom-3d/A2.webp",
    "/images/showroom-3d/A3.webp",
    "/images/showroom-3d/A4.webp",
    "/images/showroom-3d/A5.webp",
    // Co-working Space (Văn phòng làm việc mở)
    "/images/showroom-3d/B1.webp",
    "/images/showroom-3d/B2.webp",
    "/images/showroom-3d/B3.webp",
    "/images/showroom-3d/B4.webp",
    "/images/showroom-3d/B5.webp",
    // Meeting Rooms
    "/images/showroom-3d/C1.webp",
    "/images/showroom-3d/C2.webp",
    "/images/showroom-3d/C3.webp",
    // Display Areas
    "/images/showroom-3d/D1.webp",
    "/images/showroom-3d/D2.webp",
    "/images/showroom-3d/D3.webp",
];

const ShowroomSection = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="py-12 md:py-24 bg-background relative overflow-hidden ">
            {/* Header - Centered */}
            <div className="container px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-semibold mb-3 md:mb-4 tracking-wide md:tracking-wider leading-relaxed">
                        <span className="font-bold">Không gian tổ chức sự kiện</span>
                        {" • "}
                        <span className="font-bold">Văn phòng làm việc mở</span>
                        {" "}
                        dành cho Đại lý
                    </span>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 px-4 leading-tight">
                        <span className="text-primary font-black">All In One</span>
                        {" "}
                        <span className="text-foreground/90 font-bold text-lg md:text-2xl lg:text-3xl">ngay tại</span>
                        <br />
                        <span className="text-foreground">Showroom</span> <span className="gradient-gold-text">Human Interior</span>
                    </h2>
                    <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
                        Trải nghiệm <span className="font-semibold text-foreground">không gian nội thất đẳng cấp</span>,
                        <br className="hidden md:block" />
                        nơi khách hàng của bạn sẽ được <span className="font-semibold text-foreground">tư vấn và chăm sóc tận tình</span>.
                    </p>
                </motion.div>

                {/* Carousel - Inside Container */}
                <div className="relative">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                                stopOnInteraction: false,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {showroomImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[80%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        className="p-1"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="overflow-hidden rounded-lg md:rounded-xl border border-border/50 bg-secondary/20 shadow-lg aspect-video relative group">
                                            <img
                                                src={image}
                                                alt={`Human Interior Showroom ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Desktop Navigation Arrows */}
                        <CarouselPrevious className="hidden md:flex left-4 lg:left-8 border-primary/20 hover:bg-primary/10 hover:text-primary w-10 h-10 lg:w-12 lg:h-12" />
                        <CarouselNext className="hidden md:flex right-4 lg:right-8 border-primary/20 hover:bg-primary/10 hover:text-primary w-10 h-10 lg:w-12 lg:h-12" />
                    </Carousel>

                    {/* Mobile Dot Indicators */}
                    <div className="flex md:hidden justify-center mt-4 gap-2 px-4">
                        {showroomImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index
                                    ? "bg-primary w-6"
                                    : "bg-primary/30"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Google Maps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16"
                >
                    <div className="text-center mb-6 md:mb-8">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 md:mb-3">
                            <span className="text-primary">Địa chỉ</span> Showroom
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                            27 Nguyễn Ư Dĩ, Thảo Điền, Quận 2, TP. Hồ Chí Minh
                        </p>
                    </div>

                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-2xl aspect-video md:aspect-[21/9]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d106.7234567890123!3d10.8123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzQ0LjQiTiAxMDbCsDQzJzI0LjQiRQ!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
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

                    <div className="text-center mt-6">
                        <a
                            href="https://maps.app.goo.gl/3rGo9dqpZMBLvGaz9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="hidden md:inline">Chỉ đường trên Google Maps</span>
                            <span className="md:hidden">Chỉ đường</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ShowroomSection;
