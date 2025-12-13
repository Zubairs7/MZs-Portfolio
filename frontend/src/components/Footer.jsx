import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(26,28,30)] border-t border-[rgba(255,255,255,0.1)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-[rgb(218,255,1)]" />
              <span className="text-white font-bold text-xl font-mono">MZ.dev</span>
            </div>
            <p className="text-[rgb(161,161,170)] text-sm leading-relaxed">
              Software Developer crafting scalable solutions and innovative experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] text-sm transition-colors duration-200"
                  >
                    <span className="text-[rgb(218,255,1)] mr-2">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">System Info</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[rgb(161,161,170)]">Version:</span>
                <span className="text-white">2025.1.0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[rgb(161,161,170)]">Status:</span>
                <span className="text-[rgb(34,197,94)]">Online</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[rgb(161,161,170)]">Uptime:</span>
                <span className="text-white">99.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[rgb(161,161,170)] text-sm font-mono">
            <span className="text-[rgb(218,255,1)]">&gt;</span> {currentYear} Mohammed Zubair. All rights reserved.
          </p>
          <p className="text-[rgb(161,161,170)] text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;