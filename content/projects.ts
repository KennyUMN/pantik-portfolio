export interface Project {
  judul: string;
  ringkas: string;
  problem?: string;
  solusi?: string;
  mekanisme?: string[];
  dampak?: string;
  peranTim?: string;
  stack: string[];
  demo: string;
  github: string;
  isFlagship: boolean;
}

export const projects: Project[] = [
  {
    judul: "Pantik × Indeks Nyala",
    ringkas:
      "Activation layer dua tingkat yang menyalakan koperasi desa yang sudah terdaftar tapi belum beroperasi — mengisi data SIMKOPDES, memfunnel supply ke CoopTrade, dan membuka akses modal kerja.",
    problem:
      "83.363 koperasi terdaftar di SIMKOPDES, miliaran rupiah infrastruktur digital sudah dibangun Kemenkop — tapi raknya kosong. Koperasi Pengiringan (Pemalang, Jateng): 9 komoditas tercatat, semua nilai 0. 0 anggota dari 12.944 penduduk. Gas sudah ada, belum ada yang memantik.",
    solusi:
      "Pantik adalah activation layer, bukan platform baru. Kami tidak bersaing dengan SIMKOPDES atau CoopTrade — kami yang membuat keduanya benar-benar berjalan. Two-Tier model: Tier-0 mengisi data SIMKOPDES dan membuktikan denyut pertama via QRIS; Tier-1 auto-posting ke CoopTrade dan generate PO Dossier untuk bank.",
    mekanisme: [
      "Peta Panas Aktivasi — visualisasi per-desa dari dorman (abu) ke denyut (kuning) ke nyala (oranye) ke sehat (hijau)",
      "1-Click SIMKOPDES Data Population — auto-generate CSV/JSON profil koperasi, potensi desa, unit usaha untuk upload ke website SIMKOPDES yang kosong",
      "Indeks Nyala Engine — skor 0–100 per koperasi; Tier-0 cap 30 (penjualan QRIS), Tier-1 penuh (settlement counterparty via CoopTrade)",
      "CoopTrade Auto-Posting + Domestic Matching — funnel supply ke marketplace Kemenkop + linkage ke dapur MBG/SPPG, Bulog, pabrik lokal",
      "PO Financing Dossier Generator — auto-generate PDF nilai kontrak + proyeksi cashflow 30/60/90 hari untuk pengajuan ke bank Himbara",
    ],
    dampak:
      "Setiap koperasi yang diaktivasi Pantik = website SIMKOPDES terisi + komoditas masuk CoopTrade + Indeks Nyala bisa dimonitor Kemenkop + modal kerja terbuka via PO Dossier. Target awal: 4.000 PHTC × 20 koperasi = 80.000 koperasi terjangkau tanpa harus membangun user base dari nol.",
    peranTim:
      "Eksplorasi langsung seluruh ekosistem simkopdes.go.id, CoopTrade, dan CorpU. Desain Two-Tier Activation Model dan Indeks Nyala anti-gaming (belajar dari kegagalan TaniFund/eFishery). Implementasi MVP penuh selama hackathon 2 hari.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "NetworkX", "Leaflet.js", "TailwindCSS"],
    demo: "[link-demo-pantik]",
    github: "https://github.com/KennyUMN/pantik-portfolio",
    isFlagship: true,
  },
];
