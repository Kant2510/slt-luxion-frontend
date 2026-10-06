'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  ChevronRight,
  Download,
  Send,
  Layers,
  FileText,
} from 'lucide-react';
import { Product } from '@/types/product';
import { CATEGORY_LABELS, getProductHeroImage, getProductDatasheet } from '@/data/products';

interface ProductOverviewProps {
  product: Product;
  activeVariantCode?: string;
  onSelectVariant?: (code: string) => void;
}

export default function ProductOverview({
  product,
  activeVariantCode: controlledVariantCode,
  onSelectVariant,
}: ProductOverviewProps) {
  const [internalActiveImageIndex, setInternalActiveImageIndex] = useState(0);

  // Default variant fallback
  const defaultVariant = product.variants?.find((v) => v.is_default) || product.variants?.[0];
  const [internalVariantCode, setInternalVariantCode] = useState<string>(
    controlledVariantCode || defaultVariant?.code || ''
  );

  const activeVariantCode = controlledVariantCode ?? internalVariantCode;
  const currentVariant = product.variants?.find((v) => v.code === activeVariantCode) || defaultVariant;

  const handleVariantChange = (code: string) => {
    setInternalVariantCode(code);
    if (onSelectVariant) {
      onSelectVariant(code);
    }
  };

  // Image list
  const mediaImages = (product.images && product.images.length > 0)
    ? product.images.filter((img) => img.kind === 'image')
    : [];

  const displayImages = mediaImages.length > 0
    ? mediaImages.map((img) => img.url)
    : [getProductHeroImage(product)];

  const activeImage = displayImages[internalActiveImageIndex] || displayImages[0];

  // Dynamic highlights extracted from spec_groups
  const highlightItems: { label: string; display: string }[] = [];
  if (product.spec_groups) {
    for (const group of product.spec_groups) {
      for (const item of group.items) {
        if (item.is_highlight) {
          const val = item.values[activeVariantCode] || item.values[defaultVariant?.code || ''] || Object.values(item.values)[0];
          if (val?.display) {
            highlightItems.push({
              label: item.label,
              display: val.display,
            });
          }
        }
      }
    }
  }

  // Datasheet link
  const datasheetDoc = getProductDatasheet(product);

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-muted-slate mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-dark transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <Link href="/products" className="hover:text-slate-dark transition-colors">
          Products
        </Link>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <span className="text-muted-slate">
          {CATEGORY_LABELS[product.category] || product.category}
        </span>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <span className="font-semibold text-slate-dark truncate max-w-50 sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* 2.1 Overview 3-Column Layout: Left Thumbnails, Center Active Image, Right Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch items-start">

        {/* LEFT COLUMN: Vertical list of thumbnails (lg:col-span-2) */}
        <div className="order-2 lg:order-1 flex lg:flex-col gap-3 lg:max-h-130 pb-2 lg:pb-0 scrollbar-thin">
          {displayImages.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setInternalActiveImageIndex(idx)}
              className={`relative aspect-square w-14 lg:w-full shrink-0 overflow-hidden border-2 bg-slate-dark transition-all duration-200 cursor-pointer ${
                internalActiveImageIndex === idx
                  ? 'border-accent-blue shadow-[0_0_15px_rgba(37,99,235,0.35)] scale-[1.02]'
                  : 'border-[#e2e8f0] opacity-70 hover:opacity-100 hover:border-[#94a3b8]'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={imgUrl}
                alt={`${product.name} thumbnail ${idx + 1}`}
                fill
                className="object-cover p-1.5"
                sizes="60px"
              />
            </button>
          ))}
        </div>

        {/* CENTER COLUMN: Main Current Image (lg:col-span-5) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-square w-full rounded-2xl bg-slate-dark border border-[#1e293b] overflow-hidden shadow-2xl flex items-center justify-center group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-radial from-accent-blue/20 to-transparent pointer-events-none" />

            <Image
              src={activeImage}
              alt={product.name}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Product Overview Information */}
        <div className="lg:col-span-6 order-3 flex flex-col h-full justify-between">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-blue">
              {CATEGORY_LABELS[product.category] || 'SAOLATEK SYSTEM'}
            </span>
            {/* {product.is_name_provisional && (
              <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                Tên dự kiến
              </span>
            )}
            {product.is_placeholder && (
              <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                Placeholder
              </span>
            )} */}
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight leading-tight mb-2">
            {product.name}
          </h1>
          {product.tagline && (
            <p className="text-sm sm:text-base text-muted-slate leading-relaxed mb-4">
              {product.tagline}
            </p>
          )}

          <div className="pb-4 mb-4 border-b border-[#e2e8f0]" />

          {/* VARIANTS SELECTOR (Giao diện chọn phiên bản) */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6 p-4">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-dark">
                  <Layers size={14} className="text-accent-blue" />
                  <span>Select variant:</span>
                </div>
                {currentVariant && (
                  <span className="text-xs font-semibold text-accent-blue">
                    {currentVariant.name}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => {
                  const isSelected = v.code === activeVariantCode;
                  return (
                    <button
                      key={v.code}
                      onClick={() => handleVariantChange(v.code)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-slate-dark text-white shadow-md shadow-slate-900/10 scale-[1.02]'
                          : 'bg-white border border-[#cbd5e1] text-[#334155] hover:border-slate-dark hover:text-slate-dark'
                      }`}
                    >
                      <span>{v.code}</span>
                      {v.is_default && (
                        <span className={`text-[10px] px-1 py-0.2 rounded font-normal ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                          Default
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Engineering Highlights (Trích xuất động từ thông số kỹ thuật) */}
          {highlightItems.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-dark mb-3">
                Key Engineering Highlights ({currentVariant?.code})
              </h4>
              <ul className="space-y-2.5">
                {highlightItems.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <span className="mt-0.5 p-0.5 rounded-full bg-white text-blue-300 shrink-0">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <div>
                      <strong className="text-slate-dark">{hl.label}:</strong>{' '}
                      <span className="text-[#475569]">{hl.display}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 sticky bottom-0 bg-white/95 backdrop-blur-xs z-10 pb-2">
            <a
              href="#inquiry-section"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl font-bold text-sm bg-slate-dark text-white hover:bg-[#1a2d48] shadow-lg shadow-black/10 transition-all duration-200 shrink-0"
            >
              <Send size={16} />
              Request Formal Quote
            </a>

            {datasheetDoc?.url ? (
              <a
                href={datasheetDoc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 h-12 rounded-xl font-bold text-sm border border-[#cbd5e1] text-slate-dark hover:bg-[#f8fafc] hover:border-slate-dark transition-all duration-200 shrink-0"
              >
                <Download size={16} />
                Download Datasheet (PDF)
              </a>
            ) : (
              <a
                href="#product-tabs"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 h-12 rounded-xl font-bold text-sm border border-[#cbd5e1] text-slate-dark hover:bg-[#f8fafc] hover:border-slate-dark transition-all duration-200 shrink-0"
              >
                <FileText size={16} />
                View specs
              </a>
            )}
          </div>

          {/* Trust points */}
          {/* <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#e2e8f0] text-[11px] text-muted-slate">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-accent-blue shrink-0" />
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu size={16} className="text-accent-purple shrink-0" />
              <span>ROS2 / MAVLink</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={16} className="text-accent-amber shrink-0" />
              <span>Global Dispatch</span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}
