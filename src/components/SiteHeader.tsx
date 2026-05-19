"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function SiteHeader() {
  const linkBase = "text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight text-zinc-950">
          Solar Desalination
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[360px] gap-2 p-4">
                    <NavLink href="/problem-statement" title="Problem & Objectives" desc="Need, target output, and requirements" />
                    <NavLink href="/motivation" title="Motivation" desc="Why compact off-grid desalination matters" />
                    <NavLink href="/concepts" title="Background" desc="Patent search, approach, and timeline" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Final Design</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[360px] gap-2 p-4">
                    <NavLink href="/final-design" title="System Architecture" desc="Final solar-electric system layout" />
                    <NavLink href="/final-design#power-system" title="Power System" desc="PV source and power regulation direction" />
                    <NavLink href="/final-design#evaporator" title="Evaporator" desc="Spray-based thin-film prototype" />
                    <NavLink href="/condenser" title="Condenser" desc="Trade study, CAD, simulation, and test result" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/manufacturing" className={linkBase}>Fabrication</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/results" className={linkBase}>Results</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/team" className={linkBase}>Team</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/sponsors" className={linkBase}>Sponsors</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Sheet>
          <SheetTrigger className="rounded-lg p-2 hover:bg-zinc-100 md:hidden" aria-label="Open navigation menu">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Solar Desalination</SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <div className="flex flex-col gap-3">
              <Group title="Overview" items={[
                ["Problem & Objectives", "/problem-statement"],
                ["Motivation", "/motivation"],
                ["Background", "/concepts"],
              ]} />
              <Separator />
              <Group title="Final Design" items={[
                ["System Architecture", "/final-design"],
                ["Power System", "/final-design#power-system"],
                ["Evaporator", "/final-design#evaporator"],
                ["Condenser", "/condenser"],
              ]} />
              <Separator />
              <Link className="py-1.5" href="/manufacturing">Fabrication</Link>
              <Link className="py-1.5" href="/results">Results</Link>
              <Link className="py-1.5" href="/team">Team</Link>
              <Link className="py-1.5" href="/sponsors">Sponsors</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="rounded-xl p-3 transition hover:bg-zinc-50">
      <div className="font-medium text-zinc-950">{title}</div>
      <div className="mt-1 text-xs leading-5 text-zinc-500">{desc}</div>
    </Link>
  );
}

function Group({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">{title}</div>
      <div className="flex flex-col">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="py-1.5 text-zinc-800">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
