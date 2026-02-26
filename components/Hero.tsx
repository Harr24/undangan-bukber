import React from "react";

export default function Hero() {
  return (
    // 1. Container Utama: Kita atur tingginya (h-[...]) biar gambarnya kelihatan luas
    <section className="relative w-full h-[450px] md:h-[600px] shadow-2xl overflow-hidden rounded-b-[40px] flex items-center justify-center text-white px-4">
      {/* 2. BACKGROUND IMAGE */}
      {/* Ini div khusus buat nampilin gambar background. Posisinya absolute memenuhi ruangan */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105" // scale-105 biar ada efek nge-zoom dikit
        style={{
          // Pastikan nama file di sini SAMA PERSIS dengan yang kamu taruh di folder public
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      ></div>

      {/* 3. DARK OVERLAY (Lapisan Gelap) */}
      {/* Ini penting biar tulisan putih tetap kebaca walau backgroundnya rame. */}
      {/* bg-black/60 artinya warna hitam dengan transparansi 60%. Bisa kamu ubah angkanya (misal /50 atau /70) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* 4. KONTEN TEKS */}
      {/* Z-index paling tinggi (z-20) biar posisinya di atas gambar dan lapisan gelap */}
      <div className="relative z-20 flex flex-col items-center text-center mt-8 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl tracking-tight">
          Buka Bersama & <br /> Reuni Mini
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-medium italic text-gray-200 drop-shadow-md">
          (Tapi Gak Mini-Mini Amat)
        </p>

        {/* Kotak Tanggal dibuat transparan kaca (Glassmorphism) */}
        <div className="bg-white/10 inline-block px-10 py-6 rounded-3xl backdrop-blur-md border-2 border-white/20 shadow-2xl transform hover:scale-105 transition duration-300">
          <p className="font-black text-3xl md:text-4xl mb-2 text-white tracking-wide">
            Senin, 2 Maret 2026
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold text-lg uppercase tracking-wider">
            <span>🕒 16.00 WIB</span>
            <span>•</span>
            <span>Sampai Kenyang 🍖</span>
          </div>
        </div>
      </div>
    </section>
  );
}
