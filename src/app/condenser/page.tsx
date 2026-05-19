import Figure from "@/components/Figure";

export const metadata = { title: "Condenser" };

const tradeStudy = [
  ["Repeated panels", "47", "Simple concept, but lower overall ranking."],
  ["Coil", "61", "Selected option with strongest combined score."],
  ["Peltier coolers", "38", "Compact, but weaker on power and cost."],
];

const details = [
  "Copper tubing forms the main condensation path.",
  "Steel baffles guide cooling flow and improve residence time around the coil.",
  "Feedwater and distillate routing are integrated near the pump and outlet region.",
  "Flow simulation helped visualize condenser behavior before fabrication.",
];

export default function Condenser() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Condenser</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Coil condenser selected through trade study, CAD, simulation, and prototype testing.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The condenser converts evaporator steam back into liquid distillate. The team compared repeated panels,
          a coil design, and Peltier cooling before selecting the coil condenser as the best final direction.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="grid gap-4">
          {tradeStudy.map(([name, score, note]) => (
            <div key={name} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">{name}</h2>
                <div className="text-3xl font-semibold text-blue-700">{score}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{note}</p>
            </div>
          ))}
        </div>

        <Figure
          src="/final/condenser-alternatives.png"
          alt="Condenser design alternatives"
          caption="Condenser alternatives considered: repeated panels, coil, and Peltier coolers."
          width={457}
          height={223}
          className="mt-0"
        />
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <Figure
          src="/final/condenser-trade-matrix.png"
          alt="Condenser trade study matrix"
          caption="Weighted decision matrix where the coil condenser achieved the highest score."
          width={862}
          height={618}
          className="mt-0"
        />
        <Figure
          src="/final/condenser-flow-simulation.png"
          alt="Flow simulation of the coil condenser"
          caption="Flow simulation used to evaluate cooling behavior through the condenser coil region."
          width={489}
          height={499}
          className="mt-0"
        />
      </section>

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Final condenser features</h2>
        <ul className="mt-6 grid gap-3 text-zinc-700 md:grid-cols-2">
          {details.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        <Figure
          src="/final/condenser-cad.png"
          alt="Condenser CAD design"
          caption="CAD design."
          width={677}
          height={570}
          className="mt-0"
        />
        <Figure
          src="/final/condenser-machining.png"
          alt="Condenser fabrication on machine"
          caption="Fabrication step."
          width={638}
          height={734}
          className="mt-0"
        />
        <Figure
          src="/final/condenser-prototype.png"
          alt="Final condenser prototype"
          caption="Assembled prototype with copper tubing and baffles."
          width={400}
          height={389}
          className="mt-0"
        />
      </section>
    </main>
  );
}
