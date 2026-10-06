'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FileText,
  Table,
  Package as PackageIcon,
  CheckCircle2,
  Layers,
  ArrowRight,
  Box,
} from 'lucide-react';
import { Product } from '@/types/product';

interface ProductTabsProps {
  product: Product;
  activeVariantCode?: string;
  onSelectVariant?: (code: string) => void;
}

export default function ProductTabs({
  product,
  activeVariantCode: controlledVariantCode,
  onSelectVariant,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'specs' | 'packages'>('info');

  const defaultVariant = product.variants?.find((v) => v.is_default) || product.variants?.[0];
  const activeVariantCode = controlledVariantCode || defaultVariant?.code || '';

  const hasPackages = Boolean(
    product.packages && product.packages.length > 0 || product.category === 'dev_kit'
  );

  // Gallery images
  const galleryImages = product.images?.filter((img) => img.role === 'gallery') || [];

  return (
    <div className="w-full mt-16 pt-10 border-t border-[#e2e8f0]" id="product-tabs">
      {/* Tab Header */}
      <div className="flex items-center gap-8 border-b border-[#e2e8f0] mb-10 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('info')}
          className={`pb-4 text-base sm:text-lg transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'info'
              ? 'border-b-2 border-accent-blue text-accent-blue font-extrabold'
              : 'border-b-2 border-transparent text-muted-slate hover:text-slate-dark font-semibold'
          }`}
        >
          <FileText size={18} />
          Product Information
        </button>

        <button
          onClick={() => setActiveTab('specs')}
          className={`pb-4 text-base sm:text-lg transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'specs'
              ? 'border-b-2 border-accent-blue text-accent-blue font-extrabold'
              : 'border-b-2 border-transparent text-muted-slate hover:text-slate-dark font-semibold'
          }`}
        >
          <Table size={18} />
          Product Specification
        </button>

        {hasPackages && (
          <button
            onClick={() => setActiveTab('packages')}
            className={`pb-4 text-base sm:text-lg transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'packages'
                ? 'border-b-2 border-accent-blue text-accent-blue font-extrabold'
                : 'border-b-2 border-transparent text-muted-slate hover:text-slate-dark font-semibold'
            }`}
          >
            <PackageIcon size={18} />
            Packages
          </button>
        )}
      </div>

      {/* TAB 1: Product Information (Dynamic JSON Blocks Renderer) */}
      {activeTab === 'info' && (
        <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn">
          {/* Product Notes / System Description */}
          {product.notes ? (
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-dark tracking-tight">
                Product &amp; Notes 
              </h3>
              <div className="prose max-w-none text-[#475569] leading-relaxed text-base whitespace-pre-line bg-white p-6 border border-[#e2e8f0]">
                {product.notes}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-dark tracking-tight">
                Main features
              </h3>
              <p className="text-[#475569] leading-relaxed">
                {product.name} developed according to industry standards specifically for aerial surveillance, search and rescue, and autonomous data analysis missions.
              </p>
            </div>
          )}

          {/* Highlight Specs Summary */}
          {product.spec_groups && product.spec_groups.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-dark flex items-center gap-2">
                <span>Key specification subgroups</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.spec_groups.map((group) => {
                  const highlights = group.items.filter((item) => item.is_highlight);
                  return (
                    <div
                      key={group.key}
                      className="p-5 bg-white border border-[#e2e8f0] shadow-2xs hover:border-accent-blue/30 transition-colors"
                    >
                      <h5 className="font-bold text-slate-dark text-sm mb-3 pb-2 border-b border-[#f1f5f9]">
                        {group.title}
                      </h5>
                      <ul className="space-y-2 text-xs text-[#475569]">
                        {(highlights.length > 0 ? highlights : group.items.slice(0, 3)).map((item) => {
                          const val = item.values[activeVariantCode] || Object.values(item.values)[0];
                          const displayText = val?.display || '-';
                          const isLongText = displayText !== '-' && displayText.length > 18;

                          return (
                            <li key={item.key} className="flex justify-between items-center gap-2">
                              <span className="text-muted-slate truncate max-w-[50%]">{item.label}:</span>
                              <div className="relative group/tip max-w-[50%] text-right">
                                <span
                                  className="block truncate font-semibold text-slate-dark cursor-default"
                                  title={displayText}
                                >
                                  {displayText}
                                </span>
                                {isLongText && (
                                  <div className="absolute right-0 bottom-full mb-1.5 hidden group-hover/tip:block z-30 pointer-events-none w-max max-w-[220px] sm:max-w-xs">
                                    <div className="bg-slate-dark text-white text-[11px] font-medium py-1 px-2.5 rounded-lg shadow-xl whitespace-normal text-left break-words border border-slate-700">
                                      {displayText}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Gallery Showcase */}
          {galleryImages.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-dark">Thư viện ảnh chi tiết</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-slate-dark border border-[#e2e8f0] shadow-sm"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt || `${product.name} gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Product Specification */}
      {activeTab === 'specs' && (
        <div className="max-w-5xl mx-auto space-y-10 animate-fadeIn">
          {/* Matrix Header & Variant Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent-blue block mb-1">
                Standard Technical Specifications
              </span>
            </div>

            {/* Quick variant buttons inside specs */}
            {product.variants && product.variants.length > 1 && (
              <div className="flex items-center gap-2 bg-white p-1 border border-[#cbd5e1]">
                <span className="text-xs text-muted-slate px-2 font-medium">Highlight:</span>
                {product.variants.map((v) => {
                  const isSelected = v.code === activeVariantCode;
                  return (
                    <button
                      key={v.code}
                      onClick={() => onSelectVariant?.(v.code)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-dark text-white shadow-2xs'
                          : 'text-[#475569] hover:text-slate-dark'
                      }`}
                    >
                      {v.code}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Grouped Spec Tables */}
          {product.spec_groups && product.spec_groups.length > 0 ? (
            <div className="space-y-8">
              {product.spec_groups.map((group) => (
                <div
                  key={group.key}
                  className="border border-[#e2e8f0] overflow-hidden shadow-2xs bg-white"
                >
                  {/* Group header */}
                  <div className="bg-slate-dark px-6 py-4 text-white flex items-center justify-between">
                    <h4 className="text-sm font-bold tracking-wide uppercase">
                      {group.title}
                    </h4>
                    <span className="text-xs text-[#94a3b8] font-mono">
                      {group.items.length} variants
                    </span>
                  </div>

                  {/* Spec Items Matrix Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                          <th className="py-3.5 px-6 font-bold text-slate-dark w-1/3">
                            Spec
                          </th>
                          {product.variants?.map((v) => {
                            const isCurrent = v.code === activeVariantCode;
                            return (
                              <th
                                key={v.code}
                                className={`py-3.5 px-6 font-bold transition-colors ${
                                  isCurrent
                                    ? 'bg-blue-50/70 text-accent-blue border-b-2 border-accent-blue'
                                    : 'text-slate-dark'
                                }`}
                              >
                                <div className="flex items-center gap-1.5">
                                  <span>{v.name}</span>
                                  <span className="text-[10px] font-mono px-1 rounded bg-slate-200/60 text-slate-600">
                                    ({v.code})
                                  </span>
                                </div>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-[#f1f5f9]">
                        {group.items.map((item, itemIdx) => (
                          <tr
                            key={item.key}
                            className={`hover:bg-[#f8fafc]/80 transition-colors ${
                              itemIdx % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'
                            }`}
                          >
                            {/* Spec Label */}
                            <td className="py-3.5 px-6 font-medium text-slate-dark align-top">
                              <div className="flex items-center gap-2">
                                <span>{item.label}</span>
                              </div>
                            </td>

                            {/* Spec Values for each Variant */}
                            {product.variants?.map((v) => {
                              const val = item.values[v.code];
                              const isCurrent = v.code === activeVariantCode;

                              return (
                                <td
                                  key={v.code}
                                  className={`py-3.5 px-6 align-top transition-colors ${
                                    isCurrent ? 'bg-blue-50/20 font-medium' : 'text-[#475569]'
                                  }`}
                                >
                                  {val ? (
                                    <div>
                                      <div className="text-slate-dark font-semibold">
                                        {val.display}
                                      </div>
                                      {val.note && (
                                        <div className="text-[11px] text-muted-slate italic mt-0.5">
                                          * {val.note}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <span className="text-[#cbd5e1] font-mono">-</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-slate text-sm">
              Product specification not available.
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Gói bán hàng & Phụ kiện (Packages & Kit Options) */}
      {activeTab === 'packages' && (
        <div className="max-w-5xl mx-auto space-y-10 animate-fadeIn">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-dark">
              Packages:
            </h3>
            <p className="text-sm text-muted-slate mt-1">
              Select a configuration suited to research objectives, OEM integration, or commercial flight operations.
            </p>
          </div>

          {product.packages && product.packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.packages.map((pkg) => {
                // Find parent package name if includes_package_id exists
                const parentPkg = pkg.includes_package_id
                  ? product.packages?.find((p) => p.id === pkg.includes_package_id || p.code === pkg.includes_package_id)
                  : null;

                return (
                  <div
                    key={pkg.code}
                    className="flex flex-col bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-xs hover:border-accent-blue/40 hover:shadow-md transition-all duration-200"
                  >
                    {/* Package Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent-blue">
                          {pkg.code}
                        </span>
                        <h4 className="text-lg font-bold text-slate-dark leading-snug">
                          {pkg.name}
                        </h4>
                      </div>
                      <div className="p-2 rounded-xl bg-blue-50 text-accent-blue">
                        <Box size={20} />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="my-4 pb-4 border-b border-[#f1f5f9]">
                      {pkg.price ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-slate-dark">
                            {Number(pkg.price.amount).toLocaleString('vi-VN')}
                          </span>
                          <span className="text-xs font-bold text-[#64748b]">
                            {pkg.price.currency}
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm font-bold text-slate-dark text-muted-slate">
                          Contact for quote
                        </div>
                      )}
                    </div>

                    {/* Inheritance Tag */}
                    {parentPkg && (
                      <div className="mb-4 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                        <Layers size={14} className="shrink-0 text-amber-600" />
                        <span>Includes the entire package <strong>{parentPkg.name}</strong></span>
                      </div>
                    )}

                    {/* Contents Checklist */}
                    <div className="flex-1 space-y-2 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] block mb-2">
                        This package have:
                      </span>
                      {pkg.contents && pkg.contents.length > 0 ? (
                        <ul className="space-y-2">
                          {pkg.contents.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                              <CheckCircle2 size={14} className="text-accent-blue shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-muted-slate italic">Standard configuration</p>
                      )}
                    </div>

                    {/* CTA */}
                    <a
                      href="#inquiry-section"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-slate-dark text-white hover:bg-[#1a2d48] transition-colors"
                    >
                      <span>Request package</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-slate text-sm">
              Product package not available.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
