export interface TranslationDictionary {
  app: {
    title: string;
    tagline: string;
    draftingYard: string;
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
    binarySearch: string;
    bfs: string;
    dfs: string;
    dijkstra: string;
    aStar: string;
    graphColoring: string;
    flowNetwork: string;
    masterTheorem: string;
    heapSort: string;
  };
  catalog: {
    bubbleSort: { subtitle: string };
    mergeSort: { subtitle: string };
    quickSort: { subtitle: string };
    binarySearch: { subtitle: string };
    bfs: { subtitle: string };
    dfs: { subtitle: string };
    dijkstra: { subtitle: string };
    aStar: { subtitle: string };
    graphColoring: { subtitle: string };
    flowNetwork: { subtitle: string };
    masterTheorem: { subtitle: string };
    heapSort: { subtitle: string };
  };
  filters: {
    all: string;
    sorting: string;
    searching: string;
    graph: string;
    analysis: string;
    yardCount: string;
  };
  stamps: {
    soon: string;
    passed: string;
  };
  lessons: {
    continue: string;
    bigO: string;
    readTheScreen: string;
    duel: string;
    treeClimb: string;
    theJunction: string;
  };
  special: {
    duel: string;
    duelSubtitle: string;
    duelLabel: string;
    duelBadge: string;
    random: string;
    randomSubtitle: string;
    randomLabel: string;
    randomBadge: string;
    continue: string;
    continueResume: string;
    continueLabel: string;
    continueBadge: string;
    lessons: string;
  };
  footer: {
    shunter: string;
  };
  engine: {
    errors: {
      stepCapExceeded: string;
      invalidInput: string;
    };
  };
}
