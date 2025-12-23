// Mock data for portfolio - replace with real API data later

export const developerProfile = {
  name: "Mohammed Zubair",
  title: "Software Developer",
  status: "Curious",
  mode: "Problem Solver",
  focus: "Full-Stack & AI Systems",
  about: [
    "Passionate full-stack developer with expertise in building scalable web applications and AI-powered solutions.",
    "Experienced in modern frameworks like React, Node.js, and Python with a focus on clean, maintainable code.",
    "Strong believer in continuous learning and solving real-world problems through technology."
  ]
};

export const skills = [
  { name: "React", level: 90, category: "frontend", description: "Building dynamic, responsive UIs", icon: "Component", rpgStat: "Dexterity" },
  { name: "Node.js", level: 85, category: "backend", description: "Scalable server-side applications", icon: "Server", rpgStat: "Stamina" },
  { name: "Express.js", level: 85, category: "backend", description: "Fast & minimalist web framework", icon: "Server", rpgStat: "Agility" },
  { name: "Python", level: 88, category: "backend", description: "Data processing & AI integration", icon: "Code", rpgStat: "Arcane Knowledge" },
  { name: "SQL", level: 82, category: "database", description: "Complex queries & optimization", icon: "Database", rpgStat: "Wisdom" },
  { name: "MongoDB", level: 80, category: "database", description: "NoSQL database management", icon: "HardDrive", rpgStat: "Memory" },
  { name: "Django", level: 85, category: "framework", description: "Rapid web development", icon: "Layers", rpgStat: "Speed" },
  { name: "AI/ML", level: 78, category: "advanced", description: "Machine learning integration", icon: "Brain", rpgStat: "Intelligence" }
];

export const projects = [
  {
    id: 1,
    name: "Clueso Clone",
    filename: "CluesoClone.exe",
    description: "An end-to-end AI-powered web application that enables users to create professional instructional videos from browser screen recordings. The system integrates transcription, AI script generation, voiceovers, and precise synchronization within a modern full-stack architecture.",
    techStack: ["React", "Express.js", "Gemini API", "FFmpeg", "Web Speech API"],
    highlights: [
      "AI-driven script generation and audio synthesis",
      "Precise video-to-audio synchronization",
      "Browser-based screen recording and editing",
      "Full-stack integration for seamless workflow"
    ],
    missionBrief: "Instructional video creation is tedious. The mission: Automate the process with AI for instant professional results.",
    missionDebrief: "Engineered a complete pipeline from recording to polished video, significantly reducing content creation time.",
    github: "https://github.com/Zubairs7/clueso-clone",
    live: "https://drive.google.com/drive/folders/1iVbLC5z4RwNYa-N7P-OUfNdr3dBdHFRm",
    status: "Production"
  },
  {
    id: 2,
    name: "SupplyChain DApp",
    filename: "BlockchainSCM.sys",
    description: "Decentralized application for transparent supply chain management using blockchain technology. Enables real-time tracking of products from manufacturer to consumer.",
    techStack: ["Solidity", "Ethereum", "React", "Web3.js", "Node.js"],
    highlights: [
      "Smart contracts for automated verification",
      "Immutable transaction records on blockchain",
      "Real-time product tracking interface",
      "Multi-party authentication system"
    ],
    missionBrief: "Supply chains are opaque and prone to fraud. The mission: Enforce transparency using immutable ledger technology.",
    missionDebrief: "Constructed a trustless verification system, ensuring product authenticity from origin to destination.",
    github: "https://github.com/Zubairs7/Blockchain-Supply-Chain-DApp",
    live: "#",
    status: "Beta"
  },
  {
    id: 3,
    name: "AI Assistant",
    filename: "AI_Assistant.mod",
    description: "Voice-enabled AI assistant leveraging Google Gemini for natural language processing. Provides intelligent responses and task automation through conversational interface.",
    techStack: ["React", "Node.js", "MongoDB", "Gemini API", "Web Speech API"],
    highlights: [
      "Voice recognition and text-to-speech integration",
      "Context-aware conversation management",
      "Multi-language support",
      "Persistent chat history with MongoDB"
    ],
    missionBrief: "Human-computer interaction is rigid. The mission: Create a fluid, voice-activated intelligence.",
    missionDebrief: "Developed a responsive AI companion capable of natural dialogue and task execution.",
    github: "https://github.com/Zubairs7/Virtual-AI-Voice-Assistant",
    live: "#",
    status: "Development"
  }
];

export const timeline = [
  {
    year: "2025",
    title: "AI & Full-Stack Projects",
    type: "projects",
    chapter: "Chapter 4: The Convergence",
    description: "Developed multiple production-ready applications including AI Assistant and blockchain-based supply chain management system."
  },
  {
    year: "2024",
    title: "Backend Engineering Experience",
    type: "experience",
    chapter: "Chapter 3: The Server Side",
    description: "Backend Engineering Virtual Experience Program (Forage) - Gained hands-on experience in server-side architecture and API development."
  },
  {
    year: "2024",
    title: "Skill4Future Program",
    type: "education",
    chapter: "Chapter 2: Expanding Horizons",
    description: "Completed Green Skills & AI Program, focusing on sustainable technology and artificial intelligence applications."
  },
  {
    year: "2023",
    title: "College AI Chatbot Project",
    type: "achievement",
    chapter: "Chapter 1: First Contact",
    description: "Developed AI chatbot that helped 100+ students with course information and campus navigation."
  },
  {
    year: "2023",
    title: "Web Development Bootcamp",
    type: "education",
    chapter: "Chapter 0: The Origin",
    description: "Completed comprehensive web development bootcamp (Udemy) covering modern frontend and backend technologies."
  }
];

export const contactInfo = {
  email: "mohammedzubairsanadi@gmail.com",
  github: "https://github.com/Zubairs7",
  linkedin: "https://www.linkedin.com/in/mohammed-zubair-sanadi/",
  whatsapp: "https://wa.me/918867868277"
};