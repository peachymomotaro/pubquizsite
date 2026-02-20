import Link from "next/link";
import { Filter } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AUDIENCE_OPTIONS,
  DIFFICULTY_OPTIONS,
  type Audience,
  type Difficulty,
  formatPrice,
  SAMPLE_PACKS
} from "@/lib/constants";

type PacksPageProps = {
  searchParams: Promise<{
    audience?: Audience;
    difficulty?: Difficulty;
  }>;
};

function makeFilterUrl(
  current: {
    audience?: Audience;
    difficulty?: Difficulty;
  },
  patch: Partial<{
    audience?: Audience;
    difficulty?: Difficulty;
  }>
) {
  const params = new URLSearchParams();
  const audience =
    "audience" in patch ? patch.audience : current.audience;
  const difficulty =
    "difficulty" in patch ? patch.difficulty : current.difficulty;

  if (audience) {
    params.set("audience", audience);
  }

  if (difficulty) {
    params.set("difficulty", difficulty);
  }

  const query = params.toString();
  return query ? `/packs?${query}` : "/packs";
}

export default async function PacksPage({ searchParams }: PacksPageProps) {
  const resolvedSearchParams = await searchParams;
  const activeAudience = resolvedSearchParams.audience;
  const activeDifficulty = resolvedSearchParams.difficulty;

  const filtered = SAMPLE_PACKS.filter((pack) => {
    const audienceMatch = activeAudience ? pack.audience === activeAudience : true;
    const difficultyMatch = activeDifficulty
      ? pack.difficulty === activeDifficulty
      : true;
    return audienceMatch && difficultyMatch && pack.isPublished;
  });

  return (
    <PageShell
      title="Quiz Pack Catalogue"
      description="Filter by audience and difficulty. URL-based filters are shareable."
    >
      <section className="mb-8 grid gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Filters
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-medium">Audience</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!activeAudience ? "default" : "outline"}
                size="sm"
                asChild
              >
                <Link
                  href={makeFilterUrl(resolvedSearchParams, {
                    audience: undefined
                  })}
                >
                  All
                </Link>
              </Button>
              {AUDIENCE_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={activeAudience === option.value ? "default" : "outline"}
                  size="sm"
                  asChild
                >
                  <Link
                    href={makeFilterUrl(resolvedSearchParams, {
                      audience: option.value
                    })}
                  >
                    {option.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Difficulty</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!activeDifficulty ? "default" : "outline"}
                size="sm"
                asChild
              >
                <Link
                  href={makeFilterUrl(resolvedSearchParams, {
                    difficulty: undefined
                  })}
                >
                  All
                </Link>
              </Button>
              {DIFFICULTY_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={
                    activeDifficulty === option.value ? "default" : "outline"
                  }
                  size="sm"
                  asChild
                >
                  <Link
                    href={makeFilterUrl(resolvedSearchParams, {
                      difficulty: option.value
                    })}
                  >
                    {option.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {filtered.map((pack) => (
          <Card key={pack.id} className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{pack.title}</h3>
              <p className="text-sm text-muted-foreground">{pack.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  {
                    AUDIENCE_OPTIONS.find((x) => x.value === pack.audience)
                      ?.label
                  }
                </Badge>
                <Badge variant="outline">
                  {
                    DIFFICULTY_OPTIONS.find((x) => x.value === pack.difficulty)
                      ?.label
                  }
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                {formatPrice(pack.pricePence)}
              </span>
              <Button asChild>
                <Link href={`/packs/${pack.slug}`}>View Pack</Link>
              </Button>
            </div>
          </Card>
        ))}
        {filtered.length === 0 ? (
          <Card>
            <p className="text-sm text-muted-foreground">
              No packs match this filter yet.
            </p>
          </Card>
        ) : null}
      </section>
    </PageShell>
  );
}
