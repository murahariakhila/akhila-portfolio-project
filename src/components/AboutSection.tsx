import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a 3rd-year B.Tech Computer Science student who chose this path out of a genuine love for computers and technology. From the moment I wrote my first line of code, I knew this was what I wanted to do.
              </p>
              <p>
                I'm passionate about building applications that work beautifully — from crafting pixel-perfect interfaces to understanding the logic that powers them behind the scenes. Every project is a chance to learn something new.
              </p>
              <p>
                My curiosity drives me to explore new technologies, experiment with fresh ideas, and continuously push my boundaries as a developer. I believe in learning by building.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4 h-fit">
              <div className="font-mono text-xs text-muted-foreground">
                <p className="text-primary">const akhila = {"{"}</p>
                <p className="pl-4">role: <span className="text-foreground">"Student Dev"</span>,</p>
                <p className="pl-4">year: <span className="text-foreground">3</span>,</p>
                <p className="pl-4">loves: <span className="text-foreground">"Building"</span>,</p>
                <p className="pl-4">goal: <span className="text-foreground">"Freelancer"</span>,</p>
                <p className="text-primary">{"}"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
