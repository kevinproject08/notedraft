import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2, Zap, FileAudio, Download, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Music2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">NoteDraft</span>
          </Link>
          <div className="flex items-center gap-3">
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
              <Link to="#how-it-works">
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

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple, fast, and accurate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileAudio className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>1. Upload</CardTitle>
                <CardDescription>
                  Upload your audio or video file
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>2. Process</CardTitle>
                <CardDescription>
                  AI analyzes and transcribes to MIDI
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-success" />
                </div>
                <CardTitle>3. Download</CardTitle>
                <CardDescription>
                  Get your MIDI file instantly
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg">Everything you need for professional transcription</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Process files in seconds with AI acceleration" },
              { icon: CheckCircle2, title: "High Accuracy", description: "Advanced AI ensures precise note detection" },
              { icon: FileAudio, title: "Multiple Formats", description: "Support for WAV, MP3, MP4, and more" },
              { icon: Music2, title: "Range Selection", description: "Choose specific sections to transcribe" },
              { icon: Download, title: "Instant Download", description: "Get your MIDI files immediately" },
              { icon: Sparkles, title: "Clean Output", description: "Professional-quality MIDI files" },
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Musicians */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">For Musicians & Composers</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're transcribing live recordings, converting audio sketches, or analyzing musical ideas,
              NoteDraft gives you the tools to work faster and more efficiently.
            </p>
            <div className="pt-6">
              <Link to="/dashboard">
                <Button size="lg" variant="gradient">
                  Start Converting Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music2 className="h-6 w-6 text-primary" />
                <span className="font-bold">NoteDraft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional audio-to-MIDI conversion powered by AI
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-foreground">How It Works</a></li>
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Docs</a></li>
                <li><a href="#" className="hover:text-foreground">API</a></li>
                <li><a href="#" className="hover:text-foreground">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 NoteDraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;