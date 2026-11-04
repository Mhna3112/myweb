import React from 'react';

interface HeaderProps {
  progress: number;
}

export const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <header className="editorial-header" aria-label="Typographic navigation">
      <div className="header-meta-left">
        <span>WORDS IN MOTION</span>
        <span style={{ opacity: 0.5, margin: '0 8px' }}>/</span>
        <span style={{ opacity: 0.7 }}>VOL. 01</span>
      </div>

      <div className="header-progress" aria-live="polite">
        INDEX {String(progress).padStart(2, '0')}%
      </div>

      <div className="header-meta-right">
        <span>PURE TYPOGRAPHY</span>
      </div>
    </header>
  );
};
