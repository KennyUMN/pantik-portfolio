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
      "Lapisan aktivasi dua tingkat yang menyalakan koperasi desa yang sudah berdiri tetapi belum beroperasi, menghubungkannya ke pembeli institusional dan modal kerja.",
    problem:
      "92,69% koperasi terdaftar di Indonesia tetapi sedikit yang benar-benar beroperasi. Gas sudah ada — belum ada yang memantik.",
    solusi:
      "Activation layer dua tingkat: dari denyut menuju nyala. Pantik memetakan kondisi koperasi, mendorong transaksi awal yang terbayar, lalu membantu koperasi naik kelas ke pembiayaan institusional.",
    mekanisme: [
      "Triage otomatis — penilaian kondisi koperasi berbasis data",
      "Transaksi Tier-1 terbayar — membuktikan kapasitas sebelum skala",
      "Indeks Nyala — skor aktivasi yang dapat dipantau Kemenkop",
      "PO Financing Dossier dan artefak kepatuhan siap serap",
    ],
    dampak: "[DAMPAK_ESTIMASI — mis. X koperasi dijangkau, Rp Y nilai transaksi difasilitasi]",
    peranTim: "[PERAN_TIM_DI_PANTIK]",
    stack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "[STACK_LAIN]"],
    demo: "[LINK_DEMO]",
    github: "[LINK_GITHUB]",
    isFlagship: true,
  },
  // Tambah proyek lain di sini. Hapus baris ini bila tidak ada proyek lain.
];
