import { BarChart3, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import notedraftLogo from "@/assets/notedraft-logo.png";

interface SiteHeaderProps {
  actionLabel?: string;
  actionTo?: string;
  showMetrics?: boolean;
}

const SiteHeader = ({ actionLabel = "Open transcription", actionTo = "/dashboard", showMetrics = true }: SiteHeaderProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const location = useLocation();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 supports-[backdrop-filter]:bg-background/90 supports-[backdrop-filter]:backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card">
            <img src={notedraftLogo} alt="" className="h-5 w-5" />
          </span>
          <span className="truncate text-lg font-semibold">NoteDraft</span>
        </Link>
        <nav aria-label="Primary navigation" className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {showMetrics && (
            <Button asChild variant={location.pathname === "/metrics" ? "secondary" : "ghost"} size="sm" className="hidden sm:inline-flex">
              <Link to="/metrics"><BarChart3 />Metrics</Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? "Switch to light mode" : "Switch to night mode"}
            title={isDark ? "Light mode" : "Night mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
          {actionLabel && (
            <Button asChild size="sm" className="max-w-32 sm:max-w-none">
              <Link to={actionTo} className="truncate">{actionLabel}</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;