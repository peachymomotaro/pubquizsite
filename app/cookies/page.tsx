import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookies"
      description="Cookie use and consent controls for UK compliance."
    >
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          By default, this project does not enable non-essential cookies.
          Cookie consent UI will be added only when non-essential cookies
          (for example analytics) are introduced.
        </p>
      </Card>
    </PageShell>
  );
}
