import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Upload & Process
        </CardTitle>
        <CardDescription>
          Upload your audio, video, or MIDI file to convert it to MIDI format
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
            className="w-full h-32 border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-colors"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <div className="flex flex-col items-center gap-2">
              <FileAudio className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">
                {selectedFile ? selectedFile.name : "Click to select a file"}
              </span>
              <span className="text-xs text-muted-foreground">
                Audio, Video, or MIDI files supported
              </span>
            </div>
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Instrument</label>
          <Select value={instrument} onValueChange={(val) => setInstrument(val as Instrument)} disabled={isLoading}>
            <SelectTrigger>
              <SelectValue placeholder="Select instrument" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="piano">🎹 Piano</SelectItem>
              <SelectItem value="violin">🎻 Violin</SelectItem>
              <SelectItem value="viola">🎻 Viola</SelectItem>
              <SelectItem value="cello">🎻 Cello</SelectItem>
              <SelectItem value="bass">🎸 Bass</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-sm text-destructive font-medium">Error: {error}</p>
          </div>
        )}

        {selectedFile && (
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-muted">
              <p className="text-sm text-muted-foreground">Selected file:</p>
              <p className="text-sm font-medium truncate">{selectedFile.name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Transcription Range: {duration > 0 ? `${formatTime(getStartTime())} - ${formatTime(getEndTime())}` : `${range[0]}% - ${range[1]}%`}
              </label>
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
                  ? `Total duration: ${formatTime(duration)} • Transcribing: ${getEndTime() - getStartTime()}s`
                  : "Select the portion of the file to transcribe"}
              </p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {progress === 0 ? statusMessage : "Processing..."}
              </span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
            <p className="text-xs text-muted-foreground text-center">
              {progress === 0 
                ? "Transcription progress will display once file processing begins"
                : "Process could take up to 10 minutes, please keep tab open"}
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
          variant="gradient"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Process File
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UploadSection;
