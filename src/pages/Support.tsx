import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Moon, Sun, BarChart3, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";
import Footer from "@/components/Footer";

const Support = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border/50 bg-background hover:bg-accent transition-colors cursor-pointer">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">NoteDraft</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/metrics">
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Metrics
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/dashboard">
              <Button variant="gradient">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 flex-1">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">Support</h1>
          <p className="text-lg text-muted-foreground">
            Need help with NoteDraft? We're here to assist you with any questions or issues.
          </p>

          <div className="grid gap-6 mt-8">
            {/* Email Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Reach out to us via email and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:appnotedraft@gmail.com" 
                  className="text-lg font-medium text-primary hover:underline"
                >
                  appnotedraft@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Instagram className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Follow Us on Instagram</CardTitle>
                <CardDescription>
                  Stay updated with the latest news, tips, and updates from NoteDraft.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://instagram.com/note.draft" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-primary hover:underline"
                >
                  @note.draft
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="pt-6">
            <Link to="/dashboard">
              <Button size="lg" variant="gradient">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
