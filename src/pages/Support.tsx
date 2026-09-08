import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Support = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 flex-1">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="font-heading text-4xl font-semibold sm:text-5xl">Support</h1>
          <p className="text-lg text-muted-foreground">
            Need help with NoteDraft? We're here to assist you with any questions or issues.
          </p>

          <div className="grid gap-6 mt-8">
            {/* Email Card */}
            <Card>
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
            <Card>
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
                  href="https://www.instagram.com/note.draft/" 
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
              <Button size="lg">
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
