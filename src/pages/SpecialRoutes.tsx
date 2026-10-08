import React from 'react';
import { Navigate } from 'react-router-dom';
import { registry } from '@/engine/registry';
import { getLastAlgorithm } from '@/lib/storage';
import { isKnownAlgorithm } from '@/lib/catalog';
import { UnderConstruction } from '@/pages/UnderConstruction';

/**
 * /duel route. Under construction until head-to-head comparison is implemented.
 */
export const DuelPage: React.FC = () => {
  return (
    <UnderConstruction
      nameKey="special.duel"
      ticketNumber={0}
      category="duel"
    />
  );
};

/**
 * /random route.
 * Picks a random implemented algorithm from the registry.
 * Falls back to UnderConstruction if no algorithms are implemented yet.
 */
export const RandomPage: React.FC = () => {
  const implemented = registry.listAll();
  if (implemented.length > 0) {
    const pick = implemented[Math.floor(Math.random() * implemented.length)]!;
    return <Navigate to={`/algo/${pick.id}`} replace />;
  }

  return (
    <UnderConstruction
      nameKey="special.random"
      ticketNumber={0}
      category="dispatch"
    />
  );
};

/**
 * /continue route.
 * Resumes last opened algorithm if valid in catalog; otherwise redirects to yard.
 */
export const ContinuePage: React.FC = () => {
  const lastId = getLastAlgorithm();
  if (lastId && isKnownAlgorithm(lastId)) {
    return <Navigate to={`/algo/${lastId}`} replace />;
  }

  return <Navigate to="/" replace />;
};
