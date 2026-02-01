import PV01 from "../assets/revent.png";
import PV02 from "../assets/unilink.png";
import PV03 from "../assets/beta.png";

export const projects = [
  {
    id: "revent",
    title: "Revent",
    type: "Frontend Web Application (Client Project)",
    description:
      "A production frontend website built for a real client. I translated Figma designs into a responsive React application with a focus on UX, performance, and clean architecture.",
    role: [
      "Built a responsive React UI based on Figma designs",
      "Implemented a contact form with Resend email handling",
      "Optimized frontend performance and user experience",
      "Collaborated within a professional team through PR reviews",
    ],
    stack: ["React", "Vite", "JavaScript", "Bootstrap", "Git", "Figma"],
    image: PV01,
    liveUrl: "https://reventme.com/",
    note: "Developed as part of a professional team.",
  },
  {
    id: "unilink",
    title: "Unilink Trading",
    type: "Full Stack Web Application (Client Project)",
    description:
      "A production full-stack web application built for a real client, featuring a modern React frontend and a custom Node.js backend to handle business inquiries and document delivery.",
    role: [
      "Built and maintained the frontend based on Figma designs",
      "Developed RESTful APIs using Node.js and MongoDB",
      "Implemented server-side validation and email handling with Resend",
      "Tested APIs with Postman and collaborated through PR-based team workflows",
    ],
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Figma",
      "Postman",
    ],
    image: PV02,
    liveUrl: "https://unilinktrading.com/",
    note: "Developed as part of a professional team.",
  },
  {
    id: "beta",
    title: "Beta Capital",
    type: "Frontend Web Application (Client Project)",
    description:
      "A production multilingual corporate website built for a real client, featuring a responsive React UI, dynamic language switching, email contact functionality, and SEO optimization.",
    role: [
      "Built responsive frontend interfaces based on Figma designs",
      "Implemented multilingual support using react-i18next (6 languages)",
      "Integrated a language selector and managed translations (AI-assisted)",
      "Optimized frontend structure for SEO and performance",
      "Implemented a contact form with Resend for email delivery",
    ],
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "react-i18next",
      "Bootstrap",
      "Git",
      "Figma",
      "Resend",
    ],
    image: PV03,
    liveUrl: "https://betacapitalx.com/",
    note: "Developed as part of a professional team.",
  },
];
