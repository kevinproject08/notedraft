import { BarChart3, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";
import { Button } from "@/components/ui/button";

interface SiteHeaderProps {
  context?: string;
  actionLabel?: string;
  actionTo?: string;
  showMetrics?: boolean;
}

const SiteHeader = ({
  context,
  actionLabel = "Get Started",
  actionTo = "/dashboard",
  showMetrics = true,
}: SiteHeaderProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDark = resolvedTheme === "dark";

  const links = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Guide", to: "/guide" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 supports-[backdrop-filter]:bg-background/90 supports-[backdrop-filter]:backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3 px-4">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label="NoteDraft home">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card transition-shadow group-hover:shadow-sm">
            <img src={notedraftLogo} alt="" className="h-6 w-6" />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-lg font-semibold leading-none text-foreground">NoteDraft</span>
            {context && <span className="mt-1 hidden text-xs text-muted-foreground sm:block">{context}</span>}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Button key={link.to} variant="ghost" size="sm" asChild>
              <Link
                to={link.to}
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={location.pathname === link.to ? "bg-secondary text-foreground" : "text-muted-foreground"}
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          {showMetrics && (
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link to="/metrics" aria-current={location.pathname === "/metrics" ? "page" : undefined}>
                <BarChart3 />
                Metrics
              </Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Use light mode" : "Use night mode"}
            title={isDark ? "Use light mode" : "Use night mode"}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to={actionTo}>{actionLabel}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden" aria-label="Mobile navigation">
          <div className="container grid grid-cols-2 gap-2 px-0 sm:grid-cols-3">
            {links.map((link) => (
              <Button key={link.to} variant="ghost" size="sm" asChild>
                <Link to={link.to} onClick={() => setMenuOpen(false)} className="justify-start">
                  {link.label}
                </Link>
              </Button>
            ))}
            {showMetrics && (
              <Button variant="ghost" size="sm" asChild className="justify-start sm:hidden">
                <Link to="/metrics" onClick={() => setMenuOpen(false)}>Metrics</Link>
              </Button>
            )}
            <Button size="sm" asChild className="sm:hidden">
              <Link to={actionTo} onClick={() => setMenuOpen(false)}>{actionLabel}</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;