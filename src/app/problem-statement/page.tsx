import Link from "next/link";

export const metadata = { title: "Problem & Objectives" };

const issues = [
  "Large-scale desalination dominates the industry.",
  "Infrastructure and energy demands remain high.",
  "Validated compact systems are limited.",
  "Reliable off-grid operation is still challenging.",
];

const requirements = [
  "Solar-electric power using a PV-based source.",
  "Freshwater target of 10 gallons per 8 hours.",
  "Direct resistive heating for the evaporator surface.",
  "Spray-based thin-film evaporation over a heated plate.",
  "Continuous brine drainage to prevent salt buildup.",
  "Compact, manufacturable prototype architecture.",
];

export default function Problem() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Problem definition</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Design a compact desalination system that can operate from solar power.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The project addresses the gap between large infrastructure-scale desalination and
          smaller, portable systems that can support communities, agriculture, and water-scarce regions.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Key constraints</h2>
          <ul className="mt-6 space-y-3 text-zinc-700">
            {issues.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Final design requirements</h2>
          <ul className="mt-6 space-y-3 text-zinc-300">
            {requirements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Project objective</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
          Build and evaluate a working solar-powered desalination prototype using a spray-based
          thin-film evaporator and integrated condenser, with a full-scale production target of
          10 gallons of potable water per 8-hour operating window.
        </p>
        <Link href="/final-design" className="mt-6 inline-flex rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white">
          Continue to final design
        </Link>
      </section>
    </main>
  );
}
