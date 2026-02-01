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
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            TƯƠNG LAI CỦA BẠN
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
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
              className="flex items-center gap-6 py-6 border-b border-border/30 last:border-0 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:gradient-gold-bg transition-all duration-300">
                <outcome.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Text */}
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl text-primary">✔</span>
                <p className="text-lg md:text-xl text-foreground font-medium">
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
