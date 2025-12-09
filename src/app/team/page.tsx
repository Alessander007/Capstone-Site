import TeamCard from "@/components/TeamCard";
import TeamHero from "@/components/TeamHero";

export const dynamic = "force-dynamic";
export const metadata = { title: "Team" };

// -------------------------------
// Team Members
// -------------------------------
type Member = { name: string; linkedin?: string };

const TEAM: Member[] = [
  { name: "Alessander Turcios", linkedin: "https://linkedin.com" },
  { name: "Felix Kelly-Yuoh", linkedin: "https://linkedin.com" },
  { name: "Gonca Kilavuz-Ecker", linkedin: "https://linkedin.com" },
  { name: "Jerry Ortega", linkedin: "https://linkedin.com" },
  { name: "Tasfia Kabir Pushpita", linkedin: "https://linkedin.com" },
];

// -------------------------------
// Utility: fair shuffle
// -------------------------------
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// -------------------------------
// 
// (slight weight for primary contributor, not forced)
// -------------------------------
function generateDisplayOrder(team: Member[]): Member[] {
  const primary = team.find((m) => m.name === "Alessander Turcios");
  const others = team.filter((m) => m.name !== "Alessander Turcios");

  const mixed = shuffleArray(others);

  if (!primary) return mixed;

  // 
  const appearEarly = Math.random() < 0.9;

  if (appearEarly) {
    return [primary, ...mixed];
  } else {
    const idx = Math.floor(Math.random() * (mixed.length + 1));
    mixed.splice(idx, 0, primary);
    return mixed;
  }
}

export default function Team() {
  const ORDERED = generateDisplayOrder(TEAM);

  return (
    <>
      <TeamHero />

      <main className="mx-auto max-w-6xl px-6 pb-20">
        {/* <p className="text-lg text-zinc-700 max-w-3xl">
          Our mechanical engineering capstone team collaboratively designed,
          analyzed, and delivered a solar-powered desalination system focused on
          simplicity, manufacturability, and reliability.
        </p> */}

        {/* Perfectly centered card layout */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {ORDERED.map((member) => (
            <div key={member.name} className="w-[340px]">
              <TeamCard name={member.name} linkedin={member.linkedin} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
