"use client";

import React, { useState, useRef, useEffect } from "react";

// 1. UBAH JUDUL LAGU DI SINI BISA BEBAS BOSKU
const playlist = [
  { file: "/lagu1.mp3", judul: "Jatuh Cinta Memang Manis" },
  { file: "/lagu2.mp3", judul: "Nasyid Santai (Ganti Bebas)" },
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
    // 2. PEMBUNGKUS LUAR: Latar hijaunya dibuat lebar penuh (w-full) di semua device
    <div className="fixed bottom-0 left-0 w-full bg-emerald-900 text-white shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-50 rounded-t-3xl md:rounded-t-none border-t-2 border-emerald-700">
      {/* 3. PEMBUNGKUS DALAM: Dikasih max-w-4xl mx-auto biar isinya tetap ngumpul di tengah saat dibuka di laptop */}
      <div className="max-w-4xl mx-auto flex items-center justify-between p-3 px-6 md:px-8">
        <audio ref={audioRef} src={playlist[currentIndex].file} onEnded={nextSong} autoPlay />

        {/* Info Lagu */}
        <div className="flex flex-col">
          <span className="text-xs text-emerald-400 font-bold tracking-widest uppercase mb-1">
            Sedang Diputar 🎵
          </span>
          {/* Lebar teks diatur (w-48 di HP, w-64 di laptop) biar kalau kepanjangan otomatis terpotong titik-titik (truncate) */}
          <span className="text-sm md:text-base font-semibold truncate w-48 md:w-64">
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
    </div>
  );
}
