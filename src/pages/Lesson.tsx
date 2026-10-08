import React from 'react';
import { useParams } from 'react-router-dom';
import { UnderConstruction } from '@/pages/UnderConstruction';

/**
 * Lesson route (/learn/:lessonId).
 * Under construction until lessons are implemented.
 */
export const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();

  return (
    <UnderConstruction
      nameKey="special.lessons"
      ticketNumber={0}
      category={lessonId ? `lesson · ${lessonId}` : 'lesson'}
    />
  );
};

export default LessonPage;
