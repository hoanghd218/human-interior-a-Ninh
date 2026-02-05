import { motion } from "framer-motion";
import { XCircle, ArrowRight } from "lucide-react";

const painPoints = [
  {
    title: "Làm sale nhưng thu nhập không kiểm soát được",
    description: "Tháng có khách thì sống – tháng không có khách thì \"ngửa tay\"."
  },
  {
    icon: "❌",
    title: "Chốt hợp đồng tiền trăm triệu – tiền tỷ nhưng hoa hồng bèo bọt",
    description: "1–2%, lại còn bị trừ \"phí quản lý – phí marketing – phí vô hình\"."
  },
  {
    title: "Tự bơi, tự chết",
    description: "Mất quá nhiều thời gian, sức lực cho các công cụ Marketing phức tạp"
  },
  {
    title: "Bán bằng miệng, không có thứ gì khiến khách \"WOW\" ngay lập tức",
    description: "Đối thủ có AI, có showroom, có thương hiệu – còn bạn chỉ có lời nói."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-12 md:py-24 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container px-6 md:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 md:mb-6 leading-tight px-2">
            <span className="block mb-2">Nếu bạn đang làm sale mà thấy mình trong những điều này…</span>
            <span className="gradient-gold-text">thì đây là lý do bạn cần đọc tiếp</span>
          </h2>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="card-gradient border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-destructive/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl flex-shrink-0"><XCircle className="w-5 h-5 md:w-8 md:h-8 text-destructive" /></span>
                <div>
                  <h3 className="text-sm md:text-xl font-bold text-foreground mb-2 md:mb-3 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
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
          className="mt-8 md:mt-16 text-center"
        >
          <div className="inline-block bg-secondary/50 border border-primary/30 rounded-xl md:rounded-2xl p-5 md:p-8 max-w-3xl">
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-4">
              Sự thật đau lòng:
            </p>
            <p className="text-base md:text-xl text-muted-foreground mb-1 md:mb-2">
              Bạn chọn sai mô hình để hợp tác.
            </p>
            <p className="text-lg md:text-2xl font-bold gradient-gold-text flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" /> Bạn đang đứng sai nền tảng.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

