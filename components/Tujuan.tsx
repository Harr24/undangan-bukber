import React from "react";

export default function Tujuan() {
  return (
    <section className="max-w-2xl mx-auto px-4 mt-12 text-center">
      {/* Kasih efek fade-up ke judul */}
      <h2 data-aos="fade-down" className="text-2xl font-bold text-emerald-800 mb-6">
        Tujuan Acara
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {/* Kasih efek fade-up berurutan pakai data-aos-delay */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500"
        >
          <p className="font-semibold text-emerald-700">1. Silaturahmi</p>
          <p className="text-sm text-gray-600">Mempererat tali silaturahmi yang mulai renggang.</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500"
        >
          <p className="font-semibold text-emerald-700">2. Cek Circle</p>
          <p className="text-sm text-gray-600">Membuktikan bahwa kita masih satu circle.</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500"
        >
          <p className="font-semibold text-emerald-700">3. Sharing Session</p>
          <p className="text-sm text-gray-600">Tukar cerita hidup dan berbagi koneksi.</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500"
        >
          <p className="font-semibold text-emerald-700">4. Konten Sosmed</p>
          <p className="text-sm text-gray-600">
            Foto untuk upload caption &quot;Alhamdulillah masih lengkap&quot;.
          </p>
        </div>
      </div>
    </section>
  );
}
