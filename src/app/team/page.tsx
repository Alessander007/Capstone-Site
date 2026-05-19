import TeamCard from "@/components/TeamCard";
import TeamHero from "@/components/TeamHero";

export const metadata = { title: "Team" };

type Member = {
  name: string;
  linkedin?: string;
};

const TEAM: Member[] = [
  { name: "Alessander Turcios", linkedin: "https://linkedin.com" },
  { name: "Felix Kelly-Yuoh", linkedin: "https://linkedin.com" },
  { name: "Gonca Kilavuz-Ecker", linkedin: "https://linkedin.com" },
  { name: "Jerry Ortega", linkedin: "https://linkedin.com" },
  { name: "Tasfia Kabir Pushpita", linkedin: "https://linkedin.com" },
];

export default function Team() {
  return (
    <>
      <TeamHero />

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <p className="text-lg text-zinc-700 max-w-3xl">
          Our mechanical engineering capstone team collaboratively designed,
          analyzed, and delivered a solar-powered desalination system focused on
          simplicity, manufacturability, and reliability.
        </p>

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
