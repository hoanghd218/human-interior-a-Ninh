"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className="hidden md:block fixed top-4 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 z-50 animate-fadeIn">
            <div className="max-w-7xl mx-auto">
                <div className="glass-liquid rounded-2xl shadow-xl shadow-primary/5 px-4 md:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 group cursor-pointer"
                        >
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-semibold tracking-wide text-slate-900 font-display">
                                    Hi<span className="text-primary">Space</span>
                                </h1>
                            </div>
                        </Link>

                        <nav className="hidden md:flex items-center gap-1">
                            <Link
                                href="/"
                                className={`
                                    text-sm font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300 cursor-pointer
                                    ${isActive("/")
                                        ? "text-white bg-gradient-to-r from-primary to-primary-hover shadow-lg shadow-primary/25 border border-primary/20"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60 border border-transparent hover:border-slate-200/50"
                                    }
                                `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                                Thiết kế nội thất
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

