import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <PageShell
      title="Account"
      description="Auth scaffold lands in PR2 using Supabase Auth."
    >
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          This page will support guest checkout and optional account creation
          for library history and repeat-avoidance.
        </p>
        <Button asChild>
          <Link href="/library">View My Library</Link>
        </Button>
      </Card>
    </PageShell>
  );
}
