import { createFileRoute,
  Outlet,
} from "@tanstack/react-router";
import { ConsoleSidebar } from "@/features/console/components/ConsoleSidebar";

function WorkersRoute() {
  return (
    <div className="flex flex-1">
      <ConsoleSidebar />
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/workers")({

  component: WorkersRoute,
});
