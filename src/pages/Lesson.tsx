import React from 'react';
import { useParams } from 'react-router-dom';
import { t } from '@/i18n';

export const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const id = lessonId ?? '';

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-paper-map border border-ink/10 rounded-sm p-6 shadow-paper">
        <h1 className="text-2xl font-bold tracking-tight text-ink mb-2">
          {t('pages.lesson.title', { id })}
        </h1>
        <p className="text-ink/80">{t('pages.lesson.placeholder', { id })}</p>
      </div>
    </div>
  );
};

export default LessonPage;
