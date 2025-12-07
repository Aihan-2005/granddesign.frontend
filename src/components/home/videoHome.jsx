"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Maximize } from "lucide-react";

const videos = [
  { id: 1, src: "/videos/1.mp4", title: "انیمیشن 1" },
  { id: 2, src: "/videos/1.mp4", title: "انیمیشن 2" },
];

export default function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // پخش/توقف ویدیو
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // میوت/آنمیوت صدا
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // تغییر ولوم
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
    }
  };

  // ویدیو بعدی
  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    setIsPlaying(false);
  };

  // ویدیو قبلی
  const prevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevIndex);
    setIsPlaying(false);
  };

  // تمام صفحه
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  // تغییر زمان ویدیو
  const handleProgressClick = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * duration;
    }
  };

  // به‌روزرسانی زمان فعلی
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      nextVideo();
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentVideoIndex]);

  // توقف ویدیو هنگام تغییر ایندکس
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [currentVideoIndex]);

  // مخفی کردن کنترل‌ها بعد از چند ثانیه
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // فرمت زمان
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* ویدیو */}
        <video
          ref={videoRef}
          src={videos[currentVideoIndex].src}
          className="w-full aspect-video"
          onClick={togglePlayPause}
          preload="metadata"
        />

        {/* اورلی پخش */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={togglePlayPause}
              className="bg-blue-600 hover:bg-blue-700 rounded-full p-6 transition-all transform hover:scale-110"
            >
              <Play className="w-12 h-12 text-white fill-white" />
            </button>
          </div>
        )}

        {/* کنترل‌ها */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* پروگرس بار */}
          <div
            ref={progressBarRef}
            onClick={handleProgressClick}
            className="w-full h-2 bg-gray-600 rounded-full cursor-pointer mb-4 group/progress"
          >
            <div
              className="h-full bg-blue-600 rounded-full relative group-hover/progress:h-3 transition-all"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg" />
            </div>
          </div>

          <div className="flex items-center justify-between text-white">
            {/* سمت چپ: دکمه‌های کنترل */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlayPause}
                className="hover:bg-white/20 rounded-full p-2 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>

              <button
                onClick={prevVideo}
                className="hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={nextVideo}
                className="hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <SkipForward className="w-5 h-5" />
              </button>

              {/* کنترل صدا */}
              <div className="flex items-center gap-2 group/volume">
                <button
                  onClick={toggleMute}
                  className="hover:bg-white/20 rounded-full p-2 transition-all"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-0 group-hover/volume:w-20 transition-all duration-300 accent-blue-600"
                />
              </div>

              {/* زمان */}
              <div className="text-sm font-medium">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            {/* وسط: عنوان */}
            <div className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
              {videos[currentVideoIndex].title}
            </div>

            {/* سمت راست: تمام صفحه */}
            <button
              onClick={toggleFullscreen}
              className="hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* لیست ویدیوها */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            onClick={() => {
              setCurrentVideoIndex(index);
            }}
            className={`cursor-pointer rounded-xl overflow-hidden transition-all transform hover:scale-105 ${
              index === currentVideoIndex
                ? "ring-4 ring-blue-600 shadow-lg shadow-blue-600/50"
                : "ring-2 ring-gray-700 hover:ring-gray-500"
            }`}
          >
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <Play className="w-12 h-12 text-white/60" />
            </div>
            <div className="bg-gray-800 p-3">
              <h3 className="text-white font-semibold text-center">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
