"use client";

import React, { useState, useRef, useEffect } from "react";

// 1. UBAH JUDUL LAGU DI SINI BISA BEBAS BOSKU
const playlist = [
  { file: "/diem-kalo-gw-lagi-ngomong.mp3", judul: "Diem Kalo Gw Lagi Ngomong 🤫" },
  { file: "/lagu1.mp3", judul: "Jatuh Cinta Memang Manis" },
  { file: "/lagu2.mp3", judul: "Diem gw lagi ngomong!" },
];

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => console.log("Butuh interaksi user"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentIndex, isPlaying]);

  return (
    // Latar hijau dibuat efek Glassmorphism (backdrop-blur) biar modern ala web kekinian
    <div className="fixed bottom-0 left-0 w-full bg-emerald-900/95 backdrop-blur-md text-white shadow-[0_-15px_25px_-5px_rgba(0,0,0,0.3)] z-50 rounded-t-3xl md:rounded-t-none border-t border-emerald-500/30 transition-all duration-300">
      {/* Garis aksen tipis di bagian atas player */}
      <div className="w-full h-1 bg-emerald-950 absolute top-0 left-0 rounded-t-3xl md:rounded-t-none overflow-hidden">
        <div
          className={`h-full bg-emerald-400 ${isPlaying ? "animate-pulse" : ""} w-full opacity-50`}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto flex items-center justify-between p-3 px-5 md:px-8 mt-1">
        <audio ref={audioRef} src={playlist[currentIndex].file} onEnded={nextSong} autoPlay />

        {/* Info Lagu & Animasi Piringan Hitam */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Animasi Piringan Hitam Berputar kalau lagi play */}
          <div
            className={`w-10 h-10 md:w-12 md:h-12 bg-emerald-950 rounded-full flex items-center justify-center border-2 border-emerald-400 shadow-md ${isPlaying ? "animate-[spin_3s_linear_infinite]" : ""}`}
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-emerald-300 font-bold tracking-widest uppercase mb-0.5 md:mb-1">
              {isPlaying ? "Sedang Diputar 🎵" : "Lagu Jeda ⏸️"}
            </span>
            <span
              className={`text-sm md:text-base font-bold truncate w-40 md:w-64 ${isPlaying ? "text-white" : "text-gray-400"}`}
            >
              {playlist[currentIndex].judul}
            </span>
          </div>
        </div>

        {/* Tombol Kontrol */}
        <div className="flex gap-2 md:gap-4 items-center">
          <button
            onClick={togglePlay}
            className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-full flex items-center justify-center transition-all shadow-lg transform active:scale-90 text-lg md:text-xl"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            onClick={nextSong}
            className="w-8 h-8 md:w-10 md:h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-all shadow-md transform active:scale-90 text-sm md:text-base border border-emerald-600/50"
          >
            ⏭️
          </button>
        </div>
      </div>
    </div>
  );
}
