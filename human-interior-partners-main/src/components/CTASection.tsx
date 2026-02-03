import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Flame, Check } from "lucide-react";

const clientTypes = [
  { value: "bds", label: "Khách BĐS / Nhà đầu tư" },
  { value: "chunha", label: "Chủ nhà mới xây/sửa" },
  { value: "khac", label: "Nhóm khách khác" }
];

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientType: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    clientType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Validate Vietnamese phone number (10 digits, starts with 0)
  const validatePhone = (phone: string): string => {
    const cleanPhone = phone.replace(/\s+/g, "");
    if (!cleanPhone) return "Vui lòng nhập số điện thoại";
    if (!/^0\d{9}$/.test(cleanPhone)) {
      return "Số điện thoại không hợp lệ (VD: 0912345678)";
    }
    return "";
  };

  // Validate name
  const validateName = (name: string): string => {
    if (!name.trim()) return "Vui lòng nhập họ tên";
    if (name.trim().length < 2) return "Họ tên phải có ít nhất 2 ký tự";
    return "";
  };

  // Validate email
  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Vui lòng nhập email";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Email không hợp lệ (VD: example@gmail.com)";
    }
    return "";
  };

  // Validate client type
  const validateClientType = (clientType: string): string => {
    if (!clientType) return "Vui lòng chọn nhóm khách hàng";
    return "";
  };

  // Handle field change with error clearing
  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      clientType: validateClientType(formData.clientType)
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.clientType) {
      toast({
        title: "Vui lòng kiểm tra lại thông tin",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "🎉 Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ bạn trong 24h tới."
    });

    setFormData({ name: "", email: "", phone: "", clientType: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="form-dangky" className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6">
              GIỮ SUẤT NGAY
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 md:mb-4">
              Đăng Ký <span className="gradient-gold-text">Phỏng Vấn</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Điền form dưới đây – chúng tôi sẽ liên hệ trong 24h
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/30 glow-gold"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="name" className="text-foreground text-base md:text-lg font-semibold">
                  Họ & Tên
                </Label>
                <Input
                  id="name"
                  placeholder="Nhập họ tên của bạn"
                  value={formData.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  className={`h-12 md:h-14 text-base md:text-lg bg-secondary border-border/50 focus:border-primary ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="email" className="text-foreground text-base md:text-lg font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  className={`h-12 md:h-14 text-base md:text-lg bg-secondary border-border/50 focus:border-primary ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="phone" className="text-foreground text-base md:text-lg font-semibold">
                  Số điện thoại
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={(e) => handleFieldChange("phone", e.target.value)}
                  className={`h-12 md:h-14 text-base md:text-lg bg-secondary border-border/50 focus:border-primary ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-3 md:space-y-4">
                <Label className="text-foreground text-base md:text-lg font-semibold">
                  Bạn đang có nhóm khách nào?
                </Label>
                <RadioGroup
                  value={formData.clientType}
                  onValueChange={(value) => handleFieldChange("clientType", value)}
                  className="space-y-3"
                >
                  {clientTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`flex items-center space-x-3 md:space-x-4 bg-secondary/50 rounded-lg md:rounded-xl p-3 md:p-4 border hover:border-primary/50 transition-colors cursor-pointer ${errors.clientType ? "border-red-500/50" : "border-border/50"}`}
                    >
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="text-foreground cursor-pointer flex-1">
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.clientType && (
                  <p className="text-red-500 text-sm mt-1">{errors.clientType}</p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="hero"
                size="xxl"
                className="w-full text-sm md:text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Flame className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">ĐĂNG KÝ PHỎNG VẤN – GIỮ SUẤT NGAY</span>
                    <span className="sm:hidden">ĐĂNG KÝ NGAY</span>
                  </>
                )}
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4 text-xs md:text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Miễn phí 100%
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Không ràng buộc
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Bảo mật thông tin
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
