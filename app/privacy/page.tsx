import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy"
      description="Data minimisation and customer communication policy."
    >
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          V1 only collects what is needed for delivery and records:
          customer email, order identifiers, and payment IDs.
        </p>
        <p className="text-sm text-muted-foreground">
          Paid order records are retained and not auto-deleted in V1.
        </p>
      </Card>
    </PageShell>
  );
}
