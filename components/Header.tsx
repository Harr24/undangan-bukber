import React from "react";

export default function Header() {
  return (
    <header className="bg-white text-gray-800 pt-8 pb-4 px-4 md:px-8 shadow-sm relative">
      {/* Di layar kecil (HP) menumpuk ke bawah (flex-col), di laptop ke samping (md:flex-row) */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:justify-start gap-4 md:gap-8">
        {/* Bagian Gambar (Logo): Ukurannya otomatis mengecil di HP (w-24), normal di Laptop (w-32) */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-2 border-gray-200 overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Logo PPJ" className="w-full h-full object-cover" />
        </div>

        {/* Bagian Teks Kop Surat: Rata tengah di HP (text-center), Rata kiri di Laptop (md:text-left) biar elegan */}
        <div className="text-center md:text-left flex-1">
          <h1 className="font-extrabold text-xl md:text-4xl mb-1 tracking-wide">
            PPJ (Para Pemburu Job)
          </h1>
          <h2 className="font-bold text-lg md:text-2xl mb-2 md:mb-3">Ketua Setempat</h2>
          <p className="text-xs md:text-base text-gray-800 font-medium leading-relaxed">
            Jajanan kampoeng mardan, Jl. H. Mardan, Kalimulya, Kec.
            <br className="hidden md:block" />
            Cilodong, Kota Depok, Jawa Barat 16413
          </p>
        </div>
      </div>

      {/* Garis Kop Surat (Garis Ganda) */}
      <div className="max-w-4xl mx-auto mt-6">
        <hr className="border-t-[3px] border-black" />
        <hr className="border-t-[1px] border-black mt-1" />
      </div>
    </header>
  );
}
