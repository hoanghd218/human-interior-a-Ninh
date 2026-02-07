import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Check, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import heroImage from "@/assets/hero-showroom.jpg";
import partnerImage from "@/assets/hero-partner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85dvh] lg:min-h-[90vh] flex items-center overflow-hidden py-16 lg:py-0">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-auto text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">
                <span className="gradient-gold-text">HUMAN</span>{" "}
                <span className="text-foreground">INTERIOR</span>
              </span>
              <span className="text-[8px] text-muted-foreground font-semibold tracking-wide">
                Member of <span className="text-primary">Hispace.ai</span>
              </span>
            </div>
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
      <div className="container relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-8">
        {/* TOP BRANDING HEADLINE - ELEGANT & REFINED */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 space-y-2 px-2 md:px-4"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl opacity-50"></div>
            <h3 className="relative text-xs md:text-xl font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase text-primary/90 leading-relaxed">
              Mô hình Đại lý bán hàng Nội thất Đầu tiên tại Việt Nam
            </h3>
          </div>
          <p className="text-xs md:text-base text-muted-foreground font-medium max-w-3xl leading-relaxed px-2">
            Ứng dụng A.I hỗ trợ kiếm khách & theo dõi thu nhập minh bạch
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Badge - SCARCITY */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-3 py-2 md:px-6 md:py-3 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs md:text-base font-bold inline-flex items-center gap-1.5 md:gap-2 shadow-lg shadow-primary/10 whitespace-nowrap">
                <Flame className="w-3.5 h-3.5 md:w-5 md:h-5 text-orange-500 animate-pulse" /> Chỉ còn 10 suất Đại lý tháng này
              </span>
            </motion.div>

            {/* Feature list - CLEAN CARDS */}
            <div className="space-y-3 flex flex-col items-start w-full">
              {[
                "Bạn học tập & thực hành ứng dụng ngay trên điện thoại",
                "Ghi nhận khách hàng theo mã đại lý trên tài khoản ứng dụng",
                "Theo dõi kiến trúc sư trực tiếp hỗ trợ khách hàng trên ứng dụng",
                "Quản lý thu nhập & thanh toán trên ứng dụng"
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group relative flex items-center w-full"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-1.5 transition-all duration-300"></div>
                  <div className="bg-background/60 backdrop-blur-sm border border-primary/10 border-l-0 px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base text-foreground/90 font-medium leading-relaxed group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300 cursor-default w-full">
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sub-headline */}
            <div className="space-y-1">
              <p className="text-base md:text-xl lg:text-2xl font-bold text-primary leading-snug">
                Hoa Hồng Nội Thất
                <br className="md:hidden" />
                <span className="md:ml-1">HÀNG CHỤC TRIỆU / THÁNG</span>
              </p>
              <p className="text-muted-foreground font-normal text-sm md:text-lg">
                Không Cần Vốn – Không Giam Thời Gian
              </p>
            </div>

            {/* Checklist */}
            <div className="grid gap-3 text-base md:text-lg text-foreground/80 font-medium">
              {[
                "Bạn không cần ngồi văn phòng",
                "Không cần chạy quảng cáo",
                "Không cần hiểu sâu kỹ thuật"
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  </div>
                  {item}
                </p>
              ))}
            </div>

            <div className="flex flex-col space-y-1 pt-2">
              <p className="text-foreground/90 text-base md:text-xl font-medium flex items-start gap-3 leading-relaxed">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                Bạn chỉ cần gửi ứng dụng thiết kế A.I cho khách hàng trải nghiệm miễn phí
              </p>
            </div>


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
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pt-6 justify-center"
        >
          <Button
            variant="hero"
            size="xxl"
            className="relative overflow-hidden group/btn px-6 py-5 md:px-12 md:py-8 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 text-sm md:text-2xl font-black uppercase leading-tight"
            asChild
          >
            <a
              href="https://human-interior-a-ninh-app-render.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-foreground/20 to-primary translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 text-center">
                <span className="hidden md:inline">Bấm & Trải nghiệm ứng dụng thiết kế A.I miễn phí</span>
                <span className="md:hidden">Trải nghiệm A.I thiết kế miễn phí</span>
              </span>
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
            </a>
          </Button>
        </motion.div>
      </div>
    </section >
  );
};

export default HeroSection;
