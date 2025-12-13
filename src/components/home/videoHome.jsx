"use client";

import { useRef, useState, useEffect } from "react";
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
  { id: 1, src: "/videos/1.mp4", title: "انیمیشن 1" },
  { id: 2, src: "/videos/videoHome.mp4", title: "انیمیشن 2" },
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

  /* ----------------- Controls ----------------- */

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

  const nextVideo = () => {
    setCurrentIndex((i) => (i + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentIndex((i) => (i - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  /* ----------------- Progress ----------------- */

  const onProgressClick = (e) => {
    if (!progressBarRef.current || !videoRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = ratio * duration;
  };

  /* ----------------- Effects ----------------- */

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
  }, [currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  /* ----------------- UI helpers ----------------- */

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

  /* ----------------- JSX ----------------- */

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
        onMouseMove={onMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={videos[currentIndex].src}
          className="w-full aspect-video"
          onClick={togglePlayPause}
          preload="metadata"
        />

        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              onClick={togglePlayPause}
              className="p-6 bg-white/20 rounded-full hover:scale-110 transition"
            >
              <Play className="w-12 h-12 text-white fill-white" />
            </button>
          </div>
        )}

        {/* Controls */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent transition-opacity ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Progress */}
          <div
            ref={progressBarRef}
            onClick={onProgressClick}
            className="h-2 bg-gray-700 rounded-full cursor-pointer mb-4"
          >
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-3">
              <button onClick={togglePlayPause}>
                {isPlaying ? <Pause /> : <Play />}
              </button>
              <button onClick={prevVideo}>
                <SkipBack />
              </button>
              <button onClick={nextVideo}>
                <SkipForward />
              </button>

              <button onClick={toggleMute}>
                {isMuted ? <VolumeX /> : <Volume2 />}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={changeVolume}
                className="accent-blue-500"
              />

              <span>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="font-bold">
              {videos[currentIndex].title}
            </div>

            <button onClick={toggleFullscreen}>
              <Maximize />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
