import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="section-fade-top" />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/wallhaven-x11ql3.jpg"
          alt="Open sky above the clouds"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="section-fade-bottom" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="CERTIFICATIONS" subtitle="Learning Milestones" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.id}
              className="achievement-badge min-h-[300px] bg-muted rounded-xl border border-primary/40 p-6 sm:p-7 text-center cursor-feather group flex flex-col items-center shadow-xl shadow-black/20 transition-colors duration-300 hover:border-ring"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center text-4xl text-white shadow-2xl shadow-primary/30 group-hover:shadow-ring/50 transition-all duration-300">
                  <i className={certification.icon} aria-hidden="true" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 text-ring opacity-60"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <i className="fas fa-feather text-sm" aria-hidden="true" />
                </motion.div>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-foreground leading-snug max-w-xs">
                {certification.title}
              </h3>
              <p className="mt-3 text-ring font-semibold">
                {certification.issuer}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
                {certification.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
