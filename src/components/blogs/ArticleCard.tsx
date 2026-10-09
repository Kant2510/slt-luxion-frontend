import { Heading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { BlogPost } from "@/types/blog";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/utils/format";
import Link from "next/link";

export default function ArticleCard({
  post,
  variant = "default"
}: {
  post: BlogPost;
  variant?: "default" | "compact";
}) {
  const CardWrapper = post.externalLink ? "a" : Link;
  const wrapperProps = post.externalLink
    ? { href: post.externalLink, target: "_blank", rel: "noopener noreferrer" }
    : { href: `/blog/${post.slug}` };

  if (variant === "compact") {
    return (
      <CardWrapper {...(wrapperProps as any)} className="group flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-gray-100">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="56px" />
        </div>
        <div className="flex-1 min-w-0">
          <Text as="span" size="xs" className="font-afacad font-medium uppercase tracking-wide text-blue-600 mb-0.5 block">
            {post.category}
          </Text>
          <Heading as="h4" size="sm" weight="semibold" color="dark" className="text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
            {post.externalLink && <ExternalLink className="inline-block ml-1 w-3 h-3 opacity-50" />}
          </Heading>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper {...(wrapperProps as any)} className="group flex flex-col border border-gray-200 bg-white hover:border-blue-600 transition-all duration-300 h-full">
      <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2 flex items-center gap-2">
          <Text as="span" size="xs" className="font-afacad font-medium uppercase tracking-wide text-blue-600">
            {post.category}
          </Text>
          <span className="text-gray-300 text-xs">•</span>
          <Text as="span" size="xs" color="muted" className="flex items-center gap-1 text-gray-500">
            <Clock className="w-3 h-3" />
            {formatDate(post.publishedAt)}
          </Text>
        </div>
        <Heading as="h3" size="sm" color="dark" className="text-lg lg:text-xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
          {post.title}
          {post.externalLink && <ExternalLink className="inline-block ml-2 w-4 h-4 opacity-50" />}
        </Heading>
        <Text size="xs" color="muted" className="text-gray-500 line-clamp-2 mb-4">
          {post.excerpt}
        </Text>
        <div className="mt-auto flex items-center gap-1 text-xs font-medium text-blue-600">
          Read more
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </CardWrapper>
  );
}
