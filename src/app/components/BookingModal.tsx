import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { headingFont } from "@/app/lib/styles";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] text-[#07071A] placeholder-[#C4C4D4] focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-amber-400 transition-all text-sm";

type BookingModalProps = {
  service: string;
  onClose: () => void;
};

export function BookingModal({ service, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
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
    }, 1000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}>
      <motion.div
        className="absolute inset-0 bg-black/55 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <div className="p-7">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-[19px] font-bold text-[#07071A]" style={headingFont}>
                {service === "Book a Tour" ? "Book a Tour" : `Book: ${service}`}
              </h3>
              <p className="text-sm text-[#9CA3AF] mt-1">
                {"We'll"} confirm your booking within 24 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#F4F4F8] flex items-center justify-center hover:bg-[#EAEAF0] transition-colors flex-shrink-0">
              <X className="w-4 h-4 text-[#6B7280]" />
            </button>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-[#07071A] text-lg mb-2" style={headingFont}>
                {"You're"} all set!
              </h4>
              <p className="text-[#6B7280] text-sm max-w-[260px] mx-auto">
                We have received your request and will be in touch very soon.
              </p>
              <button
                onClick={onClose}
                className="mt-7 px-7 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                Close
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ahmed Khan"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="ahmed@company.pk"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Message{" "}
                  <span className="text-[#C4C4D4] font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Team size, questions, special requirements…"
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
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? "Submitting…" : "Confirm Booking"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
