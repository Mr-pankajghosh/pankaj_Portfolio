export const profile = {
  name: "Pankaj Ghosh",
  role: "Full Stack Developer",
  location: "Bhubaneswar, Odisha",
  phone: "+91-7854962134",
  email: "ghoshpankaj260@gmail.com",

  github: "https://github.com/Mr-pankajghosh",
  linkedin: "https://www.linkedin.com/in/pankaj-ghosh-1b11992b1/",
  resume: "/resume.pdf",
  githubUsername: "Mr-pankajghosh"
};

export const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    school: "Silicon University",
    meta: "CGPA 9.31",
    year: "2023 — 2027",
    location: "Bhubaneswar, Odisha"
  },
  {
    title: "Higher Secondary Education",
    school: "Sai Higher Secondary School",
    meta: "83.67%",
    year: "2022",
    location: "Baripada, Odisha"
  },
  
    {
  title: "10th / Secondary Education",
  school: "Saraswati Vidya Mandir High School",
  meta: "87.40%",
  year: "2020",
  location: "Baharagora, Jharkhand"

  }
];

export const experience = [
  {
    role: "MERN Product Development",
    company: "CodeBeat",
    period: "25 Jun 2024 — 25 Jul 2024",
    text: "Worked on full-stack web development with MongoDB, Express.js, React.js and Node.js, strengthening practical product-development skills."
  },
  {
    role: "Cross-Platform Mobile Engineering",
    company: "Syllogistek Systems",
    period: "4 Jun 2025 — 26 Jun 2025",
    text: "Built React Native mobile application experiences with frontend UI work and REST API integration."
  },
  {
    role: "Generative AI & Android",
    company: "Ingenious-TechWorld",
    period: "25 May 2026 — 1 Jul 2026",
    text: "Completed industrial training focused on Generative AI for Android, including Firebase and Jetpack Compose."
  },
  {
  role: "Blockchain Development",
  company: "FITT IIT Delhi",
  period: "45 Days",
  text: "Completed a 45-day training program focused on Blockchain Development, gaining hands-on exposure to blockchain fundamentals, decentralized technologies, smart contracts and practical blockchain application concepts."
},
  {
    role: "Real-World Web Development",
    company: "Fularani Foundation NGO",
    period: "Project Experience",
    text: "Contributed to frontend and backend implementation for real-world development projects as part of a group."
  }
];

export const projects = [
  {
    name: "Spektra",
    subtitle: "Social learning & community platform",
    description: "A full-stack MERN platform built around language and skill communities, combining social interaction, communication and learning features.",
    bullets: [
      "Secure authentication and community-based user experiences.",
      "Real-time one-to-one messaging, voice/video calling and community discussions using Socket.IO and Stream Chat.",
      "Quizzes, leaderboards, country/category-based local news, community joining and profile management.",
      "Responsive interface using React, Tailwind CSS and Node.js."
    ],
    tags: ["MERN", "React", "Node.js", "MongoDB", "Socket.IO", "Stream Chat", "Tailwind"],
    github: "https://github.com/Mr-pankajghosh/Spektra",
    live: "#",
    icon: "globe"
  },
  {
    name: "BuddyAI",
    subtitle: "Conversational AI workspace",
    description: "A MERN-based AI chat application designed around intelligent conversations, account management and a responsive chat experience.",
    bullets: [
      "Integrated Gemini and Groq APIs for AI-powered conversational responses.",
      "JWT authentication, user credit management and Razorpay test-payment workflow.",
      "ImageKit integration for image handling.",
      "Responsive UI with React, Vite and Tailwind CSS."
    ],
    tags: ["MERN", "Gemini", "Groq", "JWT", "Razorpay", "ImageKit", "Vite"],
    github: "https://github.com/Mr-pankajghosh/BuddyAI",
    live: "#",
    icon: "bot"
  },
  {
    name: "Eaxier",
    subtitle: "Mobile service marketplace",
    description: "A React Native marketplace concept focused on connecting users with services through a streamlined mobile experience.",
    bullets: [
      "Designed and developed the React Native mobile experience.",
      "Implemented location-aware listings.",
      "Focused on simple onboarding and a smooth service-discovery flow."
    ],
    tags: ["React Native", "Expo", "Mobile UI", "Location"],
    github: "https://github.com/Mr-pankajghosh/Eaxier",
    live: "#",
    icon: "smartphone"
  }
];
export const additionalProjects = [
  {
    name: "ZeroWaste",
    subtitle: "Group Project · Sustainability Platform",
    description:
      "A collaborative web project focused on promoting waste awareness and sustainable practices. Contributed to the development and implementation as part of a team.",
    tags: [
      "Group Project",
      "Web Development",
      "React",
      "Team Collaboration"
    ],
    github: "#",
    live: "#",
    icon: "leaf"
  },

  {
    name: "Netflix Clone",
    subtitle: "Full-Stack Web Application",
    description:
      "A Netflix-inspired full-stack web application featuring a responsive streaming-style interface with React, Tailwind CSS, Node.js, Express and MongoDB.",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "https://github.com/Mr-pankajghosh/netflix-clone",
    live: "#",
    icon: "film"
  },

  {
    name: "Fularani Foundation",
    subtitle: "Group Project · Real-World NGO Website",
    description:
      "A real-world collaborative web development project for Fularani Foundation. Contributed to both frontend and backend implementation while working as part of a development team.",
    tags: [
      "Group Project",
      "Frontend",
      "Backend",
      "NGO",
      "Web Development"
    ],
    github: "#",
    live: "#",
    icon: "heart"
  },
  {
  name: "Escrow DApp",
  subtitle: "Blockchain · Web3 · Smart Contract",
  description:
    "A decentralized escrow application that enables secure buyer-seller transactions using Ethereum smart contracts. Buyers can connect MetaMask, deposit ETH into an escrow contract, and release the payment to the seller after confirming delivery.",
  tags: [
    "Blockchain",
    "Solidity",
    "React.js",
    "Ethers.js",
    "MetaMask",
    "Sepolia"
  ],
  github: "https://github.com/Mr-pankajghosh/escrow-dapp",
  live: "#",
  icon: "wallet"
}
];
export const skillGroups = [
  { title: "Core Languages", skills: ["C", "C++", "Java", "JavaScript"] },
  { title: "Web Interface Engineering", skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "GSAP"] },
  { title: "Mobile & Android", skills: ["React Native", "Expo", "Android", "Jetpack Compose", "Firebase"] },
  { title: "Server & APIs", skills: ["Node.js", "Express.js", "REST APIs"] },
  { title: "AI Engineering", skills: ["Gemini API", "Groq API", "LangChain (Basics)"] },
  { title: "Data, Cloud & Tools", skills: ["MongoDB", "SQL", "AWS (Basics)", "Git", "GitHub", "Postman"] }
];

export const certificates = [
  {
    title: "MERN Stack Internship",
    issuer: "CodeBeat",
    date: "25 Jun 2024 — 25 Jul 2024",
    image: "/certificates/codebeat-merns-stack.png",
    note: "Certificate of Internship"
  },
  {
    title: "React Native Mobile App Development",
    issuer: "Syllogistek Systems Private Limited",
    date: "4 Jun 2025 — 26 Jun 2025",
    image: "/certificates/react-native-internship.png",
    note: "Certificate of Completion"
  },
  {
    title: "Generative AI for Android",
    issuer: "Ingenious-TechWorld",
    date: "25 May 2026 — 1 Jul 2026",
    image: "/certificates/generative-ai-android.png",
    note: "Certificate of Appreciation"
  },
  {
    title: "Silicon Achievers’ Club",
    issuer: "Silicon University",
    date: "Academic Year 2025–26",
    image: "/certificates/silicon-achievers-club.png",
    note: "Certificate of Merit"
  }
];

export const activities = [
  "Silicon Achievers’ Club",
  "Ideathons",
  "Hackathons"
];
export const marqueeWords = [
  "BUILD",
  "DESIGN",
  "SHIP",
  "LEARN",
  "CREATE",
  "SOLVE"
];
