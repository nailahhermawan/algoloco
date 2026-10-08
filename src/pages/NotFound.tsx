import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '@/i18n';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-paper-ticket border border-ink/10 rounded-sm p-6 shadow-paper">
        <h1 className="text-2xl font-bold tracking-tight text-ink mb-2">
          {t('pages.notFound.title')}
        </h1>
        <p className="text-ink/80 mb-4">{t('pages.notFound.message')}</p>
        <Link
          to="/"
          className="inline-block bg-rail-coral text-white font-medium px-4 py-2 rounded shadow hover:bg-rail-coral/90 transition-colors"
        >
          {t('pages.notFound.backHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
