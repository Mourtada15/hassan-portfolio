export const personalProjects = [
  {
    id: "event-scheduler",
    title: "Event Scheduler Application",
    type: "Personal Project | Full-Stack Web Application",
    description:
      "A production-ready full-stack web application for scheduling and managing personal events. Users can create, edit, and track events with status updates, search and filter events, and invite others through secure links. The platform also includes an AI-powered assistant for improving event descriptions, generating agendas, surfacing smart suggestions, and helping detect scheduling conflicts.",
    overview:
      "This project demonstrates secure API design, scalable CRUD workflows, database optimization, and practical AI integration in a modern JavaScript stack.",
    liveUrl: "https://event-schedular-client.vercel.app",
    repoUrl: "https://github.com/Mourtada15/event-schedular",
    featureGroups: [
      {
        title: "Authentication & Security",
        items: [
          "JWT-based login and registration with refresh tokens",
          "Protected API routes with ownership enforcement",
          "Rate limiting, CORS handling, and input sanitization middleware",
        ],
      },
      {
        title: "Event Management",
        items: [
          "Full CRUD operations for events",
          "Status tracking for upcoming, attending, maybe, and declined responses",
          "Search, filters, pagination, and date/location/tag-based discovery",
        ],
      },
      {
        title: "Invitations & Collaboration",
        items: [
          "Shareable invite links with optional email notifications",
          "Invite acceptance flow for both existing and new users",
        ],
      },
      {
        title: "AI Assistant",
        items: [
          "Enhances event descriptions and generates agendas",
          "Provides smart suggestions and scheduling conflict checks",
          "Powered by OpenAI API with local fallback stubs",
        ],
      },
      {
        title: "Frontend & Reliability",
        items: [
          "Responsive React UI with Bootstrap 5 styling",
          "Toast notifications, loading states, and clear navigation",
          "MongoDB indexing, consistent JSON responses, and robust error handling",
        ],
      },
    ],
    stack: [
      "React",
      "React Router",
      "Vite",
      "Axios",
      "Bootstrap 5",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Zod",
      "OpenAI API",
      "Nodemailer",
      "Helmet",
      "CORS",
      "express-rate-limit",
      "express-mongo-sanitize",
      "Nodemon",
      "Concurrently",
      "npm workspaces",
      "Vercel",
    ],
  },
  {
    id: "mini-library-system",
    title: "Mini Library Management System",
    type: "Personal Project | Full-Stack MERN Application",
    description:
      "A full-stack MERN application for managing books, users, and borrowing activity in a digital library workflow. It combines role-based access control, circulation tools, secure Google OAuth login, and AI-powered search and metadata enrichment to make library operations more efficient.",
    overview:
      "This project highlights practical auth flows, domain-specific CRUD design, testable backend APIs, and AI-assisted search and enrichment features in a production-style library system.",
    liveUrl: "https://mini-library-virid.vercel.app",
    repoUrl: "https://github.com/Mourtada15/mini-library-system",
    featureGroups: [
      {
        title: "Books & Circulation",
        items: [
          "Full CRUD workflows for books and library records",
          "Checkout and check-in flows with due date tracking",
          "Search, filtering, sorting, and pagination for catalog browsing",
        ],
      },
      {
        title: "Authentication & Roles",
        items: [
          "Google OAuth 2.0 authentication with session-based login",
          "Role-based access control for ADMIN, LIBRARIAN, and MEMBER",
          "Admin user management with role assignment",
        ],
      },
      {
        title: "AI Features",
        items: [
          "Natural-language smart search converted into structured book filters",
          "AI-powered metadata enrichment for tags, genre, and summaries",
          "OpenAI and Anthropic-compatible provider layer with mock fallback",
        ],
      },
      {
        title: "Backend Quality",
        items: [
          "Validation, error handling, and API rate limiting",
          "Backend test coverage for core routes and AI-related flows",
          "MongoDB data modeling with Mongoose for scalable library workflows",
        ],
      },
      {
        title: "Frontend & Tooling",
        items: [
          "Responsive React 19 frontend built with Vite and React Router",
          "Bootstrap, React Bootstrap, and Axios for UI and data flow",
          "Jest, Supertest, Nodemon, Concurrently, ESLint, and Prettier in development",
        ],
      },
    ],
    stack: [
      "React 19",
      "Vite",
      "React Router",
      "Bootstrap",
      "React Bootstrap",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Passport.js",
      "Google OAuth 2.0",
      "Express Session",
      "Joi",
      "Jest",
      "Supertest",
      "mongodb-memory-server",
      "OpenAI",
      "Anthropic-compatible AI layer",
      "Nodemon",
      "Concurrently",
      "ESLint",
      "Prettier",
    ],
  },
];
