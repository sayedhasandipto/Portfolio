export const projects = [
  {
    id: 1,
    slug: "nakshidevs",
    title: "NakshiDevs - Agency & Software Solutions Platform",
    tags: ["MERN Stack", "Agency Platform", "Tailwind CSS"],
    img: "https://i.ibb.co.com/JWYr8sf7/Screenshot-35.png", // এখানে প্রজেক্টের একটা সুন্দর স্ক্রিনশট লিংক বসিয়ে দিও
    category: "Full-Stack App",
    fullDescription:
      "A modern software agency and digital solution platform built to showcase team services, client portfolios, interactive project inquiries, and seamless communication channels.",
    challenge:
      "Building a highly performant and scalable agency portfolio with dynamic project filtering and smooth user interaction for prospective clients.",
    solution:
      "Developed a modern responsive UI with React and Tailwind CSS, backed by a robust Node.js/Express REST API and MongoDB for dynamic project and service content management.",
    tools: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveLink: "https://nakshidevs.vercel.app", // তোমার যদি ডিফ্রেন্ট লাইভ ডোমেইন থাকে তবে সেটা দিও
    githubLink: "https://github.com/sayedhasandipto/nakshidevs",
    challengesFaced: [
      "Ensuring fluid micro-interactions and animations across all screen resolutions without degrading mobile lighthouse scores.",
      "Designing a clean data schema in MongoDB to dynamically render complex client case studies and technical services.",
      "Optimizing dynamic route rendering for dynamic project detail views.",
    ],
    futureRoadmap: [
      "Integrate an automated client booking & consultation scheduling system (e.g., Calendly API integration).",
      "Add a dedicated client dashboard for real-time project progress and milestone tracking.",
      "Implement an automated blog section with CMS support for publishing tech articles and agency updates.",
    ],
  },
  {
    id: 2,
    slug: "fujimedical",
    title: "FujiMedical - Healthcare & Medical Equipment Platform",
    tags: ["MERN Stack", "Healthcare", "Tailwind CSS"],
    img: "https://i.ibb.co.com/XHjmsKk/Screenshot-36.png",
    category: "Full-Stack App",
    fullDescription:
      "A comprehensive medical services and healthcare equipment management platform designed to streamline doctor appointments, medical product listings, and patient inquiries.",
    challenge:
      "Building a secure and intuitive user interface for managing sensitive medical service bookings and displaying complex healthcare product specifications.",
    solution:
      "Architected a responsive frontend with React and Tailwind CSS, backed by Express/Node.js RESTful APIs and MongoDB to handle dynamic appointment schedules and inventory data effectively.",
    tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://fujimedicalhall.vercel.app/",
    githubLink: "https://github.com/sayedhasandipto/FujiMedical",
    challengesFaced: [
      "Designing a seamless user workflow for medical service inquiries and product browsing across all mobile screen sizes.",
      "Implementing efficient filtering and search functionality for a diverse catalog of medical equipment.",
      "Ensuring robust state management for dynamic forms and appointment requests.",
    ],
    futureRoadmap: [
      "Integrate real-time online doctor consultation via WebRTC video calls.",
      "Add an automated prescription upload and digital diagnostic report portal for patients.",
      "Implement an online payment gateway (e.g., SSLCommerz/Stripe) for instant medical equipment orders.",
    ],
  },
  {
    id: 3,
    slug: "blood-donation",
    title: "BloodDonation - Life-Saving Blood Donor Connection Platform",
    tags: ["MERN Stack", "Healthcare", "Tailwind CSS"],
    img: "https://i.ibb.co.com/V0CV4ZSG/Screenshot-37.png", // এখানে প্রজেক্টের কভার ছবির ImgBB লিংক দিও
    category: "Full-Stack App",
    fullDescription:
      "A vital community-driven web application designed to bridge the gap between blood donors and recipients in critical emergencies through real-time donor searching and request management.",
    challenge:
      "Ensuring quick donor matching during emergency blood requests while keeping donor contact privacy secure and data management smooth.",
    solution:
      "Developed an interactive donor discovery interface with React and Tailwind CSS, coupled with Express/Node.js REST APIs and MongoDB for location-based blood group filtering and request posting.",
    tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://blood-donation-mqfr.vercel.app/", // আসল লাইভ লিংক থাকলে এখানে আপডেট করো
    githubLink: "https://github.com/sayedhasandipto/bloodDonation",
    challengesFaced: [
      "Building an accurate filtering system by blood group and location to ensure fast donor matching during medical emergencies.",
      "Designing an intuitive dashboard for managing pending, approved, and completed blood donation requests.",
      "Implementing proper access control and authentication for donors and regular users.",
    ],
    futureRoadmap: [
      "Integrate automated SMS notifications to alert nearby donors immediately when an urgent blood request is posted.",
      "Add interactive map integration (Google Maps API) to show nearby donors and hospitals visually.",
      "Implement a donor recognition system with badges and donation history tracking to encourage regular contributions.",
    ],
  },
  {
    id: 4,
    slug: "docappoint",
    title: "DocAppoint - Doctor Appointment & Healthcare Booking System",
    tags: ["MERN Stack", "Healthcare", "Tailwind CSS"],
    img: "https://i.ibb.co.com/1jHNQvL/Screenshot-38.png", // প্রজেক্টের একটি কভার স্ক্রিনশটের ImgBB লিংক দিও
    category: "Full-Stack App",
    fullDescription:
      "A modern healthcare management application that simplifies the doctor search, profile viewing, and schedule booking process for patients while offering a structured portal for healthcare providers.",
    challenge:
      "Designing a seamless calendar and time-slot booking mechanism to prevent double-booking and provide instant feedback to patients.",
    solution:
      "Engineered a dynamic React interface with Tailwind CSS and integrated an Express/Node.js backend with MongoDB to handle real-time doctor availability and appointment scheduling.",
    tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://docappointbd.vercel.app/", // যদি কোনো লাইভ লিংক থাকে তবে সেটা সেট করো
    githubLink: "https://github.com/sayedhasandipto/docappoint",
    challengesFaced: [
      "Managing time-slot validation logic on both frontend and backend to avoid overlapping appointment bookings.",
      "Designing an intuitive multi-step booking modal for patients across mobile and desktop devices.",
      "Handling dynamic filtering by medical specializations, doctor ratings, and availability.",
    ],
    futureRoadmap: [
      "Integrate payment gateway (Stripe/SSLCommerz) for online appointment fee collection.",
      "Add automated email/SMS appointment reminders for patients and doctors prior to scheduled times.",
      "Implement digital prescription generation and patient medical history tracking.",
    ],
  },
  {
    id: 5,
    slug: "rsir",
    title: "RSIR - Restaurant & Food Service Management System",
    tags: ["MERN Stack", "Food & Dining", "Tailwind CSS"],
    img: "https://i.ibb.co.com/HfPYZPY0/Screenshot-40.png",
    category: "Full-Stack App",
    fullDescription:
      "A feature-rich food service and restaurant management web application built to facilitate seamless menu browsing, online food ordering, and real-time order status tracking.",
    challenge:
      "Structuring an efficient data schema for handling custom menu items, pricing categories, and smooth user cart state synchronization.",
    solution:
      "Built an interactive and responsive user interface using React and Tailwind CSS, backed by Node.js/Express APIs and MongoDB for managing order workflows and user activity.",
    tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://learnwithrobiulislam.vercel.app/", // যদি কোনো লাইভ ডোমেইন থাকে তবে সেটা আপডেট করো
    githubLink: "https://github.com/sayedhasandipto/RSIR",
    challengesFaced: [
      "Designing an intuitive cart and checkout workflow that updates total pricing and item quantities dynamically.",
      "Implementing efficient image loading and menu filtering by categories (e.g., Starters, Main Course, Desserts).",
      "Handling secure user authentication and order history retrieval for returning customers.",
    ],
    futureRoadmap: [
      "Integrate a real-time order status dashboard using Socket.io for live updates between kitchen and customer.",
      "Add a table reservation and pre-ordering system for dine-in guests.",
      "Implement an automated coupon code and promotional discount module.",
    ],
  },
  {
    id: 9, // প্রজেক্টের ক্রমানুসারে সঠিক আইডি নম্বরটি বসিয়ে নিও
    slug: "bcbdashboard",
    title: "BCB Dashboard - Sports Analytics & Board Management System",
    tags: ["MERN Stack", "Dashboard", "Analytics", "Tailwind CSS"],
    img: "https://i.ibb.co.com/7dVdjFxf/Screenshot-41.png", // প্রজেক্টের কভার স্ক্রিনশটের ImgBB লিংক দিও
    category: "Full-Stack App",
    fullDescription:
      "A comprehensive sports analytics and administrative dashboard designed for the Bangladesh Cricket Board (BCB) to track player statistics, manage match schedules, analyze performance metrics, and handle team operations.",
    challenge:
      "Structuring complex cricket statistical data and rendering interactive analytical charts without degrading dashboard performance.",
    solution:
      "Engineered a clean data-driven UI using React and Tailwind CSS, integrated with dynamic charting libraries and a robust Node.js/Express backend connected to MongoDB.",
    tools: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Recharts",
    ],
    liveLink: "https://bcbdashboard.vercel.app/", // যদি লাইভ লিঙ্ক থাকে তবে আপডেট করে দিও
    githubLink: "https://github.com/sayedhasandipto/bcbdashboard",
    challengesFaced: [
      "Designing an intuitive multi-tab dashboard layout for switching between player stats, match schedules, and team rosters seamlessly.",
      "Formatting dynamic data visualizers (charts and tables) to remain fully responsive on mobile devices.",
      "Managing state for filtered player queries based on formats (ODI, Test, T20) and roles.",
    ],
    futureRoadmap: [
      "Integrate live match score API feeds for real-time statistical updates during ongoing games.",
      "Add an AI-driven player performance prediction module based on historical match metrics.",
      "Implement role-based access control (RBAC) for board officials, team coaches, and general users.",
    ],
  },
];
