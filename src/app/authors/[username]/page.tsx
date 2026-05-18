import { notFound } from "next/navigation";

import { AppShell } from "@/components/app-shell";
import { ActivityList } from "@/components/activity-list";
import { ProfileSummary } from "@/components/profile-summary";
import { getAuthorByUsername, notifications } from "@/data/selectors";

export default async function AuthorPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const author = getAuthorByUsername(username);

  if (!author) notFound();

  return (
    <AppShell>
      <div className="space-y-6">
        <ProfileSummary author={author} />
        <ActivityList items={notifications} />
      </div>
    </AppShell>
  );
}
