import { Badge } from "@/components/ui/badge";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  greenBadge?: string;
  badge?: string;
  hasSidebar?: boolean;
}

export function PageTitle({ title, subtitle, greenBadge, badge, hasSidebar }: PageTitleProps) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-2">
        <h1 className={`${hasSidebar ? "text-xl" : "text-2xl"}  font-semibold tracking-tight`}>{title}</h1>
        {greenBadge && (
          <Badge
            variant="outline"
            className="border-green-200 bg-green-50 text-green-700 text-[11px] font-bold uppercase tracking-wide dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
          >
            {greenBadge}
          </Badge>
        )}
        {badge && (
          <Badge variant="outline" className="border-border bg-secondary text-muted-foreground text-[11px] font-bold uppercase tracking-wide">
            {badge}
          </Badge>
        )}
      </div>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}