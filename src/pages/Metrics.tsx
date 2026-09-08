import { useEffect, useState } from "react";
import { Clock, FileAudio, TrendingUp, Loader2, Music2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMetrics, type MetricsResponse } from "@/lib/api";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";

const Metrics = () => {
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <SiteHeader context="Product metrics" actionLabel="Dashboard" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-heading text-3xl font-semibold">Transcription Metrics</h1>
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

      <Footer />
    </div>
  );
};

export default Metrics;
