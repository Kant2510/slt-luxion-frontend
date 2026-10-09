import { Heading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { BlogPost } from "@/types/blog";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/utils/format";
import Link from "next/link";

export default function FeaturedCard({
	post
}: {
	post: BlogPost;
}) {
	const CardWrapper = post.externalLink ? "a" : Link;
	const wrapperProps = post.externalLink
		? { href: post.externalLink, target: "_blank", rel: "noopener noreferrer" }
		: { href: `/blog/${post.slug}` };

	return (
		<CardWrapper
			{...(wrapperProps as any)}
			className="group flex flex-col lg:flex-row bg-white border border-gray-200 hover:border-blue-600 transition-all duration-300"
		>
			<div className="relative w-full lg:w-1/2 aspect-16/10 lg:aspect-auto overflow-hidden bg-gray-100">
				<Image
					src={post.coverImage}
					alt={post.title}
					fill
					className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
					sizes="(max-width: 1024px) 100vw, 50vw"
					priority
				/>
			</div>
			<div className="flex flex-col justify-center p-8 lg:p-12 lg:w-1/2">
				<div className="flex items-center gap-3 mb-4">
					<Text as="span" size="xs" className="font-afacad font-medium uppercase tracking-wide text-blue-600">
						{post.category}
					</Text>
					<span className="text-xs text-gray-400">•</span>
					<Text as="span" size="xs" color="muted" className="text-gray-500">{formatDate(post.publishedAt)}</Text>
				</div>
				<Heading as="h2" size="md" color="dark" className="text-2xl lg:text-3xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
					{post.title}
					{post.externalLink && <ExternalLink className="inline-block ml-2 w-5 h-5 opacity-50" />}
				</Heading>
				<Text size="sm" color="secondary" className="text-gray-600 mb-6 line-clamp-3">
					{post.excerpt}
				</Text>
				<div className="flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700">
					Read article
					<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
				</div>
			</div>
		</CardWrapper>
	);
}
