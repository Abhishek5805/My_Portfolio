import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/portfolio";

function getMonthsSince(startDate: string) {
  const start = new Date(`${startDate}T00:00:00`);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    now.getMonth() -
    start.getMonth();

  return Math.max(0, months);
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="section-fade-top" />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/windcurrents2.jpg"
          alt="Clouds moving through the sky"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/55" />
      </div>
      <div className="section-fade-bottom" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="EXPERIENCE" subtitle="AI/ML Flight Path" />

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const months = getMonthsSince(experience.startDate);

            return (
              <motion.article
                key={experience.id}
                className="timeline-item pl-6 sm:pl-10 md:pl-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-effect rounded-xl p-5 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <p className="text-ring text-sm font-semibold uppercase tracking-wider">
                        Since February 2026
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <img
                          src={experience.companyLogo}
                          alt={`${experience.company} logo`}
                          className="w-12 h-12 rounded-lg bg-white object-contain p-1"
                        />
                        <p className="text-foreground text-lg font-semibold">
                          {experience.company}
                        </p>
                      </div>
                      <h3 className="font-orbitron font-bold text-2xl text-foreground mt-2">
                        {experience.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-ring text-sm rounded-full font-semibold whitespace-nowrap self-start">
                      {months} {months === 1 ? "month" : "months"}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 bg-muted text-ring text-xs rounded"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}