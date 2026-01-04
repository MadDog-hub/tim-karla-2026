import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';

const backgroundImage = 'https://res.cloudinary.com/dtlvkkivb/image/upload/v1767503781/gift_guide_background_ffyu5y.jpg';

const qrCodeImage = optimizeCloudinaryUrl("https://res.cloudinary.com/dr3xey7h9/image/upload/v1760112758/e0470bd7-d558-4ffc-ab72-05979e344aee.png", { width: 400, quality: 'auto:good' });

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Black and White Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover grayscale"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div 
              className="bg-white backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-teal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-gifts-title"
              >
                Gift Guide
              </motion.h2>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
                  <p className="font-medium">With all that we have, we’ve been truly blessed.</p>
                  <p className="font-medium">Your presence and prayers are all that we request.</p>
                  <p className="font-medium">But if you desire to give nonetheless,</p>
                  <p className="font-medium">A monetary gift is one we suggest.</p>
                </div>

                {/* QR Code and Bank Details Text */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-bold text-primary mt-4 uppercase tracking-wide">QR codes and Bank details</p>
                </div>

                {/* QR Code Card */}
                <div className="max-w-[280px] mx-auto bg-white rounded-xl shadow-lg border border-border/30 p-4">
                  <div className="flex justify-center mb-2">
                    <span className="font-bold text-[#0033A0] text-2xl tracking-tighter">BDO</span>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">TimKarlaWedding</p>
                  <div className="aspect-square bg-white border-2 border-primary/20 rounded-lg p-2 mb-2">
                    <img 
                      src="https://res.cloudinary.com/dnib23v4d/image/upload/v1767443953/giftqr_wc1vip.jpg" 
                      alt="BDO QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[10px] text-foreground/60 leading-tight">
                    BDO to BDO transfers are free.<br />
                    Fees may apply for non-BDO transfers.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
