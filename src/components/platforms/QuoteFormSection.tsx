'use client';

import { useState } from 'react';
import { QuoteFormData } from '@/types/platform';

interface QuoteFormSectionProps {
  data: QuoteFormData;
}

export default function QuoteFormSection({ data }: QuoteFormSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    country: '',
    selectedOption: data.options[0] || '',
    qty: 1,
    message: '',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    setMousePos({ x: parseFloat(x), y: parseFloat(y) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id={data.id}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 sm:py-32 bg-[#00061A] border-t border-white/6 text-white"
      style={{
        backgroundImage:
          'radial-gradient(80% 70% at 50% 0%, rgba(0,95,255,0.16) 0%, rgba(0,15,67,0.7) 35%, rgba(0,6,26,0) 75%)',
      }}
    >
      {/* Center spotlight glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(61,133,255,0.12), transparent 70%)`,
        }}
      />

      <div className="relative max-w-[760px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center gap-12">
        {/* Heading & Subhead */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="m-0 font-eurostile text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.25] text-white">
            {data.title}
          </h2>
          <p className="m-0 font-square text-base sm:text-lg leading-[28px] text-white/65 max-w-[520px]">
            {data.description}
          </p>
        </div>

        {/* Form Box */}
        {isSubmitted ? (
          <div className="w-full p-8 rounded-xl border border-[#3D85FF]/40 bg-[#000820]/90 backdrop-blur-md text-center flex flex-col items-center gap-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#FFA100]/20 text-[#FFA100] flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <h3 className="m-0 font-eurostile text-xl uppercase font-bold text-white">
              Request Received
            </h3>
            <p className="m-0 text-white/70 font-square max-w-md">
              Thank you for your interest. Our technical sales team will review your requirements and respond within 2 business days.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-2 px-5 py-2 text-xs font-sans uppercase font-semibold text-white/60 hover:text-white transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-8 rounded-xl border border-white/8 bg-[#00061A]/60 backdrop-blur-xl shadow-2xl"
          >
            {/* Name */}
            <label className="flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              Name
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 px-3.5 border border-white/12 rounded bg-white/[0.03] text-white text-sm font-square focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors"
              />
            </label>

            {/* Org / Company */}
            <label className="flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              Organization
              <input
                required
                type="text"
                name="org"
                value={formData.org}
                onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                className="h-12 px-3.5 border border-white/12 rounded bg-white/[0.03] text-white text-sm font-square focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors"
              />
            </label>

            {/* Work Email */}
            <label className="flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              Work Email
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 px-3.5 border border-white/12 rounded bg-white/[0.03] text-white text-sm font-square focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors"
              />
            </label>

            {/* Country */}
            <label className="flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              Country
              <input
                required
                type="text"
                name="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="h-12 px-3.5 border border-white/12 rounded bg-white/[0.03] text-white text-sm font-square focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors"
              />
            </label>

            {/* Select (Kit or Model) */}
            <label className="flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              {data.selectLabel}
              <select
                name={data.selectName}
                value={formData.selectedOption}
                onChange={(e) => setFormData({ ...formData, selectedOption: e.target.value })}
                className="h-12 px-3.5 border border-white/12 rounded bg-[#00061A] text-white text-sm font-square focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors cursor-pointer"
              >
                {data.options.map((opt, idx) => (
                  <option key={idx} value={opt} className="bg-[#000820] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            {/* Quantity */}
            <label className="flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              Quantity
              <input
                required
                type="number"
                min="1"
                name="qty"
                value={formData.qty}
                onChange={(e) => setFormData({ ...formData, qty: parseInt(e.target.value) || 1 })}
                className="h-12 px-3.5 border border-white/12 rounded bg-white/[0.03] text-white text-sm font-square focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors"
              />
            </label>

            {/* Message Area */}
            <label className="col-span-1 sm:col-span-2 flex flex-col gap-2 text-xs font-sans text-white/70 uppercase tracking-wide">
              {data.messageLabel}
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="p-3.5 border border-white/12 rounded bg-white/[0.03] text-white text-sm font-square resize-y focus:outline-none focus:border-[#3D85FF] focus:bg-[#005FFF]/[0.06] transition-colors"
              />
            </label>

            {/* Footer Row */}
            <div className="col-span-1 sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs sm:text-[13px] text-white/55 font-square">
                {data.footerNote}
              </span>
              <button
                type="submit"
                className="px-7 py-3.5 rounded text-[#00061A] bg-white font-semibold text-sm min-h-[48px] border-0 transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,161,0,0.5)] cursor-pointer"
              >
                {data.buttonLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
