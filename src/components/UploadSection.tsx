import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Loader2, FileAudio, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { transcribeFile, getJobStatus, cancelJob, type Instrument } from "@/lib/api";

const ACCEPTED_FORMATS = ".wav,.mp3,.flac,.m4a,.aac,.ogg,.oga,.wma,.aif,.aiff,.aifc,.opus,.mp4,.mov,.mkv,.avi,.webm,.m4v,.mpg,.mpeg,.wmv,.mid,.midi";

interface UploadSectionProps {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  setDownloadUrl: (url: string | null) => void;
}

const UploadSection = ({
  selectedFile,
  setSelectedFile,
  isLoading,
  setIsLoading,
  error,
  setError,
  setDownloadUrl,
}: UploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [range, setRange] = useState([0, 100]);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [instrument, setInstrument] = useState<Instrument>("piano");

  // Pre-select instrument from ?instrument=... query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("instrument");
    const valid: Instrument[] = ["piano", "violin", "viola", "cello", "bass"];
    if (param && (valid as string[]).includes(param)) {
      setInstrument(param as Instrument);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
      setRange([0, 100]);

      // Get file duration for audio/video files
      const url = URL.createObjectURL(file);
      const media = document.createElement(file.type.startsWith('audio') ? 'audio' : 'video');

      media.addEventListener('loadedmetadata', () => {
        setDuration(Math.round(media.duration));
        URL.revokeObjectURL(url);
      });

      media.addEventListener('error', () => {
        setDuration(0);
        URL.revokeObjectURL(url);
      });

      media.src = url;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStartTime = () => Math.round((range[0] / 100) * duration);
  const getEndTime = () => Math.round((range[1] / 100) * duration);

  const handleCancel = async () => {
    if (!currentJobId) return;

    try {
      await cancelJob(currentJobId);
      toast({
        title: "Transcription stopped",
        description: "Your transcription was canceled.",
      });
    } catch (err) {
      toast({
        title: "Could not stop it",
        description: "The transcription is still running.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setCurrentJobId(null);
      setProgress(0);
    }
  };

  const handleProcess = async () => {
    if (!selectedFile) {
      setError("Please select a file first");
      toast({
        title: "No file selected",
        description: "Please choose an audio, video, or MIDI file to process.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setDownloadUrl(null);
    setProgress(0);
    setStatusMessage("Uploading your file…");

    try {
      // Start the transcription job
      const result = await transcribeFile(selectedFile, instrument);
      const jobId = result.job_id;
      setCurrentJobId(jobId);

      // Poll for status updates
      const pollInterval = setInterval(async () => {
        try {
          const status = await getJobStatus(jobId);

          // Only update progress if it's greater than 0 (actual segments being processed)
          if (status.progress > 0) {
            setProgress(status.progress);
            setStatusMessage(status.message || "Detecting notes…");
          }

          if (status.status === "complete" || status.status === "completed") {
            clearInterval(pollInterval);
            // Use the job_id to construct the download URL
            const downloadUrl = `${import.meta.env.VITE_API_BASE_URL || 'https://kevinproject08-NoteDraft.hf.space'}/v1/download/${jobId}`;
            setDownloadUrl(downloadUrl);
            setIsLoading(false);
            setCurrentJobId(null);
            setProgress(100);
            toast({
              title: "Transcription ready",
              description: "Your MIDI file is ready to download.",
            });
          } else if (status.status === "failed" || status.error) {
            clearInterval(pollInterval);
            throw new Error(status.error || "Transcription failed");
          }
        } catch (err) {
          clearInterval(pollInterval);
          throw err;
        }
      }, 2000); // Poll every 2 seconds

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      setIsLoading(false);
      setCurrentJobId(null);
      setStatusMessage("");
      toast({
        title: "Transcription failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <section aria-labelledby="source-heading" className="space-y-6">
      <div>
        <h2 id="source-heading" className="text-lg font-semibold">
          1. Your recording
        </h2>
        <p className="prose-measure mt-1 text-sm text-muted-foreground">
          Audio, video, or MIDI. Solo recordings of one instrument give the cleanest result.
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTED_FORMATS}
        onChange={handleFileChange}
        className="hidden"
        disabled={isLoading}
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isLoading}
        className="flex w-full flex-col items-start gap-1 rounded-md border border-dashed border-input bg-surface px-4 py-6 text-left transition-colors hover:border-primary hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <FileAudio className="h-4 w-4 text-muted-foreground" />
          {selectedFile ? "Choose a different file" : "Choose a file"}
        </span>
        <span className="w-full break-all text-sm text-muted-foreground">
          {selectedFile
            ? `${selectedFile.name} · ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB${duration > 0 ? ` · ${formatTime(duration)}` : ""}`
            : "WAV, MP3, FLAC, M4A, MP4, MOV, MIDI and more"}
        </span>
      </button>

      <div className="space-y-2">
        <label htmlFor="instrument" className="text-sm font-medium">
          2. Instrument
        </label>
        <Select value={instrument} onValueChange={(val) => setInstrument(val as Instrument)} disabled={isLoading}>
          <SelectTrigger id="instrument" className="max-w-xs">
            <SelectValue placeholder="Select instrument" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="piano">Piano</SelectItem>
            <SelectItem value="violin">Violin</SelectItem>
            <SelectItem value="viola">Viola</SelectItem>
            <SelectItem value="cello">Cello</SelectItem>
            <SelectItem value="bass">Double bass</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">Each instrument uses its own transcription model.</p>
      </div>

      {selectedFile && (
        <div className="space-y-2 border-t border-border pt-5">
          <label className="text-sm font-medium">
            Section to keep in view:{" "}
            <span className="font-normal text-muted-foreground">
              {duration > 0 ? `${formatTime(getStartTime())} – ${formatTime(getEndTime())}` : `${range[0]}% – ${range[1]}%`}
            </span>
          </label>
          <Slider
            value={range}
            onValueChange={setRange}
            min={0}
            max={100}
            step={1}
            minStepsBetweenThumbs={5}
            disabled={isLoading}
            aria-label="Section of the recording"
            className="w-full max-w-md"
          />
          {duration > 0 && (
            <p className="text-sm text-muted-foreground">Total length {formatTime(duration)}.</p>
          )}
        </div>
      )}

      {error && !isLoading && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      {isLoading && (
        <div className="space-y-3 border-t border-border pt-5">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm font-medium">
              {progress === 0 ? statusMessage || "Uploading your file…" : "Detecting notes and rhythm…"}
            </p>
            <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
          </div>
          <Progress value={progress} className="h-1.5 w-full" />
          <p className="text-sm text-muted-foreground">
            {progress === 0
              ? "Progress appears once processing starts."
              : "Longer recordings can take several minutes. Keep this tab open."}
          </p>
          <Button variant="outline" size="sm" onClick={handleCancel}>
            <X className="h-4 w-4" />
            Stop transcription
          </Button>
        </div>
      )}

      <Button onClick={handleProcess} disabled={!selectedFile || isLoading} size="lg" className="w-full sm:w-auto">
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Transcribing…
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" />
            Transcribe to MIDI
          </>
        )}
      </Button>
    </section>
  );
};

export default UploadSection;
