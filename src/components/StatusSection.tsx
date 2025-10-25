import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RefreshCw, Activity } from "lucide-react";

const BASE_URL = "https://kevinproject08-notedraft.hf.space";

const StatusSection = () => {
  const [statusOk, setStatusOk] = useState<boolean | null>(null);
  const [bodyText, setBodyText] = useState<string>("");
  const [isChecking, setIsChecking] = useState(false);

  const checkStatus = async () => {
    setIsChecking(true);
    try {
      const res = await fetch(`${BASE_URL}/home`);
      const isOk = res.ok;
      setStatusOk(isOk);

      let text = "";
      try {
        text = await res.text();
        // Try to parse as JSON for pretty printing
        try {
          const json = JSON.parse(text);
          text = JSON.stringify(json, null, 2);
        } catch {
          // If not JSON, use as-is
        }
      } catch (e) {
        text = "Unable to read response body";
      }
      setBodyText(text);
    } catch (error) {
      setStatusOk(false);
      setBodyText(error instanceof Error ? error.message : "Failed to connect to API");
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          API Status
        </CardTitle>
        <CardDescription>Check the health status of the NoteDraft backend API</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {statusOk === null ? (
              <div className="p-2 rounded-full bg-muted">
                <Activity className="h-5 w-5 text-muted-foreground" />
              </div>
            ) : statusOk ? (
              <div className="p-2 rounded-full bg-success/10">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-destructive/10">
                <XCircle className="h-5 w-5 text-destructive" />
              </div>
            )}
            <div>
              <p className="text-sm font-medium">
                API Status:{" "}
                <span
                  className={
                    statusOk === null
                      ? "text-muted-foreground"
                      : statusOk
                      ? "text-success"
                      : "text-destructive"
                  }
                >
                  {statusOk === null ? "Checking..." : statusOk ? "UP ✅" : "DOWN ❌"}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">{BASE_URL}</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={checkStatus}
            disabled={isChecking}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isChecking ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {bodyText && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Response:</p>
            <div className="p-4 rounded-lg bg-muted">
              <pre className="text-xs overflow-x-auto whitespace-pre-wrap break-words">
                {bodyText}
              </pre>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-border space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Available Endpoints:</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">POST</span>
              <span className="font-mono text-muted-foreground">/v1/transcribe</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-success/10 text-success font-mono">GET</span>
              <span className="font-mono text-muted-foreground">/home</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusSection;
