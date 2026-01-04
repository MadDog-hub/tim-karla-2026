import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { 
        label: "Mother of the Groom", 
        names: ["Susan C. Canilao"] 
      },
      { 
        label: "Mother of the Bride", 
        names: ["Lourdes S. Anotado"] 
      }
    ],
    principalSponsors: {
      title: "Ninong and Ninang",
      men: [
        "Andres P. Canilao",
        "Jimmy E. Chua",
        "Jose Ramon A. Villanueva",
        "Edione Febrero",
        "Hendrik Meijnhardt",
        "Steve Morales"
      ],
      women: [
        "Cosette V. Canilao",
        "Glenda F. Chua",
        "Svetlana A. Villanueva",
        "Myrna Antonio",
        "Cecilia A. Marinay",
        "Ruth Morales"
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", names: ["Clariza Carpio"] },
        { role: "Veil", names: ["Rita Casiquin"] },
        { role: "Cord", names: ["Kathleen Santiago-Echavez"] }
      ]
    },
    bestMen: ["Christopher Albert P. Fortuno", "Albright M. Dy"],
    maidOfHonor: "Maria Camille V. Racasa",
    groomsmen: [
      "Immanuel C. Canilao",
      "Rey Brian C. Glean",
      "Jonathan C. Uy"
    ],
    bridesmaids: [
      "Alzee Aquino",
      "Dianne F. Rodriguez",
      "Sarah F. Chua"
    ],
    bearers: [
      { role: "Ring Bearer", names: ["Declan C. Jenkinson"] },
      { role: "Bible Bearer", names: ["Henry Emmanuel Anotado"] },
      { role: "Array Bearer", names: ["Donovan C. Jenkinson"] },
      { role: "Here comes the Bride Banner", names: ["Prince Noah A. Rodriguez"] }
    ],
    flowerGirls: [
      "Margaret Joan D. Uy",
      "Madison Chiara P. Fortuno",
      "Mary Shiloh Elisha B. Anotado",
      "Atarrah Lois B. Anotado"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-light text-gold-bright mb-4">
            Entourage
          </h2>
          <div className="w-24 h-px bg-gold-bright/30 mx-auto" />
        </motion.div>

        {/* Parents */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
          {entourageData.parents.map((parent, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-primary uppercase tracking-widest">
                {parent.label}
              </h3>
              {parent.names.map((name, nameIndex) => (
                <p key={nameIndex} className="text-xl md:text-2xl font-display text-foreground">
                  {name}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-10 text-primary uppercase tracking-widest">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {entourageData.principalSponsors.men.map((manName, index) => {
              const womanName = entourageData.principalSponsors.women[index];
              return (
                <div key={index} className="grid grid-cols-2 gap-8 items-center">
                  <p className="text-lg md:text-xl font-display text-foreground text-right">
                    {manName}
                  </p>
                  <p className="text-lg md:text-xl font-display text-foreground text-left">
                    {womanName}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Best Men & Maid of Honor */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-display font-bold text-primary mb-4 uppercase tracking-widest">Best Men</h3>
            {entourageData.bestMen.map((name, i) => (
              <p key={i} className="text-xl font-display text-foreground mb-1">{name}</p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-display font-bold text-primary mb-4 uppercase tracking-widest">Maid of Honor</h3>
            <p className="text-xl font-display text-foreground">{entourageData.maidOfHonor}</p>
          </motion.div>
        </div>

        {/* Groomsmen & Bridesmaids */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-display font-bold text-primary mb-6 uppercase tracking-widest">Groomsmen</h3>
            <div className="space-y-2">
              {entourageData.groomsmen.map((name, index) => (
                <p key={index} className="text-lg font-display text-foreground">
                  {name}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-display font-bold text-primary mb-6 uppercase tracking-widest">Bridesmaids</h3>
            <div className="space-y-2">
              {entourageData.bridesmaids.map((name, index) => (
                <p key={index} className="text-lg font-display text-foreground">
                  {name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-24 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-10 text-primary uppercase tracking-widest">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-sm font-display font-semibold mb-2 text-primary uppercase tracking-widest">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-lg font-display text-foreground">
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bearers & Flower Girls */}
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-8 uppercase tracking-widest">Bearers</h3>
            <div className="space-y-6">
              {entourageData.bearers.map((item, index) => (
                <div key={index}>
                  <h4 className="text-xs font-display font-semibold text-primary/60 uppercase tracking-widest mb-1">
                    {item.role}
                  </h4>
                  {item.names.map((name, nameIndex) => (
                    <p key={nameIndex} className="text-lg font-display text-foreground">
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-8 uppercase tracking-widest">Flower Girls</h3>
            <div className="space-y-2">
              {entourageData.flowerGirls.map((name, index) => (
                <p key={index} className="text-lg font-display text-foreground">
                  {name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
