"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  ExternalLink,
  Film,
  Music,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { useQueue } from "@/lib/context/queue-context";

export const DownloadQueueDrawer: React.FC = () => {
  const { queue, isQueueOpen, setIsQueueOpen, removeFromQueue, clearCompletedQueue } =
    useQueue();

  if (!isQueueOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsQueueOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Drawer panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-[#2e2d2a] border-l border-[#474641] shadow-2xl h-full flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-display">Download Queue</h3>
                <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-semibold text-violet-300 border border-violet-500/30">
                  {queue.length} items
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">Active and pending file transfers</p>
            </div>
            <div className="flex items-center gap-2">
              {queue.some((i) => i.status === "completed") && (
                <button
                  onClick={clearCompletedQueue}
                  className="text-xs text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                  title="Clear finished downloads"
                >
                  Clear Done
                </button>
              )}
              <button
                onClick={() => setIsQueueOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Queue List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {queue.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center text-zinc-500">
                <Clock className="h-10 w-10 text-zinc-600 mb-2 stroke-[1.5]" />
                <p className="text-sm font-medium text-zinc-400">Queue is empty</p>
                <p className="text-xs text-zinc-500 mt-1 max-w-[200px]">
                  Add media formats from any analyzed link to initiate background downloads.
                </p>
              </div>
            ) : (
              queue.map((item) => {
                const isDone = item.status === "completed";
                const isError = item.status === "error";
                const isDownloading = item.status === "downloading";

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border p-3.5 transition-all ${
                      isDone
                        ? "bg-white/[0.02] border-white/5"
                        : isError
                        ? "bg-red-950/20 border-red-500/30"
                        : "bg-white/[0.04] border-violet-500/30 shadow-lg shadow-violet-500/5"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Thumbnail or type icon */}
                      <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
                        {item.thumbnail ? (
                          <img
                            src={item.thumbnail}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-500">
                            <Film className="h-5 w-5" />
                          </div>
                        )}
                      </div>

                      {/* Content details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-semibold text-white truncate">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => removeFromQueue(item.id)}
                            className="text-zinc-500 hover:text-zinc-300 p-0.5 rounded"
                            title="Remove from queue"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mt-1 text-[11px] text-zinc-400">
                          <span className="rounded bg-white/10 px-1.5 py-0.2 text-[10px] font-bold text-zinc-300 uppercase">
                            {item.format.extension}
                          </span>
                          <span className="truncate">{item.format.quality}</span>
                        </div>

                        {/* Status bar */}
                        <div className="mt-2.5">
                          {isDownloading && (
                            <div>
                              <div className="flex items-center justify-between text-[11px] text-violet-300 mb-1">
                                <span className="flex items-center gap-1">
                                  <Loader2 className="h-3 w-3 animate-spin text-violet-400" />
                                  <span>Downloading stream...</span>
                                </span>
                                <span className="font-mono font-medium">{item.progress}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300"
                                  style={{ width: `${item.progress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          {isDone && (
                            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Download Complete • Saved to your computer</span>
                            </div>
                          )}

                          {isError && (
                            <div className="flex items-center gap-1.5 text-[11px] text-red-400">
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                              <span className="truncate">{item.error || "Download failed"}</span>
                            </div>
                          )}

                          {item.status === "queued" && (
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                              <Clock className="h-3.5 w-3.5" />
                              <span>Waiting in queue...</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer actions */}
          <div className="p-4 border-t border-[#474641] bg-[#2b2a27]">
            <button
              onClick={() => setIsQueueOpen(false)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Close Queue
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
