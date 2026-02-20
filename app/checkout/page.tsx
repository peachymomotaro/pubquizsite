import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type CheckoutPageProps = {
  searchParams: Promise<{
    pack?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const resolvedSearchParams = await searchParams;
  return (
    <PageShell
      title="Checkout"
      description="Stripe session creation is implemented in the PR5 milestone."
    >
      <Card className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Selected pack:{" "}
          <span className="font-medium">
            {resolvedSearchParams.pack ?? "None"}
          </span>
        </p>
        <p className="text-sm text-muted-foreground">
          This route will call a server action/API route that creates a Stripe
          Checkout Session, then redirects to Stripe-hosted payment.
        </p>
        <Button asChild>
          <Link href="/packs">Back to Packs</Link>
        </Button>
      </Card>
    </PageShell>
  );
}
