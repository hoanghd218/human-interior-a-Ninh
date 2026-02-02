"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
const showroomImages = [
    "/images/projects/japfa/A1.webp",
    "/images/projects/model-house-2br-v1/V1.webp",
    "/images/projects/model-house-1br-v2/A1.webp",
    "/images/projects/japfa/B1.webp",
    "/images/projects/model-house-2br-v2/B1.webp",
];

const ShowroomSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        KHÔNG GIAN SANG TRỌNG
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mb-4">
                        Hình Ảnh Showroom <span className="gradient-gold-text">Human Interior</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Trải nghiệm không gian nội thất đẳng cấp, nơi khách hàng của bạn sẽ được tư vấn và chăm sóc tận tình.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {showroomImages.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/3 pl-4">
                                    <div className="p-1">
                                        <div className="overflow-hidden rounded-xl border border-border/50 bg-secondary/20 shadow-sm aspect-video relative group">
                                            <img
                                                src={image}
                                                alt={`Human Interior Showroom ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
                        <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default ShowroomSection;
