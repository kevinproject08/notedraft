import { Link } from "react-router-dom";
import { Clock, Download, FileMusic, Layers, Music, Shield, SlidersHorizontal, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const features = [
  { icon: Music, title: "Instrument-specific transcription", description: "Choose piano, violin, viola, cello, or double bass before processing." },
  { icon: Target, title: "Note detection", description: "The transcription pipeline identifies note timing, pitch, and duration from a recording." },
  { icon: FileMusic, title: "Broad format support", description: "Upload common audio, video, and MIDI formats and receive standard MIDI output." },
  { icon: Clock, title: "Time range selection", description: "Select a portion of the recording after a file is loaded." },
  { icon: Shield, title: "Guest workflow", description: "Start a transcription without creating an account." },
  { icon: Layers, title: "Polyphonic passages", description: "Process recordings containing overlapping notes from the selected instrument." },
  { icon: Download, title: "Downloadable output", description: "Download the generated MIDI and related output files in a ZIP archive." },
  { icon: SlidersHorizontal, title: "Processing feedback", description: "Follow upload, processing, progress, completion, cancellation, and error states." },
];

const instruments = [
  { name: "Piano", value: "piano" }, { name: "Violin", value: "violin" }, { name: "Viola", value: "viola" }, { name: "Cello", value: "cello" }, { name: "Double Bass", value: "bass" },
];

const Features = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="border-b border-border py-14 md:py-16">
        <div className="container px-4 sm:px-6"><div className="max-w-3xl"><p className="text-sm font-medium text-primary">Product</p><h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Tools for turning recordings into MIDI</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">NoteDraft combines instrument selection, file processing, progress tracking, and downloadable output in one focused workflow.</p><Button asChild size="lg" className="mt-7"><Link to="/dashboard">Open transcription</Link></Button></div></div>
      </section>

      <section className="border-b border-border py-14">
        <div className="container px-4 sm:px-6"><h2 className="text-2xl font-semibold">Features</h2><div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature) => <article key={feature.title} className="border-t border-border pt-5"><feature.icon className="h-5 w-5 text-primary" /><h3 className="mt-4 font-semibold">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p></article>)}</div></div>
      </section>

      <section className="border-b border-border bg-muted/40 py-14">
        <div className="container px-4 sm:px-6"><h2 className="text-2xl font-semibold">Supported instruments</h2><p className="mt-3 max-w-2xl text-muted-foreground">Select an instrument to open the transcription workspace with its model ready.</p><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">{instruments.map((instrument) => <Button key={instrument.value} asChild variant="outline" className="h-14"><Link to={`/dashboard?instrument=${instrument.value}`}><Music />{instrument.name}</Link></Button>)}</div></div>
      </section>

      <section className="py-14">
        <div className="container px-4 sm:px-6"><h2 className="text-2xl font-semibold">Recording recommendations</h2><p className="mt-3 text-muted-foreground">Clear solo-instrument recordings are the best starting point. Larger and longer files can require more processing time.</p><dl className="mt-8 grid gap-6 sm:grid-cols-3"><div className="border-t border-border pt-4"><dt className="text-sm text-muted-foreground">Recommended file size</dt><dd className="mt-1 text-3xl font-semibold">50 MB</dd></div><div className="border-t border-border pt-4"><dt className="text-sm text-muted-foreground">Recommended duration</dt><dd className="mt-1 text-3xl font-semibold">10 min</dd></div><div className="border-t border-border pt-4"><dt className="text-sm text-muted-foreground">Instrument models</dt><dd className="mt-1 text-3xl font-semibold">5</dd></div></dl><div className="mt-10 flex flex-wrap gap-3"><Button asChild><Link to="/dashboard">Open transcription</Link></Button><Button asChild variant="outline"><Link to="/learn-more">Learn how it works</Link></Button></div></div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Features;