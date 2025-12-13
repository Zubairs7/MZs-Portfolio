import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { contactInfo } from '../mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactTerminal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConnecting(true);

    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);

      setTimeout(() => {
        setIsConnected(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, url: contactInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: contactInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: contactInfo.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${contactInfo.email}`, label: 'Email' }
  ];

  return (
    <section id="contact" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[rgb(218,255,1)]">$</span> network.connect
          </h2>
          <p className="text-[rgb(161,161,170)] font-mono text-lg">Establish Secure Connection</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                <Terminal className="w-5 h-5 text-[rgb(218,255,1)]" />
                <span className="text-[rgb(161,161,170)] font-mono text-sm">terminal@contact</span>
              </div>

              <AnimatePresence mode="wait">
                {isConnecting ? (
                  <motion.div
                    key="connecting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="space-y-3 font-mono text-[rgb(218,255,1)]">
                      <p>&gt; Establishing secure connection...</p>
                      <p>&gt; Verifying credentials...</p>
                      <p>&gt; Handshake in progress...</p>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-8 h-8 border-2 border-[rgb(218,255,1)] border-t-transparent rounded-full mx-auto mt-6"
                      />
                    </div>
                  </motion.div>
                ) : isConnected ? (
                  <motion.div
                    key="connected"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      className="w-16 h-16 bg-[rgb(218,255,1)] rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Send className="w-8 h-8 text-[rgb(17,17,19)]" />
                    </motion.div>
                    <p className="text-[rgb(218,255,1)] font-mono text-lg mb-2">
                      &gt; Connection established successfully.
                    </p>
                    <p className="text-[rgb(161,161,170)] text-sm">Message transmitted</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[rgb(161,161,170)] text-sm font-mono mb-2">
                        &gt; Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[rgb(38,40,42)] border-2 border-[rgb(63,63,63)] text-white rounded-xl focus:border-[rgb(218,255,1)] focus:ring-2 focus:ring-[rgba(218,255,1,0.1)] transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-[rgb(161,161,170)] text-sm font-mono mb-2">
                        &gt; Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-[rgb(38,40,42)] border-2 border-[rgb(63,63,63)] text-white rounded-xl focus:border-[rgb(218,255,1)] focus:ring-2 focus:ring-[rgba(218,255,1,0.1)] transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[rgb(161,161,170)] text-sm font-mono mb-2">
                        &gt; Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-[rgb(38,40,42)] border-2 border-[rgb(63,63,63)] text-white rounded-xl focus:border-[rgb(218,255,1)] focus:ring-2 focus:ring-[rgba(218,255,1,0.1)] transition-all resize-none"
                        placeholder="Type your message..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_8px_25px_rgba(218,255,1,0.3)] hover:-translate-y-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Initiate Connection
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-[rgb(218,218,218)] leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(218,255,1)]">&gt;</span>
                  <span className="text-[rgb(161,161,170)]">Response time:</span>
                  <span className="text-white">24-48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(218,255,1)]">&gt;</span>
                  <span className="text-[rgb(161,161,170)]">Status:</span>
                  <span className="text-[rgb(34,197,94)]">Available for work</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Network Channels</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-3 p-4 bg-[rgb(38,40,42)] rounded-xl hover:bg-[rgba(218,255,1,0.1)] hover:border hover:border-[rgb(218,255,1)] transition-all duration-300 group"
                  >
                    <social.icon className="w-6 h-6 text-[rgb(161,161,170)] group-hover:text-[rgb(218,255,1)] transition-colors" />
                    <span className="text-sm text-[rgb(161,161,170)] group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;