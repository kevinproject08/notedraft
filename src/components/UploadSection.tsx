import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Loader2, FileAudio, X, SlidersHorizontal } from "lucide-react";
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
        title: "Job Canceled",
        description: "Your transcription job has been canceled.",
      });
    } catch (err) {
      toast({
        title: "Cancel Failed",
        description: "Could not cancel the job.",
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
    setStatusMessage("Uploading file and initializing transcription...");

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
            setStatusMessage(status.message || "Processing...");
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
              title: "Success!",
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
        title: "Processing failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="min-h-[32rem] bg-card" aria-labelledby="upload-heading">
      <div className="border-b border-border p-5 sm:p-6">
        <h2 id="upload-heading" className="flex items-center gap-2 font-heading text-xl font-semibold">
          <Upload className="h-5 w-5" />
          Audio source
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Add a performance recording and choose the instrument you played.</p>
      </div>
      <div className="space-y-5 p-5 sm:p-6">
        <div className="space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_FORMATS}
            onChange={handleFileChange}
            className="hidden"
            disabled={isLoading}
          />
          
          <Button
            variant="outline"
            className="h-36 w-full border-2 border-dashed bg-secondary/25 hover:border-primary/50 hover:bg-primary/5"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <div className="flex flex-col items-center gap-2">
              <FileAudio className="h-8 w-8 text-muted-foreground" />
              <span className="max-w-full break-all text-sm font-semibold sm:break-normal">
                {selectedFile ? selectedFile.name : "Click to select a file"}
              </span>
              <span className="text-xs text-muted-foreground">
                Audio, video, or MIDI files
              </span>
            </div>
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold" htmlFor="instrument-select">Instrument</label>
          <Select value={instrument} onValueChange={(val) => setInstrument(val as Instrument)} disabled={isLoading}>
            <SelectTrigger id="instrument-select" className="h-11 bg-background">
              <SelectValue placeholder="Select instrument" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="piano">Piano</SelectItem>
              <SelectItem value="violin">Violin</SelectItem>
              <SelectItem value="viola">Viola</SelectItem>
              <SelectItem value="cello">Cello</SelectItem>
              <SelectItem value="bass">Bass</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {error && (
          <div className="border-l-2 border-destructive bg-destructive/10 p-4" role="alert">
            <p className="break-words text-sm font-medium text-destructive">{error}</p>
          </div>
        )}

        {selectedFile && (
          <div className="space-y-4">
            <div className="bg-muted/70 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Selected file</p>
              <p className="mt-1 break-all text-sm font-semibold sm:break-normal">{selectedFile.name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                  Transcription range
                </label>
                <span className="text-sm tabular-nums text-muted-foreground">{duration > 0 ? `${formatTime(getStartTime())} – ${formatTime(getEndTime())}` : `${range[0]}% – ${range[1]}%`}</span>
              </div>
              <Slider
                value={range}
                onValueChange={setRange}
                min={0}
                max={100}
                step={1}
                minStepsBetweenThumbs={5}
                disabled={isLoading}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                {duration > 0 
                  ? `Total duration: ${formatTime(duration)} · Selection: ${getEndTime() - getStartTime()} seconds`
                  : "Select the portion of the file to transcribe"}
              </p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="space-y-3">
            <div className="flex justify-between gap-4 text-sm" aria-live="polite">
              <span className="text-muted-foreground">
                {progress === 0 ? statusMessage : "Processing..."}
              </span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground text-center">
              {progress === 0
                ? "Progress will appear when transcription begins."
                : "This may take up to 10 minutes. Keep this tab open."}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancel}
              className="w-full"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel Job
            </Button>
          </div>
        )}

        <Button
          onClick={handleProcess}
          disabled={!selectedFile || isLoading}
          className="w-full"
          size="lg"
          variant="default"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Start transcription
            </>
          )}
        </Button>
      </div>
    </section>
  );
};

export default UploadSection;
