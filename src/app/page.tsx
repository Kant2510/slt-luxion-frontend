import Hero from '@/components/landing/Hero';
import Vision from '@/components/landing/Vision';
import Features from '@/components/landing/Features';
import Products from '@/components/landing/Products';
import Applications from '@/components/landing/Applications';
import Contact from '@/components/landing/Contact';
import ParticlesBackground from '@/components/landing/ParticlesBackground';
import ProductSlide from '@/components/landing/ProductSlide';
import { CATEGORIES } from '@/data/products';
import { getProducts } from '@/services/productApi';

export const revalidate = 3600; // revalidate after 1 hour

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="relative min-h-screen bg-white">
      <ParticlesBackground />
      <main>
        <Hero />
        <ProductSlide categories={CATEGORIES} products={products} />
        <Vision />
        <Features />
        <Products />
        <Applications />
        <Contact />
      </main>
    </div>
  );
}
