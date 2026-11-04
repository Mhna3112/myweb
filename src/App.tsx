import React from 'react';
import { useLenis } from './hooks/useLenis';
import { ContinuousTypoFilm } from './components/ContinuousTypoFilm';
import './styles/typography.css';

export const App: React.FC = () => {
  // Đồng bộ mượt mà cuộn trang với Lenis
  useLenis();

  return (
    <div className="canvas-wrapper">
      <main id="typography-story">
        <ContinuousTypoFilm />
      </main>
    </div>
  );
};

export default App;
