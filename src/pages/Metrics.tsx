import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Music2, Clock, FileAudio, TrendingUp, ArrowLeft, Loader2, Moon, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMetrics, type MetricsResponse } from "@/lib/api";
import { useTheme } from "next-themes";

const Metrics = () => {
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme, setTheme } = useTheme();

  const fetchMetrics = async () => {
    try {
      setIsLoading(true);
      const data = await getMetrics();
      setMetrics(data);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    // Optional: Poll for updates every 10 seconds
    const interval = setInterval(fetchMetrics, 10000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load metrics</p>
      </div>
    );
  }

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
                <p className="text-xs text-muted-foreground">Metrics</p>
              </div>
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
              <Link to="/dashboard">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Transcription Metrics</h2>
          <p className="text-muted-foreground">Overview of all audio-to-MIDI conversions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Minutes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.total_minutes.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Audio transcribed
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pieces</CardTitle>
              <FileAudio className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.total_pieces}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Files processed
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
              <Music2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.total_notes}</div>
              <p className="text-xs text-muted-foreground mt-1">
                MIDI notes extracted
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Minutes</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {metrics.total_pieces > 0 ? (metrics.total_minutes / metrics.total_pieces).toFixed(1) : '0.0'}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Per piece
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle>About These Metrics</CardTitle>
            <CardDescription>Understanding your conversion statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm">
                <strong>Total Minutes:</strong> Combined duration of all audio files processed
              </li>
              <li className="text-sm">
                <strong>Total Pieces:</strong> Number of files successfully converted to MIDI
              </li>
              <li className="text-sm">
                <strong>Total Notes:</strong> Total MIDI notes extracted from all pieces
              </li>
              <li className="text-sm">
                <strong>Avg Minutes:</strong> Average duration per converted piece
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              Metrics update automatically every 10 seconds
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Metrics;
