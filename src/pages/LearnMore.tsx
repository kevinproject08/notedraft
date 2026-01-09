import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, CheckCircle2, Brain, AudioLines, FileAudio, Moon, Sun, BarChart3, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";

const LearnMore = () => {
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
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium mb-4">
              <Sparkles className="inline h-4 w-4 mr-2" />
              Learn About Audio-to-MIDI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Transform Your Audio into MIDI with AI
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how NoteDraft uses advanced AI to convert your audio recordings into professional MIDI files in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* What is Audio-to-MIDI */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">What is Audio-to-MIDI Conversion?</h2>
              <p className="text-lg text-muted-foreground">
                Audio-to-MIDI conversion is the process of analyzing audio recordings and extracting the musical notes, 
                timing, and dynamics to create a MIDI file that can be edited, arranged, and played back with any instrument sound.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <AudioLines className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Audio Input</CardTitle>
                  <CardDescription>
                    Your audio file contains continuous sound waves - a recording of actual instruments, voices, or melodies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Music2 className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>MIDI Output</CardTitle>
                  <CardDescription>
                    MIDI is digital data representing individual notes, their timing, velocity, and duration - perfect for editing and arrangement.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">How NoteDraft Works</h2>
              <p className="text-lg text-muted-foreground">
                Our AI-powered technology breaks down the transcription process into precise steps
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <div>
                      <CardTitle>Audio Analysis</CardTitle>
                      <CardDescription className="mt-2">
                        Our AI analyzes the frequency spectrum of your audio file, identifying individual pitches and their characteristics.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-accent">2</span>
                    </div>
                    <div>
                      <CardTitle>Note Detection</CardTitle>
                      <CardDescription className="mt-2">
                        Advanced algorithms detect the onset, duration, and velocity of each note, even in complex polyphonic recordings.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-success">3</span>
                    </div>
                    <div>
                      <CardTitle>MIDI Generation</CardTitle>
                      <CardDescription className="mt-2">
                        The detected notes are converted into MIDI format with proper timing, quantization, and musical structure.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">4</span>
                    </div>
                    <div>
                      <CardTitle>Quality Optimization</CardTitle>
                      <CardDescription className="mt-2">
                        Post-processing cleans up the MIDI data, removing artifacts and optimizing for professional use.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Perfect For</h2>
              <p className="text-lg text-muted-foreground">
                Musicians, composers, and producers use NoteDraft for various creative workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Composers & Arrangers</CardTitle>
                  <CardDescription>
                    Quickly transcribe musical ideas hummed or played on an instrument into editable notation for orchestration and arrangement.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Music2 className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Music Producers</CardTitle>
                  <CardDescription>
                    Convert audio samples and loops into MIDI to experiment with different sounds and create variations effortlessly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <FileAudio className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Music Students</CardTitle>
                  <CardDescription>
                    Analyze and learn from recordings by converting them to MIDI, making it easier to study chord progressions and melodies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>Live Performers</CardTitle>
                  <CardDescription>
                    Transform rehearsal recordings into MIDI backing tracks or create digital scores from live performances.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Why Choose NoteDraft?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    What used to take hours of manual transcription now takes seconds with AI acceleration.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                  <CardTitle>High Accuracy</CardTitle>
                  <CardDescription>
                    Advanced AI models ensure precise note detection, even with complex polyphonic audio.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Professional Quality</CardTitle>
                  <CardDescription>
                    Get clean, production-ready MIDI files that work seamlessly with all major DAWs and notation software.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What audio formats are supported?</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    NoteDraft supports WAV, MP3, MP4, M4A, FLAC, and most common audio and video formats. The AI works best with clear, high-quality recordings.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How accurate is the transcription?</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Accuracy depends on audio quality and complexity. Simple monophonic melodies achieve near-perfect accuracy, 
                    while complex polyphonic music may require minor manual adjustments in your DAW or notation software.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can I transcribe songs with multiple instruments?</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Yes! Our AI can detect polyphonic audio with multiple notes playing simultaneously. However, 
                    isolated or solo instrument recordings will generally produce the best results.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What can I do with the MIDI file?</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    MIDI files can be imported into any DAW (Logic Pro, Ableton, FL Studio, etc.) or notation software (MuseScore, Sibelius, Finale) 
                    for editing, arranging, changing instruments, creating sheet music, or further production.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Is there a file size limit?</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    File size limits depend on your plan. The free tier supports files up to 50MB, 
                    while premium plans allow larger files. Longer files may take a bit more time to process.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Start converting your audio to MIDI in seconds. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" variant="gradient" className="text-lg px-8">
                  Try It Now
                </Button>
              </Link>
              <Link to="/guide">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Complete Guide
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
                <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
                <span className="font-bold">NoteDraft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional audio-to-MIDI conversion powered by AI
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/learn-more" className="hover:text-foreground">Learn More</Link></li>
                <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/guide" className="hover:text-foreground">Complete Guide</Link></li>
                <li><a href="#" className="hover:text-foreground">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
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

export default LearnMore;
