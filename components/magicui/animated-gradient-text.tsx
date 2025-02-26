import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  variant?: "small" | "large";
}

export function AnimatedGradientText({
  children,
  className,
  variant = "small",
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block",
        variant === "small" && "text-sm font-medium",
        variant === "large" && "text-4xl font-bold sm:text-5xl md:text-6xl",
        "bg-gradient-to-r bg-clip-text text-transparent",
        "animate-text-gradient",
        "bg-[size:400%_auto]",
        "leading-tight py-[0.1em] px-[0.01em]",
        "overflow-visible",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(to right, #9333ea, #ec4899, #818cf8, #9333ea)",
      }}
      {...props}
    > 
      {children}
    </span>
  );
}
