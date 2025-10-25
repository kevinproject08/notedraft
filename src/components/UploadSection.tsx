import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Upload, Loader2, FileAudio } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const BASE_URL = "https://kevinproject08-notedraft.hf.space";

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

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 500);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      
      // Add start and end seconds based on the range
      const startSeconds = getStartTime();
      const endSeconds = getEndTime();
      
      if (duration > 0) {
        formData.append("start_seconds", startSeconds.toString());
        formData.append("end_seconds", endSeconds.toString());
      }

      const res = await fetch(`${BASE_URL}/v1/transcribe`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        let errorMessage = `HTTP ${res.status}: ${res.statusText}`;
        try {
          const errorData = await res.text();
          if (errorData) {
            errorMessage += ` - ${errorData}`;
          }
        } catch {
          // If reading the body fails, use the default error message
        }
        throw new Error(errorMessage);
      }

      const zipBlob = await res.blob();
      const url = URL.createObjectURL(zipBlob);
      setDownloadUrl(url);
      
      clearInterval(progressInterval);
      setProgress(100);

      toast({
        title: "Processing complete!",
        description: "Your MIDI file is ready for download.",
      });
    } catch (err) {
      clearInterval(progressInterval);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast({
        title: "Processing failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Processing...</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        )}

        <Button
          onClick={handleProcess}
          disabled={!selectedFile || isLoading}
          className="w-full"
          size="lg"
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
