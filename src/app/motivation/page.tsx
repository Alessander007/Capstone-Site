export const metadata = { title: "Motivation" };

const items = [
  ["Renewable energy integration", "Use solar input to reduce reliance on grid power or fuel logistics."],
  ["Compact off-grid solution", "Create a practical architecture for remote or water-scarce environments."],
  ["Simplified system design", "Favor direct solar-electric heating and simple fluid routing over complex mechanisms."],
  ["Spray thin-film validation", "Test whether a heated inclined plate and spray nozzle can improve evaporation performance."],
];

export default function Motivation() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Motivation</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          A solar-driven system has to be simple, portable, and testable.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The team focused on a system that could be fabricated, assembled, and evaluated as a
          prototype instead of stopping at a theoretical concept. That meant reducing mechanical
          complexity while keeping the evaporator and condenser physically realistic.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map(([title, text]) => (
          <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{title}</h2>
            <p className="mt-3 leading-7 text-zinc-700">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
