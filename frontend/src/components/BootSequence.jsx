import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { Button } from './ui/button';

const BootSequence = ({ onComplete }) => {
  const [bootStage, setBootStage] = useState(0);
  const [showEnter, setShowEnter] = useState(false);

  const bootMessages = [
    "> Initializing Story Protocol...",
    "> Accessing Memory Archives...",
    "> Loading Developer Origin Story...",
    "> Compiling Life Experiences...",
    "> Rendering Dreams into Code...",
    "> Narrative Sequence Ready."
  ];

  useEffect(() => {
    if (bootStage < bootMessages.length) {
      const timer = setTimeout(() => {
        setBootStage(bootStage + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (bootStage === bootMessages.length) {
      const timer = setTimeout(() => {
        setShowEnter(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [bootStage]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(17,17,19)]">
      <div className="w-full max-w-2xl px-6">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <Terminal className="w-6 h-6 text-[rgb(218,255,1)]" />
          <span className="text-[rgb(161,161,170)] font-mono text-sm">system.boot</span>
        </motion.div>

        {/* Boot Messages */}
        <div className="space-y-3 mb-12">
          {bootMessages.slice(0, bootStage).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-[rgb(218,218,218)] text-base"
            >
              {message}
              {index === bootStage - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-5 ml-1 bg-[rgb(218,255,1)]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Identity Display */}
        <AnimatePresence>
          {bootStage >= bootMessages.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-3"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(218, 255, 1, 0.3)',
                    '0 0 30px rgba(218, 255, 1, 0.5)',
                    '0 0 20px rgba(218, 255, 1, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Mohammed Zubair
              </motion.h1>
              <p className="text-xl text-[rgb(161,161,170)] font-mono">Software Developer</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enter Button */}
        <AnimatePresence>
          {showEnter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <Button
                onClick={onComplete}
                className="bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold text-base px-8 py-6 rounded-xl transition-all duration-200 hover:shadow-[0_8px_25px_rgba(218,255,1,0.3)] hover:-translate-y-1"
              >
                [ ENTER SYSTEM ]
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BootSequence;