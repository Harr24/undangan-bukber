"use client";

import React, { useState, useEffect } from "react";

type CuacaState = {
  kode: number;
  loading: boolean;
  error: boolean;
};

export default function WidgetCuaca() {
  const [cuaca, setCuaca] = useState<CuacaState>({
    kode: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchCuaca = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-6.4386&longitude=106.8317&daily=weather_code&timezone=Asia%2FJakarta&forecast_days=2"
        );
        const data = await res.json();
        const besokKode = data.daily.weather_code[1];
        setCuaca({ kode: besokKode, loading: false, error: false });
      } catch (err) {
        console.error("Gagal ambil cuaca:", err);
        setCuaca({ kode: 0, loading: false, error: true });
      }
    };
    fetchCuaca();
  }, []);

  const getPesanCuaca = (kode: number) => {
    if (cuaca.loading) {
      return {
        emoji: "⏳",
        kanjiEmoji: "待",
        teks: "Menerawang Langit...",
        alesan: "Sabar bos, lagi nanya BMKG.",
        color: "from-slate-400 to-slate-600",
        glow: "rgba(148,163,184,0.4)",
      };
    }
    if (cuaca.error) {
      return {
        emoji: "🤔",
        kanjiEmoji: "謎",
        teks: "Cuaca Misterius",
        alesan: "Mau badai atau cerah, pokoknya wajib dateng!",
        color: "from-purple-500 to-violet-700",
        glow: "rgba(139,92,246,0.4)",
      };
    }
    if (kode === 0 || kode === 1) {
      return {
        emoji: "☀️",
        kanjiEmoji: "晴",
        teks: "Cerah Benderang",
        alesan:
          "Panas dikit doang bos! Gak ada alasan takut debu atau takut helm kotor, langsung gas!",
        color: "from-amber-400 to-orange-500",
        glow: "rgba(251,191,36,0.5)",
      };
    } else if (kode === 2 || kode === 3) {
      return {
        emoji: "⛅",
        kanjiEmoji: "曇",
        teks: "Berawan Santuy",
        alesan: "Cuaca adem bener buat riding. Kesempatan emas, dilarang keras wacana!",
        color: "from-sky-400 to-blue-500",
        glow: "rgba(56,189,248,0.4)",
      };
    } else if ((kode >= 51 && kode <= 67) || (kode >= 80 && kode <= 82)) {
      return {
        emoji: "🌧️",
        kanjiEmoji: "雨",
        teks: "Hujan / Gerimis",
        alesan: "Jas ujan mana jas ujan? Hujan air doang bosku, bukan hujan batu. Tetep hadir ya!",
        color: "from-blue-500 to-indigo-700",
        glow: "rgba(99,102,241,0.4)",
      };
    } else if (kode >= 95) {
      return {
        emoji: "⛈️",
        kanjiEmoji: "嵐",
        teks: "Hujan Badai",
        alesan: "Kalo deres banget neduh dulu gapapa, tapi abis itu langsung meluncur ke TKP!",
        color: "from-gray-600 to-slate-800",
        glow: "rgba(71,85,105,0.5)",
      };
    } else {
      return {
        emoji: "🌤️",
        kanjiEmoji: "天",
        teks: "Cuaca Aman",
        alesan: "Poko'e gass terus, ditunggu di Markas Jajanan Kampoeng Mardan!",
        color: "from-emerald-400 to-teal-600",
        glow: "rgba(52,211,153,0.4)",
      };
    }
  };

  const infoCuaca = getPesanCuaca(cuaca.kode);

  return (
    <>
      <style>{`
        @keyframes weather-pulse {
          0%, 100% { transform: scale(1) rotate(-3deg); }
          50% { transform: scale(1.08) rotate(3deg); }
        }
        @keyframes kanji-glow {
          0%, 100% { opacity: 0.07; }
          50% { opacity: 0.13; }
        }
        @keyframes rain-drop {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        .weather-bounce {
          animation: weather-pulse 3s ease-in-out infinite;
        }
        .kanji-bg {
          animation: kanji-glow 4s ease-in-out infinite;
        }
      `}</style>

      <section className="w-full px-4 sm:px-6 mt-4 mb-8 md:mb-12">
        <div
          className="relative max-w-xl mx-auto overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #fff1f2 0%, #fce7f3 50%, #fff7ed 100%)",
            boxShadow: `0 20px 50px ${infoCuaca.glow}, 0 4px 20px rgba(185,28,28,0.12)`,
            border: "1px solid rgba(244,114,182,0.3)",
          }}
        >
          {/* Top red bar — torii gate beam */}
          <div className="h-2 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

          {/* Big kanji background */}
          <div
            className="kanji-bg absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{
              fontSize: "clamp(120px, 35vw, 200px)",
              fontFamily: "serif",
              color: "#b91c1c",
              lineHeight: 1,
            }}
          >
            {infoCuaca.kanjiEmoji}
          </div>

          {/* Wave pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="waveW" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M0 10 Q10 0 20 10 Q30 20 40 10"
                  stroke="#b91c1c"
                  strokeWidth="1.5"
                  fill="none"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#waveW)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-8 py-6 sm:py-7 text-center">
            {/* Header */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-red-300 text-base select-none">⛩</span>
              <h3
                className="font-black text-red-800 text-sm sm:text-base tracking-[0.15em] uppercase"
                style={{ fontFamily: "Georgia, serif" }}
              >
                📡 Info Cuaca Besok di TKP
              </h3>
              <span className="text-red-300 text-base select-none">⛩</span>
            </div>

            {/* Main weather display */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-5">
              {/* Emoji box — styled like countdown box */}
              <div
                className="relative flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: "clamp(64px, 16vw, 88px)",
                  height: "clamp(64px, 16vw, 88px)",
                }}
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${infoCuaca.color}`}
                />
                <div className="absolute inset-[3px] rounded-lg border border-white/20 shadow-[inset_0_0_12px_rgba(0,0,0,0.2)]" />
                {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map(
                  (pos) => (
                    <div
                      key={pos}
                      className={`absolute w-1.5 h-1.5 rounded-sm bg-white/30 ${pos}`}
                    />
                  )
                )}
                <span
                  className="relative z-10 weather-bounce"
                  style={{ fontSize: "clamp(28px, 7vw, 42px)" }}
                >
                  {infoCuaca.emoji}
                </span>
              </div>

              {/* Text info */}
              <div className="text-left">
                <p className="text-red-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5">
                  Cilodong, Depok
                </p>
                <p
                  className="font-black text-red-900 leading-tight"
                  style={{
                    fontSize: "clamp(18px, 4.5vw, 26px)",
                    fontFamily: "Georgia, serif",
                    textShadow: `0 0 20px ${infoCuaca.glow}`,
                  }}
                >
                  {infoCuaca.teks}
                </p>
                {/* Kanji label kecil */}
                <p
                  className="text-pink-400 text-base sm:text-lg mt-0.5"
                  style={{ fontFamily: "serif", letterSpacing: "0.1em" }}
                >
                  {infoCuaca.kanjiEmoji}の天気
                </p>
              </div>
            </div>

            {/* Quote box — washi paper style */}
            <div
              className="relative rounded-xl px-5 py-4 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(255,241,242,0.9), rgba(252,231,243,0.8))",
                border: "1px solid rgba(244,114,182,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              {/* Corner red dots */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-red-400/40" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-400/40" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-red-400/40" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-red-400/40" />

              <p
                className="text-sm sm:text-base font-semibold text-red-800 italic leading-relaxed"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &quot;{infoCuaca.alesan}&quot;
              </p>
            </div>

            {/* Bottom label */}
            <p className="mt-4 text-[9px] sm:text-[10px] text-red-400/70 tracking-widest font-medium">
              明日の天気予報　· Sumber: Open-Meteo API
            </p>
          </div>

          {/* Bottom shimmer bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-40" />
        </div>
      </section>
    </>
  );
}
