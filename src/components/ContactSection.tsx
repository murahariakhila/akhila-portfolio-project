import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            My long-term vision is to become a successful freelance developer, work with international clients, and eventually build a large development agency.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm open to collaboration, internship opportunities, and freelance projects. Let's build something great together.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border px-5 py-3 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border px-5 py-3 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          <a
            href="mailto:hello@akhila.dev"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Murahari Akhila © 2026
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
