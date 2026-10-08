import React from 'react';
import { t } from '@/i18n';

/** Tilted "SOON" rubber stamp with dashed border. Flat paper-craft style. */
export const SoonStamp: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`inline-block transform -rotate-6 motion-reduce:rotate-0 ${className}`}
    aria-hidden="true"
  >
    <div
      className="border-2 border-dashed border-rail-coral rounded px-4 py-1.5 bg-paper-map/50"
    >
      <span className="block text-2xl sm:text-3xl font-extrabold font-mono tracking-widest text-rail-coral uppercase">
        {t('pages.underConstruction.stamp')}
      </span>
      <span className="block text-[8px] sm:text-[9px] font-mono font-bold tracking-wider text-rail-coral/75 uppercase text-center mt-0.5">
        {t('pages.underConstruction.subtitle')}
      </span>
    </div>
  </div>
);

export default SoonStamp;
