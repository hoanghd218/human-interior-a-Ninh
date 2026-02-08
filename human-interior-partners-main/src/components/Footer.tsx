import { motion } from "framer-motion";
import Logo from "./Logo";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 md:py-28 bg-background overflow-hidden relative border-t border-primary/10">
      {/* Decorative background elements for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center max-w-6xl mx-auto">

          {/* 1. Logo & Member Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <Logo className="w-10 h-auto text-primary" />
              <h3 className="text-3xl font-black tracking-tight leading-none">
                <span className="text-primary uppercase">Human</span>{" "}
                <span className="text-foreground uppercase">Interior</span>
              </h3>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <p className="text-[10px] md:text-xs font-black text-primary/60 tracking-[0.2em] uppercase">
                Member of <span className="text-primary">Hispace.ai</span>
              </p>
            </div>
          </motion.div>

          {/* 2. Taglines */}
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

          {/* 3. Main Footer Content (2 Rows Layout) */}
          <div className="w-full flex flex-col mb-16 max-w-5xl mx-auto">

            {/* Row 1: Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 pb-12 md:pb-16 border-b border-primary/10 items-start">
              {/* Hotline Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6"
              >
                <div className="hidden md:flex w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary transition-all duration-500 shadow-sm group-hover:shadow-primary/20 shrink-0">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-[14px] font-black text-primary tracking-[0.2em] uppercase mb-1">Hotline</span>
                  <a href="tel:0981463839" className="text-xl md:text-4xl font-black text-foreground hover:text-primary transition-colors duration-300 tracking-tight">
                    0981.46.38.39
                  </a>
                </div>
              </motion.div>

              {/* Address Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-5"
              >
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-[14px] font-black text-primary tracking-[0.2em] uppercase mb-1.5 md:mb-2 text-center">Địa chỉ</span>
                  <p className="text-foreground/80 font-bold text-xs md:text-base leading-relaxed max-w-sm md:max-w-none">
                    Shophouse HR01-1E [Số Nhà 27], Khu Đô Thị MIDORI PARK HARUKA, Khu Phố Hòa Phú 2, Đường Bùi Thị Xuân, Phường Bình Dương, Thành Phố Hồ Chí Minh.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Website Links */}
            <div className="pt-12 md:pt-16">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-4">
                {[
                  { label: "Website nhượng quyền / Mở chi nhánh", href: "https://hispaces.ai" },
                  { label: "Website thành viên / Chi nhánh", href: "https://humaninterior.vn" },
                  { label: "Website mời Khách Sự kiện", href: "https://humaninterior.vn/contact" }
                ].map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="group flex items-center gap-2.5 px-2 py-1 transition-all duration-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 hidden md:block" />
                    <span className="text-[13px] md:text-[14px] font-black text-muted-foreground/70 group-hover:text-primary tracking-widest md:tracking-wide uppercase transition-colors text-center">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Bottom Footer */}
          <div className="w-full pt-10 border-t border-primary/10 flex flex-col items-center gap-6 text-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            <p className="text-[9px] md:text-[10px] text-muted-foreground/40 font-black tracking-[0.3em] uppercase">
              © {new Date().getFullYear()} <span className="text-primary/60">HUMAN INTERIOR</span>. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
