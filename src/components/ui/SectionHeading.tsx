/**
 * Heading / SectionHeading
 * ──────────────────────────────────────────────────────
 * Font chuẩn: font-afacad (Afacad Flux) — dùng cho mọi heading và key value.
 *
 * Sizes:
 *   sm  → clamp(22px, 2.5vw, 36px)   — sub-section headings
 *   md  → clamp(28px, 3.5vw, 48px)   — section headings (mặc định)
 *   lg  → clamp(32px, 4vw, 56px)     — large section headings
 *   xl  → clamp(36px, 5vw, 72px)     — hero-scale headings
 *   2xl → clamp(44px, 8vw, 96px)     — page hero
 *
 * Color:
 *   dark  → #1d1d1f (mặc định, dùng trên nền sáng)
 *   white → text-white (dùng trên nền tối / ảnh)
 *   muted → #86868b
 *
 * Weight:
 *   bold (mặc định) | semibold
 */

import type { CSSProperties, ReactNode, HTMLAttributes } from "react";

type HeadingSize   = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type HeadingTag    = "h1" | "h2" | "h3" | "h4" | "div";
type HeadingColor  = "dark" | "white" | "muted";
type HeadingWeight = "bold" | "semibold";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement | HTMLDivElement> {
  children?: ReactNode;
  size?: HeadingSize;
  as?: HeadingTag;
  color?: HeadingColor;
  weight?: HeadingWeight;
  className?: string;
  style?: CSSProperties;
}

const SIZE_CLASSES: Record<HeadingSize, string> = {
  "xs":  "text-[clamp(18px,2.2vw,28px)]",
  "sm":  "text-[clamp(22px,2.5vw,36px)]",
  "md":  "text-[clamp(28px,3.5vw,48px)]",
  "lg":  "text-[clamp(32px,4vw,56px)]",
  "xl":  "text-[clamp(36px,5vw,72px)]",
  "2xl": "text-[clamp(44px,8vw,96px)]",
};

const COLOR_CLASSES: Record<HeadingColor, string> = {
  dark:  "text-[#1d1d1f]",
  white: "text-white",
  muted: "text-[#86868b]",
};

const WEIGHT_CLASSES: Record<HeadingWeight, string> = {
  bold:     "font-bold",
  semibold: "font-semibold",
};

export function Heading({
  children,
  size = "md",
  as: Tag = "h2",
  color = "dark",
  weight = "bold",
  className = "",
  style,
  ...rest
}: HeadingProps) {
  return (
    <Tag
      className={[
        "font-afacad leading-[1.05] tracking-tight",
        SIZE_CLASSES[size],
        COLOR_CLASSES[color],
        WEIGHT_CLASSES[weight],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      {...rest as any}
    >
      {children}
    </Tag>
  );
}

/** Alias cho backward compat */
export { Heading as SectionHeading };
