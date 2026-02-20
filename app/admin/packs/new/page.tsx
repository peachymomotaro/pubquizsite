import { PageShell } from "@/components/site/page-shell";
import { Card } from "@/components/ui/card";

const contentChecklist = [
  "No defamatory or hateful content",
  "No doxxing or personal data",
  "No explicit sexual content",
  "No content likely to create legal issues"
];

export default function AdminNewPackPage() {
  return (
    <PageShell
      title="Create Pack"
      description="Form scaffold for pack metadata, PDF upload, and publish state."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="font-semibold">Pack Form (Placeholder)</h2>
          <p className="text-sm text-muted-foreground">
            Fields planned: title, slug, description, audience, difficulty, price,
            publish toggle, PDF upload path.
          </p>
        </Card>
        <Card className="space-y-3">
          <h2 className="font-semibold">Content Safety Reminder</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {contentChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}
