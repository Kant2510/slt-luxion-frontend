import { Heading } from "@/components/ui/SectionHeading";
import BlogDetailPage from "@/components/blogs/BlogDetailPage";
import Link from "next/link";
import { getBlogPostById, getBlogPosts } from "@/services/blog/blog.service";
import { SidebarItem } from '@/types/blog';

export const revalidate = 3600;

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsArticlePage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const articleSlug = id ?? "";

  // Fetch the specific article and the full list in parallel.
  //
  // Why two separate fetches instead of one?
  // - getBlogPostById → small payload (single article). Each blog's Full Route
  //   Cache stores only this article's data, not the entire list.
  // - getBlogPosts    → full list for related posts sidebar. This URL is
  //   identical across ALL blog detail pages, so Next.js Data Cache stores it
  //   as ONE shared entry — no duplicate network calls, minimal RAM overhead.
  //
  // Promise.all runs both requests concurrently, keeping latency low.
  const [article, allPosts] = await Promise.all([
    getBlogPostById(articleSlug),
    getBlogPosts(),
  ]);

  if (!article) {
    return (
      <main className="min-h-screen bg-white text-[#222] font-sans pt-24 pb-16">
        <div className="mx-auto max-w-225 px-4 md:px-6">
          <Heading as="h1" size="md" color="dark" className="mb-3">
            "notFoundTitle"
          </Heading>
          <Link href="/blog" className="text-blue-600 hover:underline">
            "notFoundBack"
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = allPosts.filter((post) => post.slug !== articleSlug);

  const sidebarItems: SidebarItem[] = relatedPosts
    .map((post) => ({
      type: "post" as const,
      id: post.id,
      href: post.externalLink || `/blog/${post.slug}`,
      image: post.coverImage,
      title: post.title,
      description: post.excerpt,
      meta: new Date(post.publishedAt).toLocaleDateString("en-US"),
      label: post.category,
      external: !!post.externalLink,
    }))
    .filter(Boolean) as SidebarItem[];

  return (
    <BlogDetailPage article={article} sidebarItems={sidebarItems} />
  );
}
