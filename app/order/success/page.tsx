import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function OrderSuccessPage() {
  return (
    <PageShell
      title="Order Successful"
      description="Thank you. Your download link will appear here after webhook fulfilment."
    >
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          In PR5 this page reads checkout/session context and surfaces secure
          download instructions.
        </p>
        <Button asChild>
          <Link href="/library">Go to My Library</Link>
        </Button>
      </Card>
    </PageShell>
  );
}
