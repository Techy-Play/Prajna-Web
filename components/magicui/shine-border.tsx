"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export function ShineBorder({
  className,
  children,
}: ShineBorderProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent",
        "animate-text-shine",
        "[text-shadow:-2px_-2px_0_#A855F7,2px_-2px_0_#EC4899,-2px_2px_0_#3B82F6,2px_2px_0_#8B5CF6]",
        className
      )}
    >
      {children}
    </span>
  );
}
