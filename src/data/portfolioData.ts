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
    role: "Full Stack Developer & Data Scientist",
    rolePrefix: "Full Stack Developer & ",
    roleHighlight: "Data Scientist",
    tagline:
      "Software Engineering graduate focused on web development, data science, and performance marketing (Google & Meta Ads). I build scalable, high-converting digital solutions that drive real business growth.",
    aboutHeading: "About Me",
    bio: [
      "I’m a Full Stack Developer & Data Scientist focused on building scalable web applications, intelligent machine learning systems, and data-driven digital products.",
      "I specialize in the MERN stack, Next.js, Python, and Scikit-learn, with experience in machine learning and data analysis. I focus on turning complex data into practical insights and fast, reliable applications.",
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
      id: "data-science",
      title: "Data Science & Machine Learning",
      description:
        "Building predictive models, automated data analysis workflows, exploratory statistical pipelines, and data-driven insights.",
      iconName: "TrendingUp",
      features: [
        "Predictive Modeling & Statistical Analysis",
        "Data Wrangling & Feature Engineering",
        "Pandas, NumPy & Scikit-learn Pipelines",
        "Data Visualization & Actionable Dashboards",
      ],
    },
    {
      id: "web-dev",
      title: "Web App Development",
      description:
        "High-quality development of web apps at the professional level with responsive, fast, and scalable architecture.",
      iconName: "Globe",
      features: [
        "Next.js 15 & React 19 App Router",
        "Modern Component Architecture",
        "SEO, Core Web Vitals & Fast TTFB",
        "Tailwind CSS & Framer Motion",
      ],
    },
    {
      id: "performance-marketing",
      title: "Google & Meta Ads / Growth",
      description:
        "Data-driven paid advertising campaigns, high-converting funnel optimization, and technical conversion tracking.",
      iconName: "TrendingUp",
      features: [
        "Google Search, Display & Performance Max",
        "Meta Ads Manager (Facebook & Instagram)",
        "Meta CAPI & Google Tag Manager Setup",
        "Conversion Funnels & Landing Page CRO",
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
    { name: "Git & GitHub", category: "Cloud & Tools", percentage: 97, icon: "git" },
    { name: "Docker", category: "Cloud & Tools", percentage: 91, icon: "docker" },
    { name: "AWS", category: "Cloud & Tools", percentage: 94, icon: "aws" },
    { name: "Vercel", category: "Cloud & Tools", percentage: 96, icon: "vercel" },

    // Digital Marketing (Growth & Ads)
    { name: "Google Ads", category: "Marketing & Ads", percentage: 92, icon: "googleads" },
    { name: "Meta Ads", category: "Marketing & Ads", percentage: 90, icon: "metaads" },

    // Data Science (Step-by-Step Path: Python -> SQL -> Pandas & NumPy -> Data Analysis -> Machine Learning -> Deep Learning -> NLP)
    { name: "Python", category: "Data Science", percentage: 95, icon: "python" },
    { name: "SQL", category: "Data Science", percentage: 94, icon: "sql" },
    { name: "Pandas & NumPy", category: "Data Science", percentage: 93, icon: "pandas" },
    { name: "Data Analysis", category: "Data Science", percentage: 94, icon: "datascience" },
    { name: "Machine Learning", category: "Data Science", percentage: 92, icon: "ml" },
    { name: "Deep Learning", category: "Data Science", percentage: 90, icon: "dl" },
    { name: "NLP", category: "Data Science", percentage: 90, icon: "nlp" },
  ] as SkillItem[],
  experience: [
    {
      id: "exp-1",
      role: "AI Engineer & Social Media Marketing Head",
      company: "Nexbridge Solutions",
      location: "Remote - Pakistan",
      companyUrl: "https://www.nexbridge.solutions/en",
      period: "Apr 2025 — Present",
      description:
        "Architecting production-ready AI solutions and machine learning workflows, while spearheading global social media growth and performance marketing campaigns.",
      bullets: [
        "Architecting and deploying machine learning pipelines, predictive models, and intelligent AI-driven automations.",
        "Directing comprehensive social media marketing strategies, paid advertising funnels, and brand scaling initiatives.",
        "Leveraging data science analytics and audience intelligence to optimize conversion rates and user acquisition.",
        "Engineering AI integrations to streamline digital operations and deliver high-impact client solutions.",
        "Partnering with international cross-functional teams to drive technological innovation and digital brand presence.",
      ],
    },
    {
      id: "exp-2",
      role: "AI & Data Science Software Engineer",
      company: "Quantum International",
      location: "Lahore - Pakistan",
      period: "Sep 2025 — Aug 2026",
      description:
        "Engineered web-based software applications, end-to-end data pipelines, and production machine learning models to power intelligent automation and analytics.",
      bullets: [
        "Developing and maintaining web-based software applications and seamless API integrations.",
        "Building and deploying machine learning models and AI-driven automation solutions for practical applications.",
        "Leveraging Python, data preprocessing, and exploratory visualization to solve core business problems.",
        "Designing and optimizing database architectures, software integrations, and AI feature pipelines.",
        "Conducting rigorous testing, debugging, and performance optimization for high-reliability software systems.",
      ],
    },
    {
      id: "exp-3",
      role: "Social Media Marketing & Management",
      company: "Feat Technologies",
      location: "Lahore - Pakistan (Hybrid)",
      period: "Jan 2023 — Oct 2023",
      description:
        "Led social media marketing campaigns, content strategy, and brand management to drive audience growth.",
      bullets: [
        "Planned and executed strategic social media campaigns across multiple channels.",
        "Managed content creation, copywriting, and visual assets tailored for audience growth.",
        "Monitored campaign analytics and KPIs to optimize engagement, reach, and conversion rates.",
        "Conducted audience research and competitor benchmarking to enhance brand positioning.",
        "Coordinated social ad distribution and community management to foster customer engagement.",
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
      linkedinUrl: "https://www.linkedin.com/in/shahbaz-ul-hasan/",
      avatar: "/images/SHAHBAZ.png",
      content:
        "Exceptional at translating user stories into scalable, efficient, and user-centric solutions. Demonstrates a deep understanding of client needs and consistently delivers innovative, high-quality applications that exceed expectations.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Kanwar Saad Bin Liaqat",
      role: "Senior Software Architect",
      linkedinUrl: "https://www.linkedin.com/in/kanwar-saad-bin-liaqat/",
      avatar: "/images/Saad.png",
      content:
        "A versatile full-stack developer with a strong command of both backend and frontend technologies. Combines robust server-side logic with intuitive, responsive user interfaces to create cohesive and high-performing web applications.",
      rating: 5,
    },
    {
      id: "test-3",
      name: "Abdul Rehman",
      role: "Lead Project Manager",
      linkedinUrl: "https://www.linkedin.com/in/abdul-rehman/",
      avatar: "/images/ABD.png",
      content:
        "Reliably delivers projects on time, ensuring seamless communication and alignment with client goals. Known for maintaining high client satisfaction through meticulous attention to detail, proactive problem-solving, and a commitment to excellence.",
      rating: 5,
    },
  ] as Testimonial[],
};
