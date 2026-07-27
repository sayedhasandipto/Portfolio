export const projects = [
  {
    id: 1,
    slug: "mern-realtime-chat",
    title: "MERN Real-Time Chat",
    tags: ["MERN Stack", "Socket.io"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoAYq-NuTr7NxQ2uHOMrQx-EiaTv3VTDSVPeLUh_KGXxF7QctTi-Zkv-uPX0TVQOjRmc0eYBPZrejCl7v_02IkuviAbmbIem6RhpsufSJtbY_ZfhTng4l8fPos3aQxwO3N5JBqYCaCGyLWyfzVTO1aHiJpDJNxQMj_e3hDYwRY5zwJHRihqgscoy4c1UBQ9hEot0RCkA30yJC8vxCk5M9J_YtEz9rjAZvVPSDYI7Y8ZjxSIpqYqvDudePX0m9O8Z6h9FM6lea9FQo",
    category: "Full-Stack App",
    fullDescription: "A high-performance real-time messaging application built with the MERN stack. Features instant message delivery, online status tracking, and group chat capabilities.",
    challenge: "Managing concurrent WebSocket connections and ensuring message persistence in MongoDB without compromising latency.",
    solution: "Implemented Socket.io for real-time bi-directional communication, integrated with a robust Express/Node.js backend and specialized React hooks for state management.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind CSS", "Redux Toolkit"],
    liveLink: "https://github.com/sayedhasandipto",
    githubLink: "https://github.com/sayedhasandipto",
    challengesFaced: [
      "Handling WebSocket connection drops gracefully on mobile networks without losing temporary message state.",
      "Optimizing MongoDB queries for history retrieval to load thousands of messages in under 50ms using compound indexing.",
      "Synchronizing user online/offline status in real-time across multiple tabs and devices using Redis-backed adapter."
    ],
    futureRoadmap: [
      "Add dynamic dark/light mode toggle with highly customized chat space themes.",
      "Integrate high-quality group video and voice calls using WebRTC and clean room UI.",
      "Implement end-to-end message encryption using Web Crypto API to guarantee data privacy."
    ]
  },
  {
    id: 2,
    slug: "inventory-management-system",
    title: "MERN Inventory Pro",
    tags: ["Full-Stack", "E-commerce"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz2u_R8B-LehAcejS4CDYRnrah48mSr1Rv0djsorAkkchGws6rsTgPRV5Gaz8_uqWhpX7RlIsnyqyf0ioD94M5Mhjn-PLF-ST3izVtFrme5bt8ZU37Ulty_kjPcQt6osIpiijR8f75EM0MT-eKjrbF-2HkF_gF5XvrG_v4jvbhZXUJV1oJ_0x9QTLoFWtATXkWb4Yr2fbqEdfdMYwPbiMSH2PggOuot5TQVFbUy6vSANxcihuM6kE8XUovmkbsnj87ay9cHRUJrpU",
    category: "SaaS Platform",
    fullDescription: "A comprehensive inventory management system designed for small to medium enterprises. Built with the full MERN stack for scalability and reliability.",
    challenge: "Designing a complex database schema in MongoDB to handle multi-warehouse inventory levels and transaction histories.",
    solution: "Utilized Mongoose for advanced data modeling and built a dynamic React dashboard with real-time analytics powered by Express middleware.",
    tools: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS", "Axios"],
    liveLink: "https://github.com/sayedhasandipto",
    githubLink: "https://github.com/sayedhasandipto",
    challengesFaced: [
      "Designing a highly scalable database schema to handle multi-warehouse inventory levels and nested historical audit trails.",
      "Preventing race conditions in inventory counts when multiple managers updated stock simultaneously by implementing optimistic locking.",
      "Optimizing complex PDF/CSV report generation logic to run asynchronously and avoid blocking the Node.js event loop."
    ],
    futureRoadmap: [
      "Integrate Stripe Payment Gateway for automated wholesale invoicing, orders, and payments.",
      "Build a native mobile client using React Native with built-in camera barcode scanning functionality.",
      "Implement predictive AI analysis to recommend restocks based on seasonal sales patterns."
    ]
  },
  {
    id: 3,
    slug: "social-media-dashboard",
    title: "MERN Social Analytics",
    tags: ["Data Vis", "Dashboard"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2NUDr-3D6YemCC3j1HUM6mmx0VgGEzX3eTX-738kNrnmG9ys0lxMFNpmv3pBP8c0-KmaPcs8QbWEjEyRsWCTwQO_ahk42Iv5Tlbs-iNzDsRMeJN_MN8pH04WvgPT5l-alPFMKvawGdyZ73ooEJt50YJGL9Sy_gtsaI6wk2nBCagmHYrBpkvv-7tBbw_YkscB5Db1Sa_wiBDxNLk6r9L2-1dzBIGAS0_xCymxvjcFDS2zKMAvhBoWSRSTLRO4qIABFgB2IFfrZJt4",
    category: "Analytics",
    fullDescription: "An advanced social media performance tracking dashboard. It aggregates data from multiple sources and presents it in a unified MERN-powered interface.",
    challenge: "Normalizing large volumes of unstructured data from third-party APIs into a consistent MongoDB structure.",
    solution: "Developed a background worker system in Node.js to fetch and process API data, served through a RESTful Express API to a high-performance React frontend.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Chart.js", "Tailwind CSS", "Mongoose"],
    liveLink: "https://github.com/sayedhasandipto",
    githubLink: "https://github.com/sayedhasandipto",
    challengesFaced: [
      "Managing API rate limits and structural changes across multiple social media platforms during collection cycles.",
      "Caching normalized analytics metrics effectively using Redis to reduce direct database load by 60%.",
      "Rendering high-frequency chart datasets smoothly in React without triggering heavy layout recalculations or sluggish scrolls."
    ],
    futureRoadmap: [
      "Add automated email/SMS alerts to notify clients when analytics parameters hit pre-selected thresholds.",
      "Perform sentiment analysis on user comments using dynamic Natural Language Processing algorithms.",
      "Migrate server operations from standard REST API to GraphQL for highly targeted frontend querying."
    ]
  },
  {
    id: 4,
    slug: "mern-e-learning-platform",
    title: "MERN SkillSphere",
    tags: ["EdTech", "LMS"],
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    category: "Education",
    fullDescription: "A feature-rich e-learning platform where instructors can host courses and students can learn interactively. Fully built using the MERN stack.",
    challenge: "Handling large video file uploads and managing complex student progress tracking across multiple modules.",
    solution: "Integrated Cloudinary for video hosting and used MongoDB aggregations to calculate real-time progress for thousands of users.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Cloudinary", "Stripe", "Tailwind CSS"],
    liveLink: "https://github.com/sayedhasandipto",
    githubLink: "https://github.com/sayedhasandipto",
    challengesFaced: [
      "Handling large video file uploads and processing progress bars asynchronously.",
      "Computing real-time class progress metrics across thousands of active students using MongoDB aggregations."
    ],
    futureRoadmap: [
      "Add interactive live-streaming classes directly inside the platform.",
      "Build a student discussion forum with instant messaging capabilities."
    ]
  },
  {
    id: 5,
    slug: "mern-blogging-engine",
    title: "MERN DevBlog",
    tags: ["CMS", "Community"],
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    category: "Content",
    fullDescription: "A developer-focused blogging platform with Markdown support and community engagement features. Powered by MERN.",
    challenge: "Implementing a secure and scalable authentication system with role-based access control.",
    solution: "Used Better Auth and JWT for multi-layer security, with a flexible MongoDB schema to handle nested comments and user interactions.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Better Auth", "Tailwind CSS"],
    liveLink: "https://github.com/sayedhasandipto",
    githubLink: "https://github.com/sayedhasandipto",
    challengesFaced: [
      "Structuring high-performance nested comment threads in MongoDB without hitting deep nesting bottlenecks.",
      "Setting up secure role-based access control rules for author, editor, and reader accounts."
    ],
    futureRoadmap: [
      "Integrate an automated newsletter generation and deployment subsystem.",
      "Add offline drafting capabilities using IndexDB local caching mechanisms."
    ]
  },
  {
    id: 6,
    slug: "mern-task-architect",
    title: "MERN Task Architect",
    tags: ["Productivity", "Agile"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    category: "Enterprise",
    fullDescription: "A high-end task management tool for agile teams, featuring Kanban boards and real-time team collaboration.",
    challenge: "Ensuring UI state remains in sync across multiple team members during simultaneous edits.",
    solution: "Leveraged Redux for global state management and used optimistic UI updates in React to provide an instant, lag-free experience.",
    tools: ["MongoDB", "Express", "React", "Node.js", "Redux", "GSAP", "Tailwind CSS"],
    liveLink: "https://github.com/sayedhasandipto",
    githubLink: "https://github.com/sayedhasandipto",
    challengesFaced: [
      "Maintaining state synchronization across multiple concurrent client devices on Kanban updates.",
      "Rendering drag-and-drop animations without introducing lags in standard React renderings."
    ],
    futureRoadmap: [
      "Add full calendar integration matching third-party clients like Google Calendar.",
      "Implement automated daily summary emails summarizing team task achievements."
    ]
  }
];
