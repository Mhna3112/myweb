"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ListPlus,
  Play,
  Pause,
  Film,
  Music,
  Image as ImageIcon,
  Archive,
  ExternalLink,
  CheckSquare,
  Square,
  Clock,
  User,
  Heart,
  Eye,
  Sparkles,
} from "lucide-react";
import { MediaFormat, MediaInfo, MediaItem } from "@/lib/providers/types";
import { useQueue } from "@/lib/context/queue-context";
import { formatBytes, formatDuration, generateMediaFilename } from "@/lib/utils";

interface MediaResultCardProps {
  media: MediaInfo;
}

export const MediaResultCard: React.FC<MediaResultCardProps> = ({ media }) => {
  const { addToQueue, addToHistory } = useQueue();
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>(
    media.items ? media.items.map((i) => i.id) : []
  );
  const [isZipping, setIsZipping] = useState(false);
  const [previewMediaItem, setPreviewMediaItem] = useState<string | null>(null);

  const isAlbum = media.type === "album" || (media.items && media.items.length > 0);

  // Find direct playable video format for inline preview if available
  const previewFormat = media.formats.find(
    (f) => f.type === "video" && f.url && (f.extension === "mp4" || f.extension === "webm")
  );

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAllItems = () => {
    if (media.items) {
      if (selectedItems.length === media.items.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(media.items.map((i) => i.id));
      }
    }
  };

  const handleDirectDownload = (format: MediaFormat) => {
    const targetFilename = generateMediaFilename(media, format);
    const downloadUrl = `/api/download?url=${encodeURIComponent(format.url)}&filename=${encodeURIComponent(targetFilename)}`;

    // Native browser download directly to disk
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = targetFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Record into local history
    addToHistory({
      title: media.title,
      thumbnail: media.thumbnail,
      platform: media.platform,
      extension: format.extension,
      quality: format.quality,
      originalUrl: media.originalUrl,
      filename: targetFilename,
      filesize: format.filesize,
    });
  };

  const handleDownloadZip = async () => {
    if (!media.items || selectedItems.length === 0) return;

    setIsZipping(true);
    try {
      const cleanAuthor = (media.author || "user").replace(/[/\\?%*:|"<>@\s]/g, "_").slice(0, 30);
      const cleanId = (media.id || Date.now().toString()).replace(/[/\\?%*:|"<>@\s]/g, "_").slice(0, 30);
      const zipBase = `${media.platform}_${cleanId}_${cleanAuthor}`;

      const itemsToZip = media.items
        .filter((item) => selectedItems.includes(item.id))
        .map((item, index) => ({
          url: item.url,
          filename: `${zipBase}_photo_${index + 1}.jpg`,
        }));

      const res = await fetch("/api/zip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: itemsToZip,
          zipName: `${zipBase}_album`,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate ZIP");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${zipBase}_album.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

    } catch (e) {
      console.error(e);
      alert("Could not create ZIP archive. Please try downloading photos individually.");
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-8 px-4"
    >
      <div className="rounded-3xl glass-panel p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
        {/* Glow backdrop inside card */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Thumbnail / Video Preview Player */}
          <div className="relative w-full md:w-80 h-52 sm:h-56 rounded-2xl overflow-hidden bg-black/50 border border-white/10 shrink-0 group">
            {isPlayingPreview && previewFormat ? (
              <video
                src={previewFormat.url}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : media.thumbnail ? (
              <>
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600">
                <Film className="h-12 w-12" />
              </div>
            )}

            {/* Duration Tag */}
            {media.duration && !isPlayingPreview && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-md">
                <Clock className="h-3 w-3 text-zinc-400" />
                <span>{formatDuration(media.duration)}</span>
              </div>
            )}

            {/* Play/Pause Preview Button Overlay */}
            {previewFormat && !isPlayingPreview && (
              <button
                onClick={() => setIsPlayingPreview(true)}
                className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600/90 text-white shadow-xl shadow-violet-600/40 hover:scale-110 active:scale-95 transition-all"
                title="Preview Video"
              >
                <Play className="h-6 w-6 fill-current ml-1" />
              </button>
            )}
          </div>

          {/* Media Metadata Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Platform & Type Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded-full bg-violet-500/20 px-3 py-0.5 text-xs font-semibold text-violet-300 border border-violet-500/30 uppercase tracking-wider">
                  {media.platformName}
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-zinc-300 capitalize">
                  {media.type}
                </span>
                {media.items && (
                  <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-xs font-medium text-cyan-300 border border-cyan-500/30">
                    {media.items.length} Photos Album
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white line-clamp-2 leading-snug">
                {media.title}
              </h2>

              {/* Author & Stats */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                {media.author && (
                  <div className="flex items-center gap-2">
                    {media.authorAvatar ? (
                      <img
                        src={media.authorAvatar}
                        alt={media.author}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-4 w-4 text-zinc-500" />
                    )}
                    {media.authorUrl ? (
                      <a
                        href={media.authorUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-violet-400 transition-colors flex items-center gap-1"
                      >
                        <span>{media.author}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span>{media.author}</span>
                    )}
                  </div>
                )}

                {media.likes !== undefined && (
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Heart className="h-3.5 w-3.5 text-rose-500" />
                    <span>{media.likes.toLocaleString()} likes</span>
                  </div>
                )}

                {media.views !== undefined && (
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Eye className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{media.views.toLocaleString()} views</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {media.description && (
                <p className="mt-3 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {media.description}
                </p>
              )}
            </div>

          </div>
        </div>

        {/* Gallery / Carousel Multi-Image Section */}
        {isAlbum && media.items && media.items.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={selectAllItems}
                  className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {selectedItems.length === media.items.length ? (
                    <CheckSquare className="h-4 w-4 text-violet-400" />
                  ) : (
                    <Square className="h-4 w-4 text-zinc-500" />
                  )}
                  <span>
                    {selectedItems.length === media.items.length
                      ? "Deselect All"
                      : "Select All Images"}
                  </span>
                </button>
                <span className="text-xs text-zinc-400">
                  {selectedItems.length} of {media.items.length} selected
                </span>
              </div>

              <button
                onClick={handleDownloadZip}
                disabled={isZipping || selectedItems.length === 0}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all"
              >
                <Archive className="h-4 w-4" />
                <span>
                  {isZipping ? "Creating ZIP Archive..." : `Download Selected as ZIP (${selectedItems.length})`}
                </span>
              </button>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {media.items.map((item, idx) => {
                const isSelected = selectedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItemSelection(item.id)}
                    className={`group relative aspect-square rounded-xl overflow-hidden border cursor-pointer transition-all ${
                      isSelected
                        ? "border-violet-500 ring-2 ring-violet-500/40"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={item.thumbnail || item.url}
                      alt={item.title || `Photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                    {/* Selection Checkbox indicator */}
                    <div className="absolute top-2 left-2">
                      {isSelected ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-600 text-white">
                          <CheckSquare className="h-3.5 w-3.5" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-md border border-white/40 bg-black/40" />
                      )}
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      <span>#{idx + 1}</span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-cyan-400"
                        title="Open full resolution"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Formats Section */}
        {media.formats && media.formats.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span>Available formats ({media.formats.length})</span>
            </h3>

            <div className="space-y-2.5">
              {media.formats.map((fmt) => {
                const isAudio = fmt.type === "audio";
                const isVideo = fmt.type === "video";
                const Icon = isAudio ? Music : isVideo ? Film : ImageIcon;

                return (
                  <div
                    key={fmt.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 p-3.5 transition-all"
                  >
                    {/* Format Specs */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          isAudio
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : isVideo
                            ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                            : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">
                            {fmt.quality}
                          </span>
                          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-zinc-300">
                            {fmt.extension}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-zinc-400 mt-0.5">
                          {fmt.filesize && (
                            <span>{formatBytes(fmt.filesize)}</span>
                          )}
                          {fmt.hasAudio && fmt.hasVideo && (
                            <span>• Audio + Video</span>
                          )}
                          {isAudio && <span>• Pure Audio Stream</span>}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-mono mt-1">
                          <span className="text-zinc-400">File:</span>
                          <span className="text-violet-300/90 truncate max-w-[200px] sm:max-w-xs">
                            {generateMediaFilename(media, fmt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handleDirectDownload(fmt)}
                        className="flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        title="Download this format"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>

                      <button
                        onClick={() => addToQueue(media, fmt)}
                        className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-all"
                        title="Add to download queue"
                        aria-label="Add to download queue"
                      >
                        <ListPlus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
