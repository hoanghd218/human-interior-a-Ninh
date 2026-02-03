import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
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
  },
  {
    name: "Anh Minh",
    role: "Eco Retreat",
    content: "Đã làm việc với nhiều đơn vị nhưng Human Interior là nơi tôi hài lòng nhất. Thi công sắc nét, vật liệu cao cấp, đúng như cam kết. Khách đến chơi ai cũng khen.",
    thumbnail: thumb2,
    videoId: "t_jHrUE5IOk",
    rating: 5,
  },
  {
    name: "Chị Hương",
    role: "Quận 7, TP.HCM",
    content: "Thiết kế tối ưu không gian nhỏ mà vẫn sang trọng. Đội ngũ tư vấn nhiệt tình, giải đáp mọi thắc mắc. Căn hộ giờ đẹp như khách sạn 5 sao!",
    thumbnail: thumb1,
    videoId: "sU14z0lWv1w",
    rating: 5,
  },
  {
    name: "Anh Tuấn",
    role: "Bình Dương",
    content: "Từ bản vẽ đến thực tế gần như không có sai lệch. Vật liệu chất lượng, thi công cẩn thận từng chi tiết. Rất đáng đồng tiền bỏ ra.",
    thumbnail: thumb2,
    videoId: "t_jHrUE5IOk",
    rating: 5,
  },
  {
    name: "Chị Mai",
    role: "Thủ Đức",
    content: "Nhà tôi 60m2 mà thiết kế xong rộng rãi, thoáng đãng hẳn. Cảm ơn Human Interior đã biến giấc mơ thành hiện thực!",
    thumbnail: thumb1,
    videoId: "sU14z0lWv1w",
    rating: 5,
  },
  {
    name: "Anh Phong",
    role: "Quận 2, TP.HCM",
    content: "Đội ngũ trẻ, năng động, sáng tạo. Luôn lắng nghe và đưa ra giải pháp tốt nhất cho khách hàng. Chắc chắn sẽ giới thiệu cho bạn bè.",
    thumbnail: thumb2,
    videoId: "t_jHrUE5IOk",
    rating: 5,
  },
  {
    name: "Chị Thảo",
    role: "Đồng Nai",
    content: "Thiết kế hiện đại, tối giản mà vẫn ấm cúng. Tiến độ thi công nhanh, không phát sinh chi phí. Hài lòng 100%!",
    thumbnail: thumb1,
    videoId: "sU14z0lWv1w",
    rating: 5,
  },
  {
    name: "Anh Khoa",
    role: "Quận 9, TP.HCM",
    content: "Lần đầu làm nhà mà không stress gì cả. Human Interior lo hết từ A-Z, mình chỉ việc dọn vào ở thôi. Quá tuyệt vời!",
    thumbnail: thumb2,
    videoId: "t_jHrUE5IOk",
    rating: 5,
  },
  {
    name: "Chị Ngọc",
    role: "Bình Thạnh",
    content: "Phong cách Indochine mà Human Interior thiết kế cho nhà tôi đẹp xuất sắc. Ai đến cũng trầm trồ khen ngợi!",
    thumbnail: thumb1,
    videoId: "sU14z0lWv1w",
    rating: 5,
  },
  {
    name: "Anh Đức",
    role: "Gò Vấp",
    content: "Giá cả hợp lý, chất lượng vượt mong đợi. Đội ngũ làm việc có tâm, có trách nhiệm. Sẽ quay lại khi có dự án mới.",
    thumbnail: thumb2,
    videoId: "t_jHrUE5IOk",
    rating: 5,
  },
];

const SocialProofSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 relative overflow-hidden"
          >
            <span className="relative z-10">ĐẠI LÝ ĐÃ THÀNH CÔNG</span>
            <span className="absolute inset-0 animate-shimmer" />
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Người Thật, <span className="gradient-gold-text">Tiền Thật</span>
          </h2>
        </motion.div>

      </div>

      {/* Full Width Slider Container */}
      <div className="relative w-full">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/90 text-primary-foreground shadow-xl flex items-center justify-center hover:bg-primary transition-colors hidden md:flex"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/90 text-primary-foreground shadow-xl flex items-center justify-center hover:bg-primary transition-colors hidden md:flex"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative rounded-2xl p-6 border overflow-hidden cursor-pointer hover-glow bg-secondary/30 border-border/50 min-w-[320px] max-w-[320px] snap-center shrink-0"
            >
              {/* Video Thumbnail */}
              <div
                className="relative aspect-[9/16] rounded-xl overflow-hidden mb-6 bg-black shadow-lg group cursor-pointer"
                onClick={() => setActiveVideo(testimonial.videoId)}
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

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SocialProofSection;
