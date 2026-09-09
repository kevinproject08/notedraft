import { useState } from "react";
import UploadSection from "@/components/UploadSection";
import ResultsSection from "@/components/ResultsSection";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Workspace" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Transcribe a recording</h1>
        <p className="prose-measure mt-2 text-muted-foreground">
          Pick a file, choose the instrument you played, and download the MIDI when it finishes.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-12">
          <div className="rounded-md border border-border bg-card p-5 sm:p-6">
            <UploadSection
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              error={error}
              setError={setError}
              setDownloadUrl={setDownloadUrl}
            />
          </div>

          <div className="lg:border-l lg:border-border lg:pl-8">
            <ResultsSection downloadUrl={downloadUrl} error={error} isLoading={isLoading} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
