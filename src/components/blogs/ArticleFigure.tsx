import { Text } from "@/components/ui/Text";
import Image from "next/image";

export default function ArticleFigure({
  image,
  priority = false,
}: {
  image?: {
    src: string;
    alt?: string;
    caption?: string;
  };
  priority?: boolean;
}) {
  if (!image) return null;

  return (
    <figure className="not-prose my-8 first:mt-0">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
        <Image
          src={image.src}
          alt={image.alt || ""}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
      <Text
        as="figcaption"
        size="sm"
        color="secondary"
        className="mt-3 border-l-4 border-blue-500 bg-gray-50 p-4 text-[15px] italic text-gray-600"
      >
        {image.caption}
      </Text>
    </figure>
  );
}
