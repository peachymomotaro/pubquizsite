import Link from "next/link";
import { BookOpenText, LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

const mainNav = [
  { href: "/packs", label: "Packs" },
  { href: "/library", label: "My Library" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="container py-2">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold">
            <BookOpenText className="h-5 w-5 text-primary" />
            <span>{SITE_NAME}</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) => (
              <Button key={item.href} variant="ghost" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/account">Account</Link>
            </Button>
            <Button asChild>
              <Link href="/admin/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Admin
              </Link>
            </Button>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto pb-1 md:hidden">
          {mainNav.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
