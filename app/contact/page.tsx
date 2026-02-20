import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";
import { SUPPORT_EMAIL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Support contact details for pubs and venue operators."
    >
      <Card className="space-y-2">
        <p className="text-sm text-muted-foreground">
          For support, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Card>
    </PageShell>
  );
}
