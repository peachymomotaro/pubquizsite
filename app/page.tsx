import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice, SAMPLE_PACKS } from "@/lib/constants";

const highlights = [
  "Pre-built downloadable PDF packs",
  "Audience + difficulty filtering",
  "Stripe checkout + instant delivery",
  "Optional account for purchase history"
];

export default function HomePage() {
  return (
    <PageShell
      title="Pub Quiz Packs Built For Real UK Quiz Nights"
      description="Sell and run structured quiz evenings without spending hours writing rounds each week."
      actions={
        <Button asChild>
          <Link href="/packs">
            Browse Packs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-5">
          <Badge className="w-fit">MVP Foundation</Badge>
          <p className="text-sm text-muted-foreground">
            This foundation includes route scaffolding for storefront, account,
            and admin workflows. Next milestones wire Supabase, Stripe,
            watermarking, and email fulfilment.
          </p>
          <ul className="grid gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="text-lg font-semibold">Starting Price</h2>
          <p className="text-3xl font-bold tracking-tight">
            {formatPrice(SAMPLE_PACKS[0]?.pricePence ?? 2000)}
            <span className="ml-2 text-sm font-medium text-muted-foreground">
              per pack
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            VAT is not included in V1. Checkout and receipts are prepared for
            future VAT support.
          </p>
          <div className="rounded-md border border-border bg-muted/50 p-3 text-sm">
            <ShieldCheck className="mr-2 inline h-4 w-4 text-accent-foreground" />
            No music clips or audio hosting in V1.
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
