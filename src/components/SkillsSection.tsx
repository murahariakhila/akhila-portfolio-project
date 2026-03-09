import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Wrench, Brain } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming & Development",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Kotlin"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git"],
  },
  {
    icon: Brain,
    title: "Concepts",
    skills: ["Data Structures & Algorithms"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:glow-border transition-all duration-500 group"
              >
                <cat.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-semibold mb-4 text-foreground">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
