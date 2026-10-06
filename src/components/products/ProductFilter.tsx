'use client';

import Link from 'next/link';
import { Search, ChevronRight, SlidersHorizontal, ArrowDownAZ, Sparkles, Clock } from 'lucide-react';
import { ProductCategory, SortOption } from '@/types/product';
import { CATEGORY_LABELS } from '@/data/products';

interface ProductFilterProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: ProductCategory[];
  totalResults: number;
}

export default function ProductFilter({
  selectedCategory,
  onSelectCategory,
  selectedSort,
  onSelectSort,
  searchQuery,
  onSearchChange,
  categories,
  totalResults,
}: ProductFilterProps) {
  return (
    <div className="w-full mb-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-muted-slate mb-6 ml-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-dark transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-[#94a3b8]" />
        <span className="font-semibold text-slate-dark">Products</span>
        {selectedCategory !== 'All' && (
          <>
            <ChevronRight size={14} className="text-[#94a3b8]" />
            <span className="text-accent-blue font-medium">
              {CATEGORY_LABELS[selectedCategory as ProductCategory] || selectedCategory}
            </span>
          </>
        )}
      </nav>

      {/* Main Filter & Search Toolbar */}
      <div className="bg-white p-5 flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onSelectCategory('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${selectedCategory === 'All'
              ? 'bg-slate-dark text-white shadow-sm'
                : 'bg-[#f8fafc] border border-[#e2e8f0] text-[#475569] hover:border-[#cbd5e1] hover:text-slate-dark'
            }`}
          >
            All Products ({totalResults})
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${selectedCategory === cat
                ? 'bg-slate-dark text-white shadow-sm'
                  : 'bg-[#f8fafc] border border-[#e2e8f0] text-[#475569] hover:border-[#cbd5e1] hover:text-slate-dark'
              }`}
            >
              {CATEGORY_LABELS[cat] || cat}
            </button>
          ))}
        </div>

        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative min-w-55">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search payloads..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-xs text-slate-dark placeholder:text-[#94a3b8] focus:border-accent-blue focus:bg-white focus:ring-2 focus:ring-accent-blue/20 outline-hidden transition-all"
            />
          </div>

          {/* Sort Buttons / Dropdown */}
          <div className="flex items-center gap-1.5 p-1">
            <span className="text-[11px] font-bold text-[#94a3b8] px-2 flex items-center gap-1">
              <SlidersHorizontal size={12} />
              Sort:
            </span>

            <button
              onClick={() => onSelectSort('default')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSort === 'default'
                  ? 'bg-white text-accent-blue shadow-xs font-bold'
                  : 'text-muted-slate hover:text-slate-dark'
              }`}
            >
              <Sparkles size={12} />
              Default
            </button>

            <button
              onClick={() => onSelectSort('name-asc')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSort === 'name-asc'
                  ? 'bg-white text-accent-blue shadow-xs font-bold'
                  : 'text-muted-slate hover:text-slate-dark'
              }`}
            >
              <ArrowDownAZ size={12} />
              Name A-Z
            </button>

            <button
              onClick={() => onSelectSort('newest')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedSort === 'newest'
                  ? 'bg-white text-accent-blue shadow-xs font-bold'
                  : 'text-muted-slate hover:text-slate-dark'
              }`}
            >
              <Clock size={12} />
              Newest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
