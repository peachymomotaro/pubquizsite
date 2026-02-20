import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <div className="border-b border-border bg-muted/40">
        <div className="container flex min-h-14 items-center gap-2 py-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/packs">Packs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/orders">Orders</Link>
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}
