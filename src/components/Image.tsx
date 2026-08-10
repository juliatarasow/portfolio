import type { ImageProps } from "../types";

export const Image = ({ src, alt, caption, className }: ImageProps) => {
  return (
    <div>
      <img src={src} 
      alt={alt} 
      className="" />
      <p>
        {caption}
      </p>
    </div>
  );
};
