import { Button } from "@/components/ui/button";
import { Download, FileCheck, Loader2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ResultsSectionProps {
  downloadUrl: string | null;
  error: string | null;
  isLoading: boolean;
}

const ResultsSection = ({ downloadUrl, error, isLoading }: ResultsSectionProps) => {
  return (
    <section aria-labelledby="result-heading" className="space-y-4">
      <div>
        <h2 id="result-heading" className="text-lg font-semibold">
          3. Result
        </h2>
        <p className="prose-measure mt-1 text-sm text-muted-foreground">
          Your MIDI file arrives in a ZIP archive with the related output files.
        </p>
      </div>

      {isLoading && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Working on your recording…
        </p>
      )}

      {!isLoading && !downloadUrl && !error && (
        <p className="text-sm text-muted-foreground">Nothing yet. Choose a file and start a transcription.</p>
      )}

      {!isLoading && error && (
        <div className="flex items-start gap-2 text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <div>
            <p className="font-medium text-destructive">Transcription failed</p>
            <p className="break-words text-muted-foreground">{error}</p>
            <p className="mt-1 text-muted-foreground">You can adjust your file and try again.</p>
          </div>
        </div>
      )}

      {!isLoading && downloadUrl && (
        <div className="space-y-5">
          <p className="flex items-center gap-2 text-sm font-medium text-success">
            <FileCheck className="h-4 w-4" />
            Transcription complete
          </p>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={downloadUrl} download="NoteDraft_output.zip">
              <Download className="h-4 w-4" />
              Download MIDI (.zip)
            </a>
          </Button>

          <div className="space-y-3 border-t border-border pt-5">
            <h3 className="text-sm font-semibold">Open it as sheet music</h3>
            <ol className="prose-measure list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
              <li>Extract the ZIP and find the .mid file.</li>
              <li>Install notation software, for example MuseScore from musescore.org.</li>
              <li>Open the .mid file with File → Open, then edit or export as PDF.</li>
            </ol>
            <Button asChild variant="outline" size="sm">
              <Link to="/guide">Read the full guide</Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              NoteDraft is not affiliated with any third-party software. MuseScore is mentioned as an example only.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultsSection;
