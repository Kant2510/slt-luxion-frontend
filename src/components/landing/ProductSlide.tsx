/**
 * ProductSlide.tsx
 * N tabs: tab name by product category, style: just bottom border, active tab: blue bottom border, bold text
 * Each tabs:
 * Slider of product cards, each card: image, name, button to product page.
 * Number of products in each slider: 4, if less than 4, center the cards.
 * Slider: left and right arrows, on click, scroll to next 4 products.
 * If no products in category, show "No products found" message.
 * Responsive: on mobile, show 1 product per slide, on tablet, show 2 products per slide, on desktop, show 4 products per slide.
 * Use framer-motion for animations.
 * Use tailwindcss for styling.
 * Button "More Info" on each product card, on click, navigate to product page.
 * Button "View All" on each tab, on click, navigate to product category page.
 */
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import { ProductCategory, Product } from '@/types/product';
import { CATEGORY_LABELS } from '@/data/products';

interface ProductSlideProps {
  categories: ProductCategory[];
  products: Product[];
}

export default function ProductSlide({ categories, products }: ProductSlideProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categories[0] || 'payload');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = products.filter((product) => product.category === activeCategory);
  const productSlides = Array.from(
    { length: Math.ceil(filteredProducts.length / 4) },
    (_, slideIndex) => filteredProducts.slice(slideIndex * 4, slideIndex * 4 + 4),
  );
  const lastSlideIndex = Math.max(productSlides.length - 1, 0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, lastSlideIndex));
  };

  return (
    <section className="bg-white pt-14" id="product-slide" aria-label="Product Slide Section">
      <div className="wrap">
        <div className="w-full">
          {/* Tabs */}
          <div className="flex mb-8 justify-center text-[19px] gap-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 pb-2 font-semibold cursor-pointer transition-colors ${
                  activeCategory === category
                    ? 'border-b-2 border-accent-blue text-accent-blue'
                    : 'text-gray-600 hover:text-slate-dark'
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0); // Reset index when changing category
                }}
              >
                {CATEGORY_LABELS[category] || category}
              </button>
            ))}
          </div>

          {/* Product Slider */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredProducts.length > 0 ? (
                  productSlides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="min-w-full flex flex-wrap justify-center">
                      {slide.map((product) => (
                        <div key={product.id || product.slug} className="w-full p-2 sm:w-1/2 lg:w-1/4">
                          <ProductCard
                            product={product}
                            productNameSize="sm"
                            isBorderVisible={false}
                            isTaglineVisible={false}
                            isFooterVisible={false}
                          />
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center py-10 text-gray-500">No products found</div>
                )}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            {productSlides.length > 1 && (
              <>
                <button
                  className="absolute left-0 top-1/2 transform -translate-x-3/4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  className="absolute right-0 top-1/2 transform translate-x-3/4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={handleNext}
                  disabled={currentIndex >= lastSlideIndex}
                  aria-label="Next slide"
                >
                  <ArrowRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* View All Button */}
          <div className="mt-4 text-right">
            <a
              href="/products"
              className="text-accent-blue font-semibold hover:underline text-sm inline-flex items-center gap-1"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
