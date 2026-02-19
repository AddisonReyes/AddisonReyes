import emailjs from "@emailjs/browser";
import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useRef, useState } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_qvau6u1",
        "template_5dq69oy",
        formRef.current!,
        "iM1w4zGIgdSjeeCCS",
      );
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            ref={formRef}
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
                name="user_name"
                required
                disabled={loading}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors disabled:opacity-50"
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
                name="user_email"
                required
                disabled={loading}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors disabled:opacity-50"
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
                name="message"
                required
                rows={4}
                disabled={loading}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none disabled:opacity-50"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-['Libre_Baskerville'] font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
