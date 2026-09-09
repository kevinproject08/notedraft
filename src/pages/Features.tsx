import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Five instruments",
    description:
      "Piano, violin, viola, cello, and double bass. Each selection routes to a model tuned for that instrument's range and tone.",
  },
  {
    title: "Audio, video, and MIDI input",
    description:
      "MP3, WAV, FLAC, M4A, AAC, OGG, AIFF, OPUS, MP4, MOV, MKV, WEBM, MID and more. Video files are read for their audio track.",
  },
  {
    title: "Polyphonic transcription",
    description: "Overlapping notes and chords are detected, not flattened into a single melody line.",
  },
  {
    title: "Cleanup before download",
    description:
      "Spurious detections from overtones and background noise are filtered so the MIDI opens as readable notes.",
  },
  {
    title: "Progress and cancellation",
    description: "Follow upload and transcription progress in the workspace, and stop a transcription while it runs.",
  },
  {
    title: "Standard MIDI output",
    description:
      "Download a ZIP with a standard .mid file, ready for MuseScore, Sibelius, Logic, Ableton, or any DAW.",
  },
  {
    title: "Section selection",
    description: "Set a start and end point on your recording before transcribing.",
  },
  {
    title: "No account, no install",
    description: "Everything runs in the browser as a guest. There is nothing to sign up for and nothing to download.",
  },
];

const instruments = [
  { name: "Piano", value: "piano" },
  { name: "Violin", value: "violin" },
  { name: "Viola", value: "viola" },
  { name: "Cello", value: "cello" },
  { name: "Double bass", value: "bass" },
];

const Features = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Features" />

      <main className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <h1 className="max-w-[24ch] text-3xl font-semibold sm:text-4xl">
              What NoteDraft does, in detail
            </h1>
            <p className="prose-measure mt-4 text-lg text-muted-foreground">
              A transcription tool for solo piano and string recordings. Upload, choose an instrument, download MIDI.
            </p>
            <div className="mt-7">
              <Button asChild size="lg">
                <Link to="/dashboard">Open workspace</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title}>
                  <dt className="font-medium">{feature.title}</dt>
                  <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-semibold">Supported instruments</h2>
            <p className="prose-measure mt-3 text-muted-foreground">
              Pick one to open the workspace with that instrument already selected.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {instruments.map((inst) => (
                <li key={inst.value}>
                  <Link
                    to={`/dashboard?instrument=${inst.value}`}
                    className="flex h-full items-center justify-between rounded-md border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {inst.name}
                    <span className="text-muted-foreground">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-semibold">Recommended limits</h2>
            <p className="prose-measure mt-3 text-muted-foreground">
              Larger files and longer recordings take longer to transcribe.
            </p>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <dt className="text-3xl font-semibold">50 MB</dt>
                <dd className="mt-1 text-sm text-muted-foreground">Recommended file size</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold">10 min</dt>
                <dd className="mt-1 text-sm text-muted-foreground">Recommended recording length</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold">5</dt>
                <dd className="mt-1 text-sm text-muted-foreground">Supported instruments</dd>
              </div>
            </dl>
          </div>
        </section>

        <section>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-2xl font-semibold">Try it with your own recording</h2>
              <p className="prose-measure mt-2 text-muted-foreground">No account required, nothing to install.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/dashboard">Open workspace</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/learn-more">How it works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
