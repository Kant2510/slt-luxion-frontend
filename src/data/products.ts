import { Product, ProductCategory, Media } from '@/types/product';

export const CATEGORIES: ProductCategory[] = ['payload', 'dev_kit'];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  payload: 'Payload Systems',
  dev_kit: 'Developer Kits',
};

export function getProductHeroImage(product: Product): string {
  const hero = product.images?.find((img) => img.role === 'hero');
  if (hero?.url) return hero.url;
  const first = product.images?.[0];
  if (first?.url) return first.url;
  return '/images/products/sample.png';
}

export function getProductDatasheet(product: Product): Media | undefined {
  return product.documents?.find((doc) => doc.role === 'datasheet') || product.documents?.[0];
}

export function getProductByIdOrSlug(products: Product[], idOrSlug: string): Product | undefined {
  return products.find((p) => p.slug === idOrSlug || p.id === idOrSlug);
}

export function getRelatedProducts(products: Product[], currentSlugOrId: string, limit: number = 4): Product[] {
  const current = getProductByIdOrSlug(products, currentSlugOrId);
  if (!current) return products.slice(0, limit);

  const sameCategory = products.filter(
    (p) => p.category === current.category && p.slug !== current.slug && p.id !== current.id
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const remaining = products.filter(
    (p) => p.slug !== current.slug && p.id !== current.id && !sameCategory.some((item) => item.id === p.id)
  );

  return [...sameCategory, ...remaining].slice(0, limit);
}
