import { useState } from "react";
import { Link } from "react-router-dom";
import { Music2, Moon, Sun, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import UploadSection from "@/components/UploadSection";
import ResultsSection from "@/components/ResultsSection";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Music2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">NoteDraft</h1>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
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
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to NoteDraft!</h2>
          <p className="text-muted-foreground">Upload a new file to convert to MIDI</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
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

        {/* Transcription History - Coming Soon */}
        <div className="border-t border-border pt-8">
          <h3 className="text-2xl font-bold mb-4">Transcription History</h3>
          <div className="bg-card/30 rounded-lg p-12 text-center">
            <Music2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Your transcription history will appear here
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;