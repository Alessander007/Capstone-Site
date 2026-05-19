import SponsorGrid from "@/components/SponsorGrid";

export const metadata = { title: "Sponsors" };

const SPONSORS = [
  { src: "/sponsors/logo-sun-fresh-water.png", alt: "Sun Fresh Water" },
  { src: "/sponsors/Grove.png", alt: "Grove" },
];

export default function Sponsors() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Sponsors and partners</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
        Project support
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
        Thank you to the project partners and supporters who helped make the solar-powered desalination
        prototype possible.
      </p>

      <div className="mt-16">
        <SponsorGrid items={SPONSORS} />
      </div>
    </main>
  );
}
