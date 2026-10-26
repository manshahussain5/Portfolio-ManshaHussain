export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  accentColor: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  companyUrl?: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  grade?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  linkedinUrl?: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Data Science" | "Cloud & Tools" | "Marketing & Ads";
  percentage: number;
  icon: string;
}

export const portfolioData = {
  personal: {
    name: "Mansha Hussain",
    firstName: "Mansha",
    lastName: "Hussain",
    badge: "Hello, I'm",
    role: "Software Engineer & Full-Stack Developer",
    rolePrefix: "Software Engineer & ",
    roleHighlight: "Full-Stack Developer",
    tagline:
      "Software Engineering graduate specializing in Full stack Web Development, Shopify stores, and AI solutions. I build responsive, scalable, and user-focused digital products combining strong engineering principles with modern web and AI expertise.",
    aboutHeading: "About Me",
    bio: [
      "Software Engineering graduate specializing in Full stack Web Development, Shopify stores, and AI-powered solutions.",
      "I build responsive, scalable, and user-focused digital products combining strong engineering principles with modern web and artificial intelligence expertise.",
      "I also have experience with Google Ads and Meta Ads, allowing me to understand both the technical and business sides of digital products."
    ],
    email: "manshahussain520@gmail.com",
    phone: "+92 305 9522712",
    whatsapp: "https://wa.me/923059522712",
    location: "Lahore, Pakistan",
    availability: "Available for Work",
    experienceYears: "2+ Years",
    languages: "Urdu, English",
    resumeUrl: "/Mansha-Hussain-CV.pdf",
    socials: {
      github: "https://github.com/manshahussain5",
      linkedin: "https://www.linkedin.com/in/manshahussain5/",
      email: "mailto:manshahussain520@gmail.com",
      whatsapp: "https://wa.me/923059522712",
      twitter: "https://twitter.com",
    },
  },
  stats: [
    { value: "20+", label: "Projects Completed", icon: "FolderCheck" },
    { value: "15+", label: "Happy Clients", icon: "Users" },
    { value: "2+", label: "Years Experience", icon: "Briefcase" },
    { value: "10+", label: "Technologies", icon: "Layers" },
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Development & Shopify Solutions",
      description:
        "Building modern, responsive websites, scalable web applications, and professional Shopify stores tailored to business needs.",
      iconName: "Globe",
      features: [
        "MERN Stack & Next.js Development",
        "Shopify Store Setup & Customization",
        "REST API & Backend Integration",
        "Performance & Speed Optimization",
      ],
    },
    {
      id: "ai-solutions",
      title: "AI & Intelligent Solutions",
      description:
        "Integrating artificial intelligence and machine learning into practical applications to automate tasks and solve real-world problems.",
      iconName: "Sparkles",
      features: [
        "AI Feature Integration & Workflows",
        "Python Applications & Automation",
        "Machine Learning & Predictive Models",
        "Intelligent AI Chatbots & Assistants",
      ],
    },
    {
      id: "google-meta-ads",
      title: "Google & Meta Ads",
      description:
        "Helping businesses reach the right audience through targeted advertising, lead generation, and conversion tracking.",
      iconName: "TrendingUp",
      features: [
        "Google Ads & Search Campaigns",
        "Facebook & Instagram Targeted Ads",
        "Meta Pixel, CAPI & Tag Manager Setup",
        "Conversion Tracking & Campaign Optimization",
      ],
    },
  ] as Service[],
  projects: [
    {
      id: "smart-meal-ai",
      title: "Smart Meal AI",
      category: "AI Website",
      description:
        "AI-powered food recommendation platform with personalized meal plans, macro tracking, and dynamic grocery budgeting.",
      tags: ["Next.js", "AI", "MongoDB", "TailwindCSS"],
      image: "/images/smart-meal-v5.png",
      accentColor: "#2563FF",
      githubUrl: "https://github.com/manshahussain5",
      liveUrl: "https://smart-meal-ai-jsfc.vercel.app/",
      featured: true,
    },
    {
      id: "my-career",
      title: "My Career",
      category: "Website",
      description:
        "Comprehensive career advisory and recruitment platform helping candidates optimize portfolios and land top industry roles.",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      image: "/images/my-career-v2.png",
      accentColor: "#3B82F6",
      githubUrl: "https://github.com/manshahussain5",
      liveUrl: "https://www.mycareer.services/",
      featured: true,
    },
    {
      id: "watan-cool",
      title: "Watan Cool & Cool",
      category: "Website",
      description:
        "High-performance corporate HVAC systems web presence with interactive booking and quote calculator.",
      tags: ["Next.js", "React", "TailwindCSS", "SEO"],
      image: "/images/watan-cool-v2.png",
      accentColor: "#0284C7",
      githubUrl: "https://github.com/manshahussain5",
      liveUrl: "https://www.watancoolandcool.com/",
      featured: true,
    },
    {
      id: "riyadh-water",
      title: "Riyadh Water Tankers",
      category: "Website",
      description:
        "Modern logistics and on-demand water supply booking web platform serving urban and commercial clients.",
      tags: ["React", "Node.js", "Express", "TailwindCSS"],
      image: "/images/riyadh-water-v2.png",
      accentColor: "#2563FF",
      githubUrl: "https://github.com/manshahussain5",
      liveUrl: "https://www.riyadhwatertankers.com/",
      featured: true,
    },
    {
      id: "food-safety-system",
      title: "Food Safety System",
      category: "Web Application",
      description:
        "Enterprise SaaS compliance web platform engineered for the food industry with role-based auditing, inspection logs, and reports.",
      tags: ["Next.js", "Express.js", "MongoDB", "TailwindCSS"],
      image: "/images/2.png",
      accentColor: "#10B981",
      githubUrl: "https://github.com/manshahussain5",
      liveUrl: "https://fs-demo.vercel.app/login",
      featured: false,
    },
    {
      id: "community-chat-app",
      title: "Community Chat App",
      category: "Chat App",
      description:
        "Real-time messaging and collaborative group discussion application built with WebSockets, instant presence, and encrypted rooms.",
      tags: ["React", "Node.js", "WebSockets", "MongoDB"],
      image: "/images/3-v2.png",
      accentColor: "#8B5CF6",
      githubUrl: "https://github.com/manshahussain5",
      liveUrl: "https://community-frontend-green.vercel.app/signup",
      featured: false,
    },
  ] as Project[],
  skills: [
    // Web Development (Learning Path: JS -> TS -> React -> Next -> Tailwind -> Node -> Express -> Nest -> Mongo -> Git -> Docker -> AWS -> Vercel)
    { name: "JavaScript", category: "Frontend", percentage: 98, icon: "javascript" },
    { name: "TypeScript", category: "Frontend", percentage: 90, icon: "typescript" },
    { name: "ReactJs", category: "Frontend", percentage: 95, icon: "react" },
    { name: "NextJs", category: "Frontend", percentage: 92, icon: "nextjs" },
    { name: "TailwindCSS", category: "Frontend", percentage: 93, icon: "tailwind" },
    { name: "NodeJs", category: "Backend", percentage: 97, icon: "nodejs" },
    { name: "ExpressJs", category: "Backend", percentage: 98, icon: "express" },
    { name: "NestJs", category: "Backend", percentage: 96, icon: "nestjs" },
    { name: "MongoDB", category: "Backend", percentage: 95, icon: "mongodb" },
    { name: "PostgreSQL", category: "Backend", percentage: 93, icon: "postgresql" },
    { name: "Firebase", category: "Backend", percentage: 94, icon: "firebase" },
    { name: "SQLite", category: "Backend", percentage: 92, icon: "sqlite" },
    { name: "Git & GitHub", category: "Cloud & Tools", percentage: 97, icon: "git" },
    { name: "Docker", category: "Cloud & Tools", percentage: 91, icon: "docker" },
    { name: "Vercel", category: "Cloud & Tools", percentage: 96, icon: "vercel" },

    // Digital Marketing (Growth & Ads)
    { name: "Google Ads", category: "Marketing & Ads", percentage: 92, icon: "googleads" },
    { name: "Meta Ads", category: "Marketing & Ads", percentage: 90, icon: "metaads" },

    // Data Science & AI (Python -> SQL -> Machine Learning -> Deep Learning -> NLP)
    { name: "Python", category: "Data Science", percentage: 95, icon: "python" },
    { name: "SQL", category: "Data Science", percentage: 94, icon: "sql" },
    { name: "Machine Learning", category: "Data Science", percentage: 92, icon: "ml" },
    { name: "Deep Learning", category: "Data Science", percentage: 90, icon: "dl" },
    { name: "NLP", category: "Data Science", percentage: 90, icon: "nlp" },
  ] as SkillItem[],
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "Quantum International",
      location: "On-site",
      period: "Sep 2025 — Aug 2026",
      description:
        "Engineered full-stack software applications, scalable web platforms, and automated system workflows with robust database architectures.",
      bullets: [
        "Developing and maintaining responsive web applications and scalable software systems.",
        "Architecting robust RESTful APIs, backend services, and database schemas.",
        "Collaborating across cross-functional engineering teams to implement innovative digital solutions.",
        "Conducting comprehensive code reviews, testing, debugging, and continuous performance optimization.",
        "Integrating modern tooling, data pipelines, and intelligent features for business workflows.",
      ],
    },
    {
      id: "exp-2",
      role: "Web Mern Stack developer",
      company: "Advanturalabs",
      location: "On-site",
      period: "Jan 2025 — Mar 2025",
      description:
        "Developed full-stack web applications utilizing MongoDB, Express.js, React.js, and Node.js with responsive frontends and secure REST APIs.",
      bullets: [
        "Building interactive, dynamic user interfaces using React.js and modern TailwindCSS.",
        "Developing secure server-side logic and RESTful endpoints using Node.js and Express.js.",
        "Designing and managing NoSQL database collections, indexing, and aggregations with MongoDB.",
        "Implementing state management, authentication flows, and seamless third-party API integrations.",
        "Optimizing frontend rendering performance, bundle sizes, and cross-browser responsiveness.",
      ],
    },
    {
      id: "exp-3",
      role: "Social Media Manager",
      company: "FEAT Technologies",
      location: "Hybrid",
      period: "Jan 2023 — Oct 2023",
      description:
        "Managed comprehensive social media marketing campaigns, content strategies, and targeted Meta advertising to maximize reach and conversion.",
      bullets: [
        "Planned and executed end-to-end social media growth and digital marketing strategies.",
        "Managed high-converting Meta Ads, ad copy, creative assets, and campaign budgeting.",
        "Monitored key performance metrics, conversion tracking, and analytics to optimize ROI.",
        "Conducted competitor benchmarking and market research to strengthen brand positioning.",
        "Engaged communities and coordinated cross-channel digital marketing initiatives.",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: "edu-1",
      degree: "BS Software Engineering",
      institution: "Minhaj University - Lahore",
      period: "2021 — 2025",
      description:
        "Core focus on Software Architecture, Web Engineering, Database Design, Data Science, and Machine Learning.",
      grade: "Graduated with Distinction",
    },
  ] as EducationItem[],
  testimonials: [
    {
      id: "test-1",
      name: "Dr. Shahbaz ul Hasan",
      role: "Assistant Professor & Researcher",
      avatar: "/images/SHAHBAZ.png",
      content:
        "Exceptional at translating user stories into scalable, efficient, and user-centric solutions. Demonstrates a deep understanding of client needs and consistently delivers innovative, high-quality applications that exceed expectations.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Kanwar Saad Bin Liaqat",
      role: "Senior Software Architect",
      avatar: "/images/Saad.png",
      content:
        "A versatile full-stack developer with a strong command of both backend and frontend technologies. Combines robust server-side logic with intuitive, responsive user interfaces to create cohesive and high-performing web applications.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "Abdul Rehman",
      role: "Lead Project Manager",
      avatar: "/images/ABD.png",
      content:
        "Reliably delivers projects on time, ensuring seamless communication and alignment with client goals. Known for maintaining high client satisfaction through meticulous attention to detail, proactive problem-solving, and a commitment to excellence.",
      rating: 5,
    },
  ] as Testimonial[],
};
