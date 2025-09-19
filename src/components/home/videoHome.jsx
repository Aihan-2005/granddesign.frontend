"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";


export default function VideoCarousel() {
  const videoRef = useRef(null);

  const videos = [
    { id: 1, src: "/videos/1.mp4", title: "انیمیشن 1" },
    { id: 2, src: "/videos/1.mp4", title: "انیمیشن 2" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full mt-20 flex flex-col items-center gap-4">
      <div className="
        relative 
        w-screen sm:w-full   /* فول‌عرض توی موبایل، عادی توی دسکتاپ */
        h-[65vh] sm:h-auto   /* ارتفاع داینامیک موبایل، aspect در دسکتاپ */
        sm:aspect-video
        bg-black rounded-none sm:rounded-xl 
        overflow-hidden
      ">
        <video
          ref={videoRef}
          src={videos[currentIndex].src}
          className="absolute inset-0 w-full h-full object-cover"
          muted={isMuted}
          playsInline
          onClick={handlePlayPause}
        />

        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-10">
            <button
              onClick={handlePlayPause}
              className="bg-white/30 hover:bg-white/50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center shadow-lg"
            >
              <Image src="/icons/play.svg" alt="Play" width={30} height={30} />
            </button>
          </div>
        )}

        <div className="absolute bottom-1 left-0 w-full h-1 bg-gray-700">
          <div
            className="h-full bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
        >
          
              <ChevronLeft className="w-5 h-5 text-white"/>

                  </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
        >
              <ChevronRight className="w-5 h-5 text-white"/>
        </button>

        <div className="absolute bottom-2 right-2 flex gap-2 z-20">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-sm"
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
          <button
            onClick={() => videoRef.current?.requestFullscreen()}
            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-sm"
          >
            ⛶
          </button>
        </div>

        <div className="absolute top-2 left-2 text-white font-bold bg-black/40 px-2 py-1 rounded text-sm truncate max-w-[95%]">
          {videos[currentIndex].title}
        </div>
      </div>
    </div>
  );
}



