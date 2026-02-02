"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setActiveIndex(0); // Reset to first image when opening
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Auto-scroll logic for active thumbnail
    useEffect(() => {
        const activeThumb = document.getElementById(`thumb-${activeIndex}`);
        if (activeThumb) {
            activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activeIndex]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-0 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-6xl h-full md:h-[90vh] bg-[#F9F9F9] md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl animate-fade-in-scale will-change-transform">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition-colors backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                {/* Hero Image Section */}
                <div className="relative w-full md:w-2/3 h-[50%] md:h-full bg-black flex items-center justify-center">
                    <img
                        src={project.images[activeIndex]}
                        alt={`${project.title} - ${activeIndex + 1}`}
                        className="w-full h-full object-contain"
                    />

                    {/* Nav Arrows */}
                    <button
                        onClick={() => setActiveIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => setActiveIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-widest">
                        {activeIndex + 1} / {project.images.length}
                    </div>
                </div>

                {/* Info & Thumbnail Section */}
                <div className="w-full md:w-1/3 h-[50%] md:h-full flex flex-col bg-white overflow-hidden border-l border-gray-100">
                    <div className="p-8 pb-0">
                        <div className="mb-6">
                            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Project Details</span>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#171717] mb-3">{project.title}</h2>
                            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                <MapPin size={14} className="text-[#D4AF37]" />
                                <span>{project.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-8 py-4 custom-scrollbar">
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Danh sách phối cảnh ({project.images.length})</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {project.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    id={`thumb-${idx}`}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`aspect-square relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'ring-2 ring-[#D4AF37] p-1 scale-105 z-10' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
                                >
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover rounded-md"
                                        alt={`Thumbnail ${idx + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 pt-4 border-t border-gray-100 bg-gray-50/50">
                        <button
                            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full bg-[#171717] text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg"
                        >
                            Nhận tư vấn thiết kế
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
