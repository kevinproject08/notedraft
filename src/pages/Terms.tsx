import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";
import Footer from "@/components/Footer";

const Terms = () => {
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using NoteDraft ("the Service"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              NoteDraft provides an AI-powered audio and video to MIDI conversion service. Users can upload 
              audio or video files containing musical performances, and the Service will process these files 
              to generate MIDI output files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Only upload content that you own or have the right to use</li>
              <li>Not upload copyrighted material without proper authorization</li>
              <li>Not use the Service for any unlawful purpose</li>
              <li>Not attempt to reverse engineer or exploit the Service</li>
              <li>Not upload malicious files or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to the audio/video content you upload and the MIDI files generated from 
              your content. NoteDraft does not claim ownership of your uploaded files or generated outputs. 
              The NoteDraft service, including its technology, branding, and interface, remains the property 
              of NoteDraft.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Uploaded files are processed for the sole purpose of providing the transcription service. 
              We do not sell or share your uploaded content with third parties. Files may be temporarily 
              stored during processing and are deleted after a reasonable period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service is provided "as is" without warranties of any kind. NoteDraft is not liable for 
              any damages arising from your use of the Service, including but not limited to inaccuracies 
              in transcription output, data loss, or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Service Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              NoteDraft reserves the right to modify, suspend, or discontinue the Service at any time 
              without prior notice. We may also update these Terms of Service, and continued use of the 
              Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend access to the Service for users who violate 
              these Terms of Service or engage in behavior that is harmful to other users or the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms of Service, please contact us through our{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
