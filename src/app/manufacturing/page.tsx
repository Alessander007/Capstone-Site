import Figure from "@/components/Figure";

export const metadata = { title: "Fabrication" };

const buildNotes = [
  "Heating element bonded to a copper plate for direct resistive heat transfer.",
  "Retaining hooks added to hold the heating element in position during operation.",
  "Spray nozzle installed through the evaporator enclosure to distribute feedwater over the heated plate.",
  "Condenser enclosure fabricated with copper coil routing and internal steel baffles.",
];

export default function Manufacturing() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Fabrication</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Prototype fabrication translated the thermal-fluid design into physical hardware.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          The final build centered on two major fabricated subsystems: the evaporator, which controls
          heating and spray distribution, and the condenser, which routes steam through a copper coil
          for liquid recovery.
        </p>
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Build notes</h2>
        <ul className="mt-6 grid gap-3 text-zinc-700 md:grid-cols-2">
          {buildNotes.map((note) => (
            <li key={note} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Evaporator fabrication</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">Heating, retention, and spray distribution.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          <Figure
            src="/final/adhesive-application.png"
            alt="Adhesive application for evaporator heating element"
            caption="Adhesive application."
            width={171}
            height={122}
            className="mt-0"
          />
          <Figure
            src="/final/heating-element-hooks.png"
            alt="Heating element and retaining hooks on copper plate"
            caption="Heating element with retaining hooks."
            width={471}
            height={354}
            className="mt-0"
          />
          <Figure
            src="/final/evaporator-enclosure.png"
            alt="Evaporator enclosure with copper plate and spray nozzle opening"
            caption="Evaporator enclosure."
            width={429}
            height={322}
            className="mt-0"
          />
          <Figure
            src="/final/spray-nozzle-photo.png"
            alt="Spray nozzle installed through evaporator wall"
            caption="Spray nozzle detail."
            width={322}
            height={241}
            className="mt-0"
          />
        </div>
      </section>

      <section className="mt-16">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Condenser fabrication</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">CAD, machining, and assembled copper coil prototype.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Figure
            src="/final/condenser-cad.png"
            alt="Condenser CAD model"
            caption="Condenser CAD design."
            width={677}
            height={570}
            className="mt-0"
          />
          <Figure
            src="/final/condenser-machining.png"
            alt="Condenser fabrication on machine"
            caption="Fabrication process."
            width={638}
            height={734}
            className="mt-0"
          />
          <Figure
            src="/final/condenser-prototype.png"
            alt="Assembled condenser prototype with copper coil and baffles"
            caption="Assembled condenser prototype."
            width={400}
            height={389}
            className="mt-0"
          />
        </div>
      </section>
    </main>
  );
}
