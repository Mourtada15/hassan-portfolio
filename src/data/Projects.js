import PV01 from "../assets/revent.png";
import PV02 from "../assets/unilink.png";
import PV03 from "../assets/beta.png";

export const projects = [
  {
    id: "revent",
    title: "Revent",
    type: "Frontend Web Application (Client Project)",
    description:
      "A production website built for a real client. I translated Figma designs into a responsive React application, focusing on performance, UX, and clean architecture.",
    role: [
      "Built responsive UI from Figma designs",
      "Implemented contact form with Resend email handling",
      "Optimized frontend performance and user experience",
      "Collaborated via PR reviews and team workflows",
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
      "A corporate website built for a real client, featuring a modern frontend and a custom backend to handle business inquiries and document delivery.",
    role: [
      "Built and maintained the frontend based on Figma designs",
      "Developed RESTful APIs with Node.js and MongoDB",
      "Implemented server-side validation and email handling with Resend",
      "Tested APIs using Postman and collaborated through PR reviews",
    ],
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "Bootstrap",
      "Git",
      "Figma",
      "Node.js",
      "Express",
      "MongoDB",
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
      "A multilingual corporate website built for a real client, featuring a responsive UI, email contact functionality, and SEO optimization.",
    role: [
      "Developed frontend from Figma designs",
      "Implemented multilingual support using react-i18next",
      "Integrated language selector and managed translations",
      "Built responsive UI and optimized SEO",
      "Implemented a contact form with Resend",
    ],
    stack: [
      "React",
      "react-i18next",
      "Vite",
      "JavaScript",
      "Bootstrap",
      "Git",
      "Figma",
    ],
    image: PV03,
    liveUrl: "https://betacapitalx.com/",
    note: "Developed as part of a professional team.",
  },
];
