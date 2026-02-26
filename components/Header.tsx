import React from "react";

export default function Header() {
  return (
    <header className="relative bg-emerald-50 pt-16 pb-16 px-4 overflow-hidden text-center rounded-b-[2rem] md:rounded-b-[4rem] shadow-sm">
      {/* Background dekorasi lengkung biar kayak web modern sungguhan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] md:w-[120%] bg-emerald-100/50 rounded-[100%] z-0 -mt-[80%] md:-mt-[40%]"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo dibikin ala Profile Picture WA / IG */}
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 md:border-8 border-white shadow-xl overflow-hidden mb-6 md:mb-8 bg-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Logo PPJ" className="w-full h-full object-cover" />
        </div>

        {/* Judul Utama yang lebih nendang */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl md:text-5xl font-black text-emerald-900 mb-4 tracking-tight"
        >
          PPJ <br className="md:hidden" /> (Para Pemburu Job)
        </h1>

        {/* Badge Jabatan ala Meme (agak miring dikit biar santai) */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm md:text-lg font-bold mb-6 md:mb-8 shadow-md transform -rotate-2 hover:rotate-0 transition-transform cursor-default"
        >
          👑 Atmin dibalik layar
        </div>

        {/* Alamat pakai icon biar ga kaku */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-700 md:text-lg max-w-xl mx-auto font-medium bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100 shadow-sm"
        >
          <p className="font-bold text-emerald-800 mb-1">📍 BaseCamp</p>
          <p className="text-xs md:text-sm text-gray-600">
            Jl. H. Mardan, Kalimulya, Kec. Cilodong, <br className="hidden md:block" />
            Kota Depok, Jawa Barat 16413
          </p>
        </div>
      </div>
    </header>
  );
}
