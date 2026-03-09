import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Rocket } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>

          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8 mb-8 group hover:border-primary/50 hover:glow-border transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                Featured
              </span>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              Frontend Shopping Website
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A minimal e-commerce interface built with clean UI design principles. Features smooth navigation, minimal buttons, and a user-friendly shopping experience that demonstrates frontend development and interface design skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript"].map((t) => (
                <span key={t} className="font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Upcoming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-card/50 border border-dashed border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Coming Soon</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Two full-stack applications are in the works — expanding into backend development, databases, and real-world systems. Stay tuned for more.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
