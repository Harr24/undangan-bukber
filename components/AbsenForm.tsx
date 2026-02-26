"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Panggil kunci dari env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AbsenForm() {
  const [nama, setNama] = useState("");
  const [daftarHadir, setDaftarHadir] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Inisialisasi AOS & Ambil Data
  useEffect(() => {
    // Inisialisasi animasi AOS
    AOS.init({
      duration: 800,
      once: true, // Animasi hanya berjalan sekali saat di-scroll
    });

    const ambilDataHadir = async () => {
      const { data, error } = await supabase
        .from("kehadiran")
        .select("nama")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data:", error);
      } else if (data) {
        setDaftarHadir(data.map((item) => item.nama));
      }
    };

    ambilDataHadir();
  }, []);

  const handleAbsen = async () => {
    if (nama.trim() !== "") {
      setIsLoading(true);
      const { error } = await supabase.from("kehadiran").insert([{ nama: nama }]);

      if (error) {
        console.error("Gagal menyimpan data:", error);
        alert("Waduh gagal absen nih bos, coba lagi ya!");
      } else {
        setDaftarHadir([...daftarHadir, nama]);
        setNama("");
      }
      setIsLoading(false);
    }
  };

  return (
    <section
      className="max-w-md md:max-w-2xl mx-auto px-4 mt-16 md:mt-24 mb-8 md:mb-12 text-center bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-emerald-50"
      data-aos="fade-up"
    >
      <h2
        className="text-xl md:text-3xl font-bold text-emerald-800 mb-2 md:mb-4"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Absen Dulu Bosku
      </h2>
      <p
        className="text-gray-600 text-sm md:text-base mb-6 md:mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Kehadiran kalian sangat diharapkan atmin karena jika member durjana atmin akan murka parani
        .
      </p>

      {/* Counter Kehadiran */}
      <div className="mb-6 md:mb-8" data-aos="zoom-in" data-aos-delay="300">
        <p className="text-4xl md:text-5xl font-black text-emerald-600">
          {daftarHadir.length}{" "}
          <span className="text-lg md:text-xl text-gray-500 font-normal">/ 11 Hadir</span>
        </p>
      </div>

      {/* Form Input Nama */}
      <div
        className="flex flex-col md:flex-row gap-3 mb-6 md:mb-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <input
          type="text"
          placeholder="Tulis lah masa diem bae"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAbsen()}
          disabled={isLoading}
          className="w-full md:w-2/3 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center md:text-left disabled:bg-gray-100"
        />
        <button
          onClick={handleAbsen}
          disabled={isLoading}
          className={`w-full md:w-1/3 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md transform active:scale-95 ${
            isLoading ? "bg-emerald-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {isLoading ? "Menyimpan..." : "Absen jaw&sund!"}
        </button>
      </div>

      {/* Daftar Member Hadir Atmin Senang */}
      {daftarHadir.length > 0 && (
        <div
          className="text-left bg-emerald-50 p-4 md:p-6 rounded-xl mb-6 border border-emerald-100"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="font-bold text-emerald-800 mb-2 md:text-lg">Horee hadir kelas king 👑 :</p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1 md:space-y-2">
            {daftarHadir.map((orang, index) => (
              <li key={index} className="capitalize">
                {orang}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p
        className="mt-6 md:mt-8 text-xs md:text-sm text-gray-400 italic"
        data-aos="fade-in"
        data-aos-delay="600"
      >
        Tertanda,
        <br />
        Pria Solo Itu Lagi heel nah..
      </p>
    </section>
  );
}
