import React from 'react';
import { t } from '@/i18n';

/** Tilted "SOON" rubber stamp with dashed border. Flat paper-craft style. */
export const SoonStamp: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`inline-block transform -rotate-12 motion-reduce:rotate-0 ${className}`}
    aria-hidden="true"
  >
    <div
      className="border-2 border-dashed border-rail-coral/70 rounded px-4 py-2"
    >
      <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-widest text-rail-coral/80 uppercase">
        {t('pages.underConstruction.stamp')}
      </span>
      <span className="block text-[8px] sm:text-[10px] font-mono tracking-wider text-rail-coral/50 uppercase text-center">
        {t('pages.underConstruction.subtitle')}
      </span>
    </div>
  </div>
);

export default SoonStamp;
