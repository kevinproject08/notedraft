import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const Contact = () => {
  const instagramUrl = "https://www.instagram.com/note.draft/";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Contact" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">Contact</h1>
        <p className="prose-measure mt-3 text-lg text-muted-foreground">
          Questions, feedback, or a recording that did not transcribe well? Get in touch.
        </p>

        <dl className="mt-10 space-y-8 border-t border-border pt-8">
          <div>
            <dt className="font-medium">Email</dt>
            <dd className="prose-measure mt-1 text-sm text-muted-foreground">
              The fastest way to reach us. We reply as soon as we can.
            </dd>
            <dd className="mt-2">
              <a href="mailto:appnotedraft@gmail.com" className="font-medium text-primary hover:underline">
                appnotedraft@gmail.com
              </a>
            </dd>
          </div>

          <div>
            <dt className="font-medium">Instagram</dt>
            <dd className="prose-measure mt-1 text-sm text-muted-foreground">Updates, tips, and new instrument support.</dd>
            <dd className="mt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer external"
                referrerPolicy="no-referrer"
                className="font-medium text-primary hover:underline"
              >
                @note.draft
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-12 border-t border-border pt-8">
          <Button asChild>
            <Link to="/dashboard">Open workspace</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
