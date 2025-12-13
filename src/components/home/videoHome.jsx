// "use client";

// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";


// export default function VideoCarousel() {
//   const videoRef = useRef(null);

//   const videos = [
//     { id: 1, src: "/videos/1.mp4", title: "انیمیشن 1" },
//     { id: 2, src: "/videos/1.mp4", title: "انیمیشن 2" },

//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);

//   const handlePlayPause = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (isPlaying) {
//       video.pause();
//       setIsPlaying(false);
//     } else {
//       video.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % videos.length);
//     setIsPlaying(false);
//     setProgress(0);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
//     setIsPlaying(false);
//     setProgress(0);
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const updateProgress = () => {
//       if (video.duration) setProgress((video.currentTime / video.duration) * 100);
//     };

//     video.addEventListener("timeupdate", updateProgress);
//     video.addEventListener("ended", () => setIsPlaying(false));

//     return () => {
//       video.removeEventListener("timeupdate", updateProgress);
//       video.removeEventListener("ended", () => setIsPlaying(false));
//     };
//   }, [currentIndex]);

//   return (
//     <div className="relative w-full mt-20 flex flex-col items-center gap-4">
//       <div className="
//         relative 
//         w-screen sm:w-full   /* فول‌عرض توی موبایل، عادی توی دسکتاپ */
//         h-[65vh] sm:h-auto   /* ارتفاع داینامیک موبایل، aspect در دسکتاپ */
//         sm:aspect-video
//         bg-black rounded-none sm:rounded-xl 
//         overflow-hidden
//       ">
//    <video
//   ref={videoRef}
//   src={videos[currentIndex].src}
//   poster={`/videos/thumbnails/${videos[currentIndex].id}.jpg`} // عکس کاور
//   className="absolute inset-0 w-full h-full object-cover"
//   muted={isMuted}
//   playsInline
//   onClick={handlePlayPause}
// />


//         {!isPlaying && (
//           <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-10">
//             <button
//               onClick={handlePlayPause}
//               className="bg-white/30 hover:bg-white/50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center shadow-lg"
//             >
//               <Image src="/icons/play.svg" alt="Play" width={30} height={30} />
//             </button>
//           </div>
//         )}

//         <div className="absolute bottom-1 left-0 w-full h-1 bg-gray-700">
//           <div
//             className="h-full bg-green-500 transition-all"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>

//         <button
//           onClick={handlePrev}
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
//         >
          
//               <ChevronLeft className="w-5 h-5 text-white"/>

//                   </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
//         >
//               <ChevronRight className="w-5 h-5 text-white"/>
//         </button>

//         <div className="absolute bottom-2 right-2 flex gap-2 z-20">
//           <button
//             onClick={() => setIsMuted(!isMuted)}
//             className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-sm"
//           >
//             {isMuted ? "🔇" : "🔊"}
//           </button>
//           <button
//             onClick={() => videoRef.current?.requestFullscreen()}
//             className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-sm"
//           >
//             ⛶
//           </button>
//         </div>

//         <div className="absolute top-2 left-2 text-white font-bold bg-black/40 px-2 py-1 rounded text-sm truncate max-w-[95%]">
//           {videos[currentIndex].title}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

<<<<<<< HEAD
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Maximize } from "lucide-react";

const videos = [
  { id: 1, src: "/videos/1.mp4", title: "انیمیشن 1" },
  { id: 2, src: "/videos/1.mp4", title: "انیمیشن 2" },
];

export default function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
=======
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoCarousel() {
  const videoRef = useRef(null);

  const videos = [
    { id: 1, src: "/videos/1.mp4", title: "انیمیشن 1" },
    { id: 2, src: "/videos/videoHome.mp4", title: "انیمیشن 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
>>>>>>> 10dc4e9dbb197a9eeaa1a222c75fc51f3d4edb9d
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

<<<<<<< HEAD
    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      nextVideo();
=======
    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
>>>>>>> 10dc4e9dbb197a9eeaa1a222c75fc51f3d4edb9d
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
<<<<<<< HEAD
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
=======
    <div className="relative w-full mt-20 flex flex-col items-center gap-4">
      <div
        className="
        relative 
        w-screen sm:w-full
        h-[65vh] sm:h-auto
        sm:aspect-video
        bg-black rounded-none sm:rounded-xl 
        overflow-hidden
      "
      >
        {/* ویدیو بک‌گراند (قبل از پلی شدن) */}
        {!isPlaying && (
          <video
            src={videos[currentIndex].src}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
        )}

        {/* ویدیو اصلی (بعد از پلی شدن) */}
        <video
          ref={videoRef}
          src={videos[currentIndex].src}
          className="absolute inset-0 w-full h-full object-cover"
          muted={isMuted}
          playsInline
          onClick={handlePlayPause}
          style={{ display: isPlaying ? "block" : "none" }}
        />

        {/* دکمه پلی */}
>>>>>>> 10dc4e9dbb197a9eeaa1a222c75fc51f3d4edb9d
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

<<<<<<< HEAD
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
=======
        {/* Progress Bar */}
        <div className="absolute bottom-1 left-0 w-full h-1 bg-gray-700">
          <div
            className="h-full bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* دکمه‌های چپ و راست */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-20"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* کنترل صدا و فول‌اسکرین */}
        <div className="absolute bottom-2 right-2 flex gap-2 z-20">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-sm"
>>>>>>> 10dc4e9dbb197a9eeaa1a222c75fc51f3d4edb9d
          >
            <div
              className="h-full bg-blue-600 rounded-full relative group-hover/progress:h-3 transition-all"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg" />
            </div>
          </div>

<<<<<<< HEAD
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
=======
        {/* عنوان ویدیو */}
        <div className="absolute top-2 left-2 text-white font-bold bg-black/40 px-2 py-1 rounded text-sm truncate max-w-[95%]">
          {videos[currentIndex].title}
>>>>>>> 10dc4e9dbb197a9eeaa1a222c75fc51f3d4edb9d
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
