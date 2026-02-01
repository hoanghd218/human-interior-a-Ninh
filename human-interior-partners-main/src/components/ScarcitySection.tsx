import { motion } from "framer-motion";
import { AlertTriangle, Users, Headphones, Timer } from "lucide-react";

const scarcityPoints = [
  {
    icon: Users,
    text: "Đào tạo AI 1:1"
  },
  {
    icon: Headphones,
    text: "Hỗ trợ sát từng deal"
  },
  {
    icon: Timer,
    text: "Không nhận ồ ạt"
  }
];

const ScarcitySection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Urgent background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main scarcity box */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary/50 animate-pulse-gold" />

            {/* Content */}
            <div className="relative bg-secondary/50 p-10 md:p-16">
              {/* Warning badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/30">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="text-destructive font-semibold">GIỚI HẠN SỐ LƯỢNG</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4">
                Chỉ Nhận <span className="gradient-gold-text">10 ĐẠI LÝ</span>
              </h2>
              <p className="text-xl md:text-2xl text-center text-muted-foreground mb-10">
                Vì Chúng Tôi Làm <span className="text-primary font-bold">KỸ</span>, Không Làm <span className="text-muted-foreground">ĐẠI</span>
              </p>

              {/* Scarcity points */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {scarcityPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-background/50 rounded-xl p-4 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-gold-bg flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Urgency message */}
              <p className="text-center text-lg text-muted-foreground">
                👉 Hết suất = chờ đợt sau{" "}
                <span className="text-foreground font-semibold">(có thể là… năm sau)</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScarcitySection;
