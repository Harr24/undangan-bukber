import React from "react";

export default function Rundown() {
  return (
    <section id="rundown" className="max-w-2xl mx-auto px-4 mt-16 pt-8">
      {/* Judul kita kasih efek dari atas ke bawah */}
      <h2 data-aos="fade-down" className="text-2xl font-bold text-center text-emerald-800 mb-8">
        Rundown Acara Biar Jelas
      </h2>

      <div className="space-y-6 border-l-4 border-emerald-300 ml-4 md:ml-0 md:pl-6 pl-4">
        {/* Setiap item rundown kita kasih fade-up biar muncul mulus dari bawah */}
        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">16.00 - 17.00 WIB</h3>
          <p className="font-semibold">Registrasi / Biar Kumpul Dulu</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">17.00 - 17.30 WIB</h3>
          <p className="font-semibold">Rapat Untuk Makanannya</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">17.30 - 18.00 WIB</h3>
          <p className="font-semibold">Eksekusi Rapat Tadi</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">18.00 - 18.15 WIB</h3>
          <p className="font-semibold">Pembukaan dari Ketua Panitia</p>
          <p className="text-gray-600 text-sm italic">Untuk memulai acara bukber.</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">18.15 - 19.00 WIB</h3>
          <p className="font-semibold">Acara Bukber Dimulai & Sholat Maghrib</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">19.00 - 21.00 WIB</h3>
          <p className="font-semibold">Maen</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">21.00 - 21.10 WIB</h3>
          <p className="font-semibold">Foto Bersama</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-emerald-500 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-emerald-700">21.10 - 21.20 WIB</h3>
          <p className="font-semibold">Menyanyikan Lagu Indonesia Raya</p>
          <p className="text-gray-600 text-sm italic">Wajib khidmat.</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[27px] md:-left-[35px] bg-gray-400 w-4 h-4 rounded-full border-4 border-emerald-50"></div>
          <h3 className="font-bold text-lg text-gray-500">21.30 WIB - Selesai</h3>
          <p className="font-semibold text-gray-500">Pulang (Opsional)</p>
        </div>
      </div>
    </section>
  );
}
