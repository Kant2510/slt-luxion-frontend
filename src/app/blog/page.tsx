import BlogsPage from "@/components/blogs/BlogsPage";
import { getBlogPosts } from "@/services/blog/blog.service";

export const revalidate = 3600;

const POSTS_PER_PAGE = 4;
const FEATURED_POST_ID = "viewpro-vp2-drone-cleaning-solution";

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const posts = await getBlogPosts();
  console.log(posts)

  const featured = posts.find((post) => post.slug === FEATURED_POST_ID) ?? posts[0] ?? null;
  const paginatedPosts = posts.filter((post) => post.slug !== featured?.slug && !post.slug?.startsWith("http"));
  const externalPosts = posts.filter((post) => post.slug?.startsWith("http"));

  const currentPage = Number((await searchParams).page) || 1;
  const totalPages = Math.max(1, Math.ceil(paginatedPosts.length / POSTS_PER_PAGE));
  const currentPageSafe = Math.min(Math.max(currentPage, 1), totalPages);

  const start = (currentPageSafe - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const gridPosts = paginatedPosts.slice(start, end);

  return (
    <BlogsPage
      featured={featured}
      gridPosts={gridPosts}
      externalPosts={externalPosts}
      currentPage={currentPageSafe}
      totalPages={totalPages}
    />
  );
}
