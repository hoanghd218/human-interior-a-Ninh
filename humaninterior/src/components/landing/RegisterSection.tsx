"use client";

import { useState, FormEvent } from "react";

interface FormData {
    name: string;
    phone: string;
    email: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
}

const RegisterSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Validate Vietnamese phone number (10 digits, starting with 0)
    const validatePhone = (phone: string): string | undefined => {
        if (!phone.trim()) {
            return "Vui lòng nhập số điện thoại";
        }
        // Remove all non-digit characters for validation
        const digitsOnly = phone.replace(/\D/g, "");
        if (digitsOnly.length !== 10) {
            return "Số điện thoại phải có 10 chữ số";
        }
        if (!digitsOnly.startsWith("0")) {
            return "Số điện thoại phải bắt đầu bằng số 0";
        }
        // Valid Vietnamese mobile prefixes
        const validPrefixes = ["03", "05", "07", "08", "09"];
        const prefix = digitsOnly.substring(0, 2);
        if (!validPrefixes.includes(prefix)) {
            return "Số điện thoại không hợp lệ";
        }
        return undefined;
    };

    // Validate email format
    const validateEmail = (email: string): string | undefined => {
        if (!email.trim()) {
            return undefined; // Email is optional
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Email không hợp lệ";
        }
        return undefined;
    };

    // Validate name
    const validateName = (name: string): string | undefined => {
        if (!name.trim()) {
            return "Vui lòng nhập họ và tên";
        }
        if (name.trim().length < 2) {
            return "Họ và tên phải có ít nhất 2 ký tự";
        }
        return undefined;
    };

    // Validate all fields
    const validateForm = (): FormErrors => {
        return {
            name: validateName(formData.name),
            phone: validatePhone(formData.phone),
            email: validateEmail(formData.email),
        };
    };

    // Handle input change
    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Validate on change if field was touched
        if (touched[field]) {
            let error: string | undefined;
            switch (field) {
                case "name":
                    error = validateName(value);
                    break;
                case "phone":
                    error = validatePhone(value);
                    break;
                case "email":
                    error = validateEmail(value);
                    break;
            }
            setErrors((prev) => ({ ...prev, [field]: error }));
        }
    };

    // Handle blur (mark field as touched)
    const handleBlur = (field: keyof FormData) => {
        setTouched((prev) => ({ ...prev, [field]: true }));

        let error: string | undefined;
        switch (field) {
            case "name":
                error = validateName(formData[field]);
                break;
            case "phone":
                error = validatePhone(formData[field]);
                break;
            case "email":
                error = validateEmail(formData[field]);
                break;
        }
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({ name: true, phone: true, email: true });

        const validationErrors = validateForm();
        setErrors(validationErrors);

        // Check if there are any errors
        const hasErrors = Object.values(validationErrors).some((error) => error !== undefined);

        if (!hasErrors) {
            // Form is valid, proceed with submission
            console.log("Form submitted:", formData);
            // TODO: Add actual form submission logic here
            alert("Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.");
        }
    };

    // Input styling with error state
    const getInputClassName = (field: keyof FormData) => {
        const baseClasses = "w-full bg-[#F9F9F9] border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E05C3E] focus:border-transparent outline-none transition-all text-[#333]";
        const errorClasses = errors[field] && touched[field]
            ? "border-red-500 bg-red-50"
            : "border-gray-300";
        return `${baseClasses} ${errorClasses}`;
    };

    return (
        <section id="register" className="py-12 bg-white relative border-t border-gray-100">
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
                <div className="bg-white p-4 md:p-12 rounded-lg shadow-soft border border-gray-100 relative overflow-hidden">
                    {/* Decorative blur */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E05C3E]/5 rounded-full blur-3xl z-0"></div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#555]">
                                    Họ và tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập họ tên của bạn"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    onBlur={() => handleBlur("name")}
                                    className={getInputClassName("name")}
                                />
                                {errors.name && touched.name && (
                                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">error</span>
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#555]">
                                    Số điện thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Nhập số điện thoại"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    onBlur={() => handleBlur("phone")}
                                    className={getInputClassName("phone")}
                                />
                                {errors.phone && touched.phone && (
                                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">error</span>
                                        {errors.phone}
                                    </p>
                                )}
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
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                onBlur={() => handleBlur("email")}
                                className={getInputClassName("email")}
                            />
                            {errors.email && touched.email && (
                                <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">error</span>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
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
