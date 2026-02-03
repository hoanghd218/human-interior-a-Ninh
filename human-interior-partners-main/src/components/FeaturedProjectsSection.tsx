"use client";

import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const PROJECTS = [
    {
        id: 1,
        title: "Dự án Căn hộ 2 Phòng Ngủ - V1",
        category: "japan",
        location: "Concept 01",
        area: "85m²",
        image: "/images/projects/model-house-2br-v1/V1.webp",
        images: Array.from({ length: 12 }, (_, i) => `/images/projects/model-house-2br-v1/V${i + 1}.webp`),
        standard: "Tiêu chuẩn Nhân Bản",
        description: "Bản phối cảnh 3D chi tiết cho căn hộ 2 phòng ngủ theo phong cách hiện đại Nhật Bản, tối ưu hóa không gian và ánh sáng tự nhiên."
    },
    {
        id: 2,
        title: "Dự án Japfa Bình Dương",
        category: "international",
        location: "Văn phòng & Showroom",
        area: "350m²",
        image: "/images/projects/japfa/A1.webp",
        images: [
            ...Array.from({ length: 21 }, (_, i) => `/images/projects/japfa/A${i + 1}.webp`),
            ...Array.from({ length: 25 }, (_, i) => `/images/projects/japfa/B${i + 1}.webp`),
            ...Array.from({ length: 4 }, (_, i) => `/images/projects/japfa/C${i + 1}.webp`),
        ],
        standard: "Tiêu chuẩn Quốc Tế",
        description: "Tổ hợp văn phòng làm việc và khu trưng bày sản phẩm đẳng cấp, mang đậm dấu ấn thương hiệu và sự chuyên nghiệp."
    },
    {
        id: 3,
        title: "Căn hộ 1 Phòng Ngủ - D1",
        category: "japan",
        location: "Concept 01",
        area: "55m²",
        image: "/images/projects/model-house-1br-v1/D1.webp",
        images: Array.from({ length: 6 }, (_, i) => `/images/projects/model-house-1br-v1/D${i + 1}.webp`),
        standard: "Tiêu chuẩn Nhật Bản",
        description: "Thiết kế tối giản nhưng tinh tế cho căn hộ 1 phòng ngủ, phù hợp với lối sống hiện đại và năng động."
    },
    {
        id: 4,
        title: "Căn hộ 1 Phòng Ngủ - A1",
        category: "international",
        location: "Concept 02",
        area: "58m²",
        image: "/images/projects/model-house-1br-v2/A1.webp",
        images: Array.from({ length: 9 }, (_, i) => `/images/projects/model-house-1br-v2/A${i + 1}.webp`),
        standard: "Tiêu chuẩn Quốc Tế",
        description: "Sự kết hợp hoàn hảo giữa vật liệu cao cấp và giải pháp không gian thông minh cho căn hộ diện tích vừa phải."
    },
    {
        id: 5,
        title: "Căn hộ 2 Phòng Ngủ - B1",
        category: "japan",
        location: "Concept 02",
        area: "92m²",
        image: "/images/projects/model-house-2br-v2/B1.webp",
        images: Array.from({ length: 12 }, (_, i) => `/images/projects/model-house-2br-v2/B${i + 1}.webp`),
        standard: "Tiêu chuẩn Nhật Bản",
        description: "Không gian sống sang trọng cho gia đình với đầy đủ công năng, thể hiện đẳng cấp qua từng chi tiết thiết kế."
    }
];

const FeaturedProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <section id="featured-projects" className="py-24 bg-background relative overflow-hidden">
            <div className="container relative z-10">
                {/* Header */}
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        DỰ ÁN TIÊU BIỂU
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-8">
                        Kiến Tạo <span className="gradient-gold-text">Không Gian Đẳng Cấp</span>
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {[
                            { id: 'all', label: 'Tất cả' },
                            { id: 'japan', label: 'Tiêu chuẩn Nhật Bản' },
                            { id: 'international', label: 'Tiêu chuẩn Quốc tế' }
                        ].map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border
                                    ${activeCategory === category.id
                                        ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                                        : 'bg-white text-muted-foreground border-border hover:border-primary/50'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Standard Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-primary/90 backdrop-blur-md text-primary-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-md shadow-lg">
                                        {project.standard}
                                    </span>
                                </div>

                                {/* Hover Overlay Info */}
                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-4 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {project.area}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* View Full Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-2xl backdrop-blur-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectDetailsModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default FeaturedProjectsSection;
