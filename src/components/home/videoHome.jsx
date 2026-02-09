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
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const changeVolume = (e) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (videoRef.current) {
      videoRef.current.volume = v;
      setIsMuted(v === 0);
    }
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
    const ratio = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = ratio * duration;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration || 0);
    const onEnded = () => {
      setIsPlaying(false);
      nextVideo();
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", onEnded);
    };
  }, [currentIndex, nextVideo]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentIndex]);

  const formatTime = (t) => {
    if (isNaN(t)) return "00:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  const onMouseMove = () => {
    setShowControls(true);
    clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  const onTouchStart = () => {
    setShowControls(true);
    clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <div
      className="
        w-full mt-16 sm:mt-20 pb-16 sm:pb-24
        max-[500px]:px-0
        px-4 md:px-6
        max-[500px]:max-w-none
        max-w-5xl mx-auto
      "
    >
      <div
        className="
          relative bg-black overflow-hidden shadow-2xl
          rounded-2xl
          max-[500px]:rounded-none
          max-[500px]:w-screen
          max-[500px]:left-1/2
          max-[500px]:-translate-x-1/2
        "
        onMouseMove={onMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        onTouchStart={onTouchStart}
      >
        {/* ویدیو */}
        <video
          ref={videoRef}
          src={videos[currentIndex].src}
          className="
            w-full object-cover
            max-[500px]:h-[65vh]
            max-[500px]:min-h-[320px]
            max-[500px]:max-h-[80vh]
            sm:aspect-video sm:h-auto
          "
          onClick={togglePlayPause}
          preload="metadata"
          playsInline
        />

        {/* پلی وسط */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="p-5 sm:p-6 bg-white/20 rounded-full hover:scale-110 transition active:scale-95"
            >
              <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
            </button>
          </div>
        )}

        {/* dots */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsPlaying(false);
              }}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* کنترل‌ها */}
        <div
          className={`absolute bottom-0 left-0 right-0 px-3 sm:px-5 py-3 sm:py-5
            bg-gradient-to-t from-black/90 to-transparent
            transition-opacity duration-300
            ${showControls ? "opacity-100" : "opacity-0"}
          `}
        >
          {/* progress */}
          <div
            ref={progressBarRef}
            onClick={onProgressClick}
            className="h-1.5 sm:h-2 bg-gray-600 rounded-full cursor-pointer mb-3 sm:mb-4 relative group"
          >
            <div
              className="h-full bg-blue-500 rounded-full"
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

          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={togglePlayPause}>
                {isPlaying ? <Pause /> : <Play />}
              </button>

              {videos.length > 1 && (
                <>
                  <button onClick={prevVideo}>
                    <SkipBack />
                  </button>
                  <button onClick={nextVideo}>
                    <SkipForward />
                  </button>
                </>
              )}

              <button onClick={toggleMute} className="sm:hidden">
                {isMuted ? <VolumeX /> : <Volume2 />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <button onClick={toggleFullscreen}>
                <Maximize />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
