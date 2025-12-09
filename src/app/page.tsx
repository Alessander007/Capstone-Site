import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="border-t border-zinc-200">
        {/* Quick stats */}
        <div className="mx-auto max-w-6xl px-6 py-12 grid sm:grid-cols-3 gap-6">
          {[
            ["Target Output", "≈10 gal / 8 hr"],
            ["Condenser", "Coil design (trade study winner)"],
            ["Power Regulation", "Thermal storage / heat pump"],
          ].map(([k, v], i) => (
            <div
              key={k}
              className="rounded-2xl border border-zinc-200 p-6 shadow-sm"
            >
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                {k}
              </div>
              <div className="mt-2 text-lg">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl px-6 py-16" delay={0.05}>
        {/* What we built */}
        <h2 className="text-4xl font-semibold tracking-tight">What We Designed</h2>
        <p className="mt-4 text-lg text-zinc-700 max-w-3xl leading-relaxed">
          A reliable, low-maintenance desalination system that runs off solar
          input. The design favors simple mechanics and a continuous input–output
          distillation loop.
        </p>
        <ul className="mt-8 list-disc pl-6 space-y-3 text-zinc-700">
          <li>Continuous distillation with reservoir-assisted cooling</li>
          <li>Coil condenser selected via trade study for efficacy & manufacturability</li>
          <li>Thermal storage for stable power regulation</li>
        </ul>
      </Section>

      <Section className="border-t border-zinc-200" delay={0.1}>
        {/* How it works */}
        <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-4 gap-6">
          {[
            ["1. Intake", "Seawater enters supply reservoir."],
            ["2. Evaporate", "Flash/spray evaporation, demister control."],
            ["3. Condense", "Coil condenser rejects heat to coolant."],
            ["4. Output", "Freshwater collection at outlet."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 p-6 shadow-sm"
            >
              <div className="font-medium text-base">{title}</div>
              <div className="mt-2 text-sm text-zinc-600 leading-relaxed">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl px-6 py-16" delay={0.15}>
        {/* Deep-link CTAs */}
        <h2 className="text-4xl font-semibold tracking-tight mb-8">Dive deeper</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="/final-design"
            className="rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50 transition"
          >
            <div className="text-2xl font-semibold tracking-tight">
              Explore the Proposed Design →
            </div>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              System architecture, subsystems, and rationale.
            </p>
          </a>

          <a
            href="/results"
            className="rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50 transition"
          >
            <div className="text-2xl font-semibold tracking-tight">
              See Results & Plans →
            </div>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              Summary outcomes and future work items.
            </p>
          </a>
        </div>
      </Section>
    </>
  );
}
