import { motion } from "framer-motion";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-auto text-primary" />
              <h3 className="text-2xl font-black">
                <span className="gradient-gold-text">HUMAN</span>{" "}
                <span className="text-foreground">INTERIOR</span>
              </h3>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold tracking-wide">
              Member of <span className="text-primary font-bold">Hispace.ai</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md">
            Nội thất cao cấp – Thiết kế & Thi công chuyên nghiệp
            <br />
            Đại lý tin cậy của hàng ngàn gia đình Việt
          </p>

          {/* Divider */}
          <div className="w-24 h-0.5 gradient-gold-bg rounded-full" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Human Interior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
