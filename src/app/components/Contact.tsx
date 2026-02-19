import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      className="bg-[#121212] py-20 px-6 border-t border-white/5 pb-32"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-12"
        >
          Get in touch
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left space-y-6"
          >
            <h4 className="font-['Libre_Baskerville'] text-white text-xl mb-4 italic">
              Let's build something amazing together
            </h4>
            <p className="text-white/60 font-['Libre_Baskerville'] leading-relaxed">
              Open for collaborations, interesting projects, or just a friendly
              chat about web development and technology.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:addison.amin@gmail.com"
                className="flex items-center gap-4 text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-fuchsia-500/20 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span className="font-['Libre_Baskerville']">
                  addison.amin@gmail.com
                </span>
              </a>
              <a
                href="https://github.com/AddisonReyes"
                className="flex items-center gap-4 text-white hover:text-fuchsia-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <Github size={18} />
                </div>
                <span className="font-['Libre_Baskerville']">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/addison-reyes-9aa017208/"
                className="flex items-center gap-4 text-white hover:text-fuchsia-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <span className="font-['Libre_Baskerville']">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm uppercase tracking-widest text-white/40 font-['Libre_Baskerville'] font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm uppercase tracking-widest text-white/40 font-['Libre_Baskerville'] font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                placeholder="Your Email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm uppercase tracking-widest text-white/40 font-['Libre_Baskerville'] font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-['Libre_Baskerville'] font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest"
            >
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
