"use client";

import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const JAPFA_IMAGES = [
    ...Array.from({ length: 21 }, (_, i) => `/images/projects/japfa/A${i + 1}.webp`),
    ...Array.from({ length: 25 }, (_, i) => `/images/projects/japfa/B${i + 1}.webp`),
    ...Array.from({ length: 4 }, (_, i) => `/images/projects/japfa/C${i + 1}.webp`),
];

const JapfaCaseStudy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectData = {
        title: "Dự án Japfa Bình Dương",
        location: "Văn phòng & Showroom",
        images: JAPFA_IMAGES
    };

    return (
        <section id="japfa-case-study" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                            Featured Case Study
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-[#171717] uppercase tracking-wider mb-6 leading-tight">
                            Dự án Japfa Bình Dương
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Một không gian văn phòng kết hợp khu vực tiếp khách đẳng cấp, mang dấu ấn đặc trưng của Human Interior.
                            Chúng tôi đã thực hiện bản thiết kế 3D tối ưu hóa công năng và mang lại trải nghiệm thị giác ấn tượng nhất cho đối tác.
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex gap-12 mb-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#171717]">100%</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Sự hài lòng</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#171717]">350m²</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Diện tích</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {/* Main Large Image */}
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg aspect-square md:aspect-auto cursor-pointer"
                    >
                        <img
                            src={JAPFA_IMAGES[0]}
                            alt="Japfa Main View"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <p className="text-white text-sm font-medium">Phối cảnh chính khu vực sảnh chính</p>
                        </div>
                    </div>

                    {/* Smaller Images */}
                    <div onClick={() => setIsModalOpen(true)} className="relative group overflow-hidden rounded-xl shadow-md h-48 md:h-auto cursor-pointer">
                        <img
                            src={JAPFA_IMAGES[1]}
                            alt="Japfa Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div onClick={() => setIsModalOpen(true)} className="relative group overflow-hidden rounded-xl shadow-md h-48 md:h-auto cursor-pointer">
                        <img
                            src={JAPFA_IMAGES[2]}
                            alt="Japfa Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div onClick={() => setIsModalOpen(true)} className="relative group overflow-hidden rounded-xl shadow-md h-48 md:h-auto cursor-pointer">
                        <img
                            src={JAPFA_IMAGES[3]}
                            alt="Japfa Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div onClick={() => setIsModalOpen(true)} className="relative group overflow-hidden rounded-xl shadow-md h-48 md:h-auto cursor-pointer">
                        <img
                            src={JAPFA_IMAGES[4]}
                            alt="Japfa Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Bottom Row */}
                    <div className="col-span-2 grid grid-cols-2 gap-4 md:gap-6">
                        <div onClick={() => setIsModalOpen(true)} className="relative group overflow-hidden rounded-xl shadow-md h-48 md:h-64 cursor-pointer">
                            <img
                                src={JAPFA_IMAGES[5]}
                                alt="Japfa Detail"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div onClick={() => setIsModalOpen(true)} className="relative group overflow-hidden rounded-xl shadow-md h-48 md:h-64 cursor-pointer">
                            <img
                                src={JAPFA_IMAGES[6]}
                                alt="Japfa Detail"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-md h-48 md:h-64 cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <img
                            src={JAPFA_IMAGES[7]}
                            alt="Japfa Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#D4AF37] hover:text-white transition-colors">
                                Xem tất cả 50+ Phối cảnh
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Gallery Modal */}
            <ProjectDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={projectData}
            />
        </section>
    );
};

export default JapfaCaseStudy;
