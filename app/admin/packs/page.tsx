import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SAMPLE_PACKS } from "@/lib/constants";

export default function AdminPacksPage() {
  return (
    <PageShell
      title="Admin Packs"
      description="Pack CRUD UI scaffold. Database wiring lands in PR3."
      actions={
        <Button asChild>
          <Link href="/admin/packs/new">Create Pack</Link>
        </Button>
      }
    >
      <div className="grid gap-3">
        {SAMPLE_PACKS.map((pack) => (
          <Card key={pack.id} className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold">{pack.title}</p>
              <p className="text-sm text-muted-foreground">{pack.slug}</p>
            </div>
            <Button variant="outline" asChild>
              <Link href={`/admin/packs/${pack.id}/edit`}>Edit</Link>
            </Button>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
