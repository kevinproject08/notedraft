import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const stages = [
  {
    title: "Audio analysis",
    body: "The recording is broken into short segments and its frequency content is examined to find pitches and how they change over time.",
  },
  {
    title: "Note detection",
    body: "Each note's start, length, and strength is estimated, including passages where several notes sound at once.",
  },
  {
    title: "MIDI generation",
    body: "Detected notes become MIDI events with timing and velocity, written into a standard .mid file.",
  },
  {
    title: "Cleanup",
    body: "Detections caused by overtones, resonance, or background noise are filtered out so the score reads clearly.",
  },
];

const audiences = [
  {
    title: "Composers and arrangers",
    body: "Capture an idea you played or improvised and turn it into notation you can orchestrate.",
  },
  {
    title: "Producers",
    body: "Move a melodic take into MIDI so you can re-voice it, quantize it, or rebuild it with other sounds.",
  },
  {
    title: "Students",
    body: "Study repertoire note by note by turning your own playing into an editable score.",
  },
  {
    title: "Teachers and performers",
    body: "Make study material or digital scores from rehearsal recordings.",
  },
];

const faqs = [
  {
    q: "Which formats can I upload?",
    a: "Common audio formats such as WAV, MP3, FLAC, M4A, AAC, OGG, AIFF, and OPUS; video files including MP4, MOV, MKV, AVI, WEBM, and WMV; and MIDI files. Clear recordings give better results.",
  },
  {
    q: "Which instruments are supported?",
    a: "Piano, violin, viola, cello, and double bass. Choose the instrument in the workspace before you transcribe, since each one uses its own model.",
  },
  {
    q: "How accurate is it?",
    a: "Accuracy depends on the recording. Clean, solo playing transcribes closely; dense polyphony, heavy reverb, or background noise usually needs some manual correction in your notation software or DAW.",
  },
  {
    q: "Can I transcribe several instruments at once?",
    a: "Polyphonic passages within one instrument are detected, but NoteDraft is built for solo recordings of a single instrument rather than full ensembles.",
  },
  {
    q: "What can I do with the MIDI file?",
    a: "Open it in a DAW such as Logic Pro, Ableton Live, or FL Studio, or in notation software such as MuseScore, Sibelius, or Finale, to edit, arrange, or export sheet music.",
  },
  {
    q: "Is there a size limit?",
    a: "There is no account or paid tier. We recommend files up to about 50 MB and recordings up to about 10 minutes; longer files simply take more time to process.",
  },
];

const LearnMore = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="How it works" />

      <main className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <h1 className="max-w-[26ch] text-3xl font-semibold sm:text-4xl">
              From a recording to editable notes
            </h1>
            <p className="prose-measure mt-4 text-lg text-muted-foreground">
              Audio-to-MIDI transcription means reading the pitches, timing, and dynamics out of a recording and writing
              them as MIDI data you can edit, re-voice, or engrave as sheet music.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
              <div>
                <h2 className="text-2xl font-semibold">The four stages</h2>
                <p className="prose-measure mt-3 text-muted-foreground">
                  Everything happens on the server while the workspace reports progress.
                </p>
              </div>
              <ol className="space-y-6">
                {stages.map((stage, index) => (
                  <li key={stage.title} className="flex gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
                    <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    <div>
                      <h3 className="font-medium">{stage.title}</h3>
                      <p className="prose-measure mt-1 text-sm text-muted-foreground">{stage.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-semibold">Who uses it</h2>
            <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {audiences.map((item) => (
                <div key={item.title}>
                  <dt className="font-medium">{item.title}</dt>
                  <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-semibold">Questions</h2>
            <dl className="mt-8 divide-y divide-border border-t border-border">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-5">
                  <dt className="font-medium">{faq.q}</dt>
                  <dd className="prose-measure mt-1.5 text-sm text-muted-foreground">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-2xl font-semibold">Transcribe a recording</h2>
              <p className="prose-measure mt-2 text-muted-foreground">No account, no install, no card.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/dashboard">Open workspace</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/guide">Read the guide</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;
