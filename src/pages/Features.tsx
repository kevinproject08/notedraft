import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Target, FileMusic, Clock, Shield, Layers, Download, Settings, BarChart3, Music } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import notedraftLogo from "@/assets/notedraft-logo.png";
import Footer from "@/components/Footer";

const Features = () => {
  const { theme, setTheme } = useTheme();

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Convert audio to MIDI in seconds, not minutes. Our optimized AI pipeline delivers results faster than traditional methods.",
    },
    {
      icon: Target,
      title: "High Accuracy Detection",
      description: "Advanced neural networks detect notes with exceptional precision, capturing nuances that other tools miss.",
    },
    {
      icon: FileMusic,
      title: "Multiple Format Support",
      description: "Upload MP3, WAV, FLAC, and more. Export to standard MIDI format compatible with all major DAWs.",
    },
    {
      icon: Clock,
      title: "Time Range Selection",
      description: "Process specific sections of your audio by setting custom start and end times for targeted transcription.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your audio files are processed securely and never stored permanently. Your music remains yours.",
    },
    {
      icon: Layers,
      title: "Polyphonic Transcription",
      description: "Handle complex multi-note passages with ease. Our AI separates overlapping notes accurately.",
    },
    {
      icon: Download,
      title: "Instant Downloads",
      description: "Get your MIDI files immediately after processing. No waiting, no email verification required.",
    },
    {
      icon: Settings,
      title: "No Account Required",
      description: "Start transcribing right away without creating an account. Just upload and convert.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border/50 bg-background hover:bg-accent transition-colors cursor-pointer">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">NoteDraft</span>
          </Link>
          <div className="flex items-center gap-4">
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
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="text-primary"> Music Creators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Everything you need to transform your audio recordings into professional MIDI files, 
            powered by cutting-edge AI technology.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="gap-2">
              <Zap className="h-5 w-5" />
              Try It Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card/80 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Recommendations Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Technical Recommendations</h2>
          <p className="text-center text-muted-foreground mb-12">Larger files and longer durations may take longer transcription times</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50MB</div>
              <p className="text-muted-foreground">Recommended file size</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10min</div>
              <p className="text-muted-foreground">Recommended audio duration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Supported formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Transform your audio into MIDI today. No account required, no software to install.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg">Start Converting</Button>
            </Link>
            <Link to="/learn-more">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
