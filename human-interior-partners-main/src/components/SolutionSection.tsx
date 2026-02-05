import { motion } from "framer-motion";
import { CheckCircle2, Building2, Shield, Users, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Showroom thật – sản phẩm thật – cảm xúc thật",
    description: "Khách được sờ – được cảm – được thấy → quyết nhanh gấp nhiều lần ảnh 3D.",
    highlight: true
  },
  {
    icon: Shield,
    title: "Thương hiệu làm thật, không vẽ",
    description: "Thiết kế – thi công – bảo hành minh bạch → bạn bán bằng uy tín công ty, không phải bằng lời hứa.",
    highlight: false
  },
  {
    icon: Users,
    title: "Bạn KHÔNG cần làm phần khó",
    description: "Không đo đạc • Không thiết kế • Không báo giá • Không thi công",
    highlight: true
  }
];

const SolutionSection = () => {
  return (
    <section className="py-12 md:py-24 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6 tracking-wider">
            GIẢI PHÁP
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 md:mb-6 leading-tight">
            <span className="text-primary font-black">Human Interior</span>
            <br />
            <span className="block mt-2 text-foreground/90 font-bold text-xl md:text-2xl lg:text-3xl">
              Nơi Bạn Không{" "}
              <span className="text-foreground font-black text-2xl md:text-3xl lg:text-4xl">CẦN LÀM NHIỀU</span>
            </span>
            <span className="gradient-gold-text block mt-2 font-black">VẪN CÓ KHÁCH</span>
            <br />
            <span className="block mt-3 text-foreground font-bold text-lg md:text-xl lg:text-2xl">
              BẠN CHỈ CẦN LÀM{" "}
              <span className="text-primary font-black text-xl md:text-2xl lg:text-3xl">1 ĐIỀU DUY NHẤT</span>
            </span>
          </h2>
          <motion.a
            href="https://human-interior-a-ninh-app-render.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-6 px-8 py-4 md:px-12 md:py-6 rounded-2xl bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#B8860B] text-white font-black text-base md:text-lg lg:text-xl shadow-2xl hover:shadow-[#DAA520]/50 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-center">
              <span className="font-bold text-white/90">Gửi link</span>
              <span className="font-black text-white text-lg md:text-xl lg:text-2xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">ỨNG DỤNG THIẾT KẾ AI</span>
              <span className="font-bold text-white/90">cho khách</span>
              <span className="font-bold text-white">trải nghiệm miễn phí</span>
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform flex-shrink-0" />
            </span>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-white/10 blur-3xl rounded-full"></div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed">
            <span className="text-foreground/80">Trải nghiệm</span>{" "}
            <span className="text-primary font-black">THỰC TẾ</span>{" "}
            <span className="text-foreground/80">dành cho</span>{" "}
            <span className="font-black text-foreground">KHÁCH HÀNG CỦA BẠN</span>
            <br />
            <span className="gradient-gold-text font-black block mt-2">TRỰC TIẾP TẠI SHOWROOM</span>
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-xl md:rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:scale-105 ${benefit.highlight
                ? "bg-primary/5 border-primary/50 glow-gold"
                : "card-gradient border-border/50"
                }`}
            >
              <div className="absolute -top-3 md:-top-4 left-6 md:left-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl gradient-gold-bg flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="pt-6 md:pt-8">
                <h3 className="text-base md:text-xl font-bold text-foreground mb-3 md:mb-4 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit.title}</span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-secondary rounded-xl md:rounded-2xl p-5 md:p-8 border border-primary/30">
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground flex flex-col items-center gap-1 md:gap-2">
              <span className="flex items-center gap-2"><ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary" /> Bạn chỉ cần mang khách đến –</span>
              <span className="gradient-gold-text">phần còn lại đội Human Interior xử lý.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

