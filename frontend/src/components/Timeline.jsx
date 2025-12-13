import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BookOpen, Briefcase, Award, Code } from 'lucide-react';
import { timeline } from '../mockData';

const Timeline = () => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return BookOpen;
      case 'experience':
        return Briefcase;
      case 'achievement':
        return Award;
      case 'projects':
        return Code;
      default:
        return Terminal;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'rgb(59,130,246)';
      case 'experience':
        return 'rgb(168,85,247)';
      case 'achievement':
        return 'rgb(34,197,94)';
      case 'projects':
        return 'rgb(218,255,1)';
      default:
        return 'rgb(161,161,170)';
    }
  };

  return (
    <section id="timeline" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[rgb(218,255,1)]">$</span> system.history
          </h2>
          <p className="text-[rgb(161,161,170)] font-mono text-lg">Command Timeline</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[rgb(63,63,63)]" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = getTypeIcon(item.type);
              const color = getTypeColor(item.type);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <div
                    className="absolute left-0 w-16 h-16 rounded-xl flex items-center justify-center border-2"
                    style={{
                      backgroundColor: 'rgb(26,28,30)',
                      borderColor: color
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>

                  {/* Content Card */}
                  <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:border-[rgb(218,255,1)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] group">
                    {/* Year */}
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-4 h-4 text-[rgb(218,255,1)]" />
                      <span className="text-[rgb(218,255,1)] font-mono text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

                    {/* Type Badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-lg text-xs font-mono mb-3"
                      style={{
                        backgroundColor: `${color}20`,
                        color: color
                      }}
                    >
                      {item.type}
                    </span>

                    {/* Description */}
                    <p className="text-[rgb(218,218,218)] leading-relaxed">{item.description}</p>

                    {/* Command line effect */}
                    <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)] font-mono text-xs text-[rgb(161,161,170)]">
                      <span className="text-[rgb(218,255,1)]">&gt;</span> Executed: {item.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;