import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Contact = () => {
  const instagramUrl = "https://www.instagram.com/note.draft/";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Content */}
      <main className="container px-4 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="font-heading text-4xl font-semibold sm:text-5xl">Contact Us</h1>
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
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                Instagram
              </CardTitle>
              <CardDescription>
                Follow us for updates, tips, and behind-the-scenes content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer external"
                referrerPolicy="no-referrer"
                className="text-lg font-medium text-primary hover:underline"
              >
                @note.draft
              </a>
            </CardContent>
          </Card>

          <div className="pt-6">
            <Link to="/dashboard">
              <Button size="lg" variant="default">
                Get Started with NoteDraft
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;