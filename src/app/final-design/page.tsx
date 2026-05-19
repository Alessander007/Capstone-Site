import Image from "next/image";
import Figure from "@/components/Figure";

export const metadata = { title: "Final System Architecture" };

const challenges = [
  "Managing energy input within solar power limits.",
  "Reducing thermal losses in the evaporator and condenser path.",
  "Balancing prototype scale against full-scale production performance.",
];

const components = [
  "Copper heating plate and electric heating element.",
  "Copper tubing for condenser heat exchange.",
  "Diaphragm pump, feedwater routing, and fittings.",
  "Steel enclosure for subsystem integration.",
];

const subsystemCards = [
  ["Power", "Photovoltaic input with power regulation still requiring further development."],
  ["Flow control", "Pump and fittings route feedwater through the evaporator and condenser system."],
  ["Evaporation", "Spray nozzle applies water to an inclined heated copper plate for thin-film evaporation."],
  ["Condensation", "Copper coil and steel baffles cool steam and route distillate to collection."],
];

export default function FinalDesign() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Final design</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Finalized solar-electric architecture with integrated evaporation and condensation.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The final system uses simplified solar-electric heating, a spray-based thin-film evaporator,
          continuous brine drainage, and an integrated condenser path to recover freshwater distillate.
        </p>
      </section>

      <Figure
        src="/final/system-architecture.png"
        alt="Final solar-powered desalination system architecture"
        caption="Final architecture: solar panels feed power regulation, the evaporator creates steam from spray over a heated inclined plate, brine drains downward, and steam routes through the condenser to distillate collection."
        width={857}
        height={506}
      />

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Key engineering challenges</h2>
          <ul className="mt-6 space-y-3 text-zinc-700">
            {challenges.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">System components and materials</h2>
          <ul className="mt-6 space-y-3 text-zinc-700">
            {components.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Subsystem overview</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">Four areas controlled the final prototype.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {subsystemCards.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="power-system" className="mt-20 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Power system</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">PV source with power regulation still under development.</h2>
            <p className="mt-5 leading-8 text-zinc-700">
              The final presentation identifies a photovoltaic power source and a Stirling engine/heat-pump
              regulation direction. In the weighted decision matrix, the heat-pump direction scored 40 compared
              with 35 for the battery option, but the power subsystem requires more development before full system deployment.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
            <Image
              src="/final/power-cad.png"
              alt="Power regulation CAD concept"
              width={702}
              height={416}
              className="h-auto w-full rounded-2xl bg-white"
            />
          </div>
        </div>
      </section>

      <section id="evaporator" className="mt-20 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
            <Image
              src="/final/evaporator-diagram.png"
              alt="Evaporator diagram showing spray nozzle, copper plate, steam, and brine drainage"
              width={478}
              height={504}
              className="h-auto w-full rounded-2xl bg-white"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Evaporator</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">Spray-based thin-film evaporation over a heated copper plate.</h2>
            <p className="mt-5 leading-8 text-zinc-700">
              The evaporator uses a spray nozzle to distribute feedwater across an inclined copper plate
              attached to an electric heating element. Steam exits upward, while brine waste drains downward
              so salt-rich water does not remain on the plate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
