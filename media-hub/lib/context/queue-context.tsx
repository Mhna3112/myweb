"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { MediaFormat, MediaInfo, PlatformId } from "../providers/types";
import { generateMediaFilename } from "../utils";

export interface QueueItem {
  id: string;
  title: string;
  thumbnail?: string;
  platform: PlatformId;
  format: MediaFormat;
  progress: number;
  status: "queued" | "downloading" | "completed" | "error";
  error?: string;
  filename: string;
  startedAt: string;
}

export interface HistoryItem {
  id: string;
  title: string;
  thumbnail?: string;
  platform: PlatformId;
  extension: string;
  quality: string;
  downloadedAt: string;
  originalUrl: string;
  filename: string;
  filesize?: number;
}

interface QueueContextType {
  queue: QueueItem[];
  history: HistoryItem[];
  isQueueOpen: boolean;
  setIsQueueOpen: (open: boolean) => void;
  addToQueue: (media: MediaInfo, format: MediaFormat) => Promise<void>;
  removeFromQueue: (id: string) => void;
  clearCompletedQueue: () => void;
  addToHistory: (item: Omit<HistoryItem, "id" | "downloadedAt">) => void;
  removeFromHistory: (id: string) => void;
  clearHistory: () => void;
  exportHistory: () => void;
  importHistory: (jsonData: string) => boolean;
}

const QueueContext = createContext<QueueContextType | undefined>(undefined);

const HISTORY_STORAGE_KEY = "mediahub_download_history_v1";

export const QueueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isQueueOpen, setIsQueueOpen] = useState(false);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load download history:", e);
    }
  }, []);

  // Save history to localStorage
  const saveHistory = (newHistory: HistoryItem[]) => {
    setHistory(newHistory);
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(newHistory));
    } catch (e) {
      console.error("Failed to persist download history:", e);
    }
  };

  const addToHistory = (item: Omit<HistoryItem, "id" | "downloadedAt">) => {
    const newItem: HistoryItem = {
      ...item,
      id: `hist-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      downloadedAt: new Date().toISOString(),
    };
    saveHistory([newItem, ...history.slice(0, 99)]); // keep up to 100 items
  };

  const removeFromHistory = (id: string) => {
    saveHistory(history.filter((h) => h.id !== id));
  };

  const clearHistory = () => {
    saveHistory([]);
  };

  const exportHistory = () => {
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mediahub_history_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importHistory = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (Array.isArray(parsed)) {
        saveHistory(parsed);
        return true;
      }
    } catch {
      // invalid json
    }
    return false;
  };

  const removeFromQueue = (id: string) => {
    setQueue((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCompletedQueue = () => {
    setQueue((prev) => prev.filter((item) => item.status !== "completed"));
  };

  const addToQueue = async (media: MediaInfo, format: MediaFormat) => {
    const filename = generateMediaFilename(media, format);
    const itemId = `queue-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`;

    const newItem: QueueItem = {
      id: itemId,
      title: media.title,
      thumbnail: media.thumbnail,
      platform: media.platform,
      format,
      progress: 0,
      status: "queued",
      filename,
      startedAt: new Date().toISOString(),
    };

    setQueue((prev) => [newItem, ...prev]);
    setIsQueueOpen(true);

    // Trigger download execution
    startDownload(itemId, media, format, filename);
  };

  const startDownload = async (
    itemId: string,
    media: MediaInfo,
    format: MediaFormat,
    filename: string
  ) => {
    setQueue((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, status: "downloading", progress: 5 } : item))
    );

    try {
      // Download via /api/download proxy for CORS avoidance & direct file attachment
      const downloadProxyUrl = `/api/download?url=${encodeURIComponent(format.url)}&filename=${encodeURIComponent(filename)}`;

      // Simulate realistic progressive download chunking or fetch with progress
      const response = await fetch(downloadProxyUrl);
      if (!response.ok) {
        throw new Error(`Download failed with status: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      const contentLength = +(response.headers.get("Content-Length") || 0);

      let receivedBytes = 0;
      const chunks: Uint8Array[] = [];

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
            receivedBytes += value.length;
            if (contentLength > 0) {
              const pct = Math.min(Math.round((receivedBytes / contentLength) * 100), 99);
              setQueue((prev) =>
                prev.map((item) => (item.id === itemId ? { ...item, progress: pct } : item))
              );
            } else {
              setQueue((prev) =>
                prev.map((item) =>
                  item.id === itemId
                    ? { ...item, progress: Math.min(item.progress + 10, 95) }
                    : item
                )
              );
            }
          }
        }
      }

      // Assemble blob and trigger browser download
      const blob = new Blob(chunks as any);
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(blobUrl);

      // Mark complete
      setQueue((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, status: "completed", progress: 100 } : item
        )
      );

      // Add to history
      addToHistory({
        title: media.title,
        thumbnail: media.thumbnail,
        platform: media.platform,
        extension: format.extension,
        quality: format.quality,
        originalUrl: media.originalUrl,
        filename,
        filesize: receivedBytes || format.filesize,
      });
    } catch (err: any) {
      console.error("Download execution error:", err);
      setQueue((prev) =>
        prev.map((item) =>
          item.id === itemId
            ? { ...item, status: "error", error: err.message || "Failed to download stream" }
            : item
        )
      );
    }
  };

  return (
    <QueueContext.Provider
      value={{
        queue,
        history,
        isQueueOpen,
        setIsQueueOpen,
        addToQueue,
        removeFromQueue,
        clearCompletedQueue,
        addToHistory,
        removeFromHistory,
        clearHistory,
        exportHistory,
        importHistory,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
};

export const useQueue = () => {
  const context = useContext(QueueContext);
  if (!context) {
    throw new Error("useQueue must be used within a QueueProvider");
  }
  return context;
};
