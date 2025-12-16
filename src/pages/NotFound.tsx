import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Music2, Moon, Sun, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const NotFound = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Music2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">NoteDraft</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/">
          <Button variant="gradient">
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
