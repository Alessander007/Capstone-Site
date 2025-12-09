import SponsorGrid from "@/components/SponsorGrid";

export const metadata = { title: "Sponsors" };

const SPONSORS = [
  { src: "/sponsors/Grove.png", alt: "Grove" },
  { src: "/sponsors/logo-sun-fresh-water.png", alt: "Sun Fresh Water" },
];

export default function Sponsors() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-center 
                     bg-gradient-to-b from-white to-zinc-50">
      <h1 className="text-4xl font-semibold tracking-tight">Sponsors</h1>

      <p className="mt-6 text-lg text-zinc-700 max-w-2xl mx-auto leading-relaxed">
        Thank you to our supporters and partners who made this project possible.
      </p>

      <div className="mt-16">
        <SponsorGrid items={SPONSORS} />
      </div>
    </main>
  );
}
