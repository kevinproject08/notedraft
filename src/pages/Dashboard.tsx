import { useState } from "react";
import UploadSection from "@/components/UploadSection";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader actionLabel="" />

      {/* Main Content */}
      <main className="container flex-1 px-4 py-10 sm:px-6">
        <div className="mb-7 max-w-2xl">
          <h1 className="text-3xl font-semibold">Transcribe a recording</h1>
          <p className="mt-2 text-muted-foreground">Choose the matching instrument, add a file, and follow its progress to a downloadable MIDI result.</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
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

export default Dashboard;