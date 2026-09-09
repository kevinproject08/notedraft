import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMetrics, type MetricsResponse } from "@/lib/api";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const numberFormat = new Intl.NumberFormat("en-US");
const decimalFormat = new Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const Metrics = () => {
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchMetrics = async () => {
    try {
      const data = await getMetrics();
      setMetrics(data);
      setHasError(false);
    } catch (error) {
      console.error("Error fetching metrics:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    // Poll for updates every 10 seconds
    const interval = setInterval(fetchMetrics, 10000);
    return () => clearInterval(interval);
  }, []);

  const stats = metrics
    ? [
        {
          label: "Minutes transcribed",
          value: decimalFormat.format(metrics.total_minutes),
          hint: "Combined length of every recording processed",
        },
        {
          label: "Recordings",
          value: numberFormat.format(metrics.total_pieces),
          hint: "Files successfully converted to MIDI",
        },
        {
          label: "Notes detected",
          value: numberFormat.format(metrics.total_notes),
          hint: "MIDI notes written across all outputs",
        },
        {
          label: "Average length",
          value:
            metrics.total_pieces > 0
              ? `${decimalFormat.format(metrics.total_minutes / metrics.total_pieces)} min`
              : "0.0 min",
          hint: "Per recording",
        },
      ]
    : [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Metrics" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Transcription totals</h1>
        <p className="prose-measure mt-2 text-muted-foreground">
          Combined activity across every NoteDraft transcription. Updates every 10 seconds.
        </p>

        {isLoading && !metrics && (
          <p className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading totals…
          </p>
        )}

        {!isLoading && !metrics && (
          <div className="mt-10 space-y-3">
            <p className="text-sm text-destructive">Totals could not be loaded right now.</p>
            <Button variant="outline" size="sm" onClick={fetchMetrics}>
              Try again
            </Button>
          </div>
        )}

        {metrics && (
          <>
            {hasError && (
              <p className="mt-6 text-sm text-muted-foreground">
                Showing the last figures received; the latest update did not come through.
              </p>
            )}
            <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-3xl font-semibold tabular-nums">{stat.value}</dd>
                  <dd className="prose-measure mt-1 text-sm text-muted-foreground">{stat.hint}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 border-t border-border pt-8">
              <Button asChild>
                <Link to="/dashboard">Open workspace</Link>
              </Button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Metrics;
