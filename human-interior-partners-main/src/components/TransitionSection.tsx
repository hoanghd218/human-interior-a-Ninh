import { motion } from "framer-motion";

const TransitionSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 md:h-32 gradient-gold-bg" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-20 md:h-32 gradient-gold-bg" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-4 md:space-y-8"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
            <span className="block mb-1 md:mb-0 md:inline">Sale giỏi không cần làm nhiều hơn –</span>
            <span className="gradient-gold-text block md:inline">chỉ cần đứng đúng chỗ.</span>
          </h2>

          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            <span className="text-primary font-bold">Human Interior</span> được tạo ra để trở thành{" "}
            <span className="text-foreground font-semibold">bệ phóng kiếm tiền</span> cho những người có{" "}
            <span className="text-foreground font-semibold">mối quan hệ & tư duy kinh doanh</span>.
          </p>

          {/* Arrow down */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-4 md:pt-8"
          >
            <span className="text-2xl md:text-4xl text-primary">⬇️</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;

