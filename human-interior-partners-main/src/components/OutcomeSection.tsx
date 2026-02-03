import { motion } from "framer-motion";
import { Check, Wallet, Clock, Target, Network, TrendingUp } from "lucide-react";

const outcomes = [
  {
    icon: Wallet,
    text: "Có thêm 30–50–100 triệu/tháng từ chính mối quan hệ bạn đang có"
  },
  {
    icon: Clock,
    text: "Không bị trói giờ giấc"
  },
  {
    icon: Target,
    text: "Không áp lực KPI vô lý"
  },
  {
    icon: Network,
    text: "Vừa làm – vừa mở rộng network cao cấp"
  },
  {
    icon: TrendingUp,
    text: "Biến mỗi khách quen thành tài sản tạo tiền lâu dài"
  }
];

const OutcomeSection = () => {
  return (
    <section className="py-12 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6">
            TƯƠNG LAI CỦA BẠN
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
            Viễn cảnh <span className="gradient-gold-text">"ĐÃ ĐỜI"</span>
          </h2>
        </motion.div>

        {/* Outcomes list */}
        <div className="max-w-3xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 md:gap-6 py-4 md:py-6 border-b border-border/30 last:border-0 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-secondary flex items-center justify-center group-hover:gradient-gold-bg transition-all duration-300 flex-shrink-0">
                <outcome.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Text */}
              <div className="flex items-center gap-2 md:gap-4 flex-1">
                <Check className="w-4 h-4 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <p className="text-sm md:text-lg lg:text-xl text-foreground font-medium">
                  {outcome.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;

