import { useState } from "react";
import UploadSection from "@/components/UploadSection";
import ResultsSection from "@/components/ResultsSection";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader context="Transcription workspace" />

      <main className="container mx-auto px-4 py-8">
        <div className="grid overflow-hidden rounded-md border border-border bg-card lg:grid-cols-2">
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
