import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";
import { headingFont, sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

const INPUT_CLASS =
  "w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] text-[#07071A] placeholder-[#C4C4D4] focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-amber-400 transition-all text-sm";

const CONTACT_ROWS = [
  {
    icon: MapPin,
    label: "Address",
    val: "G8/1, Sector G-8, Islamabad, Pakistan",
  },
  {
    icon: Phone,
    label: "Phone",
    val: "+92 51 234 5678  ·  +92 300 9876543",
  },
  { icon: Mail, label: "Email", val: "hello@funavry.pk" },
  {
    icon: Clock,
    label: "Hours",
    val: "Mon–Fri 8am–10pm · Sat 9am–6pm · 24/7 for members",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-white py-28 px-5 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          pill={
            <>
              <Mail className="h-3 w-3" />
              Get in Touch
            </>
          }
          description="Have questions or ready to join? Drop us a message and we will get back to you within 24 hours.">
          Start your journey
          <br />
          <span className={sectionHeadingGradient}>at Funavry</span>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <FadeUp>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F5F5FF] rounded-3xl p-14 text-center border border-amber-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-amber-500/30">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#07071A] mb-2"
                  style={headingFont}>
                  Message received!
                </h3>
                <p className="text-[#6B7280]">
                  {"We'll"} be in touch within 24 hours. Welcome to the Funavry
                  community.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your team size, preferred plan, or any questions..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`${INPUT_CLASS} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-base hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </FadeUp>

          <FadeUp delay={0.15} className="space-y-7">
            <div className="rounded-3xl overflow-hidden h-64 border border-[#E5E7EB] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.3613135246!2d72.82115365!3d33.6844202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6789d6df690b4c5b!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Funavry Islamabad"
              />
            </div>

            <div className="space-y-5">
              {CONTACT_ROWS.map((row, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <row.icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-0.5">
                      {row.label}
                    </div>
                    <div className="text-[#374151] text-sm">{row.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
