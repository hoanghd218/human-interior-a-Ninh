import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const clientTypes = [
  { value: "bds", label: "Khách BĐS / Nhà đầu tư" },
  { value: "chunha", label: "Chủ nhà mới xây/sửa" },
  { value: "khac", label: "Nhóm khách khác" }
];

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clientType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.clientType) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
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
    
    setFormData({ name: "", phone: "", clientType: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="form-dangky" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              GIỮ SUẤT NGAY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Đăng Ký <span className="gradient-gold-text">Phỏng Vấn</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Điền form dưới đây – chúng tôi sẽ liên hệ trong 24h
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-3xl p-8 md:p-12 border border-primary/30 glow-gold"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground text-lg font-semibold">
                  Họ & Tên
                </Label>
                <Input
                  id="name"
                  placeholder="Nhập họ tên của bạn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 text-lg bg-secondary border-border/50 focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-foreground text-lg font-semibold">
                  Số điện thoại
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 text-lg bg-secondary border-border/50 focus:border-primary"
                />
              </div>

              {/* Client type */}
              <div className="space-y-4">
                <Label className="text-foreground text-lg font-semibold">
                  Bạn đang có nhóm khách nào?
                </Label>
                <RadioGroup
                  value={formData.clientType}
                  onValueChange={(value) => setFormData({ ...formData, clientType: value })}
                  className="space-y-3"
                >
                  {clientTypes.map((type) => (
                    <div
                      key={type.value}
                      className="flex items-center space-x-4 bg-secondary/50 rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="text-foreground cursor-pointer flex-1">
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                variant="hero"
                size="xxl"
                className="w-full text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Đang gửi...
                  </>
                ) : (
                  <>🔥 ĐĂNG KÝ PHỎNG VẤN – GIỮ SUẤT NGAY</>
                )}
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Miễn phí 100%
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Không ràng buộc
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Bảo mật thông tin
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
