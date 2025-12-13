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
  { name: "React", level: 90, category: "frontend", description: "Building dynamic, responsive UIs", icon: "Component" },
  { name: "Node.js", level: 85, category: "backend", description: "Scalable server-side applications", icon: "Server" },
  { name: "Python", level: 88, category: "backend", description: "Data processing & AI integration", icon: "Code" },
  { name: "Java", level: 75, category: "backend", description: "Enterprise application development", icon: "Coffee" },
  { name: "SQL", level: 82, category: "database", description: "Complex queries & optimization", icon: "Database" },
  { name: "MongoDB", level: 80, category: "database", description: "NoSQL database management", icon: "HardDrive" },
  { name: "Django", level: 85, category: "framework", description: "Rapid web development", icon: "Layers" },
  { name: "AI/ML", level: 78, category: "advanced", description: "Machine learning integration", icon: "Brain" }
];

export const projects = [
  {
    id: 1,
    name: "PeacePath",
    filename: "PeacePath.exe",
    description: "Comprehensive mental health support platform connecting users with professional counselors and resources. Features secure messaging, appointment scheduling, and AI-powered mood tracking.",
    techStack: ["Python", "Django", "React", "MySQL", "WebSocket"],
    highlights: [
      "Real-time chat system for counselor-patient communication",
      "Secure authentication with role-based access control",
      "Integrated appointment management system",
      "Responsive design for mobile and desktop"
    ],
    github: "#",
    live: "#",
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
    github: "#",
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
    github: "#",
    live: "#",
    status: "Development"
  }
];

export const timeline = [
  {
    year: "2025",
    title: "AI & Full-Stack Projects",
    type: "projects",
    description: "Developed multiple production-ready applications including AI Assistant and blockchain-based supply chain management system."
  },
  {
    year: "2024",
    title: "Backend Engineering Experience",
    type: "experience",
    description: "Backend Engineering Virtual Experience Program (Forage) - Gained hands-on experience in server-side architecture and API development."
  },
  {
    year: "2024",
    title: "Skill4Future Program",
    type: "education",
    description: "Completed Green Skills & AI Program, focusing on sustainable technology and artificial intelligence applications."
  },
  {
    year: "2023",
    title: "College AI Chatbot Project",
    type: "achievement",
    description: "Developed AI chatbot that helped 100+ students with course information and campus navigation."
  },
  {
    year: "2023",
    title: "Web Development Bootcamp",
    type: "education",
    description: "Completed comprehensive web development bootcamp (Udemy) covering modern frontend and backend technologies."
  }
];

export const contactInfo = {
  email: "mohammed.zubair@example.com",
  github: "https://github.com/zubair",
  linkedin: "https://linkedin.com/in/mohammed-zubair",
  twitter: "https://twitter.com/zubair_dev"
};