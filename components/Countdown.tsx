"use client";

import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  // 1. Pisahkan useEffect khusus untuk status mounted & matikan warning linter
  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
  }, []);

  // 2. useEffect kedua untuk menjalankan interval waktu
  useEffect(() => {
    if (!isMounted) return;

    // Target Waktu: 2 Maret 2026, 16.00 WIB (GMT+7)
    const targetDate = new Date("2026-03-02T16:00:00+07:00").getTime();

    // Buat fungsi hitung waktu biar bisa dipanggil langsung (tanpa delay 1 detik)
    const hitungWaktu = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
      } else {
        setTimeLeft({
          hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
          jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          detik: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    hitungWaktu(); // Panggil sekali di awal
    const interval = setInterval(hitungWaktu, 1000); // Baru jalankan interval tiap detik

    return () => clearInterval(interval);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 -mt-12 md:-mt-16 relative z-20 mb-12">
      <div
        data-aos="zoom-in"
        className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-6 md:p-8 border-2 border-emerald-100 text-center"
      >
        <h2 className="text-lg md:text-xl font-bold text-emerald-800 mb-6">
          Menuju Kumpul Atmin ⏳
        </h2>

        <div className="flex justify-center gap-3 md:gap-6">
          {/* Kotak Hari */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-black shadow-inner">
              {timeLeft.hari < 10 ? `0${timeLeft.hari}` : timeLeft.hari}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-emerald-700 mt-2 uppercase tracking-widest">
              Hari
            </span>
          </div>

          {/* Pemisah (Titik Dua) */}
          <div className="text-2xl md:text-4xl font-black text-emerald-700 mt-3 md:mt-6 animate-pulse">
            :
          </div>

          {/* Kotak Jam */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-black shadow-inner">
              {timeLeft.jam < 10 ? `0${timeLeft.jam}` : timeLeft.jam}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-emerald-700 mt-2 uppercase tracking-widest">
              Jam
            </span>
          </div>

          {/* Pemisah (Titik Dua) */}
          <div className="text-2xl md:text-4xl font-black text-emerald-700 mt-3 md:mt-6 animate-pulse">
            :
          </div>

          {/* Kotak Menit */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-black shadow-inner">
              {timeLeft.menit < 10 ? `0${timeLeft.menit}` : timeLeft.menit}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-emerald-700 mt-2 uppercase tracking-widest">
              Menit
            </span>
          </div>

          {/* Pemisah (Titik Dua) */}
          <div className="text-2xl md:text-4xl font-black text-emerald-700 mt-3 md:mt-6 animate-pulse hidden md:block">
            :
          </div>

          {/* Kotak Detik */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-emerald-100 border-2 border-emerald-500 text-emerald-800 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-black shadow-inner">
              {timeLeft.detik < 10 ? `0${timeLeft.detik}` : timeLeft.detik}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-emerald-700 mt-2 uppercase tracking-widest">
              Detik
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
