import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Contact = () => {
  const instagramUrl = "https://www.instagram.com/note.draft/";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Content */}
      <div className="container px-4 py-14 sm:px-6 md:py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Contact NoteDraft</h1>
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
                <div className="rounded-md [background:var(--instagram-gradient)] p-2">
                  <Instagram className="h-6 w-6 text-primary-foreground" />
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

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;