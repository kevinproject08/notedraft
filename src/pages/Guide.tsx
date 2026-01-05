import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music2, FileAudio, Download, FolderOpen, CheckCircle2, AlertCircle, ArrowLeft, Moon, Sun, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

const Guide = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Music2 className="h-6 w-6 text-primary-foreground" />
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
              <Button variant="gradient">Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/dashboard">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Complete Guide: From Audio to Sheet Music</h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step instructions for converting your NoteDraft MIDI files into beautiful sheet music.
            </p>
          </div>

          {/* Step 1: Extract ZIP */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  1
                </div>
                Extract Your Files
              </CardTitle>
              <CardDescription>Get your MIDI file from the downloaded ZIP archive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-start gap-3">
                  <FolderOpen className="h-5 w-5 text-primary mt-0.5" />
                  <div className="space-y-2 flex-1">
                    <p className="text-sm font-medium">Locate Your Download</p>
                    <p className="text-sm text-muted-foreground">
                      Find the <code className="px-2 py-0.5 rounded bg-background text-xs">NoteDraft_output.zip</code> file 
                      in your Downloads folder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <p className="font-medium">How to extract:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Windows:</strong> Right-click the ZIP file → "Extract All..." → Choose destination
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Mac:</strong> Double-click the ZIP file (it extracts automatically)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Linux:</strong> Right-click → "Extract Here" or use <code className="px-1.5 py-0.5 rounded bg-muted text-xs">unzip</code> command
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-xs text-muted-foreground">
                  <CheckCircle2 className="inline h-3 w-3 mr-1 text-success" />
                  Look for files with <code className="px-1.5 py-0.5 rounded bg-background text-[10px]">.mid</code> or 
                  <code className="px-1.5 py-0.5 rounded bg-background text-[10px] ml-1">.midi</code> extensions
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Choose Software */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  2
                </div>
                Get Music Notation Software
              </CardTitle>
              <CardDescription>Download and install software to view sheet music</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* MuseScore Option */}
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-3">
                  <Music2 className="h-6 w-6 text-primary mt-0.5" />
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="font-semibold text-base mb-1">MuseScore (Recommended)</h4>
                      <p className="text-sm text-muted-foreground">Free, open-source, professional-grade notation software</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">Why MuseScore?</p>
                      <ul className="space-y-1 ml-4 text-muted-foreground">
                        <li>✓ Completely free with no limitations</li>
                        <li>✓ Available for Windows, Mac, and Linux</li>
                        <li>✓ Professional features and beautiful output</li>
                        <li>✓ Large community and extensive documentation</li>
                      </ul>
                    </div>

                    <a href="https://musescore.org/download" target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="mt-2">
                        <Download className="mr-2 h-4 w-4" />
                        Download MuseScore
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Alternative Options */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Other Options:</p>
                <div className="grid gap-3">
                  <div className="p-3 rounded-lg border border-border/50">
                    <p className="text-sm font-medium">Sibelius</p>
                    <p className="text-xs text-muted-foreground">Professional (paid) - Industry standard</p>
                  </div>
                  <div className="p-3 rounded-lg border border-border/50">
                    <p className="text-sm font-medium">Finale</p>
                    <p className="text-xs text-muted-foreground">Professional (paid) - Powerful engraving</p>
                  </div>
                  <div className="p-3 rounded-lg border border-border/50">
                    <p className="text-sm font-medium">Flat.io</p>
                    <p className="text-xs text-muted-foreground">Web-based (freemium) - No installation needed</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-muted">
                <p className="text-xs text-muted-foreground italic">
                  <AlertCircle className="inline h-3 w-3 mr-1" />
                  NoteDraft is not affiliated with any third-party software mentioned above. These are independent tools that work with standard MIDI files.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Open MIDI */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  3
                </div>
                Open Your MIDI File
              </CardTitle>
              <CardDescription>Import the file into your notation software</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p className="font-medium">In MuseScore (or similar software):</p>
                <ol className="space-y-3 ml-4 list-decimal">
                  <li>
                    <p className="font-medium">Launch the application</p>
                    <p className="text-muted-foreground text-xs mt-1">Open MuseScore from your Applications or Start menu</p>
                  </li>
                  <li>
                    <p className="font-medium">Open the MIDI file</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Go to <strong>File → Open</strong> (or press <kbd className="px-2 py-0.5 rounded bg-muted text-[10px]">Ctrl+O</kbd> / <kbd className="px-2 py-0.5 rounded bg-muted text-[10px]">Cmd+O</kbd>)
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Navigate to your extracted MIDI file</p>
                    <p className="text-muted-foreground text-xs mt-1">Select the .mid or .midi file from step 1</p>
                  </li>
                  <li>
                    <p className="font-medium">Click "Open"</p>
                    <p className="text-muted-foreground text-xs mt-1">The software will automatically convert MIDI to notation</p>
                  </li>
                </ol>
              </div>

              <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm font-medium text-success mb-2">
                  <CheckCircle2 className="inline h-4 w-4 mr-1" />
                  Success!
                </p>
                <p className="text-xs text-muted-foreground">
                  Your sheet music should now appear on screen. You can edit, print, or export it in various formats (PDF, MusicXML, PNG, etc.)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 4: Edit & Export */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  4
                </div>
                Edit & Export (Optional)
              </CardTitle>
              <CardDescription>Customize and share your sheet music</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p className="font-medium">Common actions:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Edit notes:</strong> Click on any note to change pitch, duration, or articulation
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Add dynamics:</strong> Use the palette to add crescendos, accents, and expression marks
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Adjust layout:</strong> Change page size, margins, and spacing for better readability
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <div>
                      <strong>Export as PDF:</strong> File → Export → PDF for printing or sharing
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-sm font-medium mb-2">File won't open?</p>
                  <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                    <li>• Make sure you extracted the ZIP completely</li>
                    <li>• Verify the file has a .mid or .midi extension</li>
                    <li>• Try opening with a different notation software</li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-sm font-medium mb-2">Notes look wrong?</p>
                  <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                    <li>• MIDI transcription may require manual cleanup</li>
                    <li>• Check tempo, time signature, and key signature settings</li>
                    <li>• Use quantization tools to align notes to the beat</li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-sm font-medium mb-2">Need more help?</p>
                  <p className="text-xs text-muted-foreground">
                    Check the documentation for your notation software, or try re-processing your audio with different settings in NoteDraft.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center p-8 rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-background border border-border">
            <h3 className="text-2xl font-bold mb-3">Ready to Convert More Audio?</h3>
            <p className="text-muted-foreground mb-6">Go back to the dashboard to process another file</p>
            <Link to="/dashboard">
              <Button size="lg" variant="gradient">
                <FileAudio className="mr-2 h-4 w-4" />
                Convert Another File
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 NoteDraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Guide;