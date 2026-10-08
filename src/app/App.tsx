import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';

export const App: React.FC = () => {
  const element = useRoutes(routes);

  return (
    <div className="min-h-screen bg-mat flex flex-col justify-start items-stretch">
      <Suspense
        fallback={
          <div className="flex items-center justify-center p-12 text-paper-map">
            <span className="text-sm tracking-wider uppercase">Loading...</span>
          </div>
        }
      >
        {element}
      </Suspense>
    </div>
  );
};

export default App;
