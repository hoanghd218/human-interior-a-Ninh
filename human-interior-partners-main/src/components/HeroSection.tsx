import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import heroImage from "@/assets/hero-showroom.jpg";
import partnerImage from "@/assets/hero-partner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-auto text-primary" />
            <span className="text-xl font-black tracking-tighter">
              <span className="gradient-gold-text">HUMAN</span>{" "}
              <span className="text-foreground">INTERIOR</span>
            </span>
          </div>
        </div>
      </header>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Showroom nội thất cao cấp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium">
                🔥 Chỉ còn 10 suất ĐẠI LÝ tháng này
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block text-foreground">Bạn Có Khách –</span>
              <span className="block gradient-gold-text">Chúng Tôi Chốt Đơn</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl font-bold text-primary">
              Hoa Hồng Nội Thất HÀNG CHỤC TRIỆU / THÁNG
              <br />
              <span className="text-muted-foreground font-normal text-lg">
                Không Cần Vốn – Không Giam Thời Gian
              </span>
            </p>

            {/* Pain points solved */}
            <div className="space-y-3 text-lg text-muted-foreground">
              <p className="flex items-center gap-3">
                <span className="text-primary text-2xl">✓</span>
                Bạn không cần ngồi văn phòng
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary text-2xl">✓</span>
                Không cần chạy quảng cáo
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary text-2xl">✓</span>
                Không cần hiểu sâu kỹ thuật
              </p>
            </div>

            <p className="text-foreground text-xl font-medium">
              👉 Bạn chỉ cần kết nối khách hàng – <span className="text-primary">Human Interior</span> lo TẤT CẢ phần còn lại.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="hero" size="xxl" className="text-base">
                👉 ĐĂNG KÝ NHẬN BỘ VŨ KHÍ SALE AI – MIỄN PHÍ
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Representative Person */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-end relative"
          >
            {/* Artistic Glow background */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform -translate-y-10" />

            <div className="relative group">
              {/* Outer frame effect */}
              <div className="absolute -inset-4 border border-primary/20 rounded-[2rem] transition-all duration-500 group-hover:border-primary/40" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl glow-gold max-w-[450px]">
                <img
                  src={partnerImage}
                  alt="Đại lý Human Interior"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

                {/* Floating success badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-primary/30"
                >
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Mức thu nhập</p>
                  <p className="text-xl font-black text-primary">50.000.000đ+</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Kéo xuống để xem thêm</span>
          <span className="text-2xl">↓</span>
        </div>
      </motion.div>
    </section >
  );
};

export default HeroSection;
