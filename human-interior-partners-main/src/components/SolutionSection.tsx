import { motion } from "framer-motion";
import { Check, Building2, Shield, Users } from "lucide-react";

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
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            GIẢI PHÁP
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-primary">Human Interior</span>
            <br />
            Nơi Bạn Không CẦN CHỐT GIỎI
            <br />
            <span className="gradient-gold-text">VẪN CÓ TIỀN</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Lợi thế "đè chết đối thủ":
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                benefit.highlight 
                  ? "bg-primary/5 border-primary/50 glow-gold" 
                  : "card-gradient border-border/50"
              }`}
            >
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 rounded-xl gradient-gold-bg flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="pt-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-start gap-2">
                  <span className="text-primary mt-1">✅</span>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
          <div className="inline-block bg-secondary rounded-2xl p-8 border border-primary/30">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              👉 Bạn chỉ cần mang khách đến –
              <br />
              <span className="gradient-gold-text">phần còn lại đội Human Interior xử lý.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
