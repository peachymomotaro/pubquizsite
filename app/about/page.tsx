import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      description="Pre-built UK-focused pub quiz packs for venues and quiz hosts."
    >
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          The product sells downloadable PDF packs with complete rounds and
          answer sheets. It avoids audio hosting and keeps operations low-cost.
        </p>
      </Card>
    </PageShell>
  );
}
