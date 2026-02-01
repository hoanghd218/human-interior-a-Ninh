import { motion } from "framer-motion";
import { Gift, Bot, Banknote, Sparkles, Zap, CheckCircle2 } from "lucide-react";

const offers = [
  {
    icon: Gift,
    title: "🎁 Sales Kit Cao Cấp",
    items: [
      "Catalogue in ấn sang trọng",
      "Profile công ty chuyên nghiệp",
      "Namecard cá nhân hóa"
    ],
    color: "from-amber-500 to-yellow-400"
  },
  {
    icon: Bot,
    title: "🤖 VŨ KHÍ AI – KHÁCH XEM LÀ MUỐN ĐẶT CỌC",
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
    title: "💰 Hoa hồng CAO – RÕ – TRẢ THẲNG",
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-gold-bg opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 gradient-gold-bg opacity-50" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            ĐẶC QUYỀN ĐẠI LÝ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Gia Nhập Ngay –
            <br />
            <span className="gradient-gold-text">Nhận Trọn Bộ VŨ KHÍ KIẾM TIỀN</span>
          </h2>
        </motion.div>

        {/* Offers grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ${offer.highlight ? "transform scale-105" : ""
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
              <div className="relative p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <offer.icon className="w-8 h-8 text-background" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-6">
                  {offer.title}
                </h3>

                <ul className="space-y-4">
                  {offer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Border */}
              <div className={`absolute inset-0 rounded-2xl border ${offer.highlight ? "border-primary/50" : "border-border/50"} pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
