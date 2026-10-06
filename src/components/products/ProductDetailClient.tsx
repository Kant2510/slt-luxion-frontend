'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import ProductOverview from './ProductOverview';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const defaultVariant = product.variants?.find((v) => v.is_default) || product.variants?.[0];
  const [activeVariantCode, setActiveVariantCode] = useState<string>(defaultVariant?.code || '');

  return (
    <>
      {/* 2.1 Overview Section (Thư viện ảnh, Selector phiên bản, Highlights) */}
      <ProductOverview
        product={product}
        activeVariantCode={activeVariantCode}
        onSelectVariant={setActiveVariantCode}
      />

      {/* 2.2 Product Tabs (Thông tin, Ma trận thông số, Gói bán hàng) */}
      <ProductTabs
        product={product}
        activeVariantCode={activeVariantCode}
        onSelectVariant={setActiveVariantCode}
      />

      {/* 2.3 Related Products */}
      <RelatedProducts products={relatedProducts} />
    </>
  );
}
