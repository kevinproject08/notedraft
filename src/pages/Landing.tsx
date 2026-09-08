import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, FileAudio, Download, CheckCircle2, Music, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="staff-lines absolute inset-x-0 bottom-8 h-16 opacity-60" aria-hidden="true" />
        <div className="container relative z-10 px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center space-y-7">
            <p className="text-sm font-semibold text-primary">Audio-to-MIDI transcription</p>
            
            <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Turn a performance into editable MIDI
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Transcribe piano, violin, viola, cello, and double bass recordings into MIDI for arranging, notation, and production.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg">
                  Start a transcription
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Waveform Animation */}
            <div className="mx-auto mt-10 flex h-20 max-w-2xl items-center justify-center gap-1 border-y border-border bg-background/70 px-3" aria-label="Audio waveform preview">
              {[14,20,30,42,55,35,22,46,64,48,28,18,38,58,72,50,34,24,44,60,46,30,18,35,54,68,44,28,16,30,48,36,24,18,26,38,30,20,14,10].map((height, i) => (
                <div
                  key={i}
                  className="w-1 rounded-sm bg-primary/70 sm:w-1.5"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16 sm:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">See NoteDraft in Action</h2>
            <p className="text-muted-foreground">Watch a quick demo of the audio-to-MIDI workflow.</p>
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border bg-muted">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/9A7G1vqw3ao"
                title="NoteDraft Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="border-y border-border bg-secondary/35 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileAudio className="h-5 w-5 text-primary" />
                  Audio & Video Input
                </CardTitle>
                <CardDescription>
                  Upload WAV, MP3, or video files and let NoteDraft handle the transcription pipeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Piano, violin, viola, cello, double bass
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Handles real-world performance recordings
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  AI-Powered Cleanup
                </CardTitle>
                <CardDescription>
                  Custom post-processing filters out ghost notes and overtones before you ever open the MIDI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Designed for real practice recordings
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Built from actual student use cases
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  MIDI Ready for Editing
                </CardTitle>
                <CardDescription>
                  Export MIDI that drops straight into MuseScore, Logic, Ableton, or your favorite DAW.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Clean tracks instead of clustered note spam
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Save hours of manual transcription work
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="space-y-6">
              <h2 className="flex items-center gap-3 font-heading text-3xl font-semibold sm:text-4xl">
                <Music className="h-8 w-8 text-primary" />
                Built Around Real Musicians
              </h2>
              <p className="text-lg text-muted-foreground">
                NoteDraft started as a way to turn real piano practice sessions into editable scores. It now helps
                composers, students, and teachers capture ideas faster without getting stuck in manual MIDI entry.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're preparing for auditions, sketching a new piece, or documenting an improvisation,
                NoteDraft turns raw audio into something you can keep refining.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Perfect For</CardTitle>
                <CardDescription>Real use cases instead of demo-perfect recordings.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Students</span> transcribing repertoire or etudes for analysis.</p>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Producers</span> converting melodic ideas into MIDI to arrange later.</p>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Composers</span> capturing improv sessions before the ideas vanish.</p>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Teachers</span> creating quick study materials from their own playing.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link to="/dashboard">
              <Button size="lg">
                Start Converting Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-border bg-secondary/35 py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">What Musicians Are Saying</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real feedback from students, composers, and producers using NoteDraft.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Quote className="h-6 w-6 text-primary mb-2" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "NoteDraft saved me hours of manual transcription. I recorded my practice and had clean MIDI in MuseScore minutes later."
                  </p>
                  <div>
                    <p className="font-semibold">Daniel S.</p>
                    <p className="text-sm text-muted-foreground">Piano Student</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Quote className="h-6 w-6 text-primary mb-2" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "The AI cleanup is the real deal. No more chasing ghost notes, and the MIDI drops straight into Logic and just works."
                  </p>
                  <div>
                    <p className="font-semibold">Jordan T.</p>
                    <p className="text-sm text-muted-foreground">Producer & Composer</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Quote className="h-6 w-6 text-primary mb-2" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "I use it to capture improv sessions before the ideas vanish. It's become a core part of my composing workflow."
                  </p>
                  <div>
                    <p className="font-semibold">Elena K.</p>
                    <p className="text-sm text-muted-foreground">Composer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;