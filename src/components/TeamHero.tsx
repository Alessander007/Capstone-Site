export default function TeamHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe_0,transparent_35%),linear-gradient(to_bottom,#f8fafc,white)]" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-700">Project team</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
          Solar Desalination Team
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700 sm:text-xl">
          A mechanical engineering senior design group focused on a compact, manufacturable,
          solar-powered desalination prototype.
        </p>
      </div>
    </section>
  );
}
