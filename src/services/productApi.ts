import { Product, ProductCategory } from '@/types/product';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export async function getProducts(category?: ProductCategory): Promise<Product[]> {
  const url = category
    ? `${API_BASE_URL}/products?category=${category}`
    : `${API_BASE_URL}/products`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  const result = await res.json();
  return result.data ?? [];
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product '${slug}': ${res.status} ${res.statusText}`);
  }

  const result = await res.json();
  return result.data;
}
