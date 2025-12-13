import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, ExternalLink, Github, X, CheckCircle, Loader } from 'lucide-react';
import { projects } from '../mockData';
import { Button } from './ui/button';
import { Dialog, DialogContent } from './ui/dialog';

const ProjectModules = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [executing, setExecuting] = useState(false);

  const handleProjectClick = (project) => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setSelectedProject(project);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production':
        return 'text-[rgb(34,197,94)]';
      case 'Beta':
        return 'text-[rgb(234,179,8)]';
      case 'Development':
        return 'text-[rgb(59,130,246)]';
      default:
        return 'text-[rgb(161,161,170)]';
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-[rgb(17,17,19)] py-20 px-6">
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
            <span className="text-[rgb(218,255,1)]">$</span> execution.files
          </h2>
          <p className="text-[rgb(161,161,170)] font-mono text-lg">Project Modules</p>
        </motion.div>

        {/* Project Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer"
            >
              <div className="bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-full hover:border-[rgb(218,255,1)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group relative overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[rgb(218,255,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* File Icon and Name */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-[rgb(38,40,42)] rounded-lg group-hover:bg-[rgba(218,255,1,0.1)] transition-colors duration-300">
                    <FileCode className="w-6 h-6 text-[rgb(218,255,1)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 font-mono">{project.filename}</h3>
                    <span className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                      [{project.status}]
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[rgb(218,218,218)] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[rgb(38,40,42)] text-[rgb(218,255,1)] text-xs font-mono rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-[rgb(38,40,42)] text-[rgb(161,161,170)] text-xs font-mono rounded-lg">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Execute Hint */}
                <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                  <span className="text-[rgb(161,161,170)] text-xs font-mono">Click to execute module</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Executing Overlay */}
      <AnimatePresence>
        {executing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div className="text-center">
              <Loader className="w-12 h-12 text-[rgb(218,255,1)] animate-spin mx-auto mb-4" />
              <p className="text-white font-mono text-lg">Executing module...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[rgb(26,28,30)] border-2 border-[rgb(218,255,1)] text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="p-6">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-8 h-8 text-[rgb(218,255,1)]" />
                  <h2 className="text-3xl font-bold">{selectedProject.name}</h2>
                </div>
                <p className="text-[rgb(161,161,170)] font-mono text-sm mb-2">Module executed successfully</p>
                <span className={`text-sm font-mono ${getStatusColor(selectedProject.status)}`}>
                  Status: {selectedProject.status}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[rgb(218,255,1)] mb-3">Overview</h3>
                <p className="text-[rgb(218,218,218)] leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[rgb(218,255,1)] mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[rgb(38,40,42)] text-[rgb(218,255,1)] font-mono rounded-lg border border-[rgb(63,63,63)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[rgb(218,255,1)] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-[rgb(218,218,218)]">
                      <span className="text-[rgb(218,255,1)] mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] hover:bg-[rgb(166,190,21)] font-semibold rounded-xl transition-all duration-200">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Button>
                <Button className="flex-1 bg-transparent border-2 border-[rgb(218,255,1)] text-[rgb(218,255,1)] hover:bg-[rgba(218,255,1,0.1)] font-semibold rounded-xl transition-all duration-200">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectModules;