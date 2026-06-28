export interface DomainPoint {
  judul: string;
  deskripsi: string;
}

export const domain = {
  ringkasan:
    "Tim memahami bahasa koperasi, ekonomi kerakyatan, dan regulasi yang berlaku. Kami membangun Pantik bukan hanya sebagai produk teknis, tetapi sebagai solusi yang lahir dari pemahaman mendalam ekosistem koperasi Indonesia.",
  buktiRiset: [
    {
      judul: "Eksplorasi Langsung Ekosistem SIMKOPDES",
      deskripsi:
        "Membuka dan menganalisis ratusan profil koperasi di simkopdes.go.id, CoopTrade, dan CorpU. Menemukan pola konsisten: 0 anggota, 0 produk, 0 unit usaha di hampir semua koperasi terdaftar. Berita koperasi berisi test data ('IDOR News With Thumbnail'). Raknya kosong.",
    },
    {
      judul: "Pemahaman Regulasi & Posisi Produk",
      deskripsi:
        "Memahami Perpres 115/2025, Permenkop 2/2024, logika lane Technology Provider Member (TPM), dan mekanisme pengalihan HAKI ke Kemenkop. Indeks Nyala diposisikan sebagai primitive unik yang mengisi lane TPM — tidak dimiliki CoopTrade, CorpU, maupun vendor POS manapun.",
    },
    {
      judul: "Analisis Kegagalan Fintech Agrikultur",
      deskripsi:
        "Mempelajari pola kegagalan TaniFund, eFishery, dan Investree untuk membangun Indeks Nyala yang tahan gaming sejak hari pertama: skor dihitung dari penjualan (duit masuk), bukan kulakan (duit keluar), dengan counterparty graph untuk deteksi transaksi circular.",
    },
  ] satisfies DomainPoint[],
  koperasiDiobservasi:
    "Koperasi Desa Merah Putih Pengiringan (Pegiringan, Bantarbolang, Kab. Pemalang, Jawa Tengah) — 9 komoditas terdaftar (Padi, Jagung, Pisang, Mangga, dll), semua nilai 0. 0 anggota dari 12.944 penduduk.",
};
