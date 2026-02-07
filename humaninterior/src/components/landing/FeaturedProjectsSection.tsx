"use client";

import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const PROJECTS = [
    {
        id: 1,
        title: "Căn hộ 2 Phòng Ngủ - V1",
        category: "japan",
        location: "Concept 01",
        area: "85m²",
        image: "/images/projects/model-house-2br-v1/V1.webp",
        images: Array.from({ length: 12 }, (_, i) => `/images/projects/model-house-2br-v1/V${i + 1}.webp`),
        standard: "Tiêu chuẩn Nhật Bản"
    },
    {
        id: 2,
        title: "Căn hộ 2 Phòng Ngủ - B1",
        category: "japan",
        location: "Concept 02",
        area: "92m²",
        image: "/images/projects/model-house-2br-b1/B1.webp",
        images: Array.from({ length: 12 }, (_, i) => `/images/projects/model-house-2br-b1/B${i + 1}.webp`),
        standard: "Tiêu chuẩn Nhật Bản"
    },
    {
        id: 3,
        title: "Căn hộ 1 Phòng Ngủ - D1",
        category: "singapore",
        location: "Concept 01",
        area: "55m²",
        image: "/images/projects/model-house-1br-d1/D1.webp",
        images: Array.from({ length: 6 }, (_, i) => `/images/projects/model-house-1br-d1/D${i + 1}.webp`),
        standard: "Tiêu chuẩn Singapore"
    },
    {
        id: 4,
        title: "Văn phòng Tập đoàn Japfa",
        category: "international",
        location: "Concept 02",
        area: "58m²",
        image: "/images/projects/japfa/A1.webp",
        images: Array.from({ length: 9 }, (_, i) => `/images/projects/japfa/A${i + 1}.webp`),
        standard: "Tiêu chuẩn Đa Quốc Gia"
    }
];

const FeaturedProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <section id="featured-projects" className="bg-[#F9F9F9] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-[#171717] uppercase tracking-wider mb-8">
                        Dự Án Tiêu Biểu
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-1">
                        {[
                            { id: 'japan', label: 'Dự án đáp ứng tiêu chuẩn Chủ đầu tư Nhật Bản' },
                            { id: 'singapore', label: 'Dự án đáp ứng tiêu chuẩn Chủ đầu tư Singapore' },
                            { id: 'international', label: 'Dự án đáp ứng tiêu chuẩn Tập đoàn đa Quốc gia' }
                        ].map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id === activeCategory ? 'all' : category.id)}
                                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative shadow-sm
                  ${activeCategory === category.id
                                        ? 'bg-[#E05C3E] text-white shadow-lg transform -translate-y-1'
                                        : 'bg-white text-gray-500 hover:text-[#E05C3E] hover:bg-gray-50'
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
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>

                                {/* Standard Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-[#E05C3E]/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                                        {project.standard}
                                    </span>
                                </div>

                                {/* Move Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                                        <span className="material-symbols-outlined text-white text-3xl whitespace-nowrap overflow-visible">open_in_new</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#171717] font-display mb-4 group-hover:text-[#E05C3E] transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex items-center gap-6 text-gray-500 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#D4AF37] text-lg whitespace-nowrap overflow-visible">location_on</span>
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#D4AF37] text-lg whitespace-nowrap overflow-visible">square_foot</span>
                                        <span>{project.area}</span>
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
