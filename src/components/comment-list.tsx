import { Card } from "@/components/ui/card";
import type { Comment } from "@/types";

export function CommentList({ items }: { items: Comment[] }) {
  return (
    <div className="space-y-3">
      {items.map((comment) => (
        <Card key={comment.id} className="p-4">
          <p className="text-[11px] leading-5 text-[#6f6b7c]">{comment.body}</p>
          <p className="mt-2 text-[10px] text-[#b0abbf]">{comment.time}</p>
        </Card>
      ))}
    </div>
  );
}
