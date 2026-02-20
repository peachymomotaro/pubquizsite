import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

type AdminEditPackPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminEditPackPage({
  params
}: AdminEditPackPageProps) {
  const { id } = await params;
  return (
    <PageShell
      title={`Edit Pack: ${id}`}
      description="Edit metadata and publication settings."
    >
      <Card className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Pack edit form placeholder for PR3 implementation.
        </p>
      </Card>
    </PageShell>
  );
}
