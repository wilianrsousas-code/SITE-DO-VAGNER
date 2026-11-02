import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export type MediaVariant = "portrait-hero" | "portrait-about";

interface EditorialMediaFrameProps {
  src: string;
  alt: string;
  variant: MediaVariant;
  aspectClassName?: string;
  caption?: string;
  href?: string;
}

export const EditorialMediaFrame: React.FC<EditorialMediaFrameProps> = ({
  src,
  alt,
  variant,
  aspectClassName = "aspect-[4/5]",
  caption,
  href,
}) => {
  const [imgError, setImgError] = useState(false);
  const isDarkVariant = variant === "portrait-hero";

  const frameContent = !imgError && src ? (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading={isDarkVariant ? "eager" : "lazy"}
        fetchPriority={isDarkVariant ? "high" : "auto"}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className="h-full w-full object-cover object-right-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {/* Scrim editorial suave para leitura da assinatura */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08152C]/85 via-transparent to-transparent"
        aria-hidden="true"
      />

      {caption && (
        <figcaption className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-between gap-3 px-5 py-4 text-xs text-[#FFFFFF]">
          <span className="font-medium tracking-wider">{caption}</span>
          {href && (
            <ArrowUpRight className="h-4 w-4 text-[#D4AF6A] opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          )}
        </figcaption>
      )}
    </div>
  ) : (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
      <p
        className={`font-editorial text-2xl italic ${
          isDarkVariant ? "text-[#FFFFFF]" : "text-[#0F2952]"
        }`}
      >
        {caption || alt}
      </p>
    </div>
  );

  const containerClassName = `group relative block overflow-hidden ${aspectClassName} w-full select-none ${
    isDarkVariant
      ? "bg-[#133263] border border-[#D8ECFA]/25"
      : "bg-[#EBF5FC] border border-[#1B3B6F]/15"
  }`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${caption || alt} — Clique para conversar com Vagner no WhatsApp`}
        className={`${containerClassName} cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7CC0F0]`}
      >
        {frameContent}
      </a>
    );
  }

  return <figure className={containerClassName}>{frameContent}</figure>;
};
