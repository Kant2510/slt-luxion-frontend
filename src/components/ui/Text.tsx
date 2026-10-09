/**
 * Text
 * ──────────────────────────────────────────────────────
 * Component chuẩn cho body text, subtext, description.
 * Font: font-sans (Open Sans) — quy ước toàn site.
 *
 * Size:
 *   xs  → text-[12px]            — meta, caption
 *   sm  → text-[13px] / text-sm  — footnote, helper
 *   md  → text-[15px]            — body mặc định
 *   lg  → text-[17px]            — lead paragraph
 *   xl  → text-[20px]            — large body
 *
 * Color:
 *   primary   → #1d1d1f  (mặc định)
 *   secondary → #555555
 *   muted     → #86868b
 *   white     → text-white (trên nền tối)
 *
 * Leading (line-height):
 *   normal  → leading-normal
 *   relaxed → leading-relaxed (mặc định)
 *   loose   → leading-loose
 */

import type { CSSProperties, ElementType, ReactNode, HTMLAttributes } from "react";

type TextSize    = "xs" | "sm" | "md" | "lg" | "xl";
type TextColor   = "primary" | "secondary" | "muted" | "white";
type TextLeading = "normal" | "relaxed" | "loose";

interface TextProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  as?: ElementType;
  size?: TextSize;
  color?: TextColor;
  leading?: TextLeading;
  className?: string;
  style?: CSSProperties;
}

const SIZE_CLASSES: Record<TextSize, string> = {
  xs: "text-[12px]",
  sm: "text-[13px]",
  md: "text-[15px]",
  lg: "text-[17px]",
  xl: "text-[20px]",
};

const COLOR_CLASSES: Record<TextColor, string> = {
  primary:   "text-[#1d1d1f]",
  secondary: "text-[#555555]",
  muted:     "text-[#86868b]",
  white:     "text-white",
};

const LEADING_CLASSES: Record<TextLeading, string> = {
  normal:  "leading-normal",
  relaxed: "leading-relaxed",
  loose:   "leading-loose",
};

export function Text({
  children,
  as: Tag = "p",
  size = "md",
  color = "secondary",
  leading = "relaxed",
  className = "",
  style,
  ...rest
}: TextProps) {
  return (
    <Tag
      className={[
        "font-sans",
        SIZE_CLASSES[size],
        COLOR_CLASSES[color],
        LEADING_CLASSES[leading],
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
