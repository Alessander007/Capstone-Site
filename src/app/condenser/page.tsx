export const metadata = { title: "Condenser" };

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl font-semibold tracking-tight">{children}</h2>;
}

export default function Condenser() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Condenser</h1>
      <p className="mt-6 text-lg text-zinc-700">
        We compared repeated panels, coil, and Peltier options. The coil ranked highest across efficacy,
        reliability, manufacturability, and power.
      </p>

      <H2>Trade Study</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li>Coil selected based on scoring across performance, reliability, manufacturability, and power.</li>
      </ul>

      <H2>Key Analyses</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li><strong>Length:</strong> ≈5 ft (≈1.5 m) tubing; ~16:1 coolant:condensate.</li>
        <li><strong>Flow:</strong> gravity-dominated; minor pressure drop; local eddies near corners.</li>
        <li><strong>Stress:</strong> concentrations near inlet/outlet; within safe limits; repeating geometry distributes loads.</li>
      </ul>

      <H2>Open Items / Next Inserts</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li>Insert trade study table (slide 21)</li>
        <li>Insert condenser length chart (slide 22)</li>
        <li>Insert flow & stress visuals (slides 23–25)</li>
      </ul>
    </main>
  );
}
