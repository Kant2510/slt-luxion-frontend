import { Text } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link"


export interface BlogItem {
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

interface BlogItemSideBarProps {
  item: BlogItem;
}

export default function BlogItemSideBar({ item }: BlogItemSideBarProps) {
  return <Link
    key={item.id}
    href={item.href}
    target={item.external ? "_blank" : undefined}
    rel={item.external ? "noopener noreferrer" : undefined}
    className="group flex gap-4 p-4 transition-colors hover:bg-gray-50"
  >
    <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-gray-100">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="96px"
      />
    </div>

    <div className="min-w-0 flex-1 flex flex-col">
      <Text
        as="span"
        size="xs"
        className="mb-1 block font-afacad text-[11px] font-semibold tracking-wide text-blue-600"
      >
        {item.label}
      </Text>
      <h3 className="mb-1 text-[13px] font-semibold leading-5 text-gray-900 transition-colors group-hover:text-blue-600">
        {item.title}
      </h3>
      <Text
        size="xs"
        color="muted"
        className="mb-2 line-clamp-2 text-[12px] leading-5 text-gray-600"
      >
        {item.description}
      </Text>
      <Text
        as="span"
        size="xs"
        color="muted"
        className="mt-auto block text-right text-gray-500"
      >
        {item.meta}
      </Text>
    </div>
  </Link>
}
