import Figure from "@/components/Figure";

export const metadata = { title: "Background" };

const approach = [
  "Solar-electric distillation system.",
  "Superheated surface implementation.",
  "Spray-based thin-film evaporation.",
  "Feedwater preheating and condenser heat recovery.",
  "Prototype fabrication and validation.",
];

export default function Concepts() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Background</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          The final concept combines prior art, trade studies, and hands-on prototype testing.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The design direction was shaped by patent review, a phased project timeline, and a practical
          need to turn the concept into a manufacturable thermal-fluid system.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Patent review</h2>
          <div className="mt-6 space-y-5 text-zinc-700">
            <div>
              <div className="font-semibold text-zinc-950">KR101811394B1</div>
              <p className="mt-1">Minsu Kim, patent date 12/2017.</p>
            </div>
            <div>
              <div className="font-semibold text-zinc-950">US4974422</div>
              <p className="mt-1">E. Kocher, patent date 12/04/1990.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Engineering approach</h2>
          <ul className="mt-6 space-y-3 text-zinc-700">
            {approach.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Figure
        src="/final/project-timeline.png"
        alt="Project timeline from Fall 2025 through Spring 2026"
        caption="Project timeline showing the progression from topic selection and research to analysis, fabrication, testing, and final presentation."
        width={1680}
        height={809}
      />
    </main>
  );
}
