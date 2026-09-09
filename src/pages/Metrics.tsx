import { useEffect, useState } from "react";
import { Clock, FileAudio, TrendingUp, Loader2, Music2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMetrics, type MetricsResponse } from "@/lib/api";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Metrics = () => {
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const integerFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const decimalFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

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
      <SiteHeader actionLabel="Open transcription" />

      {/* Main Content */}
      <main className="container px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-semibold">Transcription metrics</h1>
          <p className="text-muted-foreground">Overview of all audio-to-MIDI conversions</p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Minutes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{decimalFormatter.format(metrics.total_minutes)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Audio transcribed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pieces</CardTitle>
              <FileAudio className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{integerFormatter.format(metrics.total_pieces)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Files processed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
              <Music2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{integerFormatter.format(metrics.total_notes)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                MIDI notes extracted
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Minutes</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">
                {decimalFormatter.format(metrics.total_pieces > 0 ? metrics.total_minutes / metrics.total_pieces : 0)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Per piece
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="border-t border-border pt-8">
          <h2 className="text-lg font-semibold">About these metrics</h2>
          <p className="mt-1 text-sm text-muted-foreground">How the conversion totals are counted.</p>
          <div className="mt-5">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metrics;
