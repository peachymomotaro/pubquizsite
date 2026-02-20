import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

export default function LibraryPage() {
  return (
    <PageShell
      title="My Library"
      description="Purchased packs for logged-in users will appear here (PR7 milestone)."
    >
      <Card>
        <p className="text-sm text-muted-foreground">
          No purchases to show in the scaffold state.
        </p>
      </Card>
    </PageShell>
  );
}
