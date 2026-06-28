export interface DomainPoint {
  judul: string;
  deskripsi: string;
}

export const domain = {
  ringkasan:
    "Tim memahami bahasa koperasi, ekonomi kerakyatan, dan regulasi yang berlaku. Pantik kami rancang sebagai solusi yang lahir dari pemahaman ekosistem koperasi Indonesia.",
  buktiRiset: [
    {
      judul: "Eksplorasi Langsung Ekosistem SIMKOPDES",
      deskripsi:
        "Kami membuka dan menganalisis ratusan profil koperasi di simkopdes.go.id, CoopTrade, dan CorpU. Polanya konsisten. Nol anggota, nol produk, nol unit usaha di hampir semua koperasi terdaftar, bahkan beritanya masih berisi data uji bernama IDOR News With Thumbnail. Raknya kosong.",
    },
    {
      judul: "Pemahaman Regulasi dan Posisi Produk",
      deskripsi:
        "Kami memahami Perpres 115/2025, Permenkop 2/2024, logika lane Technology Provider Member, dan mekanisme pengalihan HAKI ke Kemenkop. Indeks Nyala kami posisikan sebagai primitive unik yang mengisi lane TPM, sesuatu yang belum dimiliki CoopTrade, CorpU, maupun vendor POS mana pun.",
    },
    {
      judul: "Analisis Kegagalan Fintech Agrikultur",
      deskripsi:
        "Kami mempelajari pola kegagalan TaniFund, eFishery, dan Investree untuk membangun Indeks Nyala yang tahan kecurangan sejak hari pertama. Skornya dihitung dari uang yang masuk, bukan dari belanja, dengan counterparty graph untuk menangkap transaksi yang berputar di lingkaran yang sama.",
    },
  ] satisfies DomainPoint[],
  koperasiDiobservasi:
    "Koperasi Desa Merah Putih Pengiringan (Pegiringan, Bantarbolang, Kabupaten Pemalang, Jawa Tengah) mencatat sembilan komoditas dengan nilai nol pada semuanya, dan nol anggota dari 12.944 penduduk.",
};
