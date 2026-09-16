export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeUrl: string;
  playUrl?: string;
  category: string[]; // e.g. ['Games', 'Tools', 'Collections', 'Prototypes']
}

export interface Event {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  stats: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  startDate: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "snapclass-attendance-system",
  title: "SnapClass - AI Attendance System",
  description:
    "An AI-powered attendance management system that uses facial recognition to automatically mark student attendance. Features include secure authentication, real-time attendance tracking, attendance reports, and an intuitive dashboard for students and administrators.",
  image:
    "https://sc-landing-page-lime.vercel.app/static/img/demo/snap-landing.png",
  technologies: [
    "Python",
    "Face Recognition",
    "OpenCV",
    "Streamlit",
    "Supabase",
    "AI"
  ],
  codeUrl:
    "https://github.com/Abhishek5805/snapclass-Attendance-System-Using-AI",
  playUrl:
    "https://snapclass-attendance-system-using-ai.streamlit.app/",
  category: ["AI", "Web App"]
  },
  {
    id: "AI Gym Coach  ",
    title: "AI Gym Coach – Real-Time Workout Assistant ",
    description:
      "Developed an AI-powered fitness assistant that analyzes exercise posture in real time using MediaPipe Pose Estimation and OpenCV, providing accurate repetition counting and form correction.",
    image:
      "images/image.png",
    technologies: [
  "Python",
  "Streamlit",
  "MediaPipe",
  "OpenCV",
  "Groq AI",
  "SQLite"
],
    codeUrl: "https://github.com/Abhishek5805/AI_GYM",
    category: ["AI/ML", "Streamlit", "MediaPipe"],
  },
  {
    id: "wanderlust",
  title: "Wanderlust – Full Stack Travel Booking Platform",
  description:
  "Developed a full-stack travel and accommodation platform inspired by Airbnb, enabling users to create, manage, and explore property listings. Implemented secure authentication, image uploads with Cloudinary, reviews and ratings, and MongoDB-powered data management to deliver a scalable and user-friendly travel experience.",
  image:
  "images/wan.png",
  technologies: [
"Node.js",
"Express.js",
"MongoDB",
"JavaScript",
"Cloudinary",
"Bootstrap"
],
codeUrl:
"https://github.com/Abhishek5805/Wanderlust",
category: ["Full Stack", "MERN", "Web Development"]
  },
  
];

export const events: Event[] = [
  {
    id: "techsoar-2023",
    title: "Evogen and Magnum 2025",
    role: "Event Head for Cybersecurity",
    description:
      "Led two flagship cybersecurity events—Evogen (intercollege) and Magnum (in-house) with 90+ participants, 2 speakers, and a crisp 85% satisfaction rate.",
    image: "/images/evogen2.jpg",
    stats: ["100+ Participants", "2 Judges", "90% Satisfaction"],
  },
  {
id: "magnum-2026",
title: "Magnum 2026",
role: "Cybersecurity Event Judge",
description:
"Invited as a judge for Magnum 2026, a college-level cybersecurity event featuring a Treasure Hunt challenge. Evaluated participants' problem-solving, cybersecurity knowledge, and technical approach during the event.",
image: "/images/magnum_2026.jpeg",
stats: ["100+ Participants", "Event Judge", "Treasure Hunt"],
}
];

export const experiences: Experience[] = [
  {
    id: "aspiring-ai-ml-engineer",
    title: "Aspiring AI/ML Engineer",
    company: "Tata Consultancy Services (TCS)",
    companyLogo: "/images/tcs-logo.svg",
    startDate: "2026-02-01",
    description:
      "Passionate about building intelligent solutions using Python, Machine Learning, Deep Learning, and data-driven technologies. Continuously learning and developing practical AI/ML projects to solve real-world problems.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "Data Science"],
  },
];




export const achievements: Achievement[] = [
  {
    id: "cyber-sentinal",
    title: "Cyber Sentinel Champion",
    description:
      "4-time winner in inter-college Capture the Flag (CTF) competitions",
    icon: "fas fa-trophy",
  },
  {
    id: "hackathon-highlights",
    title: "Hackathon Highlights",
    description:
      "Runner-Up at a college-level Hackathon and Top 12 out of 100+ participants in a large-scale tech hackathon.",
    icon: "fas fa-code",
  },
  {
    id: "tech-event-lead",
    title: "Tech Event Lead",
    description:
      "Led the planning and execution of 2 successful cybersecurity events in college.",
    icon: "fas fa-chalkboard-teacher",
  },
 {
id: "ai-ml-engineer",
title: "AI/ML Engineer",
description:
"Aspiring AI/ML Engineer passionate about building intelligent solutions using Python, Machine Learning, Deep Learning, and data-driven technologies. Continuously learning and developing practical AI/ML projects to solve real-world problems.",
icon: "fas fa-brain",
},
];

export const skills: string[] = [
  "Java",
  "Python",
  "React.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "Machine Learning",
  "Artificial Intelligence",
  "OpenCV",
  "Streamlit",
  "Supabase",
  "Linux",
];
