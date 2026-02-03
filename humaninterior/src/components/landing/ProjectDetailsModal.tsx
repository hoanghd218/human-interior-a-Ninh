"use client";

import { useEffect, useState } from "react";

interface ProjectDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        location: string;
        images: string[];
        description?: string;
    } | null;
}

const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectDetailsModalProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setActiveIndex(0);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const activeThumb = document.getElementById(`thumb-${activeIndex}`);
        if (activeThumb) {
            activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activeIndex]);

    const handleImageChange = (newIndex: number) => {
        setIsImageLoading(true);
        setActiveIndex(newIndex);
    };

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-0 md:p-6 lg:p-10">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-7xl h-full md:h-[92vh] md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_25px_80px_-12px_rgba(0,0,0,0.6)] animate-fade-in-scale will-change-transform">

                {/* Close Button - Enhanced */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 rounded-full bg-white/10 text-white/90 flex items-center justify-center hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 backdrop-blur-lg border border-white/10 group"
                >
                    <span className="material-symbols-outlined text-xl group-hover:rotate-90 transition-transform duration-300">close</span>
                </button>

                {/* Hero Image Section - Enhanced */}
                <div className="relative w-full md:w-[62%] h-[45%] md:h-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none z-10" />

                    <img
                        src={project.images[activeIndex]}
                        alt={`${project.title} - ${activeIndex + 1}`}
                        className={`w-full h-full object-contain transition-all duration-500 ${isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                        onLoad={() => setIsImageLoading(false)}
                    />

                    {/* Enhanced Nav Arrows */}
                    <button
                        onClick={() => handleImageChange(activeIndex === 0 ? project.images.length - 1 : activeIndex - 1)}
                        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 text-white/80 backdrop-blur-xl flex items-center justify-center hover:bg-white/15 hover:text-white hover:scale-110 transition-all duration-300 border border-white/10 group"
                    >
                        <span className="material-symbols-outlined text-2xl group-hover:-translate-x-0.5 transition-transform">chevron_left</span>
                    </button>
                    <button
                        onClick={() => handleImageChange(activeIndex === project.images.length - 1 ? 0 : activeIndex + 1)}
                        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 text-white/80 backdrop-blur-xl flex items-center justify-center hover:bg-white/15 hover:text-white hover:scale-110 transition-all duration-300 border border-white/10 group"
                    >
                        <span className="material-symbols-outlined text-2xl group-hover:translate-x-0.5 transition-transform">chevron_right</span>
                    </button>

                    {/* Enhanced Image Counter */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 bg-black/50 backdrop-blur-xl rounded-full border border-white/10 z-20">
                        <span className="text-white/90 text-sm font-medium tracking-wider font-display">
                            {activeIndex + 1}
                        </span>
                        <span className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                        <span className="text-white/50 text-sm font-medium tracking-wider">
                            {project.images.length}
                        </span>
                    </div>
                </div>

                {/* Info & Thumbnail Panel - Premium Design */}
                <div className="w-full md:w-[38%] h-[55%] md:h-full flex flex-col bg-gradient-to-b from-white via-white to-[#FAFAFA] overflow-hidden border-l border-black/5">

                    {/* Header Section */}
                    <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
                            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.25em] uppercase">
                                Dự án nổi bật
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-[#171717] mb-4 leading-tight">
                            {project.title}
                        </h2>

                        {/* Location */}
                        <div className="flex items-center gap-2.5 text-gray-500">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#D4AF37] text-base">location_on</span>
                            </div>
                            <span className="text-sm font-medium">{project.location}</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-6 md:mx-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                    {/* Thumbnail Gallery */}
                    <div className="flex-1 overflow-y-auto px-6 md:px-8 py-5 custom-scrollbar">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                Phối cảnh
                            </h3>
                            <span className="text-xs text-[#D4AF37] font-semibold">
                                {project.images.length} ảnh
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5 md:gap-3">
                            {project.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    id={`thumb-${idx}`}
                                    onClick={() => handleImageChange(idx)}
                                    className={`
                                        aspect-square relative cursor-pointer rounded-xl overflow-hidden 
                                        transition-all duration-300 ease-out group
                                        ${activeIndex === idx
                                            ? 'ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-white scale-[1.02] shadow-lg shadow-[#D4AF37]/20'
                                            : 'opacity-70 hover:opacity-100 hover:scale-[1.02] hover:shadow-md'
                                        }
                                    `}
                                >
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={`Phối cảnh ${idx + 1}`}
                                        loading="lazy"
                                    />
                                    {/* Thumbnail overlay */}
                                    <div className={`
                                        absolute inset-0 transition-all duration-300
                                        ${activeIndex === idx
                                            ? 'bg-gradient-to-t from-[#D4AF37]/20 to-transparent'
                                            : 'bg-black/10 group-hover:bg-transparent'
                                        }
                                    `} />
                                    {/* Active indicator */}
                                    {activeIndex === idx && (
                                        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-[#D4AF37]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Premium CTA Section */}
                    <div className="p-6 md:p-8 bg-gradient-to-t from-[#FAFAFA] to-white border-t border-gray-100/80">
                        <button
                            onClick={() => {
                                onClose();
                                setTimeout(() => {
                                    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                                }, 300);
                            }}
                            className="
                                w-full relative overflow-hidden group
                                bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#D4AF37]
                                bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]
                                text-[#171717] font-bold py-4 md:py-5 px-6 rounded-2xl
                                uppercase tracking-[0.15em] text-xs md:text-sm
                                shadow-lg shadow-[#D4AF37]/25
                                hover:shadow-xl hover:shadow-[#D4AF37]/35
                                hover:scale-[1.02] active:scale-[0.98]
                                transition-all duration-300
                            "
                        >
                            {/* Button shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                            <span className="relative flex items-center justify-center gap-2.5">
                                <span className="material-symbols-outlined text-lg">design_services</span>
                                Nhận tư vấn thiết kế
                            </span>
                        </button>

                        {/* Trust indicator */}
                        <p className="text-center text-[10px] text-gray-400 mt-3 tracking-wide">
                            Tư vấn miễn phí • Báo giá trong 24h
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
