import type { Metadata, ResolvingMetadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  
  const resolved = await parent;
  const images =
    resolved.openGraph?.images?.length
      ? resolved.openGraph.images
      : [{ url: "/images/brand/icon.jpg", width: 1200, height: 630 }];
  return {
    title: "News",
    description: "Luxion",
    openGraph: {
      ...(resolved.openGraph ?? {}),
      title: "News",
      description: "Luxion",
      images,
    },
    twitter: {
      ...(resolved.twitter ?? {}),
      title: "News",
      description: "Luxion",
      images: images.map((img) => (typeof img === "string" ? img : img.url)),
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
