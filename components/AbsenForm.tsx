"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Panggil kunci dari env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AbsenForm() {
  const [nama, setNama] = useState("");
  const [daftarHadir, setDaftarHadir] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
    <section className="max-w-md mx-auto px-4 mt-16 mb-8 text-center bg-white p-8 rounded-3xl shadow-lg border border-emerald-50">
      <h2 className="text-xl font-bold text-emerald-800 mb-2">Absen Dulu Bosku</h2>
      <p className="text-gray-600 text-sm mb-6">
        Kehadiran kalian sangat diharapkan, karena tanpa kalian acara ini hanya akan menjadi buka
        puasa biasa yang sepi dan penuh pertanyaan hidup.
      </p>

      {/* Counter Kehadiran */}
      <div className="mb-6">
        <p className="text-4xl font-black text-emerald-600">
          {daftarHadir.length} <span className="text-lg text-gray-500 font-normal">/ 11 Hadir</span>
        </p>
      </div>

      {/* Form Input Nama */}
      <div className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Ketik namamu di sini..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAbsen()}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center disabled:bg-gray-100"
        />
        <button
          onClick={handleAbsen}
          disabled={isLoading}
          className={`w-full text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md transform active:scale-95 ${
            isLoading ? "bg-emerald-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {isLoading ? "Menyimpan..." : "Absen Sekarang!"}
        </button>
      </div>

      {/* Daftar Orang yang Hadir */}
      {daftarHadir.length > 0 && (
        <div className="text-left bg-emerald-50 p-4 rounded-xl mb-6 border border-emerald-100">
          <p className="font-bold text-emerald-800 mb-2">Horee hadir kelas king 👑 :</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {daftarHadir.map((orang, index) => (
              <li key={index} className="capitalize">
                {orang}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-6 text-xs text-gray-400 italic">
        Tertanda,
        <br />
        Ketua Panitia Sementara Karena Yang Lain Nolak
      </p>
    </section>
  );
}
