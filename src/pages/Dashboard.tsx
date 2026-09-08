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
      <SiteHeader context="Transcription workspace" actionLabel="New transcription" actionTo="/dashboard" />

      {/* Main Content */}
      <main className="container flex-1 px-4 py-10 sm:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-semibold text-primary">Audio to MIDI</p>
          <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">Create a new transcription</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">Choose an instrument, add a recording, and NoteDraft will prepare an editable MIDI result.</p>
        </div>

        <div className="grid overflow-hidden rounded-md border border-border bg-card lg:grid-cols-[1.1fr_0.9fr]">
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