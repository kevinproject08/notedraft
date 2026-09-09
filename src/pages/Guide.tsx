import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const Guide = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Guide" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">From MIDI to sheet music</h1>
        <p className="prose-measure mt-3 text-lg text-muted-foreground">
          What to do with the ZIP file NoteDraft gives you, step by step.
        </p>

        <div className="mt-12 space-y-12">
          {/* Step 1 */}
          <section className="border-t border-border pt-8">
            <p className="text-sm font-semibold text-primary">Step 1</p>
            <h2 className="mt-1 text-xl font-semibold">Extract your files</h2>
            <p className="prose-measure mt-2 text-muted-foreground">
              Find <code className="rounded bg-muted px-1.5 py-0.5 text-sm">NoteDraft_output.zip</code> in your Downloads
              folder and unpack it.
            </p>
            <ul className="prose-measure mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Windows:</span> right-click the ZIP, choose Extract All,
                then pick a destination.
              </li>
              <li>
                <span className="font-medium text-foreground">Mac:</span> double-click the ZIP and it extracts itself.
              </li>
              <li>
                <span className="font-medium text-foreground">Linux:</span> right-click and choose Extract Here, or run{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">unzip</code>.
              </li>
            </ul>
            <p className="prose-measure mt-4 text-sm text-muted-foreground">
              Inside, look for the file ending in <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.mid</code> or{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.midi</code>. That is your transcription.
            </p>
          </section>

          {/* Step 2 */}
          <section className="border-t border-border pt-8">
            <p className="text-sm font-semibold text-primary">Step 2</p>
            <h2 className="mt-1 text-xl font-semibold">Get notation software</h2>
            <p className="prose-measure mt-2 text-muted-foreground">
              MIDI is note data, not a printed score, so you need notation software to see it as sheet music.
            </p>

            <div className="mt-6 rounded-md border border-border bg-card p-5">
              <h3 className="font-medium">MuseScore</h3>
              <p className="prose-measure mt-1 text-sm text-muted-foreground">
                Free and open source, available for Windows, Mac, and Linux, with full editing and PDF export.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <a href="https://musescore.org/download" target="_blank" rel="noopener noreferrer">
                  Download MuseScore
                </a>
              </Button>
            </div>

            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-medium">Sibelius</dt>
                <dd className="text-sm text-muted-foreground">Paid, widely used in professional engraving.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium">Finale</dt>
                <dd className="text-sm text-muted-foreground">Paid, detailed control over layout.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium">Flat.io</dt>
                <dd className="text-sm text-muted-foreground">Browser-based, free tier, nothing to install.</dd>
              </div>
            </dl>

            <p className="prose-measure mt-6 text-sm text-muted-foreground">
              NoteDraft is not affiliated with any of the software mentioned here. These are independent tools that read
              standard MIDI files.
            </p>
          </section>

          {/* Step 3 */}
          <section className="border-t border-border pt-8">
            <p className="text-sm font-semibold text-primary">Step 3</p>
            <h2 className="mt-1 text-xl font-semibold">Open the MIDI file</h2>
            <ol className="prose-measure mt-4 list-decimal space-y-3 pl-5 text-sm text-muted-foreground">
              <li>Launch your notation software.</li>
              <li>
                Choose <span className="font-medium text-foreground">File → Open</span>, or press{" "}
                <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs">Ctrl+O</kbd> /{" "}
                <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs">Cmd+O</kbd>.
              </li>
              <li>Select the .mid file you extracted in step 1.</li>
              <li>Open it. The software lays the notes out as a score automatically.</li>
            </ol>
            <p className="prose-measure mt-4 text-sm text-muted-foreground">
              From here you can play it back, edit it, print it, or export it as PDF, MusicXML, or an image.
            </p>
          </section>

          {/* Step 4 */}
          <section className="border-t border-border pt-8">
            <p className="text-sm font-semibold text-primary">Step 4</p>
            <h2 className="mt-1 text-xl font-semibold">Edit and export</h2>
            <ul className="prose-measure mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Fix notes:</span> click a note to change its pitch, length,
                or articulation.
              </li>
              <li>
                <span className="font-medium text-foreground">Add expression:</span> use the palette for dynamics,
                accents, and phrasing.
              </li>
              <li>
                <span className="font-medium text-foreground">Adjust layout:</span> set page size, margins, and spacing
                for readability.
              </li>
              <li>
                <span className="font-medium text-foreground">Export:</span> File → Export → PDF to print or share.
              </li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-semibold">If something looks wrong</h2>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="font-medium">The file will not open</dt>
                <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                  Make sure the ZIP was fully extracted, check that the file ends in .mid or .midi, and try a different
                  notation program.
                </dd>
              </div>
              <div>
                <dt className="font-medium">The notes look off</dt>
                <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                  Transcriptions usually need a little cleanup. Check the tempo, time signature, and key signature, and
                  use quantization to align notes to the beat.
                </dd>
              </div>
              <div>
                <dt className="font-medium">Still stuck</dt>
                <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                  Try a cleaner or shorter recording, or{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    get in touch
                  </Link>
                  .
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <Button asChild size="lg">
            <Link to="/dashboard">Transcribe another recording</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
