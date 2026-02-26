"use client";

import React, { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* --- TOMBOL BUKA SIDEBAR --- */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 right-6 z-40 bg-white text-emerald-700 p-3 rounded-full shadow-lg border-2 border-emerald-200 hover:bg-emerald-50 transition transform hover:scale-110 flex items-center justify-center"
      >
        <span className="text-xl">☰</span>
      </button>

      {/* --- SIDEBAR OVERLAY & MENU --- */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-emerald-800 text-white z-50 shadow-2xl transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 border-b border-emerald-600 pb-4">
            <h2 className="text-xl font-bold">Menu Undangan</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-emerald-300 hover:text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-emerald-300 text-sm font-semibold mb-3 tracking-wider">NAVIGASI</h3>
            <ul className="space-y-4 font-medium">
              <li>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsSidebarOpen(false);
                  }}
                  className="hover:text-emerald-300 transition w-full text-left"
                >
                  🏠 Halaman Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("rundown")?.scrollIntoView({ behavior: "smooth" });
                    setIsSidebarOpen(false);
                  }}
                  className="hover:text-emerald-300 transition w-full text-left"
                >
                  🕒 Rundown Acara
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("lokasi")?.scrollIntoView({ behavior: "smooth" });
                    setIsSidebarOpen(false);
                  }}
                  className="hover:text-emerald-300 transition w-full text-left"
                >
                  📍 Lokasi Perkara
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
