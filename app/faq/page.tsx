import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

export default function FaqPage() {
  return (
    <PageShell title="FAQ" description="Common questions from pub operators.">
      <div className="grid gap-4">
        <Card className="space-y-2">
          <h2 className="font-semibold">Do packs include printable answer sheets?</h2>
          <p className="text-sm text-muted-foreground">
            Yes. Packs include question content and printable answer sheets.
          </p>
        </Card>
        <Card className="space-y-2">
          <h2 className="font-semibold">Are music clips included?</h2>
          <p className="text-sm text-muted-foreground">
            No. V1 does not ship or host copyrighted music clips.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
