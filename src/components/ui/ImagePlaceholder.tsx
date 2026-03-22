"use client";

import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  icon?: React.ReactNode;
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
};

export default function ImagePlaceholder({
  alt,
  className,
  aspectRatio = "video",
  icon,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center",
        aspectClasses[aspectRatio],
        className
      )}
      role="img"
      aria-label={alt}
    >
      {icon || <ImageIcon size={40} className="text-primary/30" />}
      <span className="text-xs text-primary/40 mt-2 px-4 text-center">
        {alt}
      </span>
    </div>
  );
}
