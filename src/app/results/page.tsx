export const metadata = { title: "Results" };

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl font-semibold tracking-tight">{children}</h2>;
}

export default function Results() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Results</h1>

      <H2>Summary</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li>Continuous solar-powered desalination architecture defined.</li>
        <li>Thermal storage selected for robust power regulation.</li>
        <li>Coil condenser chosen via trade study; analyses support selection.</li>
        <li>Structural checks show safe stress concentrations.</li>
      </ul>

      <H2>Future Plans</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li>Testing</li>
        <li>Optimization</li>
        <li>Prototype</li>
      </ul>

      <H2>Open Items / Next Inserts</H2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-zinc-700">
        <li>Insert summary figure (slide 27)</li>
        <li>Insert “Future Plans” visual (slide 29)</li>
      </ul>
    </main>
  );
}
