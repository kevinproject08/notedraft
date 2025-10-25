import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileCheck, Loader2, AlertCircle } from "lucide-react";

interface ResultsSectionProps {
  downloadUrl: string | null;
  error: string | null;
  isLoading: boolean;
}

const ResultsSection = ({ downloadUrl, error, isLoading }: ResultsSectionProps) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          Results
        </CardTitle>
        <CardDescription>
          Download your converted MIDI file and related outputs
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Processing your file...</p>
            <p className="text-xs text-muted-foreground">This may take a few moments</p>
          </div>
        )}

        {!isLoading && !downloadUrl && !error && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
            <div className="p-4 rounded-full bg-muted">
              <Download className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">No output yet</p>
              <p className="text-xs text-muted-foreground mt-1">
                Upload a file and click Process to get started
              </p>
            </div>
          </div>
        )}

        {!isLoading && error && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="p-4 rounded-full bg-destructive/10">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-destructive">Processing failed</p>
              <p className="text-xs text-muted-foreground px-4">{error}</p>
            </div>
          </div>
        )}

        {!isLoading && downloadUrl && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="h-5 w-5 text-success" />
                <p className="text-sm font-medium text-success">Processing complete!</p>
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

            <div className="p-3 rounded-lg bg-muted space-y-1">
              <p className="text-xs font-medium text-foreground">What's included:</p>
              <ul className="text-xs text-muted-foreground space-y-0.5 ml-4 list-disc">
                <li>Generated MIDI file</li>
                <li>Related output files</li>
                <li>Processing metadata</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsSection;
