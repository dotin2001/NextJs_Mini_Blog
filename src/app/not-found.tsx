import { AppShell } from "@/components/app-shell";
import { EmptyState } from "@/components/empty-state";

export default function NotFound() {
  return (
    <AppShell>
      <EmptyState
        title="Page not found"
        body="The page you requested is not available in this Mini Blog workspace."
      />
    </AppShell>
  );
}
