export const metadata = { title: "Motivation" };

export default function Motivation() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Motivation</h1>
      <p className="mt-6 text-lg text-zinc-700">
        Global need for clean water persists, and many remote areas lack reliable desalination.
        Solar energy offers a sustainable, low-cost pathway for off-grid freshwater production.
      </p>
      <ul className="mt-6 list-disc pl-6 space-y-2">
        <li>Addresses reliability gaps in remote regions.</li>
        <li>Leverages abundant solar resource; reduces operational costs.</li>
        <li>Targets low maintenance via simplified mechanics.</li>
      </ul>
    </main>
  );
}
