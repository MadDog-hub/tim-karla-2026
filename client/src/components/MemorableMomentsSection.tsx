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
            Save the Date Photo
          </h2>
          <div className="w-24 h-px bg-gold-bright/30 mx-auto mb-12" />
          
          <div className="relative py-20 px-8 border border-dashed border-primary/20 rounded-2xl bg-primary/5">
            <img 
              src="https://res.cloudinary.com/dbciwaal4/image/upload/v1767712245/c00166f2-6449-436a-a3e4-2f09187aa7ed.png"
              alt="Save the Date"
              className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              data-testid="img-save-the-date"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
