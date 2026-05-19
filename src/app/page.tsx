import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const stats = [
  ["Target Output", "10 gal / 8 hr", "design production target"],
  ["Evaporator Peak", "82%", "best measured prototype efficiency"],
  ["Condenser Output", "68 g", "distillate collected from 107 g input"],
];

const workflow = [
  ["1. Solar-electric input", "Photovoltaic power feeds regulation and direct resistive heating."],
  ["2. Spray evaporation", "Feedwater is distributed over an inclined heated copper plate as a thin film."],
  ["3. Brine drainage", "Unevaporated saline water drains continuously from the evaporator."],
  ["4. Coil condensation", "Steam is routed through a copper coil condenser and collected as distillate."],
];

const subsystems = [
  {
    title: "Power system",
    text: "PV-based source with heat-pump/Stirling power regulation identified as the higher-scoring direction, with further development required.",
    href: "/final-design#power-system",
  },
  {
    title: "Evaporator",
    text: "Inclined copper heating plate, attached electric element, spray nozzle, retaining hooks, and brine drainage path.",
    href: "/final-design#evaporator",
  },
  {
    title: "Condenser",
    text: "Coil condenser selected over repeated panels and Peltier coolers for manufacturability, efficacy, reliability, and power use.",
    href: "/condenser",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-3">
          {stats.map(([label, value, detail]) => (
            <div key={label} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">{label}</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">{value}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-600">{detail}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl px-6 py-20" delay={0.05}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Final system</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">
              From concept to integrated prototype.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              The final architecture simplifies the system around solar-electric heating,
              thin-film evaporation, and condenser heat recovery. The design focuses on compactness,
              manufacturability, and off-grid operation.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
            <Image
              src="/final/system-architecture.png"
              alt="Finalized system architecture diagram"
              width={857}
              height={506}
              className="h-auto w-full rounded-[1.4rem] bg-white"
            />
          </div>
        </div>
      </Section>

      <Section className="border-y border-zinc-200 bg-zinc-50" delay={0.1}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Process flow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">How the final design works</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-base font-semibold tracking-tight text-zinc-950">{title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mx-auto max-w-6xl px-6 py-20" delay={0.15}>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Subsystems</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">Final prototype breakdown</h2>
          </div>
          <Link href="/final-design" className="text-sm font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-950">
            Full design details
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {subsystems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</div>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{item.text}</p>
              <div className="mt-6 text-sm font-medium text-blue-700 group-hover:text-blue-900">Explore →</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-zinc-200 bg-zinc-950 text-white" delay={0.2}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-300">Validation</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Prototype testing showed the design direction is viable.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              The evaporator improved substantially after reducing plate angle from 40° to 20°.
              The condenser collected measurable distillate, while leak sealing and enclosure refinement
              remain the main next steps.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/results" className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-950">
                Results summary
              </Link>
              <Link href="/manufacturing" className="rounded-2xl border border-white/25 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                Build photos
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ImageCard src="/final/heating-element-hooks.png" alt="Heating element retaining hooks on copper plate" label="Evaporator fabrication" />
            <ImageCard src="/final/condenser-prototype.png" alt="Copper coil condenser prototype" label="Condenser prototype" />
            <ImageCard src="/final/condenser-flow-simulation.png" alt="Flow simulation of coil condenser" label="Flow simulation" />
            <ImageCard src="/final/distillate-output.png" alt="Collected distillate from condenser prototype" label="Distillate output" />
          </div>
        </div>
      </Section>
    </>
  );
}

function ImageCard({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
      <Image src={src} alt={alt} width={700} height={520} className="aspect-[4/3] w-full rounded-2xl object-cover" />
      <div className="px-2 py-3 text-sm text-zinc-300">{label}</div>
    </div>
  );
}
