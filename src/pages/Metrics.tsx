import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Music2, Clock, FileAudio, TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MetricsData {
  totalTranscriptions: number;
  totalMinutes: number;
  successfulTranscriptions: number;
  averageDuration: number;
}

const Metrics = () => {
  const [metrics, setMetrics] = useState<MetricsData>({
    totalTranscriptions: 0,
    totalMinutes: 0,
    successfulTranscriptions: 0,
    averageDuration: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const { data: transcriptions, error } = await supabase
        .from("transcriptions")
        .select("*");

      if (error) throw error;

      if (transcriptions) {
        const successful = transcriptions.filter(t => t.status === "completed");
        
        // Calculate total duration in seconds from transcriptions
        // If start/end seconds are available, use those; otherwise estimate from file size
        const totalSeconds = transcriptions.reduce((acc, t) => {
          if (t.start_seconds !== null && t.end_seconds !== null) {
            return acc + (t.end_seconds - t.start_seconds);
          }
          // Rough estimate: 1MB ≈ 1 minute of audio
          return acc + (t.file_size / (1024 * 1024)) * 60;
        }, 0);

        const totalMinutes = Math.round(totalSeconds / 60);
        const avgDuration = transcriptions.length > 0 
          ? Math.round(totalSeconds / transcriptions.length / 60) 
          : 0;

        setMetrics({
          totalTranscriptions: transcriptions.length,
          totalMinutes,
          successfulTranscriptions: successful.length,
          averageDuration: avgDuration,
        });
      }
    } catch (error) {
      console.error("Error fetching metrics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background sticky top-0 z-10">
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

            <Link to="/dashboard">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
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
              <div className="text-2xl font-bold">{metrics.totalMinutes}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Audio transcribed
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Transcriptions</CardTitle>
              <FileAudio className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.totalTranscriptions}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Files processed
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.successfulTranscriptions}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Completed successfully
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.averageDuration}m</div>
              <p className="text-xs text-muted-foreground mt-1">
                Per transcription
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CardHeader>
            <CardTitle>About These Metrics</CardTitle>
            <CardDescription>
              These statistics represent all transcriptions processed through NoteDraft
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-primary/10 mt-1">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Total Minutes</p>
                <p className="text-sm text-muted-foreground">
                  Calculated from audio file durations or estimated from file sizes
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-accent/10 mt-1">
                <FileAudio className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="font-medium">Transcriptions Count</p>
                <p className="text-sm text-muted-foreground">
                  Total number of audio files uploaded and processed
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-success/10 mt-1">
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="font-medium">Success Rate</p>
                <p className="text-sm text-muted-foreground">
                  Percentage of transcriptions completed without errors: {metrics.totalTranscriptions > 0 ? Math.round((metrics.successfulTranscriptions / metrics.totalTranscriptions) * 100) : 0}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Metrics;
