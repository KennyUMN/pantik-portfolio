export interface DomainPoint {
  judul: string;
  deskripsi: string;
}

export const domain = {
  ringkasan:
    "Tim memahami bahasa koperasi, ekonomi kerakyatan, dan regulasi yang berlaku. Kami membangun Pantik bukan hanya sebagai produk teknis, tetapi sebagai solusi yang lahir dari pemahaman mendalam ekosistem koperasi Indonesia.",
  buktiRiset: [
    {
      judul: "Observasi Koperasi Lapangan",
      deskripsi: "[BUKTI_RISET_1 — mis. observasi di Koperasi X, Desa Y, tanggal Z]",
    },
    {
      judul: "Pemahaman Regulasi",
      deskripsi:
        "Memahami Perpres 115/2025, Permenkop 2/2024, logika lane Technology Provider Member, dan mekanisme pengalihan HAKI ke Kemenkop.",
    },
    {
      judul: "Rencana Grounding",
      deskripsi:
        "Wawancara pendamping koperasi dan SPPG dijadwalkan untuk memvalidasi asumsi sebelum pitching akhir.",
    },
  ] satisfies DomainPoint[],
  koperasiDiobservasi: "[KOPERASI_DIOBSERVASI]",
};
