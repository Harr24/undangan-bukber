"use client";

import React, { useState, useRef, useEffect } from "react";

// Daftar lagu yang ada di folder public
const playlist = [
  { file: "/lagu1.mp3", judul: "1. Vibes Lebaran" },
  { file: "/lagu2.mp3", judul: "2. Nasyid Santai" },
];

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fungsi Play / Pause
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

  // Fungsi Next Lagu
  const nextSong = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  // Otomatis play saat lagu diganti (Next)
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentIndex, isPlaying]);

  return (
    // DI SINI KUNCI PERBAIKANNYA:
    // Ditambahkan: left-1/2 -translate-x-1/2 max-w-md
    // Ini akan memaksa pemutar musik persis ada di tengah dan seukuran HP
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-emerald-900 text-white p-3 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between px-6 rounded-t-3xl border-t-2 border-emerald-700">
      {/* Audio Element Tersembunyi */}
      <audio
        ref={audioRef}
        src={playlist[currentIndex].file}
        onEnded={nextSong} // Otomatis next kalau lagu habis
        autoPlay
      />

      {/* Info Lagu */}
      <div className="flex flex-col">
        <span className="text-xs text-emerald-400 font-bold tracking-widest uppercase mb-1">
          Sedang Diputar 🎵
        </span>
        <span className="text-sm md:text-base font-semibold truncate w-40 md:w-52">
          {playlist[currentIndex].judul}
        </span>
      </div>

      {/* Tombol Kontrol */}
      <div className="flex gap-3 items-center">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center transition shadow-lg transform active:scale-90 text-xl"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button
          onClick={nextSong}
          className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition shadow-md transform active:scale-90 text-lg border border-emerald-600"
        >
          ⏭️
        </button>
      </div>
    </div>
  );
}
