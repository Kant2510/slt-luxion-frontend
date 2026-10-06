'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Package as PackageIcon } from 'lucide-react';
import { Product } from '@/types/product';
import { CATEGORY_LABELS, getProductHeroImage } from '@/data/products';

interface ProductCardProps {
  product: Product;
  productNameSize?: 'sm' | 'md' | 'lg';
  isBorderVisible?: boolean;
  isTaglineVisible?: boolean;
  isFooterVisible?: boolean;
}

export default function ProductCard({
  product,
  productNameSize = 'lg',
  isBorderVisible = true,
  isTaglineVisible = true,
  isFooterVisible = true,
}: ProductCardProps) {
  const imageUrl = getProductHeroImage(product);
  const detailUrl = `/products/${product.slug || product.id}`;
  const variantCount = product.variants?.length ?? 0;
  const packageCount = product.packages?.length ?? 0;

  return (
    <div
      className={`group relative flex flex-col bg-white border ${
        isBorderVisible ? 'border-[#e2e8f0]' : 'border-transparent'
      } overflow-hidden transition-all duration-300 hover:border-accent-blue/40 hover:shadow-[0_12px_30px_rgba(7,17,31,0.08)]`}
    >
      {/* Top Image & Badges */}
      <div className="relative aspect-square w-full overflow-hidden">
        {/* Badges container */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5 items-start">
          {variantCount > 1 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#07111f]/80 text-white backdrop-blur-xs">
              <Layers size={10} />
              {variantCount} variants
            </span>
          )}
          {product.category === 'dev_kit' && packageCount > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-600/90 text-white backdrop-blur-xs">
              <PackageIcon size={10} />
              {packageCount} kit packages
            </span>
          )}
        </div>

        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className={`p-3 ${productNameSize === 'sm' ? 'object-contain' : 'object-cover'}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col px-5 py-3">
        <h3 className={`text-${productNameSize} font-bold text-slate-dark line-clamp-1 mb-1`}>
          <Link href={detailUrl} className="focus:outline-none hover:text-accent-blue transition-colors">
            {product.name}
          </Link>
        </h3>

        {isTaglineVisible && product.tagline && (
          <p className="text-xs text-muted-slate line-clamp-2 mb-4 leading-relaxed">
            {product.tagline}
          </p>
        )}

        {/* Footer: Category & CTA Link */}
        {isFooterVisible && (
          <div className="mt-auto pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">
              {CATEGORY_LABELS[product.category] || product.category}
            </span>

            <Link
              href={detailUrl}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-dark group-hover:text-accent-blue transition-colors"
            >
              Details
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
