import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <PageShell
      title="Admin Dashboard"
      description="Content and order operations for internal admins."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-lg font-semibold">Packs</h2>
          <p className="text-sm text-muted-foreground">
            Create and manage quiz packs, metadata, and publication state.
          </p>
          <Button asChild>
            <Link href="/admin/packs">Manage Packs</Link>
          </Button>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p className="text-sm text-muted-foreground">
            Review paid and pending orders with customer delivery details.
          </p>
          <Button asChild>
            <Link href="/admin/orders">View Orders</Link>
          </Button>
        </Card>
      </div>
    </PageShell>
  );
}
