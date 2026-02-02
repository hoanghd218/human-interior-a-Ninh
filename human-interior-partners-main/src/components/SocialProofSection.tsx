import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";
import thumb1 from "@/assets/testimonial-thumb-1.png";
import thumb2 from "@/assets/testimonial-thumb-2.png";

const testimonials = [
  {
    name: "Chị Lan",
    role: "Vinhome Grand Park",
    content: "Lúc đầu cũng lo, không biết làm xong có giống thiết kế không. Nhưng đội ngũ Human Interior làm việc rất chuyên nghiệp, bàn giao đúng hẹn mà đẹp hơn cả 3D. Rất ưng ý!",
    thumbnail: thumb1,
    videoId: "sU14z0lWv1w",
    rating: 5,
    highlight: true
  },
  {
    name: "Anh Minh",
    role: "Eco Retreat",
    content: "Đã làm việc với nhiều đơn vị nhưng Human Interior là nơi tôi hài lòng nhất. Thi công sắc nét, vật liệu cao cấp, đúng như cam kết. Khách đến chơi ai cũng khen.",
    thumbnail: thumb2,
    videoId: "t_jHrUE5IOk",
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
              className={`relative rounded-2xl p-6 border overflow-hidden ${testimonial.highlight
                ? "card-gradient border-primary/50 glow-gold"
                : "bg-secondary/30 border-border/50"
                }`}
            >
              {/* Video Thumbnail Placeholder */}
              <div
                className="relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden mb-6 bg-black shadow-lg group cursor-pointer"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${testimonial.videoId}`, '_blank')}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={`Testimonial from ${testimonial.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-xl transform transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Xem video thực tế
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-base text-foreground mb-4 leading-relaxed italic line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold-bg flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
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
    </section >
  );
};

export default SocialProofSection;
