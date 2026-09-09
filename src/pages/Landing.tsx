import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const instruments = [
  { name: "Piano", value: "piano" },
  { name: "Violin", value: "violin" },
  { name: "Viola", value: "viola" },
  { name: "Cello", value: "cello" },
  { name: "Double bass", value: "bass" },
];

const steps = [
  {
    title: "Upload your recording",
    body: "Audio, video, or MIDI files. Practice takes and phone recordings are fine.",
  },
  {
    title: "Pick the instrument",
    body: "Each instrument routes to a model trained for its range and timbre.",
  },
  {
    title: "Download the MIDI",
    body: "A ZIP with the .mid file and related outputs, ready for notation software or a DAW.",
  },
];

const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:py-20">
          <div>
            <h1 className="max-w-[20ch] text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Turn a recording into editable MIDI
            </h1>
            <p className="prose-measure mt-4 text-lg text-muted-foreground">
              NoteDraft transcribes piano, violin, viola, cello, and double bass recordings into MIDI you can open in
              MuseScore, Logic, Ableton, or any notation editor. No account needed.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/dashboard">Open workspace</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/learn-more">How it works</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Works with WAV, MP3, FLAC, M4A, MP4, MOV, MIDI and more.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {instruments.map((instrument) => (
              <li key={instrument.value}>
                <Link
                  to={`/dashboard?instrument=${instrument.value}`}
                  className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {instrument.name}
                  <span className="text-muted-foreground">Transcribe →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Demo video */}
      <section id="how-it-works" className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold">Watch a transcription</h2>
              <p className="prose-measure mt-3 text-muted-foreground">
                A short walkthrough of uploading a recording, choosing an instrument, and opening the MIDI as sheet music.
              </p>
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="mt-0.5 text-sm font-semibold text-primary">{index + 1}</span>
                    <span>
                      <span className="block text-sm font-medium">{step.title}</span>
                      <span className="block text-sm text-muted-foreground">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div
              className="relative w-full overflow-hidden rounded-md border border-border bg-card"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/9A7G1vqw3ao"
                title="NoteDraft demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold">What NoteDraft handles</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-medium">Audio, video, and MIDI input</dt>
              <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                Upload common audio and video formats, or a MIDI file you already have. Real practice-room recordings are
                the normal case, not the exception.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Instrument-specific models</dt>
              <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                Separate transcription paths for piano and for violin, viola, cello, and double bass.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Post-processing before you download</dt>
              <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                Extra note detections from overtones and room noise are filtered out, so the MIDI opens as readable notes
                rather than clusters.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Progress you can follow</dt>
              <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                The workspace shows upload and transcription progress, and you can stop a transcription while it runs.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Standard MIDI output</dt>
              <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                A standard .mid file in a ZIP, so it opens in notation software and DAWs without conversion.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nothing to sign up for</dt>
              <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">
                Transcribe as a guest. Files are processed to produce your output and are not kept as a library.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Who it is for */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 className="text-2xl font-semibold">Built around practice recordings</h2>
              <p className="prose-measure mt-3 text-muted-foreground">
                NoteDraft started as a way to turn piano practice sessions into editable scores, and grew to cover the
                string family.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <li>
                <span className="block font-medium">Students</span>
                <span className="prose-measure block text-sm text-muted-foreground">
                  Transcribe repertoire or etudes to study them note by note.
                </span>
              </li>
              <li>
                <span className="block font-medium">Composers</span>
                <span className="prose-measure block text-sm text-muted-foreground">
                  Capture an improvisation before the idea disappears.
                </span>
              </li>
              <li>
                <span className="block font-medium">Producers</span>
                <span className="prose-measure block text-sm text-muted-foreground">
                  Move a melodic take into MIDI and arrange it later.
                </span>
              </li>
              <li>
                <span className="block font-medium">Teachers</span>
                <span className="prose-measure block text-sm text-muted-foreground">
                  Make study material from your own playing.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing action */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to transcribe something?</h2>
              <p className="prose-measure mt-2 text-muted-foreground">
                Upload a recording and download the MIDI when it is done.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/dashboard">Open workspace</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
