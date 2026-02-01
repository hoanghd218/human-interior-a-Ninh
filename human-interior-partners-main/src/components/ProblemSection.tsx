import { motion } from "framer-motion";
import { X } from "lucide-react";

const painPoints = [
  {
    icon: "❌",
    title: "Làm sale nhưng thu nhập không kiểm soát được",
    description: "Tháng có khách thì sống – tháng không có khách thì \"ngửa tay\"."
  },
  {
    icon: "❌",
    title: "Chốt hợp đồng tiền trăm triệu – tiền tỷ nhưng hoa hồng bèo bọt",
    description: "1–2%, lại còn bị trừ \"phí quản lý – phí marketing – phí vô hình\"."
  },
  {
    icon: "❌",
    title: "Tự bơi, tự chết",
    description: "Không showroom. Không công cụ thuyết phục. Khách hỏi sâu là… cứng họng → mất khách trong im lặng."
  },
  {
    icon: "❌",
    title: "Bán bằng miệng, không có thứ gì khiến khách \"WOW\" ngay lập tức",
    description: "Đối thủ có AI, có showroom, có thương hiệu – còn bạn chỉ có lời nói."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Nếu bạn đang làm sale mà thấy mình trong những điều này…
            <br />
            <span className="gradient-gold-text">thì đây là lý do bạn cần đọc tiếp</span>
          </h2>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient border border-border/50 rounded-2xl p-8 hover:border-destructive/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{point.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Truth statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-secondary/50 border border-primary/30 rounded-2xl p-8 max-w-3xl">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sự thật đau lòng:
            </p>
            <p className="text-xl text-muted-foreground mb-2">
              Không phải bạn kém.
            </p>
            <p className="text-2xl font-bold gradient-gold-text">
              👉 Bạn đang đứng sai nền tảng.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
