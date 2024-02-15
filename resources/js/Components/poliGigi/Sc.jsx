import React from 'react';
import ServiceCard from "@/Components/poliGigi/ServiceCard";


const Sc = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ServiceCard
              title="Perawatan Gigi Umum"
              description="Perawatan gigi umum: menjaga kesehatan gigi dan gusi dengan pembersihan, penambalan, dan pemeriksaan rutin."
              href="https://www.halodoc.com/kesehatan/perawatan-gigi"
            />
            <ServiceCard
              title="Pembersihan Gigi dan Skaling"
              description="Pembersihan gigi dan scaling adalah prosedur untuk menghilangkan plak, tartar, dan noda pada gigi serta mengurangi risiko penyakit gusi."
              href="https://www.halodoc.com/kesehatan/scaling"
            />
            <ServiceCard
              title="Perawatan Saluran Akar"
              description="Perawatan saluran akar adalah prosedur untuk menyelamatkan gigi yang terinfeksi dengan membersihkan dan mengisi saluran akarnya."
              href="https://www.halodoc.com/kesehatan/perawatan-saluran-akar-gigi"
            />
            <ServiceCard
              title="Perawatan gigi anak"
              description="Perawatan gigi anak adalah upaya pencegahan dan perawatan gigi serta mulut yang disesuaikan dengan kebutuhan dan kondisi gigi anak."
              href="https://www.halodoc.com/artikel/ini-jenis-perawatan-gigi-anak-yang-wajib-dilakukan"
            />
            <ServiceCard
              title="Implan"
              description="Implan adalah prosedur pemasangan struktur logam ke tulang rahang untuk mendukung gigi palsu dan memulihkan fungsi serta penampilan gigi yang hilang."
              href="https://www.halodoc.com/kesehatan/implan-gigi"
            />
            <ServiceCard
              title="Bleaching Gigi"
              description="Bleaching gigi adalah prosedur pemutihan gigi untuk menghilangkan noda dan meningkatkan kecerahan gigi menggunakan bahan pemutih khusus."
              href="https://www.halodoc.com/kesehatan/bleaching-gigi"
            />
            <ServiceCard
              title="Perawatan Syaraf Gigi"
              description="Perawatan saraf gigi adalah prosedur untuk menyelamatkan gigi dari infeksi atau kerusakan saraf dengan membersihkan dan mengisi saluran akar."
              href="https://www.halodoc.com/artikel/ini-5-cara-menenangkan-saraf-gigi-yang-sakit-tanpa-obat"
            />
            <ServiceCard
              title="Penambalan Gigi"
              description="Penambalan gigi: mengisi lubang gigi dengan bahan tambalan untuk memulihkan kekuatan dan melindungi gigi dari kerusakan lebih lanjut."
              href="https://www.halodoc.com/kesehatan/tambal-gigi"
            />
            <ServiceCard
              title="Scaling"
              description="Scaling: prosedur pembersihan gigi yang menghilangkan plak, tartar, dan kotoran untuk menjaga kesehatan gusi dan mencegah masalah gigi."
              href="https://www.halodoc.com/kesehatan/scaling"
            />
          </div>
  );
};

export default Sc;