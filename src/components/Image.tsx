import type { ImageProps } from "../types";

export const Image = ({
  src,
  alt,
  caption,
  captionClassName,
  className,
}: ImageProps) => {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto ${className ?? ""}`}
      />

      {caption && <figcaption className={captionClassName ?? ""}>{caption}</figcaption>}
    </figure>
  );
};
