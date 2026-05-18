import { Card } from "@/components/ui/card";
import type { NotificationItem } from "@/types";

export function ActivityList({ items }: { items: NotificationItem[] }) {
  return (
    <Card className="mx-auto max-w-[520px] p-6">
      <h2 className="text-[18px] font-medium text-[#33333a]">Recent Activity</h2>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="text-[11px] leading-5 text-[#6f6b7c]">
            <span className="font-medium text-[#33333a]">{item.title} </span>
            <span>{item.body}</span>
            <div className="text-[10px] text-[#b0abbf]">{item.time}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
