import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, HardDrive, Layers, Brain, Component, Coffee } from 'lucide-react';
import { skills } from '../mockData';

const iconMap = {
  Component: Component,
  Server: Server,
  Code: Code,
  Coffee: Coffee,
  Database: Database,
  HardDrive: HardDrive,
  Layers: Layers,
  Brain: Brain
};

const SkillsCore = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const radius = 220;
  const angleStep = (2 * Math.PI) / skills.length;

  return (
    <section id="skills" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(218, 255, 1, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 255, 1, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[rgb(218,255,1)]">$</span> core.modules
          </h2>
          <p className="text-[rgb(161,161,170)] font-mono text-lg">Technical Skill Engine</p>
        </motion.div>

        {/* Central Core with Orbiting Skills */}
        <div className="flex justify-center items-center min-h-[600px]">
          <div className="relative w-full max-w-[600px] aspect-square">
            {/* Central Core */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[rgb(218,255,1)] to-[rgb(0,255,255)] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(218,255,1,0.4)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="text-[rgb(17,17,19)] font-bold text-2xl"
              >
                CORE
              </motion.div>
            </motion.div>

            {/* Orbiting Skills */}
            {skills.map((skill, index) => {
              const angle = index * angleStep;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const Icon = iconMap[skill.icon];

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="relative cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-[rgb(26,28,30)] border-2 border-[rgb(63,63,63)] rounded-2xl flex flex-col items-center justify-center hover:border-[rgb(218,255,1)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(218,255,1,0.3)]">
                      <Icon className="w-8 h-8 text-[rgb(218,255,1)] mb-1" />
                      <span className="text-white text-xs font-semibold">{skill.name}</span>
                    </div>

                    {/* Skill level indicator */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[rgb(38,40,42)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="h-full bg-[rgb(218,255,1)]"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {skills.map((_, index) => {
                const angle = index * angleStep;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.line
                    key={index}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="rgb(218,255,1)"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Skill Detail Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredSkill ? 1 : 0 }}
          className="text-center mt-12"
        >
          {hoveredSkill && (
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="bg-[rgb(26,28,30)] border border-[rgb(218,255,1)] rounded-2xl p-6 max-w-md mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{hoveredSkill.name}</h3>
              <p className="text-[rgb(218,218,218)] mb-3">{hoveredSkill.description}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[rgb(161,161,170)] text-sm">Proficiency:</span>
                <span className="text-[rgb(218,255,1)] font-bold text-lg">{hoveredSkill.level}%</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default SkillsCore;