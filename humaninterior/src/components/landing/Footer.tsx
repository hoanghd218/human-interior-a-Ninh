"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-[8px] border-[#E05C3E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-12 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                <svg viewBox="0 0 40 40" className="w-full h-full fill-white">
                                    <path d="M7 2H9.53659V38H7V2Z" fill="#A8893A" />
                                    <path d="M30.4634 2H33V38H30.4634V2Z" fill="#A8893A" />
                                    <path d="M13.6585 2H9.53659V4.23009H12.5488C14.578 4.23009 15.1911 6.67257 15.2439 7.89381V13.469H20.1585V11.5575H17.4634V7.89381C17.4634 3.43363 14.9268 2.10619 13.6585 2Z" fill="#A8893A" />
                                    <path d="M26.5 2H30.622V4.23009H27.6098C25.5805 4.23009 24.9675 6.67257 24.9146 7.89381V13.469H20V11.5575H22.6951V7.89381C22.6951 3.43363 25.2317 2.10619 26.5 2Z" fill="#A8893A" />
                                    <path d="M13.6585 38H9.53659V35.7699H12.5488C14.578 35.7699 15.1911 33.3274 15.2439 32.1062V26.531H20.1585V28.4425H17.4634V32.1062C17.4634 36.5664 14.9268 37.8938 13.6585 38Z" fill="#A8893A" />
                                    <path d="M26.5 38H30.622V35.7699H27.6098C25.5805 35.7699 24.9675 33.3274 24.9146 32.1062V26.531H20V28.4425H22.6951V32.1062C22.6951 36.5664 25.2317 37.8938 26.5 38Z" fill="#A8893A" />
                                    <path d="M15.8204 15.9308C16.3392 15.9308 16.8149 16.008 17.2472 16.1625C17.6844 16.3121 18.0783 16.5101 18.429 16.7562C18.7846 16.9976 19.0968 17.2534 19.3659 17.5237C19.5388 17.683 19.6973 17.8471 19.8415 18.0161C19.9904 18.185 20.1297 18.3492 20.2594 18.5084C20.3747 18.3492 20.4972 18.1923 20.6269 18.0378C20.7567 17.8833 20.9224 17.712 21.1242 17.5237C21.5277 17.1183 22.0249 16.7514 22.6159 16.4232C23.2116 16.0949 23.9058 15.9308 24.6984 15.9308C25.4287 15.9308 26.0916 16.1094 26.6874 16.4666C27.2879 16.819 27.7635 17.2969 28.1142 17.9002C28.4697 18.4988 28.6475 19.1649 28.6475 19.8986C28.6475 20.4537 28.5442 20.9751 28.3376 21.4626C28.1358 21.9453 27.8548 22.3701 27.4945 22.7369C27.1341 23.099 26.7138 23.3838 26.2334 23.5913C25.7578 23.794 25.2461 23.8954 24.6984 23.8954C24.17 23.8954 23.6848 23.8206 23.2428 23.671C22.8056 23.5165 22.4093 23.321 22.0538 23.0845C21.7031 22.8431 21.3932 22.5921 21.1242 22.3315C20.9512 22.1577 20.7927 21.9863 20.6486 21.8174C20.5044 21.6436 20.3747 21.4771 20.2594 21.3178C20.1297 21.4771 19.9904 21.6436 19.8415 21.8174C19.6973 21.9863 19.5388 22.1577 19.3659 22.3315C19.0968 22.5921 18.7846 22.8431 18.429 23.0845C18.0783 23.321 17.6844 23.5165 17.2472 23.671C16.8149 23.8206 16.3392 23.8954 15.8204 23.8954C15.0806 23.8954 14.4104 23.7168 13.8099 23.3596C13.2093 23.0024 12.7313 22.5221 12.3758 21.9187C12.0203 21.3154 11.8426 20.642 11.8426 19.8986C11.8426 19.3484 11.9435 18.8343 12.1452 18.3564C12.3518 17.8737 12.6353 17.4513 12.9956 17.0893C13.3607 16.7273 13.7834 16.4449 14.2639 16.2422C14.7491 16.0346 15.2679 15.9308 15.8204 15.9308ZM13.4856 19.8986C13.4856 20.3331 13.5889 20.7289 13.7955 21.0861C14.0068 21.4385 14.2879 21.7208 14.6386 21.9332C14.9941 22.1408 15.388 22.2446 15.8204 22.2446C16.296 22.2446 16.7308 22.136 17.1247 21.9187C17.5187 21.7015 17.8814 21.4336 18.2129 21.115C18.429 20.8978 18.6188 20.6879 18.7822 20.4851C18.9455 20.2824 19.092 20.0869 19.2217 19.8986C19.092 19.7249 18.9479 19.539 18.7894 19.3411C18.6356 19.1384 18.4435 18.9284 18.2129 18.7112C17.8958 18.3926 17.5355 18.1247 17.1319 17.9075C16.7332 17.6903 16.296 17.5817 15.8204 17.5817C15.388 17.5817 14.9941 17.6879 14.6386 17.9002C14.2879 18.1078 14.0068 18.3878 13.7955 18.7401C13.5889 19.0877 13.4856 19.4739 13.4856 19.8986ZM27.0044 19.8986C27.0044 19.4739 26.8987 19.0877 26.6874 18.7401C26.4808 18.3878 26.2021 18.1078 25.8514 17.9002C25.5055 17.6879 25.1212 17.5817 24.6984 17.5817C24.3718 17.5817 24.0643 17.6323 23.7761 17.7337C23.4878 17.8302 23.2188 17.9654 22.969 18.1392C22.7191 18.3081 22.4885 18.4988 22.2772 18.7112C22.0177 18.9574 21.8016 19.1963 21.6286 19.428C21.4605 19.6549 21.3404 19.8117 21.2683 19.8986C21.398 20.0869 21.5445 20.2824 21.7079 20.4851C21.8712 20.6879 22.061 20.8978 22.2772 21.115C22.6086 21.4336 22.9714 21.7015 23.3653 21.9187C23.764 22.136 24.2084 22.2446 24.6984 22.2446C25.1212 22.2446 25.5055 22.1408 25.8514 21.9332C26.2021 21.7208 26.4808 21.4385 26.6874 21.0861C26.8987 20.7289 27.0044 20.3331 27.0044 19.8986Z" fill="#A8893A" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold font-display tracking-wide uppercase text-white leading-none mb-1">
                                    HUMAN INTERIOR
                                </span>
                                <span className="text-[10px] text-white/50 uppercase tracking-[0.15em]">
                                    Member of HISPACE.AI
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                            &quot;Serving Star-Rating Living Spaces&quot; <br />
                            <span className="font-medium text-white/90">Phụng Sự Không Gian Sống Chuẩn Sao</span>
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E05C3E] transition-colors">
                                <span className="text-sm font-bold">Fb</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E05C3E] transition-colors">
                                <span className="text-sm font-bold">Yt</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E05C3E] transition-colors">
                                <span className="text-sm font-bold">In</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Liên Kết Nhanh</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="https://humaninterior.vn/about" target="_blank" className="hover:text-[#E05C3E] transition-colors">Về Human Interior</Link></li>
                            <li><Link href="https://humaninterior.vn/projects" target="_blank" className="hover:text-[#E05C3E] transition-colors">Dự án tiêu biểu</Link></li>
                            <li><Link href="https://humaninterior.vn/services" target="_blank" className="hover:text-[#E05C3E] transition-colors">Dịch vụ thiết kế</Link></li>
                            <li><Link href="https://hispaces.ai" target="_blank" className="hover:text-[#E05C3E] transition-colors">Website chính thức</Link></li>
                            <li><Link href="https://humaninterior.vn" target="_blank" className="hover:text-[#E05C3E] transition-colors">Website thành viên</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Thông Tin Liên Hệ</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#E05C3E] mt-0.5">location_on</span>
                                <span>Số 17, DE1, Mỹ Phước 3, Thới Hòa, Bến Cát, Bình Dương</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#E05C3E]">phone</span>
                                <span>0329.688.826 (Hotline)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#E05C3E]">mail</span>
                                <span>baogia@humaninterior.vn</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#E05C3E]">language</span>
                                <a href="https://humaninterior.vn" target="_blank" className="hover:text-white">humaninterior.vn</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center bg-black/50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm">
                        © 2026 Human Interior. Member of HISPACE.AI. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <Link href="https://humaninterior.vn/terms-of-use" target="_blank" className="hover:text-white">Điều khoản sử dụng</Link>
                        <Link href="https://humaninterior.vn/privacy-policy" target="_blank" className="hover:text-white">Chính sách bảo mật</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
