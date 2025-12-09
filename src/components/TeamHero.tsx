export default function TeamHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white -z-10" />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 sm:pt-20 sm:pb-10">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">Meet the Team</h1>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl text-zinc-700">
          A focused mechanical engineering group delivering a reliable, manufacturable,
          solar-powered desalination system.
        </p>
      </div>
    </section>
  );
}
