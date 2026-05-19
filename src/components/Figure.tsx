import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  className = "",
}: FigureProps) {
  return (
    <figure className={`mt-8 ${className}`}>
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full rounded-2xl bg-white"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-zinc-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
