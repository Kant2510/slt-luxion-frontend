'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function CustomProjectForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    country: '',
    phone: '',
    orgType: 'UAV / robot OEM',
    challenge: '',
    nda: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      const newErrors: Record<string, string> = {};
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Work email is required';
      if (!formData.company.trim()) newErrors.company = 'Company / organization is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      setStep(2);
      scrollToForm();
    } else if (step === 2) {
      if (!formData.challenge.trim()) {
        setErrors({ challenge: 'Please describe your project requirements' });
        return;
      }
      setErrors({});
      setStep(3); // Done state
      scrollToForm();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      scrollToForm();
    }
  };

  const orgTypes = [
    'UAV / robot OEM',
    'System integrator',
    'Defense / government',
    'Research / university',
    'Distributor',
    'Other',
  ];

  return (
    <section
      id="project-form"
      ref={formRef}
      className="py-24 sm:py-32 text-[#000F43]"
      style={{
        background:
          'radial-gradient(60% 40% at 50% 0%, rgba(0,95,255,0.08) 0%, rgba(245,247,251,0) 70%), linear-gradient(180deg, #F5F7FB 0%, #ECF1F9 100%)',
      }}
    >
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-8">
        {/* Step Progress Header */}
        {step <= 2 && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-baseline gap-4 text-xs sm:text-sm text-[#000F43]/60 font-sans">
              <span>
                Step <span className="font-semibold text-[#000F43]">{step}</span> of 2
              </span>
              <span>Fields marked * are required</span>
            </div>

            {/* Gradient Progress Bar */}
            <div
              aria-hidden="true"
              className="h-1 rounded-full bg-[#000F43]/10 overflow-hidden"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#005FFF] to-[#FFA100] transition-all duration-400 ease-out"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>

            {/* Step Tabs Indicator */}
            <ol className="list-none m-0 p-0 grid grid-cols-2 gap-2 text-xs sm:text-sm font-sans">
              <li
                className={`pt-2 border-t-2 transition-colors font-medium ${
                  step === 1
                    ? 'border-[#FFA100] text-[#000F43]'
                    : 'border-[#005FFF] text-[#000F43]'
                }`}
              >
                01 · About you
              </li>
              <li
                className={`pt-2 border-t-2 transition-colors font-medium ${
                  step === 2
                    ? 'border-[#FFA100] text-[#000F43]'
                    : 'border-[#000F43]/12 text-[#000F43]/45'
                }`}
              >
                02 · Your project
              </li>
            </ol>
          </div>
        )}

        {/* Main Form Container */}
        <div className="border border-[#000F43]/8 rounded-xl bg-white shadow-[0_40px_80px_-50px_rgba(0,15,67,0.45)] p-6 sm:p-10 md:p-12 flex flex-col gap-10">
          {/* STEP 1: ABOUT YOU */}
          {step === 1 && (
            <div className="flex flex-col gap-8 animate-fadeIn">
              <div>
                <h2 className="m-0 font-eurostile text-xl sm:text-2xl font-bold uppercase leading-tight text-[#000F43]">
                  About you
                </h2>
                <p className="m-0 mt-1.5 text-sm sm:text-base text-[#000F43]/65 font-square">
                  So the right engineer gets back to you.
                </p>
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Full name *
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`h-12 px-3.5 border rounded bg-white text-[#000F43] text-sm sm:text-base font-square focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 transition-all ${
                      errors.name ? 'border-red-500' : 'border-[#000F43]/18 hover:border-[#000F43]/35'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </label>

                <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Work email *
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`h-12 px-3.5 border rounded bg-white text-[#000F43] text-sm sm:text-base font-square focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#000F43]/18 hover:border-[#000F43]/35'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </label>

                <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Company / organization *
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: '' });
                    }}
                    className={`h-12 px-3.5 border rounded bg-white text-[#000F43] text-sm sm:text-base font-square focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 transition-all ${
                      errors.company ? 'border-red-500' : 'border-[#000F43]/18 hover:border-[#000F43]/35'
                    }`}
                  />
                  {errors.company && <span className="text-red-500 text-xs">{errors.company}</span>}
                </label>

                <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Job title
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="h-12 px-3.5 border border-[#000F43]/18 rounded bg-white text-[#000F43] text-sm sm:text-base font-square hover:border-[#000F43]/35 focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Country
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="h-12 px-3.5 border border-[#000F43]/18 rounded bg-white text-[#000F43] text-sm sm:text-base font-square hover:border-[#000F43]/35 focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 transition-all"
                  />
                </label>

                <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Phone
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 px-3.5 border border-[#000F43]/18 rounded bg-white text-[#000F43] text-sm sm:text-base font-square hover:border-[#000F43]/35 focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 transition-all"
                  />
                </label>
              </div>

              {/* Organization Type Radio Chips */}
              <fieldset className="border-0 p-0 m-0 flex flex-col gap-3">
                <legend className="text-sm font-sans font-medium text-[#000F43]">
                  Organization type
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {orgTypes.map((type) => {
                    const isSelected = formData.orgType === type;
                    return (
                      <label
                        key={type}
                        className={`inline-flex items-center px-4 py-2.5 min-h-[44px] rounded border text-sm font-square cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#005FFF] bg-[#005FFF]/[0.08] text-[#005FFF] font-semibold shadow-xs'
                            : 'border-[#000F43]/18 bg-white text-[#000F43] hover:border-[#005FFF]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="org"
                          value={type}
                          checked={isSelected}
                          onChange={() => setFormData({ ...formData, orgType: type })}
                          className="sr-only"
                        />
                        <span>{type}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </div>
          )}

          {/* STEP 2: YOUR PROJECT */}
          {step === 2 && (
            <div className="flex flex-col gap-8 animate-fadeIn">
              <div>
                <h2 className="m-0 font-eurostile text-xl sm:text-2xl font-bold uppercase leading-tight text-[#000F43]">
                  Your project
                </h2>
                <p className="m-0 mt-1.5 text-sm sm:text-base text-[#000F43]/65 font-square">
                  Tell us what you need, in your own words. Rough ideas are welcome.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Project Description Textarea */}
                <label className="flex-1 w-full flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                  Describe your project *
                  <textarea
                    rows={12}
                    required
                    value={formData.challenge}
                    onChange={(e) => {
                      setFormData({ ...formData, challenge: e.target.value });
                      if (errors.challenge) setErrors({ ...errors, challenge: '' });
                    }}
                    placeholder="e.g. We build a 25 kg VTOL for pipeline inspection and need an EO + thermal payload under 800 g that detects leaks at 300 m, talks MAVLink to PX4, and can be ready for 5 prototype units by Q2…"
                    className={`w-full min-h-[300px] p-4 border rounded bg-white text-[#000F43] text-sm sm:text-base font-square leading-[24px] focus:outline-none focus:border-[#005FFF] focus:ring-3 focus:ring-[#005FFF]/15 resize-y transition-all ${
                      errors.challenge
                        ? 'border-red-500'
                        : 'border-[#000F43]/18 hover:border-[#000F43]/35'
                    }`}
                  />
                  {errors.challenge && (
                    <span className="text-red-500 text-xs">{errors.challenge}</span>
                  )}
                </label>

                {/* Helpful To Include Aside Card */}
                <aside className="w-full lg:w-[300px] shrink-0 rounded-lg bg-[#F5F7FB] border border-[#000F43]/8 p-5 flex flex-col gap-3.5">
                  <span className="text-xs tracking-[0.1em] font-sans font-bold text-[#000F43]/60 uppercase">
                    Helpful to include
                  </span>
                  <ul className="list-none m-0 p-0 flex flex-col gap-3 text-xs sm:text-sm leading-[20px] font-square text-[#000F43]/85">
                    <li className="flex gap-2.5 items-start">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#FFA100] mt-1.5 shrink-0"
                      />
                      <span>Your platform: type, weight and power budget</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#FFA100] mt-1.5 shrink-0"
                      />
                      <span>What it needs to see: target, distance, day / night</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#FFA100] mt-1.5 shrink-0"
                      />
                      <span>AI, video and control interface needs</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#FFA100] mt-1.5 shrink-0"
                      />
                      <span>Quantity and timeline</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#FFA100] mt-1.5 shrink-0"
                      />
                      <span>Compliance needs, if any (NDAA, ITAR / EAR)</span>
                    </li>
                  </ul>
                  <span className="text-xs text-[#000F43]/60 font-square border-t border-[#000F43]/8 pt-3">
                    Not sure about some of these? Leave them out — we'll ask.
                  </span>
                </aside>
              </div>

              {/* Attachments Input */}
              <label className="flex flex-col gap-2 text-xs sm:text-sm text-[#000F43]/75 font-sans font-medium">
                Attachments (optional)
                <input
                  type="file"
                  multiple
                  className="p-2.5 border border-[#000F43]/18 rounded bg-white text-[#000F43] text-sm font-square file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#000F43] file:text-white hover:file:bg-[#FFA100] hover:file:text-[#000F43] file:transition-colors cursor-pointer"
                />
                <span className="text-xs text-[#000F43]/55 font-square">
                  Drawings, spec sheets or photos. PDF, STEP, DXF, PNG, JPG.
                </span>
              </label>

              {/* NDA Checkbox Chip */}
              <label
                className={`self-start inline-flex items-center gap-2.5 px-4 py-2.5 min-h-[44px] rounded border text-sm font-square cursor-pointer transition-all ${
                  formData.nda
                    ? 'border-[#005FFF] bg-[#005FFF]/[0.08] text-[#005FFF] font-semibold'
                    : 'border-[#000F43]/18 bg-white text-[#000F43] hover:border-[#005FFF]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.nda}
                  onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                  className="sr-only"
                />
                <svg
                  aria-hidden="true"
                  className="w-4.5 h-4.5 text-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                <span>I'd like an NDA before sharing technical details</span>
              </label>
            </div>
          )}

          {/* STEP 3: DONE / SUBMITTED */}
          {step === 3 && (
            <div className="flex flex-col items-center gap-6 text-center py-8 animate-fadeIn">
              <span
                aria-hidden="true"
                className="w-16 h-16 rounded-full bg-[#005FFF]/10 text-[#005FFF] flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>

              <h2 className="m-0 font-eurostile text-2xl sm:text-3xl font-extrabold uppercase leading-tight text-[#000F43]">
                Your project is with our engineers.
              </h2>

              <p className="m-0 max-w-[520px] text-base sm:text-lg text-[#000F43]/70 font-square leading-relaxed">
                We'll reply within [X] business days with first questions and a feasibility view. If you asked for an NDA, it will come first.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 rounded text-white bg-[#000F43] font-semibold text-sm min-h-[44px] no-underline transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)] cursor-pointer"
                >
                  Back to home
                </Link>
                <Link
                  href="/#platforms"
                  className="inline-flex items-center px-6 py-3 rounded text-[#000F43] border border-[#000F43]/25 bg-transparent font-medium text-sm min-h-[44px] no-underline transition-all duration-300 hover:border-[#000F43] hover:bg-[#000F43]/[0.04] cursor-pointer"
                >
                  Explore our platforms
                </Link>
              </div>
            </div>
          )}

          {/* Form Actions Row */}
          {step <= 2 && (
            <div className="flex justify-between items-center gap-4 border-t border-[#000F43]/8 pt-7">
              <button
                type="button"
                onClick={handleBack}
                className={`px-6 py-3 rounded border border-[#000F43]/25 bg-transparent font-sans text-sm text-[#000F43] font-medium min-h-[48px] hover:border-[#000F43] hover:bg-[#000F43]/[0.04] transition-all cursor-pointer ${
                  step === 1 ? 'invisible' : 'visible'
                }`}
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-3.5 rounded text-white bg-[#000F43] font-sans font-semibold text-sm min-h-[48px] border-0 transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)] cursor-pointer"
              >
                {step === 2 ? 'Submit Project' : 'Continue'}
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="m-0 text-center text-xs sm:text-sm text-[#000F43]/55 font-square">
          Prefer email? Write to [contact@luxion.ai]. Your information is used only to respond to this request.
        </p>
      </div>
    </section>
  );
}
