import Image from "next/image";

export const metadata = { title: "Phase I: Proposed Design (Fall 2025)" };

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl font-semibold tracking-tight">{children}</h2>;
}

export default function FinalDesign() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Phase I: Proposed Design (Fall 2025)</h1>

      <p className="mt-6 text-lg text-zinc-700">
        Solar-driven continuous distillation with a coil condenser and thermal storage for
        power regulation, prioritizing reliability and low mechanical complexity.
      </p>

      {/* --- System Architecture --- */}
      <H2>System Architecture</H2>
      <p className="mt-3 text-zinc-700">
        Reservoir → Evaporator (flash/spray) → Demister → Coil Condenser → Freshwater outlet.
      </p>

      {/* CAD Assembly Image */}
      {/* <div className="mt-6">
        <Image
          src="/cad-assembly.png"
          alt="CAD Assembly"
          width={500}
          height={500}
          className="rounded-lg border shadow-sm"
        />
        <p className="text-sm text-zinc-500 mt-2">Figure: Full system CAD assembly (Slide 13)</p>
      </div> */}

      {/* --- Subsystems --- */}
      <H2>Subsystems</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li>
          <strong>Power Regulation:</strong> thermal storage / heat-pump concept for stable output.
        </li>
        <li>
          <strong>Evaporator:</strong> flash + spray evaporation with demister; controlled wall superheat.
        </li>
        <li>
          <strong>Nozzle:</strong> flat-fan (~77°), vertical orientation to avoid spray/steam interference.
        </li>
        <li>
          <strong>Condenser:</strong> coil selected via trade study for efficacy, reliability, manufacturability.
        </li>
      </ul>

      {/* Heat Regulation Diagram */}
      <div className="mt-6">
        {/* <Image
          src="/images/heat-regulation.png"
          alt="Heat Regulation Diagram"
          width={1400}
          height={900}
          className="rounded-lg border shadow-sm"
        /> */}
        <p className="text-sm text-zinc-500 mt-2">Figure: Heat regulation / thermal storage schematic (Slide 14)</p>
      </div>

      {/* --- Rationale --- */}
      <H2>Design Rationale</H2>
      <p className="mt-3 text-zinc-700">
        Minimize moving parts, simplify control, and leverage solar input for low-operator-burden reliability.
      </p>

      {/* Evaporator Internals + Nozzle Figure */}
      <div className="mt-6">
        {/* <Image
          src="/images/evaporator.png"
          alt="Evaporator Internals & Nozzle"
          width={1400}
          height={900}
          className="rounded-lg border shadow-sm"
        /> */}
        <p className="text-sm text-zinc-500 mt-2">
          Figure: Evaporator internals + atomizing nozzle (Slides 18–20)
        </p>
      </div>

    </main>
  );
}
