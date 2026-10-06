'use client';

import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full mt-20 pt-16 border-t border-[#e2e8f0]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-blue">
            Compatible Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-dark tracking-tight">
            Related Payloads &amp; Systems
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id || product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}