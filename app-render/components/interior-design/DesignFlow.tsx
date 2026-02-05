"use client";

import React, { useState, useRef } from 'react';
import { DesignStyle, BudgetRange, Lead, STYLES, BUDGETS } from '@/data/interior-design';
import { generateInteriorDesigns } from '@/services/gemini-interior';
import LeadForm, { LeadFormData } from './LeadForm';

interface DesignFlowProps {
    onComplete: (lead: Lead) => void;
}

interface UserInfo {
    name: string;
    phone: string;
    email: string;
    budget: string;
    location: string;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

const SparklesIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
);

const EditIcon = ({ size = 16 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />
    </svg>
);

const XIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
);

const WandIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h.01" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" />
    </svg>
);

const ArrowRightIcon = ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);

const CheckCircleIcon = ({ size = 18, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
);

const getStyleIcon = (iconName: string) => {
    switch (iconName) {
        case 'LayoutDashboard':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
            );
        case 'Square':
            return <div className="w-5 h-5 border-2 border-current rounded-sm" />;
        case 'Leaf':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
            );
        case 'Snowflake':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="22" /><path d="m20 16-4-4 4-4" /><path d="m4 8 4 4-4 4" /><path d="m16 4-4 4-4-4" /><path d="m8 20 4-4 4 4" />
                </svg>
            );
        case 'Gem':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
                </svg>
            );
        case 'Flower':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" /><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 0 1 1-4.5 4.5" /><path d="M12 7.5V9" /><path d="M7.5 12H9" /><path d="M16.5 12H15" /><path d="M12 16.5V15" />
                </svg>
            );
        default:
            return null;
    }
};

const DesignFlow: React.FC<DesignFlowProps> = ({ onComplete }) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [hasResults, setHasResults] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [referenceImage, setReferenceImage] = useState<string | null>(null);
    const [selectedStyles, setSelectedStyles] = useState<DesignStyle[]>([]);
    const [selectedBudget] = useState<BudgetRange>('300 – 600 triệu');
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);

    const resultsRef = useRef<HTMLDivElement>(null);

    const executeGeneration = async (currentUserInfo: UserInfo) => {
        if (!image || selectedStyles.length === 0) return;

        setIsGenerating(true);
        setHasResults(false);

        setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        try {
            const results = await generateInteriorDesigns(image, selectedStyles, selectedBudget, referenceImage || undefined);
            setGeneratedImages(results);
            if (results.length > 0) {
                setHasResults(true);
            } else {
                alert("Không thể tạo hình ảnh. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error(error);
            alert("Đã xảy ra lỗi khi kết nối với AI.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleUserRegister = async (data: LeadFormData) => {
        const newUser: UserInfo = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            budget: data.budget,
            location: data.location
        };

        // Save lead data to webhook
        try {
            await fetch('https://n8n.bimspeed.net/webhook/23ec8e32-909d-49c6-99d7-9c9bf5960a1b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: data.name,
                    phone: data.phone,
                    email: data.email,
                    address: data.location,
                    budget: data.budget,
                    submitedAt: new Date().toISOString()
                })
            });
        } catch (error) {
            console.error('Failed to save lead data:', error);
        }

        setUserInfo(newUser);
        setShowRegisterModal(false);
        executeGeneration(newUser);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    setImage(ev.target.result as string);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleReferenceImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    setReferenceImage(ev.target.result as string);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const removeReferenceImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setReferenceImage(null);
    };

    const removeImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImage(null);
        setHasResults(false);
    };

    const toggleStyle = (style: DesignStyle) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter(s => s !== style));
        } else {
            if (selectedStyles.length >= 3) {
                alert("Bạn chỉ được chọn tối đa 3 phong cách để AI phối hợp tốt nhất.");
                return;
            }
            setSelectedStyles([...selectedStyles, style]);
        }
    };

    const handleGenerateClick = () => {
        if (!image || selectedStyles.length === 0) return;

        if (!userInfo) {
            setShowRegisterModal(true);
            return;
        }

        executeGeneration(userInfo);
    };



    const openLightbox = (imgUrl: string) => {
        setLightboxImage(imgUrl);
    };

    const renderLoading = () => (
        <div className="py-20 text-center animate-fadeIn">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mb-8 mx-auto shadow-xl shadow-primary/10 animate-pulse">
                <SparklesIcon size={40} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 font-display mb-3">AI đang phân tích & thiết kế...</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-10">Hệ thống đang xử lý dữ liệu không gian để tạo ra {selectedStyles.length} phương án tối ưu nhất.</p>

            <div className={`grid grid-cols-1 ${selectedStyles.length === 1 ? 'md:grid-cols-1 max-w-2xl' : selectedStyles.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-6xl'} gap-6 mx-auto px-4 opacity-40`}>
                {Array.from({ length: selectedStyles.length }, (_, i) => i + 1).map(i => (
                    <div key={i} className="aspect-4/3 bg-slate-200 rounded-2xl animate-pulse"></div>
                ))}
            </div>
        </div>
    );

    const renderResults = () => (
        <div className={`${generatedImages.length === 1 ? 'max-w-2xl' : generatedImages.length === 2 ? 'max-w-4xl' : 'max-w-6xl'} mx-auto py-12 px-4 animate-fadeIn`}>
            <h2 className="text-4xl font-bold text-slate-900 font-display mb-8 text-center">
                <span className="gradient-text-hero">{generatedImages.length} Phương án</span> dành cho bạn
            </h2>

            <div className={`grid grid-cols-1 ${generatedImages.length === 1 ? 'md:grid-cols-1' : generatedImages.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 mb-12`}>
                {generatedImages.map((imgUrl, idx) => (
                    <div key={idx} className="flex flex-col group animate-scaleIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <div
                            className="aspect-4/3 bg-slate-100 rounded-2xl overflow-hidden mb-5 shadow-lg border border-slate-100 relative cursor-pointer group-hover:shadow-2xl group-hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                            onClick={() => openLightbox(imgUrl)}
                        >
                            <img src={imgUrl} alt={`Plan ${idx + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                                <button className="bg-white/95 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-xl font-bold shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" />
                                    </svg>
                                    Xem phóng to
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-xl text-slate-900 font-display mb-2">Phong cách {selectedStyles[idx]}</h3>
                            <p className="text-sm text-slate-500 mb-4">Phương án {idx + 1}</p>
                            <a
                                href="https://zalo.me/g/yooqhx505"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover border border-primary/20 hover:border-primary/50 px-4 py-2 rounded-full transition-all hover:shadow-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                </svg>
                                Tư vấn KTS về mẫu này
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center border-t border-slate-100 pt-8">
                <p className="text-slate-500 mb-4">Bạn có muốn được Kiến trúc sư tư vấn 1-1 cho ngôi nhà của bạn không?</p>
                <a
                    href="https://zalo.me/g/yooqhx505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    Nhận tư vấn miễn phí
                </a>
            </div>
        </div>
    );

    const renderLightbox = () => {
        if (!lightboxImage) return null;
        return (
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-fadeIn cursor-pointer"
                onClick={() => setLightboxImage(null)}
            >
                <button
                    onClick={() => setLightboxImage(null)}
                    className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                >
                    <XIcon size={28} />
                </button>
                <img
                    src={lightboxImage}
                    alt="Phóng to"
                    className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        );
    };

    return (
        <section className="min-h-screen pt-24 pb-20 relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">

            <div className="text-center py-16 md:py-20 max-w-5xl mx-auto px-4 animate-fadeInUp">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-5 py-2.5 text-sm text-primary font-semibold mb-8 shadow-lg shadow-primary/10 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    Ứng dụng công nghệ AI Định hướng Thiết kế cho Kiến trúc sư
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6 font-display">
                    Thấu hiểu nhanh nhất Ý tưởng, mong muốn Không gian sống của Khách hàng là yêu cầu cao nhất cho đội ngũ <span className="gradient-text-hero">Kiến trúc sư của chúng tôi</span>
                </h1>

                {/* Sub Headline with emphasis */}
                <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gradient-to-r from-slate-50 via-white to-slate-50 px-6 py-2 text-lg md:text-xl font-semibold text-slate-700">
                            Đảm bảo không bỏ rơi nhịp <span className="gradient-text-hero">Ý tưởng nào của Khách hàng</span>
                        </span>
                    </div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 font-display">
                    Tự tay Đóng gói Ý tưởng ảnh 3D trong 30s qua 3 lần nhấp chuột:
                </h2>

                {/* Animated Steps Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
                    {/* Step 1 */}
                    <div className="group relative glass-liquid rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 text-left animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shadow-md shadow-primary/30">1</span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">Tải ảnh hiện trạng phòng muốn Thiết kế</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group relative glass-liquid rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 text-left animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shadow-md shadow-primary/30">2</span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">Tải Ảnh mẫu mà Quý Khách hàng ấn tượng (ảnh chụp hoặc trên mạng đều được)</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative glass-liquid rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 text-left animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shadow-md shadow-primary/30">3</span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">Chọn 1-3 Phong cách Thiết kế. Mỗi phong cách trả về một 3D tương ứng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-12">
                <div className="max-w-6xl mx-auto glass-liquid rounded-3xl shadow-2xl shadow-primary/5 overflow-hidden flex flex-col lg:flex-row animate-fadeIn" style={{ animationDelay: '0.2s' }}>

                    <div className="w-full lg:w-7/12 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100/50">
                        <h3 className="text-xl font-bold text-slate-900 mb-5 font-display flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">1</span>
                            Ảnh hiện trạng
                        </h3>

                        <label className={`
                            flex flex-col items-center justify-center w-full aspect-video md:aspect-4/3 lg:h-[500px]
                            border-2 border-dashed rounded-2xl cursor-pointer transition-all relative group overflow-hidden bg-white/50
                            ${image ? 'border-primary ring-4 ring-primary/10' : 'border-slate-300 hover:border-primary/50 hover:bg-primary/5'}
                        `}>
                            {image ? (
                                <>
                                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all duration-300 flex items-center justify-center gap-4">
                                        <button onClick={(e) => { e.preventDefault(); }} className="px-5 py-3 bg-white text-slate-900 rounded-xl font-semibold shadow-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all">Thay ảnh</button>
                                        <button onClick={removeImage} className="p-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 active:scale-95 transition-all"><TrashIcon /></button>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                        <UploadIcon />
                                    </div>
                                    <p className="text-lg text-slate-900 font-semibold mb-2">Nhấn để tải ảnh lên</p>
                                    <p className="text-sm text-slate-500 max-w-xs">Hỗ trợ ảnh JPG, PNG. Chụp rõ góc phòng để AI nhận diện tốt nhất.</p>
                                </div>
                            )}
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>

                        {/* Reference Image Upload Section */}
                        <div className="mt-6">
                            <div className="flex items-center gap-2 mb-3">
                                <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                        <circle cx="9" cy="9" r="2" />
                                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                    </svg>
                                    Ảnh tham chiếu <span className="text-slate-400 font-normal">(tuỳ chọn)</span>
                                </h4>
                                <div className="relative group">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 cursor-help">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-xl">
                                        <div className="font-semibold mb-1">💡 Ảnh tham chiếu phong cách</div>
                                        <p>Tải lên ảnh mẫu thiết kế nội thất mà bạn yêu thích. AI sẽ học hỏi phong cách, màu sắc và bố cục từ ảnh này để áp dụng vào không gian của bạn.</p>
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                                    </div>
                                </div>
                            </div>

                            <label className={`
                                flex items-center justify-center w-full h-24 border-2 border-dashed rounded-xl cursor-pointer transition-all relative group overflow-hidden bg-white/50
                                ${referenceImage ? 'border-primary/50 ring-2 ring-primary/10' : 'border-slate-200 hover:border-primary/30 hover:bg-primary/5'}
                            `}>
                                {referenceImage ? (
                                    <>
                                        <img src={referenceImage} alt="Reference" className="h-full w-auto object-cover rounded-lg" />
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all duration-300 flex items-center justify-center gap-2">
                                            <button onClick={(e) => { e.preventDefault(); }} className="px-3 py-1.5 bg-white text-slate-900 rounded-lg text-xs font-semibold shadow-lg hover:bg-slate-100 transition-all opacity-0 group-hover:opacity-100">Thay</button>
                                            <button onClick={removeReferenceImage} className="p-1.5 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all opacity-0 group-hover:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex items-center gap-3 p-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 rounded-lg flex items-center justify-center group-hover:text-primary/70 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="17 8 12 3 7 8" />
                                                <line x1="12" y1="3" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-slate-600 font-medium">Thêm ảnh mẫu phong cách</p>
                                            <p className="text-xs text-slate-400">AI sẽ học theo phong cách từ ảnh này</p>
                                        </div>
                                    </div>
                                )}
                                <input type="file" className="hidden" accept="image/*" onChange={handleReferenceImageUpload} />
                            </label>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 p-6 md:p-10 bg-white flex flex-col h-full">

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">2</span>
                                    Chọn phong cách
                                </h3>
                                <span className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${selectedStyles.length > 0 ? 'bg-gradient-to-r from-primary to-primary-hover text-white shadow-md' : 'bg-slate-100 text-slate-500'}`}>
                                    {selectedStyles.length}/3
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {STYLES.map((style) => (
                                    <div
                                        key={style.id}
                                        onClick={() => toggleStyle(style.id)}
                                        className={`
                                            cursor-pointer rounded-xl p-4 border transition-all duration-200 flex flex-col gap-2 relative group hover:scale-[1.02] active:scale-[0.98]
                                            ${selectedStyles.includes(style.id)
                                                ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg shadow-primary/10'
                                                : 'border-slate-100 bg-white hover:border-primary/30 hover:bg-slate-50'
                                            }
                                        `}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className={`${selectedStyles.includes(style.id) ? 'text-primary' : 'text-slate-400 group-hover:text-primary/70'}`}>
                                                {getStyleIcon(style.iconName)}
                                            </div>
                                            {selectedStyles.includes(style.id) && <CheckCircleIcon size={18} className="text-primary fill-white" />}
                                        </div>
                                        <div className={`font-semibold text-sm ${selectedStyles.includes(style.id) ? 'text-primary' : 'text-slate-700'}`}>{style.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="mt-auto pt-6 border-t border-slate-100">
                            <button
                                onClick={handleGenerateClick}
                                disabled={!image || selectedStyles.length === 0 || isGenerating}
                                className={`
                                    w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2
                                    ${(!image || selectedStyles.length === 0 || isGenerating)
                                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-primary to-primary-hover text-white shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0'
                                    }
                                `}
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        AI Đang xử lý...
                                    </>
                                ) : (
                                    <>
                                        <SparklesIcon size={22} />
                                        Thiết kế ngay với AI
                                    </>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div ref={resultsRef} className="scroll-mt-32">
                {isGenerating && renderLoading()}
                {!isGenerating && hasResults && renderResults()}
            </div>

            {renderLightbox()}

            <div className="container px-4 mx-auto pb-12 pt-12 border-t border-slate-100 mt-12">
                <div className="bg-gradient-to-r from-primary to-primary-hover rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-primary/30 relative overflow-hidden animate-fadeIn">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-display">Tuỳ chỉnh thiết kế với AI</h3>
                        </div>
                        <p className="text-white/90 text-lg max-w-xl font-light leading-relaxed">
                            Sau khi thiết kế xong, bạn có thể sử dụng AI để tuỳ chỉnh thiết kế của mình theo ý muốn.
                        </p>
                    </div>
                </div>
            </div>

            {showRegisterModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-fadeIn">
                    <div className="relative w-full max-w-md glass-liquid rounded-3xl shadow-2xl overflow-hidden">
                        <button
                            onClick={() => setShowRegisterModal(false)}
                            className="absolute top-5 right-5 z-10 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
                        >
                            <XIcon size={20} />
                        </button>

                        <div className="bg-gradient-to-r from-primary to-primary-hover h-1 w-full"></div>
                        <div className="pt-2">
                            <LeadForm
                                onSubmit={handleUserRegister}
                                isLoading={false}
                                title="Thông tin liên hệ"
                                description="Vui lòng nhập thông tin để hệ thống gửi file thiết kế 3D chất lượng cao cho bạn."
                                buttonText="Hoàn tất & Dùng AI"
                            />
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default DesignFlow;
