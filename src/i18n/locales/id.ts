import type { TranslationDictionary } from '../schema';

export const id: TranslationDictionary = {
  app: {
    title: 'Algoloco',
    tagline: 'Visualisasi algoritma berbasis jalur kereta api',
  },
  nav: {
    home: 'Beranda',
    lessons: 'Lokal (Pelajaran)',
    algorithms: 'Ekspres (Algoritma)',
    skipToAlgorithms: 'Lewati ke algoritma',
  },
  pages: {
    home: {
      title: 'Meja Kerja Algoritma',
      placeholder: 'Papan kerja Algoloco sedang disiapkan.',
    },
    lessonIndex: {
      title: 'Daftar Pelajaran',
      placeholder: 'Jalur pembelajaran Lokal akan segera hadir.',
    },
    lesson: {
      title: 'Pelajaran: {id}',
      placeholder: 'Modul interaktif untuk pelajaran {id}.',
    },
    algorithm: {
      title: 'Algoritma: {id}',
      placeholder: 'Visualisasi meja kerja untuk algoritma {id}.',
    },
    notFound: {
      title: 'Stasiun Tidak Ditemukan',
      message: 'Jalur kereta tidak mengarah ke rute ini (404).',
      backHome: 'Kembali ke Beranda',
    },
  },
  engine: {
    errors: {
      stepCapExceeded: 'Langkah algoritma melebihi batas maksimum {cap}.',
      invalidInput: 'Masukan data tidak valid.',
    },
  },
};
