import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

type AdminOrderDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminOrderDetailPage({
  params
}: AdminOrderDetailPageProps) {
  const { id } = await params;
  return (
    <PageShell
      title={`Order ${id}`}
      description="Order detail scaffold with customer and item breakdown."
    >
      <Card className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Fields planned: customer email, status, Stripe IDs, ordered pack(s),
          and deliverable path.
        </p>
      </Card>
    </PageShell>
  );
}
