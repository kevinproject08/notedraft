import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import notedraftLogo from "@/assets/notedraft-logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/features", label: "Features" },
  { to: "/learn-more", label: "How it works" },
  { to: "/guide", label: "Guide" },
  { to: "/metrics", label: "Metrics" },
  { to: "/contact", label: "Contact" },
];

interface SiteHeaderProps {
  /** Label shown next to the wordmark, e.g. the current page context. */
  context?: string;
}

const SiteHeader = ({ context }: SiteHeaderProps) => {
  const { pathname } = useLocation();
  const onWorkspace = pathname === "/dashboard";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
          <span className="text-base font-semibold tracking-tight">NoteDraft</span>
          {context && (
            <span className="hidden border-l border-border pl-2 text-sm text-muted-foreground sm:inline">
              {context}
            </span>
          )}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-sm px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive && "font-semibold text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          {!onWorkspace && (
            <Button asChild size="sm">
              <Link to="/dashboard">Open workspace</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Compact link row so every destination stays reachable on small screens */}
      <nav
        aria-label="Main, compact"
        className="flex items-center gap-1 overflow-x-auto border-t border-border px-4 py-1.5 md:hidden"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "whitespace-nowrap rounded-sm px-2 py-1 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive && "font-semibold text-foreground",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
