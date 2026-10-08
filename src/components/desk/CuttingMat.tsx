import React from 'react';

/**
 * Full-page cutting-mat background with grid lines.
 * Shared across Home, Algorithm pages, and UnderConstruction.
 */
export const CuttingMat: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-mat relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-cutting-mat-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-cutting-mat-grid) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CuttingMat;
