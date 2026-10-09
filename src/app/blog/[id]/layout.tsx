import { getBlogPostById } from "@/services/blog/blog.service";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    return { title: "Not Found | Saolatek" };
  }

  // Get localized strings for the correct language
  let title = post.title;
  let description = post.excerpt.slice(0, 160);
  const ogImage = post.coverImage.startsWith("/")
    ? `https://saolatek.vn${post.coverImage}`
    : post.coverImage;

  return {
    title: `Saolatek | ${title}`,
    description,
    openGraph: {
      title: `Saolatek | ${title}`,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Saolatek | ${title}`,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
