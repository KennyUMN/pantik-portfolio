export interface Award {
  namaLomba: string;
  tingkat: string;
  tahun: number;
  peran: string;
  dampak: string;
}

export const awards: Award[] = [
  {
    namaLomba: "I/O Festival 2026",
    tingkat: "Juara 1 Nasional, Web Development",
    tahun: 2026,
    peran: "Lintang Balakosa Ardhana dan Nanda Valeri",
    dampak: "Menjuarai kompetisi Web Development tingkat nasional antar mahasiswa dan mengungguli tim dari universitas negeri.",
  },
  {
    namaLomba: "CIMB Niaga Pitching Day × UMN",
    tingkat: "Juara 2 Internal",
    tahun: 2025,
    peran: "Lintang Balakosa Ardhana dan Nanda Valeri",
    dampak: "Membangun aplikasi mobile fungsional untuk pembukaan rekening digital CIMB Niaga, dengan desain antarmuka yang ramah lansia tanpa mengorbankan identitas merek.",
  },
  {
    namaLomba: "Diponegoro Capital Market Days (DCMD)",
    tingkat: "Outstanding Equity Research Paper",
    tahun: 2025,
    peran: "Kenny Valent Winalda Sembiring",
    dampak: "Penghargaan riset ekuitas terbaik yang diterbitkan oleh Universitas Diponegoro, mewakili Universitas Multimedia Nusantara.",
  },
  {
    namaLomba: "SurabayaDev Developer Battle 2025",
    tingkat: "Juara 3 Nasional",
    tahun: 2025,
    peran: "Lintang Balakosa Ardhana",
    dampak: "Menganalisis pola pemesanan dan pembatalan hotel, diakui atas kedalaman analitik dan kekuatan penyajian datanya.",
  },
];
