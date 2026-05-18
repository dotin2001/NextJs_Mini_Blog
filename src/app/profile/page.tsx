import { AppShell } from "@/components/app-shell";
import { ActivityList } from "@/components/activity-list";
import { EditProfileModal } from "@/components/edit-profile-modal";
import { ProfileSummary } from "@/components/profile-summary";
import { authors, notifications } from "@/data/selectors";

export default function ProfilePage() {
  const author = authors[0];

  return (
    <AppShell>
      <div className="space-y-5 sm:space-y-6">
        <ProfileSummary author={author} />
        <div className="mx-auto flex max-w-[520px] justify-start px-1 sm:px-0">
          <EditProfileModal author={author} />
        </div>
        <ActivityList items={notifications} />
      </div>
    </AppShell>
  );
}
