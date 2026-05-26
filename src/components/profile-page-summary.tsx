import { Card } from "@/components/ui/card";
import type { Author } from "@/types";

import { EditProfileModal } from "@/components/edit-profile-modal";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function ProfilePageSummary({ author }: { author: Author }) {
  return (
    <Card className="mx-auto max-w-[404px] rounded-[12px] px-6 py-5 shadow-[0_10px_26px_-24px_rgba(26,22,48,0.45)]">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5a3ff1] text-[11px] font-semibold text-white">
          {getInitials(author.name)}
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-[14px] font-semibold leading-5 text-[#232329]">{author.name}</h1>
          <p className="mt-0.5 text-[11px] leading-4 text-[#6f6b7c]">{author.title}</p>
          <p className="mt-3 text-[11px] leading-5 text-[#6f6b7c]">{author.bio}</p>
          <div className="mt-3 space-y-1 text-[11px] leading-4 text-[#6f6b7c]">
            <p>{author.location}</p>
            <p>{author.memberSince}</p>
          </div>
          <div className="mt-4">
            <EditProfileModal author={author} triggerLabel="Update Profile" />
          </div>
        </div>
      </div>
    </Card>
  );
}
