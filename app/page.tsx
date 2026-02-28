"use client"; // Wajib ditambahkan karena kita pakai useEffect untuk animasi

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import gaya CSS animasinya

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown"; //tambahan import Countdown-nya
import WidgetCuaca from "@/components/WidgetCuaca";
import Tujuan from "@/components/Tujuan";
import Rundown from "@/components/Rundown";
import Lokasi from "@/components/Lokasi";
import AbsenForm from "@/components/AbsenForm";
import Sidebar from "@/components/Sidebar";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  // Menyalakan mesin AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Kecepatan animasi (800ms)
      once: false, // Kalau di-scroll ke atas lagi, animasinya bisa ngulang
      offset: 100, // Jarak trigger animasi
    });
  }, []);

  return (
    // PERUBAHAN DI SINI:
    // 1. Tag <div> pembungkus background abu-abu dihilangkan.
    // 2. Class "max-w-md" dan "shadow-2xl" dihapus agar bebas melebar (w-full).
    <main className="w-full min-h-screen bg-emerald-50 text-gray-800 font-sans pb-28 relative overflow-x-hidden">
      <Sidebar />
      <Header />

      {/* Hero biar gak ikut ke-animasi dari bawah secara aneh */}
      <Hero />

      {/*  Widget Countdown disisipkan tepat di bawah Hero dan di atas Tujuan */}
      <Countdown />
      <WidgetCuaca />

      <Tujuan />
      <Rundown />
      <Lokasi />
      <AbsenForm />

      <MusicPlayer />
    </main>
  );
}
