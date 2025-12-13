import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Cpu } from 'lucide-react';
import { developerProfile } from '../mockData';
import { Card } from './ui/card';

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
    <section id="about" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[rgb(218,255,1)]">$</span> system.overview
          </h2>
          <p className="text-[rgb(161,161,170)] font-mono text-lg">Developer Profile Analysis</p>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="font-mono">
              <span className="text-[rgb(161,161,170)] text-sm">STATUS:</span>
              <p className="text-[rgb(218,255,1)] text-xl font-semibold mt-1">{developerProfile.status}</p>
            </div>
            <div className="font-mono">
              <span className="text-[rgb(161,161,170)] text-sm">MODE:</span>
              <p className="text-[rgb(0,255,255)] text-xl font-semibold mt-1">{developerProfile.mode}</p>
            </div>
            <div className="font-mono">
              <span className="text-[rgb(161,161,170)] text-sm">FOCUS:</span>
              <p className="text-[rgb(147,51,234)] text-xl font-semibold mt-1">{developerProfile.focus}</p>
            </div>
          </div>
        </motion.div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-full hover:border-[rgb(218,255,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group relative overflow-hidden">
                {/* Top accent border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[rgb(218,255,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[rgb(38,40,42)] rounded-lg group-hover:bg-[rgba(218,255,1,0.1)] transition-colors duration-300">
                    <card.icon className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </div>
                
                <p className="text-[rgb(218,218,218)] leading-relaxed">
                  {card.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDashboard;