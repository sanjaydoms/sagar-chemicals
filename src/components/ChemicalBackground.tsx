import React from 'react';
import clsx from 'clsx';

interface ChemicalBackgroundProps {
  className?: string;
  variant?: 'light' | 'tinted';
  showMolecules?: boolean;
}

/**
 * Clean Swiss-Editorial Architectural Grid Background:
 * - No AI blobs, waves, or busy vector shapes.
 * - Uses hairline 1px vertical structural column guides aligned to the page container
 *   with subtle corner registration marks (+) for an authentic, human-crafted corporate feel.
 */
export const ChemicalBackground: React.FC<ChemicalBackgroundProps> = ({
  className,
  variant = 'light',
}) => {
  return (
    <div
      className={clsx(
        'pointer-events-none absolute inset-0 overflow-hidden select-none z-0 bg-transparent',
        className
      )}
      aria-hidden="true"
    >
      {/* Subtle Top-to-Bottom Editorial Surface Wash */}
      <div
        className={clsx(
          'absolute inset-0',
          variant === 'tinted'
            ? 'bg-gradient-to-b from-[#F3F7FB]/80 via-[#F8FAFC]/40 to-[#F3F7FB]/80'
            : 'bg-gradient-to-b from-transparent via-[#F8FAFC]/60 to-transparent'
        )}
      />

      {/* Hairline Architectural 4-Column Structural Guides */}
      <div className="max-w-[1400px] mx-auto h-full px-6 sm:px-8 md:px-16">
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 border-x border-primary/[0.045] relative">
          <div className="border-r border-primary/[0.04] h-full" />
          <div className="hidden lg:block border-r border-primary/[0.04] h-full" />
          <div className="hidden lg:block border-r border-primary/[0.04] h-full" />
          <div className="h-full" />

          {/* Subtle Corner Architectural Registration Crosshairs (+) */}
          <span className="absolute top-4 -left-[4.5px] font-mono text-[10px] leading-none text-primary/20">
            +
          </span>
          <span className="absolute top-4 -right-[4.5px] font-mono text-[10px] leading-none text-primary/20">
            +
          </span>
          <span className="absolute bottom-4 -left-[4.5px] font-mono text-[10px] leading-none text-primary/20">
            +
          </span>
          <span className="absolute bottom-4 -right-[4.5px] font-mono text-[10px] leading-none text-primary/20">
            +
          </span>
        </div>
      </div>
    </div>
  );
};
