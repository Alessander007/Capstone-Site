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
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const linkBase = "text-sm text-zinc-700 hover:text-black transition-colors dark:text-zinc-300 dark:hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-medium">Solar Desalination</Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-[340px]">
                    <NavLink href="/motivation" title="Motivation" desc="Why this matters" />
                    <NavLink href="/problem-statement" title="Problem" desc="The challenge we address" />
                    <NavLink href="/concepts" title="Concepts" desc="Key ideas & tradeoffs" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Design</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-2 p-4 w-[340px]">
                    <NavLink href="/final-design" title="Final Design" desc="System architecture & CAD" />
                    <NavLink href="/manufacturing" title="Manufacturing" desc="Build notes & BOM" />
                    <NavLink href="/condenser" title="Condenser" desc="Trade study & analysis" />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

          {/* Results */}
<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/results" className={linkBase}>Results</Link>
  </NavigationMenuLink>
</NavigationMenuItem>

{/* Team */}
<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/team" className={linkBase}>Team</Link>
  </NavigationMenuLink>
</NavigationMenuItem>

{/* Sponsors */}
<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/sponsors" className={linkBase}>Sponsors</Link>
  </NavigationMenuLink>
</NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 rounded-lg hover:bg-zinc-100">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Solar Desalination</SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <div className="flex flex-col gap-3">
              <Group title="Overview" items={[
                ["Motivation","/motivation"],
                ["Problem","/problem-statement"],
                ["Concepts","/concepts"],
              ]}/>
              <Separator />
              <Group title="Design" items={[
                ["Final Design","/final-design"],
                ["Manufacturing","/manufacturing"],
                ["Condenser","/condenser"],
              ]}/>
              <Separator />
              <Link className="mt-2 underline" href="/results">Results</Link>
              <Link className="underline" href="/team">Team</Link>
              <Link className="underline" href="/sponsors">Sponsors</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function NavLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="rounded-lg p-3 hover:bg-zinc-50">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-zinc-500 mt-1">{desc}</div>
    </Link>
  );
}

function Group({ title, items }: { title: string; items: [string,string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">{title}</div>
      <div className="flex flex-col">
        {items.map(([label,href]) => (
          <Link key={href} href={href} className="py-1.5">{label}</Link>
        ))}
      </div>
    </div>
  );
}
