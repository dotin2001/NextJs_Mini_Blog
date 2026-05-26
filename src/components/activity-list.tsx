import { Card } from "@/components/ui/card";
import type { NotificationItem } from "@/types";

export function ActivityList({ items }: { items: NotificationItem[] }) {
  return (
    <Card className="mx-auto max-w-[404px] rounded-[12px] px-6 py-5 shadow-[0_10px_26px_-24px_rgba(26,22,48,0.45)]">
      <h2 className="text-[14px] font-semibold text-[#33333a]">Recent Activity</h2>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="text-[11px] leading-5 text-[#6f6b7c]">
            <span className="font-medium text-[#33333a]">{item.title} </span>
            <span>{item.body}</span>
            <div className="mt-1 text-[10px] leading-4 text-[#b0abbf]">{item.time}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
