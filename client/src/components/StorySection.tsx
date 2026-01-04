import { motion } from 'framer-motion';
const storyCoupleImage = 'https://res.cloudinary.com/dtlvkkivb/image/upload/v1767503782/she_said_yes_obefqd.jpg';
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          SHE SAID YES!
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">A couple, a spark, and a shared love for adventure</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-8 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <section className="text-center">
                <p className="text-2xl md:text-3xl font-display italic text-primary leading-snug">
                  "He asked, I said yes, and the rest is our forever story."
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="font-serif font-bold text-primary uppercase tracking-widest text-sm border-b border-primary/10 pb-2">Our Commitment</h3>
                <p>
                  We promise to walk in the calling God has given us, trusting that together we can do greater things, empowered by the love and support we share.
                </p>
              </section>

              <section className="bg-primary/5 p-6 rounded-lg space-y-3 italic border-l-4 border-primary/20">
                <h3 className="font-serif font-bold text-primary not-italic text-sm">1 Corinthians 13:4-7</h3>
                <p className="text-foreground/80">
                  "Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things."
                </p>
              </section>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
