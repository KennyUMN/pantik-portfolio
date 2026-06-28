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
      "Lapisan aktivasi dua tingkat yang menyalakan koperasi desa terdaftar menjadi penjualan pertama yang terbukti dibayar.",
    problem:
      "Registrasi koperasi nyaris tuntas dan infrastruktur digitalnya sudah menelan miliaran rupiah, tetapi raknya kosong. Koperasi Pengiringan di Pemalang mencatat sembilan komoditas dengan nilai nol pada semuanya, dan nol anggota dari 12.944 penduduk desa. Baranya sudah ada. Belum ada yang memantiknya.",
    solusi:
      "Pantik bekerja sebagai lapisan aktivasi di atas ekosistem yang sudah ada. Alih alih menyaingi Simkopdes atau CoopTrade, Pantik membuat keduanya benar benar berjalan. Pendamping memakainya untuk memilih koperasi yang paling perlu dinyalakan, memantik transaksi pertamanya, lalu menilai koperasi hanya dari uang yang benar benar masuk.",
    mekanisme: [
      "Peta Triage Aktivasi. Mengurutkan koperasi menurut tingkat kedormanan, dari abu untuk dorman, kuning untuk denyut, oranye untuk nyala, hingga hijau untuk sehat. Pendamping langsung tahu siapa yang harus didatangi lebih dulu.",
      "Transaksi Tier-1 Terbayar. Mencocokkan koperasi dengan pembeli institusional seperti dapur SPPG dan MBG, Bulog, atau pabrik lokal, lalu memfunnel pasokannya ke CoopTrade.",
      "Indeks Nyala. Skor nol sampai seratus per koperasi. Tier-0 dari penjualan ritel ber-QRIS dengan batas tertentu, Tier-1 penuh dari settlement pembeli institusional. Skor hanya naik dari uang yang benar benar masuk, dihitung dari penjualan dan settlement.",
      "PO Financing Dossier. Saat kontrak terbentuk, sistem menyusun dokumen nilai kontrak dan proyeksi arus kas 30, 60, dan 90 hari untuk diajukan ke bank Himbara.",
      "Pengisian Data dan Kepatuhan Otomatis. Profil Simkopdes yang kosong ikut terisi dan artefak kepatuhan Permenkop 2/2024 tergenerate sebagai hasil sampingan dari setiap aktivasi.",
    ],
    dampak:
      "Setiap koperasi yang dinyalakan Pantik berarti profil Simkopdesnya terisi, komoditasnya masuk CoopTrade, keaktifannya terukur lewat Indeks Nyala, dan akses modal kerjanya terbuka lewat PO Dossier. Dengan 4.000 pendamping yang masing masing memegang sekitar 20 koperasi, sekitar 80.000 koperasi dapat dijangkau tanpa membangun basis pengguna dari nol.",
    peranTim:
      "Tim menelusuri langsung ekosistem simkopdes.go.id, CoopTrade, dan CorpU, merancang model aktivasi dua tingkat dan Indeks Nyala yang tahan kecurangan dengan belajar dari kegagalan TaniFund dan eFishery, lalu membangun MVP penuh selama dua hari hackathon.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "NetworkX", "Leaflet.js", "TailwindCSS"],
    demo: "[link-demo-pantik]",
    github: "https://github.com/KennyUMN/pantik-portfolio",
    isFlagship: true,
  },
];
