import { Button } from "@/components/ui/button";
import { Download, FileCheck, AudioLines, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ResultsSectionProps {
  downloadUrl: string | null;
  error: string | null;
  isLoading: boolean;
}

const ResultsSection = ({ downloadUrl, error, isLoading }: ResultsSectionProps) => {
  return (
    <section className="min-h-[32rem] border-t border-border bg-secondary/25 lg:border-l lg:border-t-0" aria-labelledby="results-heading">
      <div className="border-b border-border p-5 sm:p-6">
        <h2 id="results-heading" className="flex items-center gap-2 font-heading text-xl font-semibold">
          <FileCheck className="h-5 w-5" />
          Results
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Download your converted MIDI file and related outputs
        </p>
      </div>
      <div className="p-5 sm:p-6">
        {isLoading && (
          <div className="flex min-h-80 flex-col items-center justify-center space-y-4 text-center" aria-live="polite">
            <div className="staff-lines flex h-20 w-full max-w-sm items-center justify-center rounded-md bg-background">
              <AudioLines className="h-8 w-8 animate-pulse text-primary" />
            </div>
            <p className="font-heading text-base font-semibold">Transcribing audio</p>
            <p className="text-sm text-muted-foreground">Detecting notes and rhythm…</p>
          </div>
        )}

        {!isLoading && !downloadUrl && !error && (
          <div className="flex min-h-80 flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
              <Download className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="font-heading text-base font-semibold text-foreground">Your result will appear here</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add a recording and start the transcription.
              </p>
            </div>
          </div>
        )}

        {!isLoading && error && (
          <div className="flex min-h-80 flex-col items-center justify-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-destructive/10">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <div className="text-center space-y-2">
              <p className="font-heading text-base font-semibold text-destructive">Transcription failed</p>
              <p className="max-w-sm break-words px-4 text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        )}

        {!isLoading && downloadUrl && (
          <div className="space-y-4">
            <div className="border-l-2 border-success bg-success/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="h-5 w-5 text-success" />
                <p className="text-sm font-semibold text-success">Transcription complete</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Your MIDI file and related outputs are ready to download.
              </p>
            </div>

            <a href={downloadUrl} download="NoteDraft_output.zip" className="block">
              <Button className="w-full" size="lg" variant="default">
                <Download className="mr-2 h-4 w-4" />
                Download Results (.zip)
              </Button>
            </a>

            <div className="space-y-1 bg-muted/70 p-4">
              <p className="text-xs font-medium text-foreground">What's included:</p>
              <ul className="text-xs text-muted-foreground space-y-0.5 ml-4 list-disc">
                <li>Generated MIDI file</li>
                <li>Related output files</li>
                <li>Processing metadata</li>
              </ul>
            </div>

            <div className="space-y-3 border-t border-border pt-5">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <FileCheck className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-sm font-semibold text-foreground">Next Step: View Your Sheet Music</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your MIDI file can be opened in any music notation software to view and edit as sheet music. 
                    A popular free option is music notation software like MuseScore.
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p className="font-medium text-foreground">Quick steps:</p>
                    <ol className="space-y-1 ml-4 list-decimal">
                      <li>Extract the MIDI file from the downloaded ZIP</li>
                      <li>Download and install music notation software (e.g., MuseScore from musescore.org)</li>
                      <li>Open the software and use File → Open to load your MIDI file</li>
                      <li>View and edit your sheet music!</li>
                    </ol>
                  </div>
                  <Link to="/guide" className="block mt-3">
                    <Button variant="outline" size="sm" className="w-full">
                      View Complete Guide
                    </Button>
                  </Link>
                  <p className="text-[10px] italic text-muted-foreground/70 mt-2">
                    Note: NoteDraft is not affiliated with any third-party software. MuseScore is mentioned as an example only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;
