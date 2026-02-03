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
    "/images/projects/japfa/A1.webp",
    "/images/projects/model-house-2br-v1/V1.webp",
    "/images/projects/model-house-1br-v2/A1.webp",
    "/images/projects/japfa/B1.webp",
    "/images/projects/model-house-2br-v2/B1.webp",
    "/images/projects/japfa/A1.webp",
    "/images/projects/model-house-2br-v1/V1.webp",
    "/images/projects/model-house-1br-v2/A1.webp",
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
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-3 md:mb-4">
                        KHÔNG GIAN SANG TRỌNG
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 px-2">
                        Hình Ảnh Showroom <span className="gradient-gold-text">Human Interior</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                        Trải nghiệm không gian nội thất đẳng cấp, nơi khách hàng của bạn sẽ được tư vấn và chăm sóc tận tình.
                    </p>
                </motion.div>
            </div>

            {/* Full Width Carousel */}
            <div className="relative w-full">
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
        </section>
    );
};

export default ShowroomSection;


