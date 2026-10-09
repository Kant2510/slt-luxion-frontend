import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// ────────────────────────────────────────────────────────────────────────────
// Quy ước font:
//   - Label button    → font-sans (Open Sans), font-semibold
//   - Icon trailing   → aria-hidden
// ────────────────────────────────────────────────────────────────────────────

type ButtonVariant = "primary" | "glass" | "outline" | "dark";
type ButtonSize = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  /** Nền xanh đặc — dùng trên nền sáng */
  primary:
    "bg-blue-600 text-white shadow-md shadow-slate-900/15 hover:bg-blue-500 hover:shadow-lg",
  /** Trong suốt / blur — dùng chồng lên ảnh / hero tối */
  glass:
    "border border-white/45 bg-white/10 text-white backdrop-blur-md hover:border-white/70 hover:bg-white/[0.18]",
  /** Viền xám — dùng trên nền trắng / sáng */
  outline:
    "border border-gray-300 text-[#1d1d1f] hover:border-[#1d1d1f] hover:bg-gray-50",
  /** Nền tối — dùng trên nền trắng, muốn tương phản mạnh */
  dark: "bg-[#1d1d1f] text-white hover:bg-[#333]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "py-2 px-4 text-[12px]",
  md: "py-2.5 px-5 text-[13px]",
  lg: "py-4 px-8 text-[15px]",
};

const BASE =
  "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 ease-out cursor-pointer select-none";

// ────────────────────────────────────────────────────────────────────────────

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Khi có href → render <Link>; khi không có → render <button> */
type ButtonProps =
  | (BaseProps &
      Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & {
        href?: undefined;
      })
  | (BaseProps & { href: string; locale?: string });

export function Button({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [BASE, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon && (
        <span className="ml-1.5" aria-hidden>
          {icon}
        </span>
      )}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, locale, ...linkRest } = rest as {
      href: string;
      locale?: string;
      [key: string]: unknown;
    };
    return (
      <Link href={href} locale={locale} className={classes} {...(linkRest as object)}>
        {content}
      </Link>
    );
  }

  const { ...btnRest } = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button className={classes} {...btnRest}>
      {content}
    </button>
  );
}
