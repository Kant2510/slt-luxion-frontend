'use client';

import { useState, useRef } from 'react';
import { INTEREST_OPTIONS } from '@/data/landingV2MockData';
import { CheckCircle2, Loader2 } from 'lucide-react';

const fieldClass =
  'transition-all duration-300 border border-white/12 rounded bg-white/3 text-white font-sans text-[15px] hover:!border-white/30 focus:outline-none focus:!border-[#3D85FF] focus:!bg-[rgba(0,95,255,0.06)]';

export default function V2Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    interest: INTEREST_OPTIONS[0],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!contactRef.current) return;
    const r = contactRef.current.getBoundingClientRect();
    const x = (((e.clientX - r.left) / r.width) * 100).toFixed(1);
    const y = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
    contactRef.current.style.setProperty('--x', `${x}%`);
    contactRef.current.style.setProperty('--y', `${y}%`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, work email, and requirements.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    // Simulate API request (Mock data behavior for this task)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        interest: INTEREST_OPTIONS[0],
        message: '',
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      onMouseMove={handleMouseMove}
      data-spot="contact"
      className="relative text-white py-24 sm:py-32 overflow-hidden bg-[#00061A] bg-[radial-gradient(80%_70%_at_50%_0%,rgba(0,95,255,0.16)_0%,rgba(0,15,67,0.7)_35%,rgba(0,6,26,0)_75%)]"
    >
      {/* Spotlight Effect (Tailwind) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,30%),rgba(61,133,255,0.12),transparent_70%)]"
      />

      <div className="relative max-w-[760px] mx-auto px-4 sm:px-8 flex flex-col items-center gap-12 z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="m-0 font-eurostile text-3xl sm:text-4xl md:text-[40px] font-extrabold uppercase leading-[1.25]">
            Tell us about
            <br />
            your platform.
          </h2>
          <p className="m-0 text-base sm:text-lg leading-relaxed text-white/65 max-w-[520px]">
            A proven payload, a custom build or an R&amp;D partner — our engineers reply within 2
            business days.
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 p-6 sm:p-9 border border-white/8 rounded-xl bg-[#00061A]/60 backdrop-blur-md shadow-2xl"
        >
          {/* Name Field */}
          <label className="flex flex-col gap-2 text-[13px] text-white/70 font-medium">
            Name
            <input
              className={`${fieldClass} h-12 px-3.5`}
              type="text"
              name="name"
              required
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>

          {/* Company Field */}
          <label className="flex flex-col gap-2 text-[13px] text-white/70 font-medium">
            Company
            <input
              className={`${fieldClass} h-12 px-3.5`}
              type="text"
              name="company"
              placeholder="e.g. AeroDynamics Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </label>

          {/* Work Email Field */}
          <label className="flex flex-col gap-2 text-[13px] text-white/70 font-medium">
            Work email
            <input
              className={`${fieldClass} h-12 px-3.5`}
              type="email"
              name="email"
              required
              placeholder="alex@aerodynamics.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>

          {/* Interest Select */}
          <label className="flex flex-col gap-2 text-[13px] text-white/70 font-medium">
            I&apos;m interested in
            <select
              className={`${fieldClass} h-12 px-3.5 bg-[#00061A]`}
              name="interest"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#00061A] text-white">
                  {opt}
                </option>
              ))}
            </select>
          </label>

          {/* Message Textarea */}
          <label className="sm:col-span-2 flex flex-col gap-2 text-[13px] text-white/70 font-medium">
            Your platform and requirements
            <textarea
              className={`${fieldClass} p-3.5 resize-y`}
              name="message"
              rows={4}
              required
              placeholder="Tell us about payload weight limits, interfaces (MAVLink/Ethernet), sensor needs (EO/thermal)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </label>

          {/* Status Message */}
          {status === 'success' && (
            <div className="sm:col-span-2 flex items-center gap-3 p-3.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-sm">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
              <span>Thank you! Your challenge has been received. Our engineers will reply within 2 business days.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="sm:col-span-2 text-rose-300 text-xs bg-rose-950/50 p-2.5 rounded border border-rose-500/30">
              {errorMsg}
            </div>
          )}

          {/* Actions & Disclaimer */}
          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
            <span className="text-xs text-white/55">NDA available before technical discussions.</span>
            <button
              className="inline-flex items-center justify-center gap-2 text-[#00061A] bg-white px-7 py-3.5 rounded font-bold text-[15px] min-h-[48px] cursor-pointer disabled:opacity-50 transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#FFA100] hover:!text-[#000F43] hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)]"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Your Challenge'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
