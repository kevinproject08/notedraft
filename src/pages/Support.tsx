import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Support = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Content */}
      <div className="container flex-1 px-4 py-14 sm:px-6 md:py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Support</h1>
          <p className="text-lg text-muted-foreground">
            Need help with NoteDraft? We're here to assist you with any questions or issues.
          </p>

          <div className="grid gap-6 mt-8">
            {/* Email Card */}
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
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
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-muted">
                  <Instagram className="h-5 w-5 text-primary" />
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

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
