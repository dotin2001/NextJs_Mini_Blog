import { Card } from "@/components/ui/card";

export function EmptyState({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <Card className="p-8 text-center">
      <h2 className="text-[16px] font-medium text-[#33333a]">{title}</h2>
      <p className="mt-2 text-[11px] leading-5 text-[#8f8c9d]">{body}</p>
    </Card>
  );
}
