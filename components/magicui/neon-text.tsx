"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface NeonTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function NeonText({
  className,
  children,
  as: Component = "span",
  ...props
}: NeonTextProps) {
  return (
    <Component
      className={cn(
        "relative inline-block",
        "text-purple-400",
        "[text-shadow:_0_0_10px_rgb(168_85_247_/_1),_0_0_20px_rgb(168_85_247_/_1),_0_0_40px_rgb(168_85_247_/_1),_0_0_60px_rgb(168_85_247_/_0.5)]",
        "after:absolute after:inset-0 after:z-[-1]",
        "after:block after:content-[attr(data-text)]",
        "after:text-purple-400",
        "after:blur-[25px]",
        "after:[text-shadow:_0_0_40px_rgb(168_85_247_/_1)]",
        className
      )}
      data-text={children?.toString()}
      {...props}
    >
      {children}
    </Component>
  );
} 