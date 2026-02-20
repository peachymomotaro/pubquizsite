import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <PageShell title="Terms" description="Terms of sale and digital delivery.">
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Placeholder terms page. Digital product terms, refund policy,
          licensing scope, and usage limits will be added before launch.
        </p>
      </Card>
    </PageShell>
  );
}
