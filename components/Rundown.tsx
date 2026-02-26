import React from "react";

export default function Rundown() {
  return (
    <section
      id="rundown"
      className="max-w-2xl md:max-w-3xl mx-auto px-4 mt-16 md:mt-24 pt-8 md:pt-12"
    >
      {/* Judul kita kasih efek dari atas ke bawah */}
      <h2
        data-aos="fade-down"
        className="text-2xl md:text-4xl font-bold text-center text-emerald-800 mb-10 md:mb-16"
      >
        Rundown Acara Biar Jelas
      </h2>

      {/* Kontainer timeline diperlebar jaraknya di layar laptop */}
      <div className="space-y-8 md:space-y-12 border-l-4 md:border-l-[6px] border-emerald-300 ml-4 md:ml-8 pl-5 md:pl-10">
        {/* Setiap item rundown kita kasih fade-up biar muncul mulus dari bawah */}
        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">16.00 - 17.00 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">
            Registrasi / Biar Kumpul Dulu
          </p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">17.00 - 17.30 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">Rapat Untuk Makanannya</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">17.30 - 18.00 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">Eksekusi Rapat Tadi</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">18.00 - 18.15 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">
            Pembukaan dari Ketua Panitia
          </p>
          <p className="text-gray-600 text-sm md:text-base italic">Untuk memulai acara bukber.</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">18.15 - 19.00 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">
            Acara Bukber Dimulai & Sholat Maghrib
          </p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">19.00 - 21.00 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">Maen</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">21.00 - 21.10 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">Foto Bersama</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-emerald-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-emerald-50"></div>
          <h3 className="font-bold text-lg md:text-2xl text-emerald-700">21.10 - 21.20 WIB</h3>
          <p className="font-semibold md:text-lg text-gray-800 mt-1">
            Menyanyikan Lagu Indonesia Raya
          </p>
          <p className="text-gray-600 text-sm md:text-base italic">Wajib khidmat.</p>
        </div>

        <div data-aos="fade-up" className="relative">
          <div className="absolute -left-[28px] md:-left-[53px] bg-gray-400 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 md:border-[6px] border-gray-100"></div>
          <h3 className="font-bold text-lg md:text-2xl text-gray-500">21.30 WIB - Selesai</h3>
          <p className="font-semibold md:text-lg text-gray-500 mt-1">Pulang (Opsional)</p>
        </div>
      </div>
    </section>
  );
}
