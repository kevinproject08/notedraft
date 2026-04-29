import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Moon, Sun, BarChart3, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";
import Footer from "@/components/Footer";

const Contact = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>

          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                Email Us
              </CardTitle>
              <CardDescription>
                Send us an email and we'll get back to you as soon as possible.
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

          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                Instagram
              </CardTitle>
              <CardDescription>
                Follow us for updates, tips, and behind-the-scenes content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://www.instagram.com/note.draft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-primary hover:underline"
              >
                @note.draft
              </a>
            </CardContent>
          </Card>

          <div className="pt-6">
            <Link to="/dashboard">
              <Button size="lg" variant="gradient">
                Get Started with NoteDraft
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;