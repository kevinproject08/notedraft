// API configuration for NoteDraft backend
// The backend is deployed on Hugging Face Spaces
// You can optionally set VITE_API_BASE in your .env to override the default

export const API_BASE = import.meta.env.VITE_API_BASE ?? "https://kevinproject08-NoteDraft.hf.space";

// Response types based on backend schema
export interface TranscribeResponse {
  job_id: string;
  message: string;
}

export interface StatusResponse {
  status: string;
  progress: number;
  message?: string;
  download_url?: string;
  error?: string;
}

export interface MetricsResponse {
  total_pieces: number;
  total_minutes: number;
  total_notes: number;
}

/**
 * Transcribe an audio/video file to MIDI
 * POST /v1/transcribe
 * Returns a job_id for status polling
 */
export type Instrument = "piano" | "violin" | "viola" | "cello" | "bass";

const INSTRUMENT_ENDPOINTS: Record<Instrument, string> = {
  piano: "/v1/transcribe",
  violin: "/v1/violin",
  viola: "/v1/viola",
  cello: "/v1/cello",
  bass: "/v1/bass",
};

export async function transcribeFile(file: File, instrument: Instrument = "piano"): Promise<TranscribeResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const endpoint = INSTRUMENT_ENDPOINTS[instrument];
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Transcription failed with status ${res.status}: ${errorText}`);
  }

  return res.json();
}

/**
 * Get the status of a transcription job
 * GET /v1/status/{job_id}
 */
export async function getJobStatus(jobId: string): Promise<StatusResponse> {
  const res = await fetch(`${API_BASE}/v1/status/${jobId}`);
  
  if (!res.ok) {
    throw new Error(`Failed to get job status: ${res.status}`);
  }
  
  return res.json();
}

/**
 * Cancel a transcription job
 * POST /v1/cancel/{job_id}
 */
export async function cancelJob(jobId: string): Promise<void> {
  const res = await fetch(`${API_BASE}/v1/cancel/${jobId}`, {
    method: "POST",
  });
  
  if (!res.ok) {
    throw new Error(`Failed to cancel job: ${res.status}`);
  }
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
