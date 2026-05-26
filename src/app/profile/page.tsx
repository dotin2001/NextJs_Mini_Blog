import { AppShell } from "@/components/app-shell";
import { ActivityList } from "@/components/activity-list";
import { ProfilePageSummary } from "@/components/profile-page-summary";
import { authors, notifications } from "@/data/selectors";

export default function ProfilePage() {
  const author = authors[0];

  return (
    <AppShell>
      <div className="space-y-5 pt-2 sm:space-y-6">
        <ProfilePageSummary author={author} />
        <ActivityList items={notifications} />
      </div>
    </AppShell>
  );
}
