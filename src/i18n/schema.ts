export interface TranslationDictionary {
  app: {
    title: string;
    tagline: string;
  };
  nav: {
    home: string;
    lessons: string;
    algorithms: string;
    skipToAlgorithms: string;
    backToYard: string;
  };
  pages: {
    home: {
      title: string;
      placeholder: string;
    };
    lessonIndex: {
      title: string;
      placeholder: string;
    };
    lesson: {
      title: string;
      placeholder: string;
    };
    algorithm: {
      title: string;
      placeholder: string;
    };
    notFound: {
      title: string;
      message: string;
      backHome: string;
    };
    underConstruction: {
      stamp: string;
      subtitle: string;
      message: string;
      backButton: string;
      platform: string;
      ticketLabel: string;
    };
  };
  algorithms: {
    bubbleSort: string;
    mergeSort: string;
    quickSort: string;
    insertionSort: string;
    selectionSort: string;
    bfs: string;
    dfs: string;
    dijkstra: string;
    aStar: string;
    graphColoring: string;
  };
  special: {
    duel: string;
    random: string;
    continue: string;
    lessons: string;
  };
  engine: {
    errors: {
      stepCapExceeded: string;
      invalidInput: string;
    };
  };
}
