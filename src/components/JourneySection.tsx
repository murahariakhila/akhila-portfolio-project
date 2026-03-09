import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "Discovered coding", desc: "Fell in love with the power of turning ideas into reality through code." },
  { label: "Built first projects", desc: "Started with HTML & CSS, gradually adding JavaScript to create interactive experiences." },
  { label: "Exploring full-stack", desc: "Diving into backend technologies, databases, and building complete applications." },
  { label: "Future: Freelancing", desc: "Working toward building a career as an independent developer and entrepreneur." },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer Journey</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A developer who enjoys experimenting with new ideas, improving coding skills, and building projects step by step.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />

            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className={`relative flex mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5 z-10" />

                <div className={`ml-12 md:ml-0 md:w-5/12 bg-card border border-border rounded-xl p-6 ${
                  i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}>
                  <h3 className="font-semibold text-foreground mb-1">{step.label}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
