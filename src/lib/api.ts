// API configuration for NoteDraft backend
// The backend is deployed on Hugging Face Spaces
// You can optionally set VITE_API_BASE in your .env to override the default

export const API_BASE = import.meta.env.VITE_API_BASE ?? "https://kevinproject08-NoteDraft.hf.space";

// Response types based on backend schema
export interface TranscribeResponse {
  message: string;
  download_url?: string;
  // Add other fields based on your OpenAPI schema
}

export interface MetricsResponse {
  total_pieces: number;
  total_minutes: number;
  total_notes: number;
}

/**
 * Transcribe an audio/video file to MIDI
 * POST /v1/transcribe
 * Returns a blob URL for the downloaded file
 */
export async function transcribeFile(file: File): Promise<TranscribeResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/v1/transcribe`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Transcription failed with status ${res.status}: ${errorText}`);
  }

  // Backend returns the file directly as a blob, not JSON
  const blob = await res.blob();
  const downloadUrl = URL.createObjectURL(blob);
  
  return {
    message: "Transcription completed successfully",
    download_url: downloadUrl,
  };
}

/**
 * Get metrics about total pieces, minutes, and notes processed
 * GET /metrics
 */
export async function getMetrics(): Promise<MetricsResponse> {
  const res = await fetch(`${API_BASE}/metrics`);
  
  if (!res.ok) {
    throw new Error(`Failed to load metrics: ${res.status}`);
  }
  
  return res.json();
}

/**
 * Optional health check endpoint
 * GET /
 */
export async function pingBackend(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/`);
    return res.ok;
  } catch (error) {
    return false;
  }
}
