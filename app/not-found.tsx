import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFoundPage() {
  return (
    <PageShell title="Not Found" description="The page you requested does not exist.">
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Check the URL or return to the catalogue.
        </p>
        <Button asChild>
          <Link href="/packs">Browse Packs</Link>
        </Button>
      </Card>
    </PageShell>
  );
}
