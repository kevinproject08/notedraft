import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="mb-4 text-7xl font-semibold text-primary">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Page not found</p>
        <Link to="/">
          <Button>
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
