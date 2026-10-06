'use client';

import { useState, useMemo, useEffect } from 'react';
import { Product, SortOption } from '@/types/product';
import { CATEGORIES } from '@/data/products';
import { getProducts } from '@/services/productApi';
import ProductCard from '@/components/products/ProductCard';
import ProductFilter from '@/components/products/ProductFilter';
import Pagination from '@/components/products/Pagination';
import { PackageSearch, AlertCircle, RefreshCw } from 'lucide-react';

const ITEMS_PER_PAGE = 28; // 7 rows x 4 columns = 28 products max per page

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('default');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchProductList = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Không thể tải danh sách sản phẩm từ máy chủ.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 1. Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.tagline && p.tagline.toLowerCase().includes(q)) ||
          (p.notes && p.notes.toLowerCase().includes(q))
      );
    }

    // 3. Sorting
    switch (selectedSort) {
      case 'default':
        result.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        result.sort((a, b) => {
          const dateA = a.published_at ? new Date(a.published_at).getTime() : 0;
          const dateB = b.published_at ? new Date(b.published_at).getTime() : 0;
          return dateB - dateA;
        });
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedSort, searchQuery, products]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSelectedSort(sort);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="animate-spin text-accent-blue" size={32} />
          <p className="text-sm font-semibold text-muted-slate">LOADING PRODUCTS...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full p-8 border border-red-200 text-center">
          <AlertCircle size={40} className="mx-auto text-red-500 mb-3" />
          <h2 className="text-lg font-bold text-slate-dark mb-2">Failed to load products</h2>
          <p className="text-xs text-red-700 mb-5 leading-relaxed">{error}</p>
          <button
            onClick={fetchProductList}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold bg-slate-dark text-white hover:bg-[#1a2d48] transition-colors cursor-pointer"
          >
            <RefreshCw size={14} />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="wrap">
        {/* Page Header */}
        <div className="mb-10 text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-dark tracking-tight mb-3">
            Payloads &amp; Vision Systems
          </h1>
          <p className="text-base text-muted-slate max-w-2xl">
            Explore commercial-grade optical zoom payloads, dual-spectrum thermal sensors, and AI companion computers for autonomous platforms.
          </p>
        </div>

        {/* Filters & Sorting */}
        <ProductFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          selectedSort={selectedSort}
          onSelectSort={handleSortChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          categories={CATEGORIES}
          totalResults={totalItems}
        />

        {/* 3.2 Product Grid (Max 7x4 = 28 products per page) */}
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id || product.slug} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 180, behavior: 'smooth' });
              }}
            />
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
            <PackageSearch size={48} className="mx-auto text-[#94a3b8] mb-4" />
            <h3 className="text-xl font-bold text-slate-dark mb-2">No Payloads Found</h3>
            <p className="text-sm text-muted-slate max-w-md mx-auto mb-6">
              We couldn&apos;t find any products matching your search criteria. Try clearing your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSelectedSort('default');
                setCurrentPage(1);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-dark text-white hover:bg-[#1a2d48] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
