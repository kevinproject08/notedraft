import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadSection from "@/components/UploadSection";
import ResultsSection from "@/components/ResultsSection";
import StatusSection from "@/components/StatusSection";
import { Music2 } from "lucide-react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Music2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">NoteDraft</h1>
              <p className="text-sm text-muted-foreground">Audio / Video → MIDI Converter</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="convert" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="convert">Convert</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>

          <TabsContent value="convert" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <UploadSection
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                error={error}
                setError={setError}
                setDownloadUrl={setDownloadUrl}
              />
              <ResultsSection
                downloadUrl={downloadUrl}
                error={error}
                isLoading={isLoading}
              />
            </div>
          </TabsContent>

          <TabsContent value="status">
            <StatusSection />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          NoteDraft – Professional audio and video to MIDI conversion
        </div>
      </footer>
    </div>
  );
};

export default Index;
