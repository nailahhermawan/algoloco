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
    backToYard: '← Halaman Utama',
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
    underConstruction: {
      stamp: 'SEGERA',
      subtitle: 'DIV. INSPEKSI TERTUNDA',
      message: 'Jalur ini masih dalam pembangunan.',
      backButton: 'Kembali ke halaman utama',
      platform: 'PLATFORM · {number}',
      ticketLabel: 'TIKET #{number} · {category}',
    },
  },
  algorithms: {
    bubbleSort: 'Bubble Sort',
    mergeSort: 'Merge Sort',
    quickSort: 'Quick Sort',
    insertionSort: 'Insertion Sort',
    selectionSort: 'Selection Sort',
    bfs: 'Breadth-First Search (BFS)',
    dfs: 'Depth-First Search (DFS)',
    dijkstra: 'Jalur Dijkstra',
    aStar: 'A* Search',
    graphColoring: 'Pewarnaan Graf',
  },
  special: {
    duel: 'Duel',
    random: 'Acak',
    continue: 'Lanjutkan',
    lessons: 'Pelajaran',
  },
  engine: {
    errors: {
      stepCapExceeded: 'Langkah algoritma melebihi batas maksimum {cap}.',
      invalidInput: 'Masukan data tidak valid.',
    },
  },
};
