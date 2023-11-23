'use client'

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((r) => ({
    href: `/category/${r.id}`,
    label: r.name,
    active: pathname === `category/${r.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            r.active ? "text-black" : "text-neutral-500"
          )}
        >
          {r.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
