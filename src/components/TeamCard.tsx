import Link from "next/link";
import { Linkedin } from "lucide-react";

type Props = {
  name: string;
  linkedin?: string;
};

export default function TeamCard({ name, linkedin }: Props) {
  return (
    <div
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200
                 flex flex-col items-center text-center"
    >
      <div className="text-lg font-semibold tracking-tight">{name}</div>

      {linkedin ? (
        <Link
          href={linkedin}
          target="_blank"
          className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
        >
          <Linkedin size={16} />
          LinkedIn
        </Link>
      ) : null}
    </div>
  );
}
