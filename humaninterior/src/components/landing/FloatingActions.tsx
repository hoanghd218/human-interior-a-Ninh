"use client";

import { useEffect } from "react";

interface FloatingActionsProps {
    showFloatingBar: boolean;
}

const FloatingActions = ({ showFloatingBar }: FloatingActionsProps) => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleShare = async (title: string, text: string, url: string) => {
        const shareData = { title, text, url };

        try {
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(url);
                const { toast } = await import("sonner");
                toast.success("Đã sao chép liên kết vào bộ nhớ tạm!");
            }
        } catch (err) {
            console.error("Error sharing:", err);
            // Fallback for user cancellation or other errors
            if ((err as Error).name !== 'AbortError') {
                await navigator.clipboard.writeText(url);
                const { toast } = await import("sonner");
                toast.success("Đã sao chép liên kết!");
            }
        }
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://chat.workai.vn/widget/v2/chat-widget.umd.js?v=' + new Date().getTime();
        script.onload = function () {
            // @ts-ignore
            window.__WorkAI__ = ChatWidget.init({
                "setting": {
                    "api": "https://api.workai.vn/webhook/b7398a91-8ec9-4e76-8c59-SHUoSdd5YcCcCQcn/chat",
                    "apiKey": "",
                    "userId": "ninhceopec@gmail.com",
                    "workFlow": "SHUoSdd5YcCcCQcn",
                    "secretKey": "667K4RYULVH7PJD0E1YCFEPHAHDR8AGWRBRKCQ6U23AUKB0B6X3TL0P20IO3FR5U",
                    "merchantId": "dac29365-2e87-47e5-8ef2-b4bacb7bb8de-id441",
                    "info": {
                        "title": "Hỗ trợ 24/7",
                        "name": "Hỗ trợ 24/7",
                        "description": "Hỗ trợ 24/7",
                        "platform": "Web"
                    },
                    "persist": "false"
                },
                "ui": {
                    "icon": "message",
                    "iconSize": "60px",
                    "right": "20px",
                    "bottom": "120px",
                    "darkMode": "auto",
                    "themeColor": "#ff00f1",
                    "fontSize": "14px",
                    "brand": {
                        "enabled": true,
                        "enabledMobile": true,
                        "brandLogo": "https://membeestorage.blob.core.windows.net/merchant-admin/fc17e7da-1f51-4a5e-91bb-a19fff625033/setting/logo/34999903-e68c-47af-a4ca-3b75ef723d76/o.JPEG",
                        "brandName": "Hỗ trợ 24/7",
                        "brandStarted": [
                            "Xin chào!",
                            "Tôi là Hỗ trợ 24/7, tôi có thể giúp gì được cho bạn?"
                        ]
                    },
                    "action": {
                        "enabled": true,
                        "enabledMobile": true,
                        "actionList": [
                            {
                                "text": "Giới thiệu HISPACEAI"
                            },
                            {
                                "text": "Giá gói dịch vụ"
                            },
                            {
                                "text": "Tính năng nổi bật"
                            },
                            {
                                "text": "Các câu hỏi thường gặp"
                            }
                        ]
                    },
                    "lang": "vi",
                    "header": {
                        "enabled": true
                    },
                    "footer": {
                        "enabled": true,
                        "text": "HISPACEAI",
                        "link": "https://Hispace.ai"
                    }
                }
            });
        };
        document.head.appendChild(script);

        return () => {
            // Optional: Cleanup script if needed, though usually chat widgets persist
            // document.head.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* Floating Consultant Bar */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-[990] transition-transform duration-500 ease-in-out shadow-[0_-5px_20px_rgba(0,0,0,0.1)] ${showFloatingBar ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="hidden md:block">
                        <p className="text-[#333] font-bold font-display text-sm uppercase tracking-wide">
                            Bạn cần tư vấn thiết kế?
                        </p>
                        <p className="text-xs text-[#666]">Kết nối ngay với KTS Trưởng</p>
                    </div>

                    <div className="flex flex-wrap gap-3 w-full md:w-auto">
                        <a
                            className="flex-1 md:flex-none bg-[#E05C3E] hover:bg-[#C8482D] text-white px-2 py-2.5 rounded-lg font-bold text-xs uppercase transition-all shadow-md flex items-center justify-center gap-2 animate-ripple cursor-pointer"
                            href="https://mienphi.hispace.ai/"
                            target="_blank"
                        >
                            <span className="!hidden md:!block material-symbols-outlined text-[18px]">edit</span>
                            Tự tay thiết kế
                        </a>
                        <a
                            className="flex-1 md:flex-none bg-white hover:bg-gray-50 text-[#333] border border-[#ddd] px-2 py-2.5 whitespace-nowrap rounded-lg font-bold text-xs uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                            href="https://app.hispace.ai/"
                            target="_blank"
                        >
                            <span className="!hidden md:!block material-symbols-outlined text-[18px]">construction</span>
                            Tuỳ chỉnh 3D có sẵn
                        </a>
                        <button
                            className="flex-1 md:flex-none bg-white hover:bg-gray-50 text-[#333] border border-[#ddd] px-2 py-2.5 whitespace-nowrap rounded-lg font-bold text-xs uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                            onClick={() => handleShare(
                                'HiSpace - Serving Star-Rating Living Spaces',
                                'Thấy hay gửi ngay bạn bè',
                                'https://mienphi.hispace.ai/ '
                            )}
                        >
                            Thấy hay gửi ngay bạn bè
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Zalo Button */}
            {/* WorkAI Chat Widget */}
            <div id="workai-widget-container"></div>
        </>
    );
};

export default FloatingActions;
