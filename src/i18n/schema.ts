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
  };
  engine: {
    errors: {
      stepCapExceeded: string;
      invalidInput: string;
    };
  };
}
