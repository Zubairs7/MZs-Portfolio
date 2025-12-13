import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Target, Cpu, Code2, Terminal, Braces } from 'lucide-react';
import { developerProfile } from '../mockData';
import { Card } from './ui/card';

// Floating code snippets
const codeSnippets = [
  'const dev = new Developer();',
  'function buildAmazing() {...}',
  'import React from "react";',
  'async function solve() {}',
  'npm install creativity',
  'git commit -m "Innovation"',
  'const passion = true;',
  'while(learning) { grow(); }',
  'export default Excellence;',
  'class Builder extends Coder',
  'let ideas = Infinity;',
  'return <Success />;',
];

// Binary rain effect
const BinaryRain = () => {
  const columns = 15;
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const initialDrops = Array.from({ length: columns }, (_, i) => ({
      id: i,
      x: (i / columns) * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setDrops(initialDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-0 text-[rgb(218,255,1)] font-mono text-xs"
          style={{ left: `${drop.x}%` }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '1' : '0')).join('')}
        </motion.div>
      ))}
    </div>
  );
};

// Floating code elements
const FloatingCode = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 40;
        const endY = startY + (Math.random() - 0.5) * 40;
        const duration = 15 + Math.random() * 10;
        const delay = index * 0.8;

        return (
          <motion.div
            key={index}
            className="absolute font-mono text-sm text-[rgb(218,255,1)] opacity-20"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.8, 1, 1, 0.8],
              x: [`0%`, `${endX - startX}%`],
              y: [`0%`, `${endY - startY}%`],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {snippet}
          </motion.div>
        );
      })}
    </div>
  );
};

// Particle system
const Particles = () => {
  const particleCount = 30;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[rgb(218,255,1)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Terminal command animation
const TerminalCommands = () => {
  const commands = [
    '> Initializing developer profile...',
    '> Loading skill modules...',
    '> Compiling experience data...',
    '> Building project portfolio...',
    '> Optimizing performance...',
    '> System ready.',
  ];

  return (
    <div className="absolute top-10 left-10 font-mono text-xs text-[rgb(218,255,1)] opacity-20 pointer-events-none">
      {commands.map((cmd, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 3,
            delay: index * 0.5,
            repeat: Infinity,
            repeatDelay: commands.length * 0.5,
          }}
        >
          {cmd}
        </motion.div>
      ))}
    </div>
  );
};

const SystemDashboard = () => {
  const cards = [
    {
      icon: User,
      title: "Identity",
      content: developerProfile.about[0]
    },
    {
      icon: Target,
      title: "Background",
      content: developerProfile.about[1]
    },
    {
      icon: Cpu,
      title: "Mindset",
      content: developerProfile.about[2]
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6 relative overflow-hidden">
      {/* Animated Background Layers */}
      <BinaryRain />
      <FloatingCode />
      <Particles />
      <TerminalCommands />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(218, 255, 1, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 255, 1, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <motion.path
          d="M 0 100 Q 200 50 400 100 T 800 100"
          stroke="rgb(218,255,1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 100 0 Q 150 200 100 400 T 100 800"
          stroke="rgb(0,255,255)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
              <motion.span
                className="text-[rgb(218,255,1)]"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(218,255,1,0.5)',
                    '0 0 20px rgba(218,255,1,0.8)',
                    '0 0 10px rgba(218,255,1,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $
              </motion.span>{' '}
              system.overview
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[rgb(161,161,170)] font-mono text-lg"
          >
            Developer Profile Analysis
          </motion.p>
        </motion.div>

        {/* System Status with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 mb-12 relative overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(218,255,1,0.1), transparent)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { label: 'STATUS', value: developerProfile.status, color: 'rgb(218,255,1)' },
              { label: 'MODE', value: developerProfile.mode, color: 'rgb(0,255,255)' },
              { label: 'FOCUS', value: developerProfile.focus, color: 'rgb(147,51,234)' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="font-mono"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span className="text-[rgb(161,161,170)] text-sm">{item.label}:</span>
                <motion.p
                  className="text-xl font-semibold mt-1"
                  style={{ color: item.color }}
                  animate={{
                    textShadow: [
                      `0 0 5px ${item.color}`,
                      `0 0 15px ${item.color}`,
                      `0 0 5px ${item.color}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.value}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Cards with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-full hover:border-[rgb(218,255,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgb(218,255,1), transparent)',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Top accent border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-[rgb(218,255,1)]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div
                    className="p-3 bg-[rgb(38,40,42)] rounded-lg group-hover:bg-[rgba(218,255,1,0.1)] transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <card.icon className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </div>

                <p className="text-[rgb(218,218,218)] leading-relaxed relative z-10">
                  {card.content}
                </p>

                {/* Corner decoration */}
                <motion.div
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code2 className="w-8 h-8 text-[rgb(218,255,1)]" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDashboard;