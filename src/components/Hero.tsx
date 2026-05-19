import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe_0,transparent_34%),linear-gradient(to_bottom,#f8fafc,white)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-blue-700">
            ME 474 Senior Design Final Project
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Solar-Powered Desalination System Design
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
            A compact solar-electric distillation prototype using a spray-based thin-film
            evaporator, direct resistive heating, continuous brine drainage, and an integrated
            coil condenser for freshwater recovery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/final-design"
              className="rounded-2xl bg-zinc-950 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              View final architecture
            </Link>
            <Link
              href="/results"
              className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              See prototype results
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-4 shadow-xl shadow-zinc-200/70 backdrop-blur">
          <Image
            src="/final/system-architecture.png"
            alt="Final solar-powered desalination system architecture"
            width={857}
            height={506}
            priority
            className="h-auto w-full rounded-[1.35rem]"
          />
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-2xl bg-zinc-50 p-3">
              <div className="font-semibold text-zinc-950">PV</div>
              <div className="mt-1 text-xs text-zinc-500">solar input</div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-3">
              <div className="font-semibold text-zinc-950">Thin-film</div>
              <div className="mt-1 text-xs text-zinc-500">evaporation</div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-3">
              <div className="font-semibold text-zinc-950">Coil</div>
              <div className="mt-1 text-xs text-zinc-500">condensation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
