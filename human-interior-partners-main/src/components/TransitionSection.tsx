import { motion } from "framer-motion";

const TransitionSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 gradient-gold-bg" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 gradient-gold-bg" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Sale giỏi không cần làm nhiều hơn –
            <br />
            <span className="gradient-gold-text">chỉ cần đứng đúng chỗ.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <span className="text-primary font-bold">Human Interior</span> được tạo ra để trở thành{" "}
            <span className="text-foreground font-semibold">bệ phóng kiếm tiền</span> cho những người có{" "}
            <span className="text-foreground font-semibold">mối quan hệ & tư duy kinh doanh</span>.
          </p>

          {/* Arrow down */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-8"
          >
            <span className="text-4xl text-primary">⬇️</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;
