"use client";

import { Heading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import ArticleFigure from "@/components/blogs/ArticleFigure";
import BlogItemSideBar, { BlogItem } from "@/components/blogs/SideBarItem";
import { BlogPost } from "@/types/blog";
import { Link2, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


interface BlogDetailPageProps {
  article: BlogPost;
  sidebarItems: BlogItem[];
}

export default function BlogDetailPage({ article, sidebarItems }: BlogDetailPageProps) {
  const [copied, setCopied] = useState(false);

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <main className="min-h-screen bg-white text-[#222] mt-8 font-sans pt-24 pb-16">
      <div className="mx-auto max-w-350 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <article className="flex-1 min-w-0">
            <Heading
              as="h1"
              size="lg"
              color="dark"
              className="normal-case font-medium text-[28px] md:text-[34px] lg:text-[40px] mb-5"
            >
              {article.title}
            </Heading>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 text-[13px] text-gray-600">
                <Text
                  as="span"
                  size="sm"
                  color="primary"
                  className="flex items-center gap-1.5 font-bold text-[#222]"
                >
                  <User className="h-4 w-4 text-gray-400" />
                  {article.author}
                </Text>
                <span className="hidden sm:inline text-gray-300">|</span>
                <Text as="span" size="sm" color="muted" className="flex items-center gap-1.5">
                  {new Date(article.publishedAt).toLocaleDateString("en-US")}
                </Text>
              </div>

              <div className="flex items-center gap-2">
                {/* <button
                  type="button"
                  title={tDetail("shareFacebookTitle")}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaFacebook className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  title={tDetail("shareMessengerTitle")}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <FaFacebookMessenger className="h-4 w-4" />
                </button> */}
                <button
                  type="button"
                  title={"Copy link"}
                  onClick={handleCopyLink}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors relative"
                >
                  <Link2 className="h-4 w-4" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] px-2 py-1 rounded-sm whitespace-nowrap">
                      Copied
                    </span>
                  )}
                </button>
              </div>
            </div>

            <Text
              size="lg"
              color="secondary"
              className="md:text-[18px] font-medium leading-[1.65] text-[#333] mb-6"
            >
              {article.excerpt}
            </Text>

            {/* <ArticleFigure image={article.articleImages[0]} title={article.title} priority /> */}
            <div className="max-w-none [&_p]:mb-6 [&_p:last-child]:mb-0 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2 [&_li]:text-[#222] [&_a]:text-blue-600 [&_a]:no-underline hover:[&_a]:underline text-[#222] leading-[1.85] text-lg">
              {
                article.content.map((item) => {
                  switch (item.type) {
                    case "paragraph":
                      // return <p key={`${item.id}`} className="mb-5 text-[#222] leading-[1.85]">{item.content.text}</p>
                      return <div key={`${item.id}`} className="mb-5 text-[#222] leading-[1.85]" >{item.content.text.split('\n').map((line: string, idx: number) => (
                        <div key={`${item.id}-${idx}`}>{line}</div>
                      ))}</div>;
                    case "list":
                      return (
                        <div key={`${item.id}`}>
                          <p>{item.content.title}</p>
                          <ul className="mt-2">
                            {item.content.items.map((subitem: string, idx: string) => (
                              <li key={`${item.id}-${idx}`}>{subitem}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    case "image":
                      return (
                        <ArticleFigure
                          key={`${item.id}`}
                          image={item.content}
                        />
                      );
                    default:
                      return null;
                  }
                })
                // <>
                // 	{article.content.intro.flatMap(renderParagraphBlocks)}

                // 	<p>{article.content.bulletTitle}</p>
                // 	<ul className="mt-2">
                // 		{article.content.bulletItems.map((item) => (
                // 			<li key={item}>{item}</li>
                // 		))}
                // 	</ul>

                // 	<ArticleFigure image={article.articleImages[1]} title={article.title} />

                // 	{article.content.body.flatMap(renderParagraphBlocks)}

                // 	<ArticleFigure image={article.articleImages[2]} title={article.title} />

                // 	{/* Render any additional images (3, 4, 5...) */}
                // 	{article.articleImages.slice(3).map((img, idx) => (
                // 		<ArticleFigure key={idx} image={img} title={article.title} />
                // 	))}

                // 	{article.content.thankYou.flatMap(renderParagraphBlocks)}

                // 	{renderParagraphBlocks(article.content.commitment)}
                // </>
              }
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-gray-200">
              <Text as="span" size="sm" color="muted" className="font-bold text-gray-500 mr-2">
                Topics
              </Text>
              {article.hashtags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="bg-gray-100 text-gray-600 px-3 py-1.5 text-[13px] hover:bg-blue-500 hover:text-white transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </article>

          <aside className="w-full lg:w-82.5 shrink-0">
            <div className="space-y-8 lg:sticky lg:top-28 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300">
              <section className="border border-gray-200 bg-white">
                <div className="border-b border-gray-200 px-5 py-4">
                  <Text as="h3" size="md" className="block text-[12px] font-semibold text-gray-900">
                    Read more
                  </Text>
                </div>

                <div className="divide-y divide-gray-200">
                  {sidebarItems.map((item) => (
                    <BlogItemSideBar key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
