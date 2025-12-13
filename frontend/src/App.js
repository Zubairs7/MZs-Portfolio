import React, { useState, useEffect } from 'react';
import './App.css';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import SystemDashboard from './components/SystemDashboard';
import SkillsCore from './components/SkillsCore';
import ProjectModules from './components/ProjectModules';
import Timeline from './components/Timeline';
import ContactTerminal from './components/ContactTerminal';
import Footer from './components/Footer';

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
    // Delay showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Prevent scroll during boot sequence
  useEffect(() => {
    if (!bootComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [bootComplete]);

  return (
    <div className="App bg-[rgb(17,17,19)] min-h-screen">
      {/* Boot Sequence */}
      {!bootComplete && <BootSequence onComplete={handleBootComplete} />}

      {/* Main Content */}
      {showContent && (
        <>
          <Header />
          <main className="pt-16">
            <SystemDashboard />
            <SkillsCore />
            <ProjectModules />
            <Timeline />
            <ContactTerminal />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
