"use client";

import React, { useState, useEffect } from "react";

type TimeLeft = {
  hari: number;
  jam: number;
  menit: number;
  detik: number;
};

const CHERRY_BLOSSOM = ["✿", "❀", "✾", "✽"];

interface PetalData {
  style: React.CSSProperties;
  char: string;
}

function Petal({ style, char }: { style: React.CSSProperties; char: string }) {
  return (
    <span
      className="absolute pointer-events-none select-none text-pink-300 opacity-70 animate-fall"
      style={style}
    >
      {char}
    </span>
  );
}

type UnitBoxProps = {
  value: number;
  label: string;
  labelJP: string;
  isDetik?: boolean;
};

function UnitBox({ value, label, labelJP, isDetik = false }: UnitBoxProps) {
  const display = value < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={[
          "relative flex flex-col items-center justify-center",
          "w-16 h-16 xs:w-18 xs:h-18 sm:w-22 sm:h-22 md:w-28 md:h-28",
          "rounded-lg",
          isDetik ? "bg-sakura-box" : "",
        ].join(" ")}
        style={{
          width: "clamp(60px, 15vw, 112px)",
          height: "clamp(60px, 15vw, 112px)",
        }}
      >
        <div
          className={[
            "absolute inset-0 rounded-lg",
            isDetik
              ? "bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200"
              : "bg-gradient-to-br from-red-700 via-red-600 to-red-800",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-[3px] rounded-md border",
            isDetik
              ? "border-pink-300/60 shadow-[inset_0_0_8px_rgba(244,114,182,0.3)]"
              : "border-red-300/30 shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]",
          ].join(" ")}
        />
        {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos) => (
          <div
            key={pos}
            className={[
              "absolute w-2 h-2 rounded-sm",
              pos,
              isDetik ? "bg-pink-400/50" : "bg-yellow-300/40",
            ].join(" ")}
          />
        ))}
        <span
          className={[
            "relative z-10 font-black leading-none tracking-tighter",
            isDetik ? "text-red-700" : "text-yellow-100",
          ].join(" ")}
          style={{
            fontSize: "clamp(22px, 5.5vw, 42px)",
            fontFamily: "'Courier New', monospace",
            textShadow: isDetik
              ? "0 0 12px rgba(244,63,94,0.4)"
              : "0 0 16px rgba(255,220,80,0.6), 0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {display}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[10px] sm:text-xs font-bold text-red-800 uppercase tracking-[0.15em]">
          {label}
        </span>
        <span
          className="text-[9px] sm:text-[11px] text-pink-500 font-medium"
          style={{ fontFamily: "'serif'" }}
        >
          {labelJP}
        </span>
      </div>
    </div>
  );
}

export default function CountdownAnime() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });
  const [petals, setPetals] = useState<PetalData[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Trik: Menggunakan setTimeout(..., 0) memindahkan update state ke antrean tugas berikutnya
    // Ini menghilangkan error "calling setState synchronously within an effect"
    const timer = setTimeout(() => {
      setHasMounted(true);

      const generated: PetalData[] = Array.from({ length: 12 }, (_, i) => ({
        style: {
          left: `${(i * 8.5) % 100}%`,
          top: `-${10 + ((i * 7) % 30)}px`,
          fontSize: `${10 + ((i * 3) % 10)}px`,
          animationDuration: `${4 + ((i * 0.7) % 5)}s`,
          animationDelay: `${(i * 0.6) % 4}s`,
        },
        char: CHERRY_BLOSSOM[Math.floor(Math.random() * CHERRY_BLOSSOM.length)],
      }));
      setPetals(generated);
    }, 0);

    const targetDate = new Date("2026-03-02T16:00:00+07:00").getTime();
    const hitungWaktu = () => {
      const now = Date.now();
      const distance = targetDate - now;
      if (distance <= 0) {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
        return;
      }
      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        detik: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    hitungWaktu();
    const interval = setInterval(hitungWaktu, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(260px) rotate(360deg); opacity: 0; }
        }
        @keyframes float-title {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-fall { animation: fall linear infinite; }
        .title-float { animation: float-title 3s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #b91c1c, #f59e0b, #ec4899, #b91c1c);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <section className="w-full px-4 sm:px-6 my-8 md:my-12">
        <div
          className="relative max-w-2xl mx-auto overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #fff1f2 0%, #fce7f3 40%, #fff7ed 100%)",
            boxShadow: "0 20px 60px rgba(185,28,28,0.15), 0 4px 20px rgba(244,114,182,0.2)",
            border: "1px solid rgba(244,114,182,0.3)",
          }}
        >
          <div className="h-2 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {petals.map((petal, i) => (
              <Petal key={i} style={petal.style} char={petal.char} />
            ))}
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="wave" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M0 10 Q10 0 20 10 Q30 20 40 10"
                  stroke="#b91c1c"
                  strokeWidth="1.5"
                  fill="none"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#wave)" />
            </svg>
          </div>
          <div className="relative z-10 px-6 sm:px-8 py-6 sm:py-8 text-center">
            <div className="flex justify-center items-center gap-3 mb-1">
              <span className="text-red-300 text-lg select-none">⛩</span>
              <span className="text-xs text-red-400 font-medium tracking-[0.3em] uppercase">
                集合まで
              </span>
              <span className="text-red-300 text-lg select-none">⛩</span>
            </div>
            <h2
              className="title-float text-lg sm:text-xl md:text-2xl font-black mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <span className="shimmer-text">Menuju Kumpul Atmin</span>
            </h2>
            <p
              className="text-2xl sm:text-3xl text-red-200/80 mb-6 select-none"
              style={{ letterSpacing: "0.2em", textShadow: "0 0 20px rgba(185,28,28,0.3)" }}
            >
              集合カウント
            </p>
            <div className="flex items-start justify-center gap-2 sm:gap-3 md:gap-4">
              <UnitBox value={timeLeft.hari} label="Hari" labelJP="日" />
              <div className="flex flex-col items-center self-start mt-4 sm:mt-5 gap-1.5">
                <span className="text-red-600 font-black text-xl sm:text-2xl leading-none animate-pulse">
                  ・
                </span>
                <span className="text-red-600 font-black text-xl sm:text-2xl leading-none animate-pulse">
                  ・
                </span>
              </div>
              <UnitBox value={timeLeft.jam} label="Jam" labelJP="時" />
              <div className="flex flex-col items-center self-start mt-4 sm:mt-5 gap-1.5">
                <span className="text-red-600 font-black text-xl sm:text-2xl leading-none animate-pulse">
                  ・
                </span>
                <span className="text-red-600 font-black text-xl sm:text-2xl leading-none animate-pulse">
                  ・
                </span>
              </div>
              <UnitBox value={timeLeft.menit} label="Menit" labelJP="分" />
              <div className="flex flex-col items-center self-start mt-4 sm:mt-5 gap-1.5">
                <span className="text-red-600 font-black text-xl sm:text-2xl leading-none animate-pulse">
                  ・
                </span>
                <span className="text-red-600 font-black text-xl sm:text-2xl leading-none animate-pulse">
                  ・
                </span>
              </div>
              <UnitBox value={timeLeft.detik} label="Detik" labelJP="秒" isDetik />
            </div>
            <p className="mt-5 text-[10px] sm:text-xs text-red-400/80 tracking-widest font-medium">
              ２０２６年３月２日　16:00 WIB
            </p>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
        </div>
      </section>
    </>
  );
}
