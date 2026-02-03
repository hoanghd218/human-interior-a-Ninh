"use client";

const RegisterSection = () => {
    return (
        <section id="register" className="py-[100px] bg-white relative border-t border-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#E05C3E] font-display mb-4 uppercase">
                        ĐĂNG KÝ KIẾN TRÚC SƯ HỖ TRỢ TRỰC TIẾP
                    </h2>
                    <p className="text-[#555] leading-relaxed italic">
                        Tư vấn chuyên sâu 1:1 cùng KTS Trưởng hoàn toàn miễn phí & không ràng buộc.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-soft border border-gray-100 relative overflow-hidden">
                    {/* Decorative blur */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E05C3E]/5 rounded-full blur-3xl z-0"></div>

                    <form className="space-y-6 relative z-10">
                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#555]">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập họ tên của bạn"
                                    className="w-full bg-[#F9F9F9] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E05C3E] focus:border-transparent outline-none transition-all text-[#333]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#555]">
                                    Số điện thoại
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Nhập số điện thoại"
                                    className="w-full bg-[#F9F9F9] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E05C3E] focus:border-transparent outline-none transition-all text-[#333]"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#555]">
                                Email (Tùy chọn)
                            </label>
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full bg-[#F9F9F9] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E05C3E] focus:border-transparent outline-none transition-all text-[#333]"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            className="w-full bg-[#E05C3E] hover:bg-[#C8482D] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer animate-ripple"
                        >
                            <span>GIỮ CHỖ VIP & NHẬN TƯ VẤN</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>

                        {/* Privacy Note */}
                        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-500 opacity-80">
                            <span className="material-symbols-outlined text-base">lock</span>
                            <p>Thông tin của bạn được bảo mật tuyệt đối</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
