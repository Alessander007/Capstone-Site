import Image from "next/image";

type Item = { src: string; alt: string };

export default function SponsorGrid({ items = [] as Item[] }: { items?: Item[] }) {
  // Defensive guard
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="text-sm text-zinc-500">
        No sponsors yet — add logos to <code>/public/sponsors/</code> and update the array.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center">
      {items.map((it) => (
        <div
          key={it.src}
          className="
            flex items-center justify-center
            rounded-2xl border border-zinc-200 bg-white shadow-sm
            w-72 h-44 p-4
            transition duration-300 ease-out 
            hover:shadow-lg hover:scale-[1.03] hover:opacity-95
          "
        >
          <Image
            src={it.src}
            alt={it.alt}
            width={480}
            height={240}
            className="object-contain max-h-full max-w-full"
          />
        </div>
      ))}
    </div>
  );
}
