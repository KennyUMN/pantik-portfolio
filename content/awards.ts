export interface Award {
  namaLomba: string;
  tingkat: string;
  tahun: number;
  peran: string;
  dampak: string;
}

export const awards: Award[] = [
  {
    namaLomba: "I/O Festival",
    tingkat: "Juara 1 Nasional",
    tahun: 2025,
    peran: "Lintang Balakosa Ardhana",
    dampak: "Membangun platform B2B untuk ekonomi sirkular.",
  },
  {
    namaLomba: "SurabayaDev Developer Battle 2025",
    tingkat: "Juara 3 Nasional",
    tahun: 2025,
    peran: "Lintang Balakosa Ardhana",
    dampak: "Analisis pola pemesanan dan pembatalan hotel; diakui dalam storytelling dan kedalaman analitik.",
  },
  {
    namaLomba: "CIMB Niaga Pitching Day (UMN)",
    tingkat: "Juara 2 Internal",
    tahun: 2025,
    peran: "Lintang Balakosa Ardhana",
    dampak: "Membangun aplikasi mobile fungsional untuk pembukaan rekening digital (React Native, Expo Go).",
  },
];
