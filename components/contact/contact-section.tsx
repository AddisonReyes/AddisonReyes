"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import {
  EMAIL,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setLoading(true);
    try {
      const emailjs = await import("@emailjs/browser");
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      setToast({ type: "success", message: "Message sent successfully!" });
      form.reset();
    } catch (error) {
      console.error(error);
      setToast({
        type: "error",
        message: `Something went wrong. You can also email me directly at ${EMAIL}.`,
      });
    } finally {
      setLoading(false);
      window.setTimeout(() => setToast(null), 3500);
    }
  }

  return (
    <section id="contact" className="py-20 px-6 border-t border-white/5 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          kicker="Contact"
          title="Get in touch"
          copy="If something here connects with what you're building or thinking about, feel free to reach out. Backend systems, tools, games, collaboration, freelance work, or technical chat are all fine."
          compact
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Reveal className="text-left space-y-6">
            <h4 className="font-libre text-white text-xl mb-4">
              The fastest way to reach me is by email
            </h4>
            <p className="text-white/60 font-libre leading-relaxed">
              Email works best. Send me a bit of context about what you&apos;re
              building, what problem you&apos;re trying to solve, or what kind of
              technical conversation you have in mind.
            </p>

            <div className="space-y-4 pt-4">
              <ContactLink
                href={`mailto:${EMAIL}`}
                label={EMAIL}
                ariaLabel="Email Addison Reyes"
                accent
                icon={<Mail className="w-[18px] h-[18px]" />}
              />
              <ContactLink
                href={GITHUB_URL}
                label="GitHub"
                ariaLabel="Open Addison Reyes on GitHub"
                icon={<Github className="w-[18px] h-[18px]" />}
              />
              <ContactLink
                href={LINKEDIN_URL}
                label="LinkedIn"
                ariaLabel="Open Addison Reyes on LinkedIn"
                icon={<Linkedin className="w-[18px] h-[18px]" />}
              />
            </div>
          </Reveal>

          <Reveal className="space-y-4 text-left">
            <form
              noValidate
              aria-busy={loading}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <Field label="Name" id="name">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  readOnly={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email" id="email">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  readOnly={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors disabled:opacity-50"
                  placeholder="Your email"
                />
              </Field>

              <Field label="Message" id="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  readOnly={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me what you're building or thinking through"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-libre font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="spinner h-4 w-4" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-[18px] h-[18px]" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>

        {toast ? <Toast toast={toast} onClose={() => setToast(null)} /> : null}
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm uppercase tracking-widest text-white/40 font-libre font-bold"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactLink({
  href,
  label,
  ariaLabel,
  icon,
  accent = false,
}: {
  href: string;
  label: string;
  ariaLabel: string;
  icon: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-4 ${
        accent
          ? "text-fuchsia-400 hover:text-fuchsia-300"
          : "text-white hover:text-fuchsia-400"
      } transition-colors`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      <div
        className={`w-10 h-10 p-2 rounded-full border ${
          accent ? "border-fuchsia-500/20" : "border-white/10"
        } flex items-center justify-center`}
      >
        {icon}
      </div>
      <span className="font-libre">{label}</span>
    </a>
  );
}

function Toast({
  toast,
  onClose,
}: {
  toast: NonNullable<ToastState>;
  onClose: () => void;
}) {
  const success = toast.type === "success";

  return (
    <div
      className="fixed right-6 bottom-6 z-[60]"
      role={success ? "status" : "alert"}
      aria-live={success ? "polite" : "assertive"}
      aria-atomic="true"
    >
      <div className="max-w-sm rounded-lg border border-white/10 bg-black/70 backdrop-blur px-4 py-3 text-left">
        <div className="flex items-start gap-3">
          <div
            className={`mt-2 h-2 w-2 rounded-full ${
              success ? "bg-fuchsia-400" : "bg-red-400"
            }`}
          />
          <div className="flex-1">
            <div className="text-white font-libre uppercase tracking-widest text-xs">
              {success ? "Success" : "Error"}
            </div>
            <div className="text-white/80 font-libre">{toast.message}</div>
          </div>
          <button
            className="text-white/50 hover:text-white transition-colors"
            type="button"
            aria-label="Close notification"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
