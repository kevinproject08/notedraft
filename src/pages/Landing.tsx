import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, FileAudio, Download, CheckCircle2, Sparkles, Moon, Sun, BarChart3, Music, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";
import Footer from "@/components/Footer";

const Landing = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border/50 bg-background hover:bg-accent transition-colors cursor-pointer">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">NoteDraft</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/metrics">
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Metrics
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/dashboard">
              <Button variant="gradient">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium mb-4">
              <Sparkles className="inline h-4 w-4 mr-2" />
              AI-Powered Transcription
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Audio into MIDI in Seconds
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional audio-to-MIDI conversion powered by AI. Perfect for musicians, composers, and producers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" variant="gradient" className="text-lg px-8">
                  Upload Audio
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Waveform Animation */}
            <div className="mt-12 flex items-end justify-center gap-1 h-24">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-primary to-accent rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 50}ms`,
                    animationDuration: `${1000 + Math.random() * 1000}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">See NoteDraft in Action</h2>
            <p className="text-muted-foreground">Watch a quick demo of the audio-to-MIDI workflow.</p>
            <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-xl" style={{ paddingBottom: "56.25%" }}>
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
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
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
                    Piano, ensemble, and more
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Handles real-world performance recordings
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
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

            <Card className="hover:shadow-xl transition-shadow">
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold flex items-center gap-3">
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
                  <p className="text-muted-foreground">🎓 Students transcribing repertoire or etudes for analysis.</p>
                  <p className="text-muted-foreground">🎧 Producers converting melodic ideas into MIDI to arrange later.</p>
                  <p className="text-muted-foreground">🎼 Composers capturing improv sessions before the ideas vanish.</p>
                  <p className="text-muted-foreground">🎻 Teachers creating quick study materials from their own playing.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link to="/dashboard">
              <Button size="lg" variant="gradient">
                Start Converting Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">What Musicians Are Saying</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real feedback from students, composers, and producers using NoteDraft.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-shadow">
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

              <Card className="hover:shadow-xl transition-shadow">
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
                    "The AI cleanup is the real deal. No more chasing ghost notes — the MIDI drops straight into Logic and just works."
                  </p>
                  <div>
                    <p className="font-semibold">Jordan T.</p>
                    <p className="text-sm text-muted-foreground">Producer & Composer</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
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