"use client";

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text"; 0
import { ChevronLeft, ChevronRight, } from "lucide-react";
import FeaturedCard from "@/components/blogs/FeaturedCard";
import ArticleCard from "@/components/blogs/ArticleCard";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogPost } from "@/types/blog";
import Link from "next/link";


interface NewsClientProps {
  featured: BlogPost | null;
  gridPosts: BlogPost[];      // Chỉ nhận đúng số bài của trang hiện tại
  externalPosts: BlogPost[];
  currentPage: number;
  totalPages: number;
};

const BlogsPage = ({ featured, gridPosts, externalPosts, currentPage, totalPages }: NewsClientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".hero-content", { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" })
      .from(".featured-card", { opacity: 0, y: 30, duration: 0.7, ease: "power2.out" }, "-=0.3");

    gsap.from(".article-card", {
      scrollTrigger: { trigger: ".articles-grid", start: "top 85%", toggleActions: "play none none reverse" },
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out",
    });
  }, { scope: containerRef });


  return (
    <main ref={containerRef} className="min-h-screen mt-20 bg-white text-gray-900 font-sans antialiased">
      {/* Ticker */}
      {/* <BreakingTicker posts={posts} breakingLabel={tPage("breakingLabel")} /> */}

      {/* Hero + Featured - cách header bằng padding-top tự nhiên */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-350 mx-auto px-6 md:px-12 pt-12 pb-16">
          <div className="hero-content mb-10">
            <Heading as="h1" size="2xl" color="dark" className="text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              <span className="text-blue-600">Luxion</span> | <span className="text-blue-600">Blogs & News</span>
            </Heading>
          </div>
          {featured && (
            <div className="featured-card">
              <FeaturedCard post={featured} />
            </div>
          )}
        </div>
      </section>

      {/* Main Grid + Sidebar (không có filter bar) */}
      <section className="max-w-350 mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Articles Grid */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <Heading as="h2" size="sm" color="dark" className="text-lg text-gray-900">Latest</Heading>
            </div>

            {gridPosts.length > 0 ? (
              <div className="articles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="border border-gray-200 bg-gray-50 p-6">
                <Text size="sm" color="muted" className="text-gray-600">
                  No more posts
                </Text>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                {/* Nút Previous */}
                {currentPage > 1 ? (
                  <Link href={`?page=${currentPage - 1}`}>
                    <Button
                      variant="outline"
                      size="md"
                      className="text-gray-700 hover:border-gray-400"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    size="md"
                    className="text-gray-700 disabled:opacity-40" disabled
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`?page=${page}`}
                    // Đổi thẻ <button> thành thẻ <Link>, vì Link trong Next.js tự động compile ra thẻ <a>
                    className={`flex items-center justify-center h-9 min-w-9 px-3 border text-sm font-medium transition-colors ${page === currentPage
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                  >
                    {page}
                  </Link>
                ))}

                {/* Nút Next */}
                {currentPage < totalPages ? (
                  <Link href={`?page=${currentPage + 1}`}>
                    <Button
                      variant="outline"
                      size="md"
                      className="text-gray-700 hover:border-gray-400"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    size="md"
                    className="text-gray-700 disabled:opacity-40"
                    disabled
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          {/* <aside className="w-full lg:w-75 shrink-0 space-y-8">
            <div className="mb-8">
              <ExternalNewsEmbed
                widgetTitle={tPage("embedWidgetTitle")}
                articles={
                  externalPosts.map((post) => ({
                    url: post.externalLink!,
                    title: post.title,
                    description: post.excerpt,
                  }))
                }
              />
            </div>
          </aside> */}
        </div>
      </section>
    </main>
  )
}

export default BlogsPage;
