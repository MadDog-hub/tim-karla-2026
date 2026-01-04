import { motion } from 'framer-motion';

const MemorableMomentsSection = () => {
  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue bg-white relative overflow-hidden py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-light italic text-gold-bright mb-8" data-testid="text-prenup-photos-title">
            Save the Date Photos
          </h2>
          <div className="w-24 h-px bg-gold-bright/30 mx-auto mb-12" />
          
          <div className="relative py-20 px-8 border border-dashed border-primary/20 rounded-2xl bg-primary/5">
            <motion.p 
              className="text-3xl md:text-4xl font-display italic text-primary/60 tracking-widest uppercase"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Coming Soon
            </motion.p>
            <p className="mt-4 text-muted-foreground font-light tracking-wide">
              Beautiful moments are currently being prepared for you
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
