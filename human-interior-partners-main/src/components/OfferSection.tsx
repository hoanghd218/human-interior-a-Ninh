import { motion } from "framer-motion";
import { Gift, Bot, Banknote, Sparkles, Zap, CheckCircle2 } from "lucide-react";

const offers = [
  {
    icon: Gift,
    title: "Sales Kit Cao Cấp",
    items: [
      "Catalogue in ấn sang trọng",
      "Profile công ty chuyên nghiệp",
      "Namecard cá nhân hóa"
    ],
    color: "from-amber-500 to-yellow-400"
  },
  {
    icon: Bot,
    title: "VŨ KHÍ AI – KHÁCH XEM LÀ MUỐN ĐẶT CỌC",
    items: [
      "Tạo concept nội thất trong 5 phút",
      "Gửi khách xem ngay trên Zalo",
      "Khách \"wow\" → tin → xuống tiền nhanh"
    ],
    color: "from-primary to-gold-light",
    highlight: true
  },
  {
    icon: Banknote,
    title: "Hoa hồng CAO – RÕ – TRẢ THẲNG",
    items: [
      "% cao hơn mặt bằng thị trường",
      "Không giam tiền",
      "Không nợ lương",
      "Không mập mờ"
    ],
    color: "from-green-500 to-emerald-400"
  }
];

const OfferSection = () => {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-gold-bg opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 gradient-gold-bg opacity-50" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-4 md:mb-6">
            ĐẶC QUYỀN ĐẠI LÝ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 md:mb-4 leading-tight">
            <span className="block">Gia Nhập Ngay –</span>
            <span className="gradient-gold-text">Nhận Trọn Bộ VŨ KHÍ KIẾM TIỀN</span>
          </h2>
        </motion.div>

        {/* Offers grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer ${offer.highlight ? "md:transform md:scale-105" : ""
                }`}
            >
              {/* Card background */}
              <div className={`absolute inset-0 ${offer.highlight ? "glow-gold-intense" : ""}`}>
                <div className="absolute inset-0 card-gradient" />
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-5`} />
              </div>

              {/* Highlight badge */}
              {offer.highlight && (
                <div className="absolute -top-0 left-0 right-0 h-1 gradient-gold-bg" />
              )}

              {/* Content */}
              <div className="relative p-5 md:p-8">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-4 md:mb-6 shadow-lg`}>
                  <offer.icon className="w-6 h-6 md:w-8 md:h-8 text-background" />
                </div>

                <h3 className="text-base md:text-xl font-bold text-foreground mb-4 md:mb-6">
                  {offer.title}
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  {offer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Border */}
              <div className={`absolute inset-0 rounded-xl md:rounded-2xl border ${offer.highlight ? "border-primary/50" : "border-border/50"} pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

