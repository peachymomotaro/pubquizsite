import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AUDIENCE_OPTIONS,
  DIFFICULTY_OPTIONS,
  formatPrice,
  SAMPLE_PACKS
} from "@/lib/constants";

type PackDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PackDetailPage({ params }: PackDetailPageProps) {
  const { slug } = await params;
  const pack = SAMPLE_PACKS.find((item) => item.slug === slug);

  if (!pack) {
    notFound();
  }

  return (
    <PageShell
      title={pack.title}
      description="Pack details are currently fixture-based and will switch to DB-backed data in PR3."
      actions={
        <Button asChild>
          <Link href={`/checkout?pack=${pack.slug}`}>Buy {formatPrice(pack.pricePence)}</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="space-y-4">
          <h2 className="text-lg font-semibold">Pack summary</h2>
          <p className="text-sm text-muted-foreground">{pack.description}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              {
                AUDIENCE_OPTIONS.find((x) => x.value === pack.audience)?.label
              }
            </Badge>
            <Badge variant="outline">
              {
                DIFFICULTY_OPTIONS.find((x) => x.value === pack.difficulty)?.label
              }
            </Badge>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Round 1: General Knowledge</li>
            <li>Round 2: Music sheet format (no audio hosted)</li>
            <li>Round 3: Picture round</li>
            <li>Round 4: Mystery round slot</li>
            <li>Round 5: Themed round + bonus</li>
          </ul>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-lg font-semibold">Fulfilment</h2>
          <p className="text-sm text-muted-foreground">
            Paid orders will receive a watermarked PDF with purchaser email,
            order ID, and date in the footer.
          </p>
          <p className="text-sm text-muted-foreground">
            Logged-in users will also see purchases in <Link href="/library">My Library</Link>.
          </p>
          <Button asChild>
            <Link href={`/checkout?pack=${pack.slug}`}>Continue to Checkout</Link>
          </Button>
        </Card>
      </div>
    </PageShell>
  );
}
