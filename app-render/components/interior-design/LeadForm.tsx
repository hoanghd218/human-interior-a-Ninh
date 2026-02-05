"use client";

import React, { useState } from 'react';

interface LeadFormData {
    name: string;
    phone: string;
    email: string;
    budget: string;
    location: string;
}

interface LeadFormProps {
    onSubmit: (data: LeadFormData) => void;
    isLoading: boolean;
    title?: string;
    description?: string;
    buttonText?: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    budget?: string;
    location?: string;
}

const BUDGET_OPTIONS = [
    { value: '', label: 'Chọn ngân sách dự kiến' },
    { value: 'under-500', label: 'Dưới 500 triệu' },
    { value: '500-1000', label: '500 triệu - 1 tỷ' },
    { value: '1000-2000', label: '1 tỷ - 2 tỷ' },
    { value: '2000-5000', label: '2 tỷ - 5 tỷ' },
    { value: 'over-5000', label: 'Trên 5 tỷ' },
];

const LeadForm: React.FC<LeadFormProps> = ({
    onSubmit,
    isLoading,
    title = "Hoàn tất hồ sơ",
    description = "Để lại thông tin để nhận file thiết kế gốc chất lượng cao và bảng dự toán chi phí chi tiết.",
    buttonText = "Nhận hồ sơ thiết kế"
}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [budget, setBudget] = useState('');
    const [location, setLocation] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Validate Vietnamese phone number (10-11 digits, starts with 0)
    const validatePhone = (phoneNumber: string): boolean => {
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
        return phoneRegex.test(phoneNumber.replace(/\s/g, ''));
    };

    // Validate email format
    const validateEmail = (emailAddress: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailAddress);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Vui lòng nhập họ và tên';
        }

        if (!phone.trim()) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
        } else if (!validatePhone(phone)) {
            newErrors.phone = 'Số điện thoại không đúng định dạng (VD: 0912345678)';
        }

        if (!email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email không đúng định dạng';
        }

        if (!budget) {
            newErrors.budget = 'Vui lòng chọn ngân sách dự kiến';
        }

        if (!location.trim()) {
            newErrors.location = 'Vui lòng nhập địa điểm thi công';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        validateForm();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, phone: true, email: true, budget: true, location: true });

        if (validateForm()) {
            onSubmit({ name, phone, email, budget, location });
        }
    };

    const getInputClassName = (field: keyof FormErrors) => {
        const baseClass = "w-full h-12 px-4 rounded-xl border-2 focus:ring-4 focus:outline-none transition-all duration-200 bg-white cursor-pointer";
        const hasError = touched[field] && errors[field];

        if (hasError) {
            return `${baseClass} border-red-400 hover:border-red-500 focus:ring-red-100 focus:border-red-500`;
        }
        return `${baseClass} border-slate-300 hover:border-primary/50 focus:ring-primary/10 focus:border-primary`;
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200">
            <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-display">{title}</h2>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Họ và tên */}
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        className={getInputClassName('name')}
                        placeholder="Nguyễn Văn A"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur('name')}
                    />
                    {touched.name && errors.name && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Số điện thoại */}
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        required
                        className={getInputClassName('phone')}
                        placeholder="0912 345 678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={() => handleBlur('phone')}
                    />
                    {touched.phone && errors.phone && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        required
                        className={getInputClassName('email')}
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleBlur('email')}
                    />
                    {touched.email && errors.email && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Ngân sách dự kiến */}
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Ngân sách dự kiến <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        className={getInputClassName('budget')}
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        onBlur={() => handleBlur('budget')}
                    >
                        {BUDGET_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {touched.budget && errors.budget && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {errors.budget}
                        </p>
                    )}
                </div>

                {/* Địa điểm thi công */}
                <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Địa điểm thi công <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        className={getInputClassName('location')}
                        placeholder="VD: Quận 7, TP. Hồ Chí Minh"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onBlur={() => handleBlur('location')}
                    />
                    {touched.location && errors.location && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {errors.location}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-13 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-brand-blue-dark text-white font-semibold rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 mt-8 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer active:scale-95"
                >
                    {isLoading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                <path d="m21.854 2.147-10.94 10.939" />
                            </svg>
                            {buttonText}
                        </>
                    )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                    Thông tin của bạn được bảo mật tuyệt đối.
                </p>
            </form>
        </div>
    );
};

export default LeadForm;

// Export interface for use in parent components
export type { LeadFormData };

