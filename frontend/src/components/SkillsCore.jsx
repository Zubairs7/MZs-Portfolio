import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Server, Database, HardDrive, Layers, Brain, Component, Coffee, Sparkles } from 'lucide-react';
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

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[skill.icon];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(0,255,255)] rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
        animate={{
          opacity: isHovered ? 0.3 : 0
        }}
      />
      
      {/* Main card */}
      <div className="relative bg-[rgb(26,28,30)] border-2 border-[rgb(63,63,63)] rounded-2xl p-6 h-full hover:border-[rgb(218,255,1)] transition-all duration-300 overflow-hidden">
        {/* Background particles effect */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-[rgb(218,255,1)] opacity-5 rounded-full blur-2xl"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.1 : 0.05
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Icon and name */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className="p-4 bg-[rgb(38,40,42)] rounded-xl relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-[rgb(218,255,1)]" />
            {isHovered && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-4 h-4 text-[rgb(0,255,255)]" />
              </motion.div>
            )}
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
            <p className="text-[rgb(161,161,170)] text-xs font-mono">{skill.category}</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-[rgb(218,218,218)] text-sm mb-4 line-clamp-2">
          {skill.description}
        </p>
        
        {/* Proficiency bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[rgb(161,161,170)] text-xs font-mono">Proficiency</span>
            <motion.span 
              className="text-[rgb(218,255,1)] font-bold text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          
          {/* Animated progress bar */}
          <div className="h-2 bg-[rgb(38,40,42)] rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(0,255,255)] relative"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(0,255,255)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const SkillsCore = () => {
  return (
    <section id="skills" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(218, 255, 1, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 255, 1, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[rgb(17,17,19)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[rgb(218,255,1)] blur-3xl opacity-20 animate-pulse" />
              <h2 className="relative text-5xl md:text-6xl font-bold text-white">
                <span className="text-[rgb(218,255,1)]">$</span> core.modules
              </h2>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[rgb(161,161,170)] font-mono text-lg"
          >
            Technical Arsenal & Expertise
          </motion.p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 mb-12 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(218,255,1)] mb-1 font-mono">{skills.length}</div>
              <div className="text-[rgb(161,161,170)] text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(0,255,255)] mb-1 font-mono">5+</div>
              <div className="text-[rgb(161,161,170)] text-sm">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(147,51,234)] mb-1 font-mono">10+</div>
              <div className="text-[rgb(161,161,170)] text-sm">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(34,197,94)] mb-1 font-mono">100%</div>
              <div className="text-[rgb(161,161,170)] text-sm">Dedication</div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[rgb(161,161,170)] font-mono mb-4">
            <span className="text-[rgb(218,255,1)]">&gt;</span> Always learning, always evolving
          </p>
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(218, 255, 1, 0.3)',
                '0 0 40px rgba(218, 255, 1, 0.5)',
                '0 0 20px rgba(218, 255, 1, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-6 py-2 bg-[rgb(26,28,30)] border border-[rgb(218,255,1)] rounded-xl"
          >
            <span className="text-[rgb(218,255,1)] font-mono text-sm">System Status: Active</span>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default SkillsCore;