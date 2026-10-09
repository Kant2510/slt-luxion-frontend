export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'image'
  | 'gallery'
  | 'quote'
  | 'list'
  | 'table'
  | 'code'
  | 'divider'
  | 'callout'
  | 'video'
  | 'embed'

export interface BlockBase {
  id: string
  type: BlockType
  content: any
  sortOrder: number
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  excerpt: string;
  content: BlockBase[];
  hashtags: string[];
  externalLink?: string;
  slug?: string;
  readingTime?: string;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  visibility?: 'PUBLIC' | 'PRIVATE';
}

export type BlogPageResponse = BlogPost
export type BlogsResponse = BlogPost[]

interface SidebarItem {
  id: string;
  href: string;
  image: string;
  title: string;
  description: string;
  meta: string;
  label: string;
  external: boolean;
  type: "post" | "press";
}

export type { SidebarItem }
