import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProducts } from '@/services/productApi';
import { getProductHeroImage, getRelatedProducts } from '@/data/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import EmailSignup from '@/components/ui/EmailSignup';
import { Product } from '@/types/product';

export const revalidate = 3600; // revalidate after 1 hour

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      id: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const product = await getProductBySlug(id);
    const heroImage = getProductHeroImage(product);

    return {
      title: `${product.name} — SAOLATEK Systems`,
      description: product.tagline || product.notes,
      openGraph: {
        title: `${product.name} — ${product.tagline || 'SAOLATEK'}`,
        description: product.tagline || '',
        images: [
          {
            url: heroImage,
            width: 800,
            height: 600,
            alt: product.name,
          },
        ],
      },
    };
  } catch (_error) {
    return {
      title: 'Product not found - Saolatek',
    };
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  let product: Product;
  let allProducts: Product[] = [];

  try {
    product = await getProductBySlug(id);
  } catch (error) {
    console.error(`Product not found: ${id}`, error);
    notFound();
  }

  try {
    allProducts = await getProducts();
  } catch (_error) {
    allProducts = [product];
  }

  const relatedProducts = getRelatedProducts(allProducts, product.slug, 4);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="wrap">
        {/* Dynamic Client Components coordinating Variant Selector */}
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />

        {/* Enterprise Support & Consultation CTA */}
        <div id="inquiry-section" className="mt-20 p-8 sm:p-12 rounded-3xl bg-linear-to-br from-slate-dark to-[#162a44] text-white shadow-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#70aeff] mb-3 block">
            Custom Engineering &amp; OEM Integration
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Need a custom payload configuration?
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto mb-8">
            Our systems engineers provide custom focal length lenses, specialized gimbal damping plates, and custom MAVLink/ROS2 software integration.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <EmailSignup />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-xs text-[#94a3b8] max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-semibold text-white">ISO 9001 Certified</span>
              <span>Rigorous QA</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-semibold text-white">Direct Engineer Support</span>
              <span>24/7 Response</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-semibold text-white">Global Air Express</span>
              <span>Insured Transit</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-semibold text-white">SDK &amp; Custom Firmware</span>
              <span>Developer Portal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
