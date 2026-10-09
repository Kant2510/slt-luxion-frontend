import { apiFetch } from "@/lib/api";
import { ResponseWithData } from "@/types/api/response";
import { BlogPost, BlogPageResponse, BlogsResponse } from "@/types/blog";
import { BASE_API_URL } from "@/configs/api.config";

function toAbsoluteMediaUrl(value: string) {
	if (/^https?:\/\//i.test(value)) {
		return value;
	}

	return `${BASE_API_URL.replace(/\/+$/, "")}/${value.replace(/^\/+/, "")}`;
}

function normalizeBlogPost(blogPost: BlogPost): BlogPost {
	return {
		...blogPost,
		coverImage: toAbsoluteMediaUrl(blogPost.coverImage),
		content: blogPost.content?.map((item) => {
			if (item.type !== "image" || !item.content?.src) {
				return item;
			}

			return {
				...item,
				content: {
					...item.content,
					src: toAbsoluteMediaUrl(item.content.src),
				},
			};
		}),
	};
}

export async function getBlogPostById(blogId: string): Promise<BlogPost | null> {
	try {
		const response = await apiFetch<ResponseWithData<BlogPageResponse>>(`/blogs/${blogId}?status=public`);
		return normalizeBlogPost(response.data);
	}
	catch (error) {
		// console.warn(`Error fetching blog post with ID ${blogId}:`);
		return null;
	}
}

export async function getBlogPosts() {
	try {
		const response = await apiFetch<ResponseWithData<BlogsResponse>>(`/blogs?status=public`);
		console.log("aehnasehbnfuoiea",response)
		return response.data.map((post) => {
			const normalizedPost = normalizeBlogPost(post);
			return post.slug && post.slug.startsWith("http")
				? { ...normalizedPost, externalLink: post.slug }
				: normalizedPost;
		});
	}
	catch (error) {
		console.warn(`Error fetching blog posts:`, error);
		return [];
	}
}
