"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Maximize,
} from "lucide-react";

const videos = [
  {
    id: 1,
    src: "https://ftp.granddesign.ir/videos/1.mp4",
    title: "انیمیشن 1",
  },
  {
    id: 2,
    src: "https://ftp.granddesign.ir/videos/videoHome.mp4",
    title: "انیمیشن 2",
  },
];

export default function VideoHome() {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const hideControlsTimeout = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const nextVideo = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % videos.length);
    setIsPlaying(false);
  }, []);

  const prevVideo = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const onProgressClick = (e) => {
    if (!progressBarRef.current || !videoRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * duration;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration || 0);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", nextVideo);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", nextVideo);
    };
  }, [currentIndex, nextVideo]);

  const formatTime = (t) => {
    if (isNaN(t) || t === 0) return "00:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const showUI = () => {
    setShowControls(true);
    clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  return (
    <div className="w-full mt-16 sm:mt-20 pb-16 sm:pb-24">
      {/* Container - در موبایل بدون تأثیر */}
      <div className="w-full lg:max-w-5xl lg:mx-auto lg:px-6">
        <div
          className="relative bg-black overflow-hidden shadow-2xl max-[700px]:rounded-none lg:rounded-2xl
                     max-[700px]:-mx-[85vw] max-[85vw]:left-1/2 max-[700px]:-translate-x-1/2 max-[700px]:w-screen"
          onMouseMove={showUI}
          onTouchStart={showUI}
        >
          <video
            ref={videoRef}
            src={videos[currentIndex].src}
            className="w-full max-[700px]:min-h-[60vh] lg:aspect-video object-cover"
            playsInline
            preload="metadata"
            onClick={togglePlayPause}
          />

=          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={togglePlayPause}
                className="p-6 bg-white/20 rounded-full hover:scale-110 active:scale-95 transition"
              >
                <Play className="w-12 h-12 text-white fill-white" />
              </button>
            </div>
          )}

          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsPlaying(false);
                }}
                className={`transition-all rounded-full ${
                  i === currentIndex
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div
            className={`absolute bottom-0 left-0 right-0 px-4 lg:px-5 py-3 lg:py-4
              bg-gradient-to-t from-black/90 to-transparent
              transition-opacity duration-300
              ${showControls ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              ref={progressBarRef}
              onClick={onProgressClick}
              className="h-1.5 lg:h-2 bg-gray-600 rounded-full mb-3 lg:mb-4 cursor-pointer relative group"
            >
              <div
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow
                  opacity-0 group-hover:opacity-100 transition -translate-x-1/2"
                style={{
                  left: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
            </div>

            <div className="flex justify-between items-center text-white">
              <div className="flex gap-2 lg:gap-3 items-center">
                <button onClick={togglePlayPause} className="hover:scale-110 transition">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {videos.length > 1 && (
                  <>
                    <button onClick={prevVideo} className="hover:scale-110 transition">
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button onClick={nextVideo} className="hover:scale-110 transition">
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </>
                )}

                <button onClick={toggleMute} className="lg:hidden hover:scale-110 transition">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex gap-2 lg:gap-3 items-center">
                <span className="text-xs lg:text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <button onClick={toggleFullscreen} className="hover:scale-110 transition">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
