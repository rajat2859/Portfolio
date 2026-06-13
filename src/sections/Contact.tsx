import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ContactFormData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields (Name, Email, Message).");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 sm:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">05 / Get in Touch</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Let's Discuss Your Project
              </h2>
              <p className="mt-4 text-slate-550 leading-relaxed text-sm font-medium">
                If you have a website, optimization strategy, custom automation requirement, or contract opening, let me know. I'll get back to you within 24 business hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</p>
                  <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="mt-1 block font-sans text-xs font-bold text-slate-900 hover:underline">
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50">
                  <Phone className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Call / Message</p>
                  <a href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s+/g, '')}`} className="mt-1 block font-sans text-xs font-bold text-slate-900 hover:underline">
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">Location Base</p>
                  <p className="mt-1 font-sans text-xs font-bold text-slate-900">
                    {PERSONAL_INFO.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Stats Card inspired by metrics section of template */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/30">
              <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">
                <Sparkles className="h-4 w-4 text-indigo-505" />
                <span>Immediate Availability</span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Currently open for custom contract roles or consulting bookings. Ready to scale and integrate into corporate workflows.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50/30 p-6 md:p-8">
              {success ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-2">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">Message Transmitted!</h3>
                  <p className="max-w-md mx-auto text-xs text-slate-500 font-medium leading-relaxed">
                    Thank you, <strong className="text-slate-900 font-semibold">{formData.name}</strong>. Your message was processed successfully. A secure copy is logged beneath this container environment. Real inquiries are forwarded to <strong className="text-slate-900 font-extrabold">{PERSONAL_INFO.contact.email}</strong>.
                  </p>
                  <div className="rounded-lg border border-slate-200 bg-white p-4 text-left text-xs text-slate-700 max-w-lg mx-auto space-y-1">
                    <p className="font-bold text-slate-900 pb-1 border-b border-slate-100 mb-1">Receipt Log:</p>
                    <p><strong>From:</strong> {formData.email}</p>
                    <p><strong>Subject:</strong> {formData.subject || "Direct Inquiry"}</p>
                    <p className="line-clamp-2"><strong>Content:</strong> {formData.message}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 rounded border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="rounded-lg border border-rose-220 bg-rose-50 p-3 text-xs font-semibold text-rose-800">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-slate-205 bg-white px-4 py-3 text-sm text-slate-905 outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-slate-205 bg-white px-4 py-3 text-sm text-slate-905 outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-205 bg-white px-4 py-3 text-sm text-slate-905 outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 placeholder:text-slate-400"
                      placeholder="Discussing React or Custom Script..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-205 bg-white px-4 py-3 text-sm text-slate-905 outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 resize-none placeholder:text-slate-400 text-slate-900"
                      placeholder="Write your brief description or target specifications here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:bg-slate-450 select-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
