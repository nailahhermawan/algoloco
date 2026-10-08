import React from 'react';
import { useParams } from 'react-router-dom';
import { getAlgorithmById } from '@/engine/registry';
import { getCatalogEntry, isKnownAlgorithm } from '@/lib/catalog';
import { UnderConstruction } from '@/pages/UnderConstruction';
import { NotFoundPage } from '@/pages/NotFound';
import { t } from '@/i18n';

/**
 * Algorithm route handler (/algo/:algorithmId).
 *
 * Routing rule:
 * - Unknown algorithm not in the catalog -> NotFound (404)
 * - Known in catalog but not in engine registry -> UnderConstruction
 * - Implemented in registry -> Real algorithm desk page
 */
export const AlgorithmPage: React.FC = () => {
  const { algorithmId } = useParams<{ algorithmId: string }>();
  const id = algorithmId ?? '';

  // Unknown algorithm not in the catalog -> 404
  if (!isKnownAlgorithm(id)) {
    return <NotFoundPage />;
  }

  const entry = getCatalogEntry(id)!;
  const implementedModule = getAlgorithmById(id);

  // If implemented in engine registry, show real algorithm desk
  if (implementedModule) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-paper-map border border-ink/10 rounded-sm p-6 shadow-paper">
          <h1 className="text-2xl font-bold tracking-tight text-ink mb-2">
            {t(entry.nameKey)}
          </h1>
          <p className="text-ink/80">{t('pages.algorithm.placeholder', { id })}</p>
        </div>
      </div>
    );
  }

  // Not implemented yet -> UnderConstruction with ticket metadata from catalog
  return (
    <UnderConstruction
      nameKey={entry.nameKey}
      ticketNumber={entry.ticketNumber}
      category={entry.category}
    />
  );
};

export default AlgorithmPage;
