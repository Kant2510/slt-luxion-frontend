'use client';

import { useState } from 'react';
import { FaqData } from '@/types/platform';

interface FaqSectionProps {
  data: FaqData;
}

export default function FaqSection({ data }: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id={data.id} className="py-24 sm:py-32 bg-[#F5F7FB] text-[#000F43]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-10">
        {/* Title */}
        <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-center text-[#000F43]">
          {data.title}
        </h2>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#000F43]/12">
          {data.items.map((item, idx) => {
            const isOpen = openItems[idx] ?? false;

            return (
              <div
                key={idx}
                className="border-b border-[#000F43]/12 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left py-5 sm:py-6 flex justify-between items-center gap-4 text-base sm:text-lg font-square font-medium text-[#000F43] hover:text-[#005FFF] transition-colors duration-250 cursor-pointer bg-transparent border-0"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <svg
                    aria-hidden="true"
                    className={`w-4.5 h-4.5 text-current shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="pb-6 animate-fadeIn">
                    <p className="m-0 text-sm sm:text-base text-[#000F43]/70 font-square leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
