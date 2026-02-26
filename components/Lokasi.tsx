import React from "react";

export default function Lokasi() {
  return (
    <section id="lokasi" className="max-w-2xl mx-auto px-4 mt-16 pt-8 text-center">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">Tempat Perkara</h2>

      {/* Teks sudah diganti jadi lawak */}
      <p className="font-bold text-xl text-emerald-700 mb-1">Opsi Kuat Mas R </p>
      <p className="text-gray-600 mb-6 text-sm">
        (Perumahan Ambar Cibinong Residence) <br />
        Harapan Jaya, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16914
      </p>

      {/* Tempat untuk embed Google Maps */}
      <div className="w-full h-72 bg-gray-200 rounded-2xl shadow-inner overflow-hidden border-2 border-emerald-100 relative">
        {/* Link src sudah diganti dengan format Embed Google Maps yang benar */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.385002078637!2d106.8406180757424!3d-6.472911463283256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1eaee0b59b7%3A0xbcc0e2060df9baec!2sPerumahan%20Ambar%20Cibinong%20Residence!5e0!3m2!1sen!2sid!4v1709280000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
