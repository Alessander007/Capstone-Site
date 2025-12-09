import Image from "next/image";

type FigureProps = {
  src: string;         // e.g., "/images/slide-13-assembly.webp"
  alt: string;         // accessibility text
  caption?: string;    // optional caption under image
  width?: number;      // intrinsic image width
  height?: number;     // intrinsic image height
};

export default function Figure({
  src,
  alt,
  caption,
  width = 1600,
  height = 900,
}: FigureProps) {
  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-2xl border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          priority={false}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-zinc-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
