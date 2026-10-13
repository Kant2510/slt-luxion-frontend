'use client';

import { useState } from 'react';
import { SpecsData } from '@/types/platform';
import React from 'react';

interface SpecsSectionProps {
  data: SpecsData;
}

export default function SpecsSection({ data }: SpecsSectionProps) {
  // For accordion mode, keep track of open state if desired, or let details element handle it
  // We can track open state to enable smooth rotating plus/cross icon
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    gimbal_frame: true,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      id={data.id}
      className="py-24 sm:py-32 bg-gradient-to-b from-[#F5F7FB] to-[#ECF1F9] text-[#000F43]"
    >
      <div className="max-w-[1040px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-10">
        {/* Header with Title and Download Button */}
        <div className="flex flex-wrap justify-between items-end gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs tracking-[0.1em] uppercase font-semibold text-[#000F43]/60">
              <span
                aria-hidden="true"
                className="w-8 h-px bg-gradient-to-r from-transparent to-[#FFA100]"
              />
              {data.tagline}
            </div>
            <h2 className="m-0 font-eurostile text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-[1.3] text-[#000F43]">
              {data.title}
            </h2>
          </div>

          <a
            href={data.downloadDatasheetHref}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded text-white bg-[#000F43] font-semibold text-sm min-h-[44px] no-underline transition-all duration-300 hover:bg-[#FFA100] hover:text-[#000F43] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(255,161,0,0.6)] cursor-pointer"
          >
            Download Datasheet
          </a>
        </div>

        {/* ACCORDION DISPLAY MODE (DevKit-L1) */}
        {data.displayMode === 'accordion' && data.specGroups && (
          <div className="flex flex-col border-t border-[#000F43]/12">
            {data.specGroups.map((group) => {
              const isOpen = openAccordions[group.key] ?? false;

              return (
                <div
                  key={group.key}
                  className="border-b border-[#000F43]/12 transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(group.key)}
                    className="w-full text-left py-5 flex justify-between items-center font-eurostile text-base font-bold uppercase tracking-wider text-[#000F43] hover:text-[#005FFF] transition-colors duration-250 cursor-pointer bg-transparent border-0"
                    aria-expanded={isOpen}
                  >
                    <span>{group.title}</span>
                    <svg
                      aria-hidden="true"
                      className={`w-4.5 h-4.5 text-current transition-transform duration-300 ${
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
                      <dl className="m-0 grid grid-cols-1 sm:grid-cols-[minmax(140px,1fr)_2fr] gap-x-6 gap-y-3 text-sm sm:text-base font-square">
                        {group.items.map((item) => (
                          <div
                            key={item.key}
                            className="contents py-1 border-b border-[#000F43]/5 last:border-b-0"
                          >
                            <dt className="text-[#000F43]/60 font-medium">
                              {item.label}
                            </dt>
                            <dd className="m-0 text-[#000F43] font-normal leading-relaxed">
                              {item.values.default?.display || ''}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* TABLE DISPLAY MODE (Voris) */}
        {data.displayMode === 'table' && data.tableGroups && data.tableColumns && (
          <div className="overflow-x-auto rounded-xl border border-[#000F43]/10 bg-white shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-sm sm:text-base font-square">
              <thead>
                <tr className="bg-[#000F43] text-white text-left">
                  {data.tableColumns.map((col, idx) => (
                    <th
                      key={col.key}
                      scope="col"
                      className={`px-5 py-4 ${
                        idx === 0
                          ? 'w-[30%] font-normal text-sm font-square'
                          : 'font-eurostile text-xs sm:text-sm font-extrabold uppercase tracking-wide'
                      } ${idx === 2 ? 'text-white/60' : ''}`}
                    >
                      {col.label}
                      {col.badge && (
                        <span className="ml-2 font-sans font-normal text-[11px] tracking-widest text-[#FFA100]">
                          · {col.badge}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.tableGroups.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr>
                      {/* Group Header Row */}
                      <th
                        colSpan={data.tableColumns?.length || 3}
                        scope="colgroup"
                        className="text-left px-5 pt-4 pb-2 text-xs tracking-[0.1em] font-sans font-semibold text-[#005FFF] bg-[#F5F7FB]"
                      >
                        {group.groupTitle}
                      </th>
                    </tr>

                    {/* Group Data Rows */}
                    {group.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="border-t border-[#000F43]/8 transition-colors duration-200 hover:bg-[#005FFF]/[0.04]"
                      >
                        <th
                          scope="row"
                          className="text-left px-5 py-3.5 font-normal text-[#000F43]/65"
                        >
                          {row.label}
                        </th>

                        {row.isColspan ? (
                          <td
                            colSpan={2}
                            className="px-5 py-3.5 text-[#000F43] font-normal"
                          >
                            {row.values.vr10}
                          </td>
                        ) : (
                          <>
                            <td className="px-5 py-3.5 text-[#000F43] font-normal">
                              {row.values.vr10 || '—'}
                            </td>
                            <td className="px-5 py-3.5 text-[#000F43]/80 font-normal">
                              {row.values.vr20 || '—'}
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Disclaimer Note */}
        <p className="m-0 text-xs sm:text-sm text-[#000F43]/55 font-square">
          {data.disclaimer}
        </p>
      </div>
    </section>
  );
}
