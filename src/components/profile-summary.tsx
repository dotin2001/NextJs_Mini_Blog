import Image from "next/image";

import type { Author } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProfileSummary({ author }: { author: Author }) {
  return (
    <Card className="mx-auto max-w-[520px] p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6c4dff] text-[11px] font-semibold text-white">
            A
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <Image
                src={author.avatar}
                alt={author.name}
                width={72}
                height={72}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="text-[18px] font-semibold text-[#232329]">{author.name}</h1>
                <p className="text-[11px] text-[#6f6b7c]">{author.title}</p>
              </div>
            </div>
            <p className="text-[11px] text-[#6f6b7c]">{author.location}</p>
            <p className="text-[11px] text-[#6f6b7c]">{author.memberSince}</p>
          </div>
        </div>
        <p className="max-w-[360px] text-[11px] leading-5 text-[#6f6b7c]">{author.bio}</p>
        <div className="flex gap-3">
          <Button size="sm" className="min-w-24">
            Follow
          </Button>
          <Button variant="outline" size="sm" className="min-w-24">
            Message
          </Button>
        </div>
      </div>
    </Card>
  );
}
