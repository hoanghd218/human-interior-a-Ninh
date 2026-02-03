"use client";

const PainPointsSection = () => {
    const list = [
        {
            hook: "BẢN VẼ 1 TỶ, CHI PHÍ 2 TỶ?",
            problem: "Gia chủ thường 'vỡ trận' tài chính vì hàng loạt chi phí phát sinh không tên, khiến ngôi nhà trong mơ thành gánh nặng nợ nần.",
            cure: "Báo giá chuẩn xác ngay từ khi chọn vật liệu. Sai số 0%."
        },
        {
            hook: "GỖ XỊN TRÊN MẪU, GỖ 'DỎM' DƯỚI SÀN?",
            problem: "Nỗi sợ treo đầu dê bán thịt chó. Thầu thợ tự ý tráo đổi vật liệu kém chất lượng bên trong những lớp sơn phủ hào nhoáng.",
            cure: "Cam kết đúng mã, đúng thương hiệu. Kiểm chứng trực tiếp tại kho."
        },
        {
            hook: "3D LUNG LINH, THỰC TẾ... 'HỤT HẪNG'?",
            problem: "Thất vọng tràn trề khi nhận nhà không giống bản vẽ. Đồ đạc chắp vá, kích thước sai lệch vì thiết kế không gắn liền với thực tế thi công.",
            cure: "Thiết kế thực tế từ kho vật liệu có sẵn. Nhìn thấy gì, nhận đúng nấy."
        }
    ];

    return (
        <section id="pain-points" className="py-32 bg-white selection:bg-[#E05C3E] selection:text-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Punchy Header */}
                <div className="mb-24">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-[#171717] leading-[1.2] uppercase mb-8">
                        ĐỪNG ĐỂ <br />
                        <span className="text-[#E05C3E]">KẺ NGOẠI ĐẠO</span> <br />
                        PHÁ NÁT TỔ ẤM
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed italic">
                        Tại sao 90% gia chủ cảm thấy "kiệt sức" sau khi làm nhà?
                        Vì họ đang dấn thân vào một cuộc chơi đầy cạm bẫy mà không có người dẫn lối minh bạch.
                    </p>
                </div>

                {/* Direct List - Ultra Minimal */}
                <div className="space-y-20">
                    {list.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
                            <div className="md:col-span-1">
                                <span className="text-5xl font-display font-black text-gray-100 group-hover:text-[#E05C3E]/20 transition-colors">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="md:col-span-7">
                                <h3 className="text-2xl md:text-4xl font-display font-black text-[#171717] mb-6 leading-none tracking-tight">
                                    {item.hook}
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                    {item.problem}
                                </p>
                            </div>

                            <div className="md:col-span-4 bg-gray-50 p-8 rounded-2xl border-l-4 border-[#D4AF37]">
                                <p className="text-[#171717] text-lg font-bold leading-snug flex items-start gap-3">
                                    <span className="material-symbols-outlined text-[#D4AF37] mt-1 shrink-0">verified</span>
                                    <span>
                                        <span className="text-[#D4AF37] block text-xs uppercase tracking-widest mb-1">GIẢI PHÁP HUMAN</span>
                                        {item.cure}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Slap CTA */}
                <div className="mt-32 text-center">
                    <h3 className="text-3xl md:text-4xl font-display font-black text-[#171717] mb-12 uppercase tracking-tighter italic">
                        BẠN CHỌN <span className="underline decoration-[#E05C3E] decoration-8 underline-offset-8">AN TÂM</span> HAY CHỌN <span className="line-through text-gray-300">RỦI RO</span>?
                    </h3>

                    <button
                        onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#171717] hover:bg-[#E05C3E] text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-lg transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer active:scale-95"
                    >
                        TÔI MUỐN SỰ MINH BẠCH
                    </button>

                    <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        Tư vấn 1:1 miễn phí • 100% không ràng buộc
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PainPointsSection;
