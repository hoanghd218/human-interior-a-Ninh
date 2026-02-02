"use client";

interface FloatingActionsProps {
    showFloatingBar: boolean;
}

const FloatingActions = ({ showFloatingBar }: FloatingActionsProps) => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

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

                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            className="flex-1 md:flex-none bg-[#E05C3E] hover:bg-[#C8482D] text-white px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-2 animate-ripple cursor-pointer"
                            onClick={scrollToRegister}
                        >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                            Tư vấn thiết kế
                        </button>
                        <button
                            className="flex-1 md:flex-none bg-white hover:bg-gray-50 text-[#333] border border-[#ddd] px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                            onClick={scrollToRegister}
                        >
                            <span className="material-symbols-outlined text-[18px]">construction</span>
                            Tư vấn thi công
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Zalo Button */}
            <a
                href="https://zalo.me/0912xxxxxx"
                target="_blank"
                className={`fixed bottom-24 md:bottom-24 right-5 z-[999] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer ${showFloatingBar ? 'bottom-32 md:bottom-24' : 'bottom-6 md:bottom-6'}`}
                style={{
                    background: 'linear-gradient(45deg, #0068FF, #0041a3)',
                    animation: 'bounce-interval 5s infinite'
                }}
            >
                <span className="material-symbols-outlined text-white text-[28px]">phone_in_talk</span>
                {/* Animated Ring */}
                <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-75"></span>
            </a>
        </>
    );
};

export default FloatingActions;
