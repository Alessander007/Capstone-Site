import Link from "next/link";
import Figure from "@/components/Figure";

export const metadata = { title: "Results" };

const evaporatorTrials = [
  ["40° plate angle", "Trial 1", "56%"],
  ["20° plate angle", "Trial 2", "82%"],
  ["20° plate angle", "Trial 3", "77%"],
  ["20° plate angle", "Trial 4", "81%"],
];

const conclusions = [
  "Design alternatives were evaluated and narrowed into a final system architecture.",
  "Evaporator and condenser prototypes were designed, fabricated, and tested.",
  "Evaporator testing showed improved performance at the reduced 20° plate angle.",
  "The condenser collected 68 g of distillate from 107 g of water input, but sealing and leak testing remain necessary.",
  "The photovoltaic panel area requirement was estimated for the full system target.",
];

const future = [
  "Improve insulation to reduce heat loss.",
  "Optimize spray distribution across the copper plate.",
  "Refine custom condenser and evaporator enclosures.",
  "Design a custom heating element for better integration.",
  "Complete the full power system design.",
];

export default function Results() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Results</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Prototype testing validated the main design direction and exposed the next refinements.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The final prototype results show strong evaporator performance after plate-angle adjustment and
          measurable condenser distillate output. The remaining work is mostly sealing, thermal loss control,
          spray uniformity, and power integration.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Evaporator prototype performance</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-xs uppercase tracking-[0.16em] text-zinc-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Configuration</th>
                  <th className="px-4 py-3 font-medium">Trial</th>
                  <th className="px-4 py-3 font-medium">Efficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                {evaporatorTrials.map(([angle, trial, efficiency]) => (
                  <tr key={`${angle}-${trial}`}>
                    <td className="px-4 py-3">{angle}</td>
                    <td className="px-4 py-3">{trial}</td>
                    <td className="px-4 py-3 font-semibold text-zinc-950">{efficiency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 leading-7 text-zinc-700">
            The 20° configuration produced repeatable efficiencies from 77% to 82%, compared with 56% in the 40° trial.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Condenser prototype performance</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Metric value="107 g" label="water input" />
            <Metric value="68 g" label="distillate output" />
          </div>
          <p className="mt-6 leading-7 text-zinc-300">
            The condenser produced visible distillate, but the test also showed the need for improved sealing and additional leak testing.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        <Figure
          src="/final/condenser-test-setup.png"
          alt="Condenser prototype test setup"
          caption="Prototype test setup."
          width={450}
          height={338}
          className="mt-0"
        />
        <Figure
          src="/final/distillate-output.png"
          alt="Collected distillate output"
          caption="Collected distillate output."
          width={239}
          height={241}
          className="mt-0"
        />
        <Figure
          src="/final/condenser-test-detail.png"
          alt="Condenser test detail"
          caption="Condenser test detail."
          width={338}
          height={225}
          className="mt-0"
        />
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Summary and conclusions</h2>
          <ul className="mt-6 space-y-3 text-zinc-700">
            {conclusions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Future improvements</h2>
          <ul className="mt-6 space-y-3 text-zinc-700">
            {future.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Next design move</h2>
            <p className="mt-3 leading-7 text-zinc-700">
              Prioritize sealing and insulation first, then tune spray distribution and power integration.
              Those steps directly address the largest prototype-to-system gaps.
            </p>
          </div>
          <Link href="/manufacturing" className="rounded-2xl bg-zinc-950 px-5 py-3 text-center text-sm font-medium text-white">
            View fabrication
          </Link>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-zinc-300">{label}</div>
    </div>
  );
}
