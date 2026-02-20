import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sampleOrders = [
  { id: "ord_demo_001", email: "guest@example.com", status: "PENDING" },
  { id: "ord_demo_002", email: "host@pub.com", status: "PAID" }
];

export default function AdminOrdersPage() {
  return (
    <PageShell
      title="Admin Orders"
      description="Read-only order list scaffold."
    >
      <div className="grid gap-3">
        {sampleOrders.map((order) => (
          <Card
            key={order.id}
            className="flex items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold">{order.id}</p>
              <p className="text-sm text-muted-foreground">
                {order.email} • {order.status}
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href={`/admin/orders/${order.id}`}>View</Link>
            </Button>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
