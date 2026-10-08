import React from 'react';
import { UnderConstruction } from '@/pages/UnderConstruction';

/**
 * Lesson Index route (/learn).
 * Under construction until lessons are implemented.
 */
export const LessonIndexPage: React.FC = () => {
  return (
    <UnderConstruction
      nameKey="special.lessons"
      ticketNumber={0}
      category="lokal"
    />
  );
};

export default LessonIndexPage;
