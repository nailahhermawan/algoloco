import type { TranslationDictionary } from '../schema';

export const en: TranslationDictionary = {
  app: {
    title: 'Algoloco',
    tagline: 'Railway-themed interactive algorithm visualizer',
  },
  nav: {
    home: 'Home',
    lessons: 'Lokal (Lessons)',
    algorithms: 'Ekspres (Algorithms)',
    skipToAlgorithms: 'Skip to algorithms',
    backToYard: '← Yard',
  },
  pages: {
    home: {
      title: 'Algorithm Desk',
      placeholder: 'Algoloco workbench is being prepared.',
    },
    lessonIndex: {
      title: 'Lessons Index',
      placeholder: 'Lokal learning path coming soon.',
    },
    lesson: {
      title: 'Lesson: {id}',
      placeholder: 'Interactive module for lesson {id}.',
    },
    algorithm: {
      title: 'Algorithm: {id}',
      placeholder: 'Desk visualizer for algorithm {id}.',
    },
    notFound: {
      title: 'Station Not Found',
      message: 'The rail track does not lead to this route (404).',
      backHome: 'Return to Home',
    },
    underConstruction: {
      stamp: 'SOON',
      subtitle: 'DIV. INSPECTION PENDING',
      message: 'This line is still under construction.',
      backButton: 'Back to the yard',
      platform: 'PLATFORM · {number}',
      ticketLabel: 'TICKET #{number} · {category}',
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
    dijkstra: "Dijkstra's Path",
    aStar: 'A* Search',
    graphColoring: 'Graph Coloring',
  },
  special: {
    duel: 'Duel',
    random: 'Random',
    continue: 'Continue',
    lessons: 'Lessons',
  },
  engine: {
    errors: {
      stepCapExceeded: 'Algorithm steps exceeded maximum limit of {cap}.',
      invalidInput: 'Invalid data input.',
    },
  },
};
