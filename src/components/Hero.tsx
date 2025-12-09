import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white -z-10" />
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        {/* bigger, premium headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
          Solar-Powered Desalination Tower
        </h1>

        {/* slightly larger subhead for gravitas */}
        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-zinc-700">
          Continuous distillation producing ~10 gallons of freshwater every 8 hours,
          regulated by thermal storage with low mechanical complexity.
        </p>

        <div className="mt-8 flex gap-3">
          <Link href="/final-design" className="rounded-2xl px-5 py-3 bg-black text-white">
            Proposed Design
          </Link>
          <Link href="/results" className="rounded-2xl px-5 py-3 border">
            Results
          </Link>
        </div>
      </div>
    </section>
  );
}
