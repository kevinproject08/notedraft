import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Support" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">Support</h1>
        <p className="prose-measure mt-3 text-lg text-muted-foreground">
          Stuck on an upload, a transcription, or opening your MIDI file? Start here.
        </p>

        <dl className="mt-10 space-y-8 border-t border-border pt-8">
          <div>
            <dt className="font-medium">Email support</dt>
            <dd className="prose-measure mt-1 text-sm text-muted-foreground">
              Describe what happened and include the instrument and file type you used.
            </dd>
            <dd className="mt-2">
              <a href="mailto:appnotedraft@gmail.com" className="font-medium text-primary hover:underline">
                appnotedraft@gmail.com
              </a>
            </dd>
          </div>

          <div>
            <dt className="font-medium">Instagram</dt>
            <dd className="prose-measure mt-1 text-sm text-muted-foreground">News, tips, and updates.</dd>
            <dd className="mt-2">
              <a
                href="https://www.instagram.com/note.draft/"
                target="_blank"
                rel="noopener noreferrer external"
                referrerPolicy="no-referrer"
                className="font-medium text-primary hover:underline"
              >
                @note.draft
              </a>
            </dd>
          </div>

          <div>
            <dt className="font-medium">Opening your MIDI as sheet music</dt>
            <dd className="prose-measure mt-1 text-sm text-muted-foreground">
              The guide walks through extracting the ZIP and opening the .mid file in notation software.
            </dd>
            <dd className="mt-2">
              <Link to="/guide" className="font-medium text-primary hover:underline">
                Read the guide
              </Link>
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

export default Support;
