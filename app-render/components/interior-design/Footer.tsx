"use client";

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-slate-200 bg-linear-to-b from-slate-50 to-slate-100">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-12 flex items-center justify-center">
                                <svg viewBox="0 0 40 40" className="w-full h-full">
                                    <path d="M7 2H9.53659V38H7V2Z" fill="#B8860B" />
                                    <path d="M30.4634 2H33V38H30.4634V2Z" fill="#B8860B" />
                                    <path d="M13.6585 2H9.53659V4.23009H12.5488C14.578 4.23009 15.1911 6.67257 15.2439 7.89381V13.469H20.1585V11.5575H17.4634V7.89381C17.4634 3.43363 14.9268 2.10619 13.6585 2Z" fill="#B8860B" />
                                    <path d="M26.5 2H30.622V4.23009H27.6098C25.5805 4.23009 24.9675 6.67257 24.9146 7.89381V13.469H20V11.5575H22.6951V7.89381C22.6951 3.43363 25.2317 2.10619 26.5 2Z" fill="#B8860B" />
                                    <path d="M13.6585 38H9.53659V35.7699H12.5488C14.578 35.7699 15.1911 33.3274 15.2439 32.1062V26.531H20.1585V28.4425H17.4634V32.1062C17.4634 36.5664 14.9268 37.8938 13.6585 38Z" fill="#B8860B" />
                                    <path d="M26.5 38H30.622V35.7699H27.6098C25.5805 35.7699 24.9675 33.3274 24.9146 32.1062V26.531H20V28.4425H22.6951V32.1062C22.6951 36.5664 25.2317 37.8938 26.5 38Z" fill="#B8860B" />
                                    <path d="M15.8204 15.9308C16.3392 15.9308 16.8149 16.008 17.2472 16.1625C17.6844 16.3121 18.0783 16.5101 18.429 16.7562C18.7846 16.9976 19.0968 17.2534 19.3659 17.5237C19.5388 17.683 19.6973 17.8471 19.8415 18.0161C19.9904 18.185 20.1297 18.3492 20.2594 18.5084C20.3747 18.3492 20.4972 18.1923 20.6269 18.0378C20.7567 17.8833 20.9224 17.712 21.1242 17.5237C21.5277 17.1183 22.0249 16.7514 22.6159 16.4232C23.2116 16.0949 23.9058 15.9308 24.6984 15.9308C25.4287 15.9308 26.0916 16.1094 26.6874 16.4666C27.2879 16.819 27.7635 17.2969 28.1142 17.9002C28.4697 18.4988 28.6475 19.1649 28.6475 19.8986C28.6475 20.4537 28.5442 20.9751 28.3376 21.4626C28.1358 21.9453 27.8548 22.3701 27.4945 22.7369C27.1341 23.099 26.7138 23.3838 26.2334 23.5913C25.7578 23.794 25.2461 23.8954 24.6984 23.8954C24.17 23.8954 23.6848 23.8206 23.2428 23.671C22.8056 23.5165 22.4093 23.321 22.0538 23.0845C21.7031 22.8431 21.3932 22.5921 21.1242 22.3315C20.9512 22.1577 20.7927 21.9863 20.6486 21.8174C20.5044 21.6436 20.3747 21.4771 20.2594 21.3178C20.1297 21.4771 19.9904 21.6436 19.8415 21.8174C19.6973 21.9863 19.5388 22.1577 19.3659 22.3315C19.0968 22.5921 18.7846 22.8431 18.429 23.0845C18.0783 23.321 17.6844 23.5165 17.2472 23.671C16.8149 23.8206 16.3392 23.8954 15.8204 23.8954C15.0806 23.8954 14.4104 23.7168 13.8099 23.3596C13.2093 23.0024 12.7313 22.5221 12.3758 21.9187C12.0203 21.3154 11.8426 20.642 11.8426 19.8986C11.8426 19.3484 11.9435 18.8343 12.1452 18.3564C12.3518 17.8737 12.6353 17.4513 12.9956 17.0893C13.3607 16.7273 13.7834 16.4449 14.2639 16.2422C14.7491 16.0346 15.2679 15.9308 15.8204 15.9308ZM13.4856 19.8986C13.4856 20.3331 13.5889 20.7289 13.7955 21.0861C14.0068 21.4385 14.2879 21.7208 14.6386 21.9332C14.9941 22.1408 15.388 22.2446 15.8204 22.2446C16.296 22.2446 16.7308 22.136 17.1247 21.9187C17.5187 21.7015 17.8814 21.4336 18.2129 21.115C18.429 20.8978 18.6188 20.6879 18.7822 20.4851C18.9455 20.2824 19.092 20.0869 19.2217 19.8986C19.092 19.7249 18.9479 19.539 18.7894 19.3411C18.6356 19.1384 18.4435 18.9284 18.2129 18.7112C17.8958 18.3926 17.5355 18.1247 17.1319 17.9075C16.7332 17.6903 16.296 17.5817 15.8204 17.5817C15.388 17.5817 14.9941 17.6879 14.6386 17.9002C14.2879 18.1078 14.0068 18.3878 13.7955 18.7401C13.5889 19.0877 13.4856 19.4739 13.4856 19.8986ZM27.0044 19.8986C27.0044 19.4739 26.8987 19.0877 26.6874 18.7401C26.4808 18.3878 26.2021 18.1078 25.8514 17.9002C25.5055 17.6879 25.1212 17.5817 24.6984 17.5817C24.3718 17.5817 24.0643 17.6323 23.7761 17.7337C23.4878 17.8302 23.2188 17.9654 22.969 18.1392C22.7191 18.3081 22.4885 18.4988 22.2772 18.7112C22.0177 18.9574 21.8016 19.1963 21.6286 19.428C21.4605 19.6549 21.3404 19.8117 21.2683 19.8986C21.398 20.0869 21.5445 20.2824 21.7079 20.4851C21.8712 20.6879 22.061 20.8978 22.2772 21.115C22.6086 21.4336 22.9714 21.7015 23.3653 21.9187C23.764 22.136 24.2084 22.2446 24.6984 22.2446C25.1212 22.2446 25.5055 22.1408 25.8514 21.9332C26.2021 21.7208 26.4808 21.4385 26.6874 21.0861C26.8987 20.7289 27.0044 20.3331 27.0044 19.8986Z" fill="#B8860B" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold font-display tracking-wide uppercase text-slate-900 leading-none">
                                    HUMAN INTERIOR
                                </span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-[0.15em]">
                                    Member of HISPACE.AI
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed italic">
                            &quot;Serving Star-Rating Living Spaces&quot; <br />
                            <span className="font-medium text-slate-800">Phụng Sự Không Gian Sống Chuẩn Sao</span>
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-display text-slate-900">Thông Tin Liên Hệ</h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>Số 27, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>0912.xxx.xxx (Hotline)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <span>contact@humaninterior.vn</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 font-display text-slate-900">Liên Kết</h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li>
                                <a href="https://humaninterior.vn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                                    </svg>
                                    humaninterior.vn
                                </a>
                            </li>
                            <li>
                                <a href="https://zalo.me/g/yooqhx505" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                    </svg>
                                    Zalo tư vấn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-200 pt-6 text-center">
                    <p className="text-slate-500 text-sm">
                        © 2026 Human Interior. Member of HISPACE.AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
