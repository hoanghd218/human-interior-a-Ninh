import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anh Minh",
    role: "Cựu Sale BĐS",
    content: "Tôi chỉ cần giới thiệu khách mua nhà sang bên nội thất. Mỗi hợp đồng xong là tiền về. Tháng rồi 50 triệu, không stress.",
    rating: 5,
    highlight: true
  },
  {
    name: "Chị Lan",
    role: "Freelancer",
    content: "AI làm khách tin cực nhanh. Chưa cần báo giá, khách đã hỏi 'khi nào làm được?'",
    rating: 5,
    highlight: false
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            ĐẠI LÝ ĐÃ THÀNH CÔNG
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Người Thật, <span className="gradient-gold-text">Tiền Thật</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 border ${testimonial.highlight
                ? "card-gradient border-primary/50 glow-gold"
                : "bg-secondary/30 border-border/50"
                }`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold-bg flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
