export const metadata = { title: "Concepts" };

export default function Concepts() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Core Concepts</h1>
      <ul className="mt-6 list-disc pl-6 space-y-2">
        <li>Reduce dependence on complex mechanical parts.</li>
        <li>Create a simple, continuous desalination loop.</li>
        <li>Utilize solar energy as the primary input.</li>
      </ul>
      <h2 className="mt-10 text-xl font-semibold">Distillation Cycle</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        <li>Reservoir supply used as coolant; optional preheating variant.</li>
      </ul>
    </main>
  );
}
