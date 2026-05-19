import TeamCard from "@/components/TeamCard";
import TeamHero from "@/components/TeamHero";

export const metadata = { title: "Team" };

type Member = { name: string; role?: string; linkedin?: string };

const TEAM: Member[] = [
  { name: "Felix Kelly-Yuoh" },
  { name: "Gonca Kılavuz-Ecker" },
  { name: "Jerry Ortega" },
  { name: "Tasfia Kabir Pushpita" },
  { name: "Alessander Turcios" },
];

export default function Team() {
  return (
    <>
      <TeamHero />
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center shadow-sm">
          <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-700">
            The project was completed for ME 474 Senior Design in collaboration with
            Sun Fresh Water, LLC and The City College of New York engineering center.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="w-[340px]">
              <TeamCard name={member.name} linkedin={member.linkedin} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
