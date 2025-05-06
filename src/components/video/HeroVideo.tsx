"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
      {!showVideo && (
        <>
          <Image
            src="/hero-image.png"
            alt="Portada del video"
            width={1024}
            height={1024}
            priority
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
          >
            <div className="p-4 bg-background/60 rounded-full drop-shadow cursor-pointer hover:bg-background/80 transition">
              <PlayIcon className="size-14 text-blue-500" />
            </div>
          </button>
        </>
      )}

      {showVideo && (
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          controls
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
