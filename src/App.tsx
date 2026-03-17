import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import Dashboard from './components/Dashboard';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-teal selection:text-brand-cream">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onEnter={() => setShowSplash(false)} />
        ) : (
          <Dashboard key="dashboard" />
        )}
      </AnimatePresence>
    </div>
  );
}
