import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, FileAudio, SlidersHorizontal, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const features = [
  {
    icon: FileAudio,
    title: "Audio and video input",
    description: "Upload WAV, MP3, video, or MIDI files for transcription.",
    details: ["Piano, violin, viola, cello, double bass", "Designed for real performance recordings"],
  },
  {
    icon: SlidersHorizontal,
    title: "Transcription cleanup",
    description: "Post-processing reduces ghost notes and overtones in the generated MIDI.",
    details: ["Built for practice recordings", "Instrument-specific processing"],
  },
  {
    icon: Download,
    title: "MIDI ready for editing",
    description: "Open the generated MIDI in notation software or a DAW.",
    details: ["Standard MIDI output", "Continue editing in your preferred software"],
  },
];

const testimonials = [
  { quote: "NoteDraft saved me hours of manual transcription. I recorded my practice and had clean MIDI in MuseScore minutes later.", name: "Daniel S.", role: "Piano Student" },
  { quote: "The AI cleanup is the real deal. No more chasing ghost notes, and the MIDI drops straight into Logic and just works.", name: "Jordan T.", role: "Producer & Composer" },
  { quote: "I use it to capture improv sessions before the ideas vanish. It's become a core part of my composing workflow.", name: "Elena K.", role: "Composer" },
];

const Landing = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />

    <main>
      <section className="border-b border-border">
        <div className="container grid gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-medium text-primary">Audio to editable MIDI</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Turn a performance into a working music draft</h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Upload a piano or string recording, choose the matching instrument, and download MIDI you can continue editing.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/dashboard">Open transcription</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/learn-more">Learn how it works</Link></Button>
            </div>
          </div>
          <div className="border-l-2 border-primary pl-6 sm:pl-8">
            <p className="mb-5 text-sm font-medium text-muted-foreground">A clear path from recording to score</p>
            <ol className="space-y-5">
              {["Choose your instrument and recording", "Follow transcription progress", "Download MIDI and open it in notation software"].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{index + 1}</span>
                  <span className="pt-0.5 font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-border bg-muted/40 py-14 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><h2 className="text-2xl font-semibold sm:text-3xl">See NoteDraft in action</h2><p className="mt-2 text-muted-foreground">A short walkthrough of the current audio-to-MIDI workflow.</p></div>
              <Button asChild variant="outline" size="sm"><Link to="/dashboard">Open transcription</Link></Button>
            </div>
            <div className="aspect-video overflow-hidden rounded-md border border-border bg-card">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/9A7G1vqw3ao" title="NoteDraft demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="mb-10 max-w-2xl"><h2 className="text-2xl font-semibold sm:text-3xl">Built for transcription work</h2><p className="mt-3 text-muted-foreground">The recording, the detected notes, and the editable output stay at the center of the workflow.</p></div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="border-t border-border pt-5">
                <feature.icon className="mb-4 h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{feature.details.map((detail) => <li key={detail} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40 py-14 md:py-16">
        <div className="container grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div><h2 className="text-2xl font-semibold sm:text-3xl">Built around real musicians</h2><p className="mt-4 leading-relaxed text-muted-foreground">NoteDraft started as a way to turn piano practice sessions into editable scores. It now helps composers, students, teachers, and producers capture musical ideas without starting from manual MIDI entry.</p><p className="mt-4 leading-relaxed text-muted-foreground">Use it for audition preparation, analysis, arrangement sketches, or preserving an improvisation for later work.</p></div>
          <div>
            <h3 className="text-lg font-semibold">Common uses</h3>
            <ul className="mt-4 divide-y divide-border border-y border-border text-muted-foreground">
              {["Students transcribing repertoire or etudes for analysis.", "Producers converting melodic ideas into MIDI to arrange later.", "Composers capturing improv sessions before the ideas vanish.", "Teachers creating study materials from their own playing."].map((item) => <li key={item} className="py-3">{item}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-2"><Button asChild size="lg"><Link to="/dashboard">Open transcription</Link></Button></div>
        </div>
      </section>

      <section id="testimonials" className="py-14 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="mb-9"><h2 className="text-2xl font-semibold sm:text-3xl">What musicians are saying</h2><p className="mt-2 text-muted-foreground">Feedback from students, composers, and producers using NoteDraft.</p></div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => <figure key={item.name} className="border-t border-border pt-5"><div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div><blockquote className="leading-relaxed text-muted-foreground">“{item.quote}”</blockquote><figcaption className="mt-5"><span className="font-semibold">{item.name}</span><span className="block text-sm text-muted-foreground">{item.role}</span></figcaption></figure>)}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Landing;