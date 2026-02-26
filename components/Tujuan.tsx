import React from "react";

export default function Tujuan() {
  return (
    <section className="max-w-2xl md:max-w-4xl mx-auto px-4 mt-12 md:mt-24 text-center">
      {/* Kasih efek fade-up ke judul */}
      <h2
        data-aos="fade-down"
        className="text-2xl md:text-4xl font-bold text-emerald-800 mb-6 md:mb-12"
      >
        Tujuan Acara
      </h2>

      {/* Grid sudah responsif, kita tambahkan gap yang lebih lega di layar besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left">
        {/* Kasih efek fade-up berurutan pakai data-aos-delay */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 md:border-l-[6px] border-emerald-500"
        >
          <p className="font-bold text-emerald-700 md:text-xl mb-1 md:mb-2">1. Silaturahmi</p>
          <p className="text-sm md:text-base text-gray-600">
            Mempererat tali silaturahmi yang mulai renggang misal debat ronaldo or messi.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 md:border-l-[6px] border-emerald-500"
        >
          <p className="font-bold text-emerald-700 md:text-xl mb-1 md:mb-2">2. Cek Member Atmin</p>
          <p className="text-sm md:text-base text-gray-600">
            Membuktikan bahwa kita masih member PPJ dan patuh terhadap Atmin.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 md:border-l-[6px] border-emerald-500"
        >
          <p className="font-bold text-emerald-700 md:text-xl mb-1 md:mb-2">3. Sharing Session</p>
          <p className="text-sm md:text-base text-gray-600">
            Tukar cerita My KIsah dan berbagi koneksi info loker atau curhat syedih.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white p-4 md:p-8 rounded-lg md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 md:border-l-[6px] border-emerald-500"
        >
          <p className="font-bold text-emerald-700 md:text-xl mb-1 md:mb-2">
            4. Konten Sosmed Up IG
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Foto untuk upload caption &quot;Alhamdulillah masih lengkap&quot;.
          </p>
        </div>
      </div>
    </section>
  );
}
