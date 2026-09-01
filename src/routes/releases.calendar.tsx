import { createFileRoute,
  useNavigate, useSearch,
} from "@tanstack/react-router";
import { useCallback } from "react";
import { CalendarPage } from "../features/calendar/components/CalendarPage";
import { getCurrentYearMonth } from "../features/calendar/utils/dateHelpers";
import { PageTitle } from "@/components/common/page-title";

function ReleasesCalendarRoute() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/releases/calendar" });

  const year = (search.year as number | undefined) ?? getCurrentYearMonth().year;
  const month = (search.month as number | undefined) ?? getCurrentYearMonth().month;

  const handleNavigate = useCallback(
    (newYear: number, newMonth: number) => {
      navigate({
        to: "/releases/calendar",
        search: { year: newYear, month: newMonth },
        replace: true,
      });
    },
    [navigate],
  );

  return (
    <div className="flex flex-col gap-6">
      <PageTitle title="Releases Calendar" subtitle="View and manage release schedules" />
      <CalendarPage year={year} month={month} onNavigate={handleNavigate} />
    </div>
  );
}

export const Route = createFileRoute("/releases/calendar")({

    validateSearch: (search: Record<string, unknown>): Record<string, unknown> => {
      return {
        year:
          typeof search.year === "number"
            ? search.year
            : typeof search.year === "string"
              ? Number.parseInt(search.year, 10)
              : undefined,
        month:
          typeof search.month === "number"
            ? search.month
            : typeof search.month === "string"
              ? Number.parseInt(search.month, 10)
              : undefined,
      };
    },
  component: ReleasesCalendarRoute,
});
