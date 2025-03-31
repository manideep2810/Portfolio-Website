import { chatApp, dsaImg, problemSolvingImg, competitiveProgrammingImg, bookNotesApp } from '../assets';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "competitive programmer",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png?f=webp&w=256",
  },
  {
    title: "Web Developer",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png",
  },
  {
    title: "React Developer",
    icon: "https://www.carlrippon.com/static/64d2dff032f91508ec5326d8e4cdaaab/5a190/React-and-typescript.png",
  },
  {
    title: "Backend Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/6213/6213731.png",
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91YEATeuxfnmDEPheNsWfl3QJPBdWuwCF4Q&s",
  },
  {
    name: "CSS 3",
    icon: "css",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React JS",
    icon: "reactjs",
  },
  {
    name: "Redux Toolkit",
    icon: "redux",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "Node JS",
    icon: "nodejs",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "Three JS",
    icon: "threejs",
  },
  {
    name: "git",
    icon: "git",
  },
  {
    name: "figma",
    icon: "figma",
  },
  {
    name: "PostgreSQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
];

const experiences = [
  {
    title: "Ride Sharing Application",
    companyName: "",
    icon: "https://imageio.forbes.com/specials-images/imageserve/1160487949/Uber-app-shown-on-smartphone/960x0.jpg?format=jpg&width=960",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designed and developed a ride-sharing platform inspired by Uber with PostgreSQL, Node.js, and Express.js, handling user authentication, ride booking, and fare calculations.",
      "Implemented real-time ride tracking, status updates, and ride-matching using WebSockets and optimized database queries for performance and scalability.",
      "Integrated Google Maps API for route optimization, distance calculation, and location-based services, enhancing the user experience.",
    ],
    
  },
  {
    title: "Chat Application",
    companyName: "",
    icon: chatApp,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed a real-time messaging platform for instant communication, supporting both group and one-on-one chats using Socket.io.",
      "Integrated a robust email system for account confirmation, password resets, and welcome notifications using Mailtrap.",
      "Designed a modern UI with 32 customizable themes using React.js and Tailwind CSS, enhancing user engagement.",
    ],
  },
  {
    title: "Railway Management API",
    companyName: "",
    icon: "https://media.istockphoto.com/id/182262339/photo/high-speed-train.jpg?s=612x612&w=0&k=20&c=a_TyErbqDZKO9du0eUMHwl7lF9QRFLmMNCJyacGiZOM=",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed a public Railway Management API with well-documented endpoints for seamless user interaction.",
      "Implemented role-based authentication for users and admins, securing API endpoints using API keys and JWT-based session management.",
      "Enabled users to search trains, check seat availability, book tickets, and retrieve booking details, while admins can add, modify, and remove trains.",
      "Addressed concurrency control issues to maintain data consistency during ticket booking.",
    ],
  },
  {
    title: "Book Notes App",
    companyName: "",
    icon: bookNotesApp,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Implemented a responsive Home Page with book search functionality by title, author, and category.",
      "Enabled users to save liked books to 'My Collection' and organize them into custom folders.",
      "Added sorting options to filter books based on rating, recency, and author for better discoverability.",
      "Integrated a feature to save and manage short notes for each book, enhancing user engagement.",
    ],
  },
];

const certifications = [
  {
    title: "Data Structure and Algorithms",
    organization: "GeeksforGeeks",
    date: "May 2023",
    credentialID: "803dfb93f740b11d4c1fd7406144d17d",
    credentialURL: "https://media.geeksforgeeks.org/courses/certificates/803dfb93f740b11d4c1fd7406144d17d.pdf",
    image: dsaImg
  },
  {
    title: "Problem Solving",
    organization: "IICPC Community",
    date: "February 2025",
    credentialID: "DEF789012",
    credentialURL: "https://drive.google.com/file/d/1DBtHKGcGzmD99LLf6LpBEvUIYLV6HmB-/view?usp=sharing",
    image: problemSolvingImg
  },
  {
    title: "Competitive Programming",
    organization: "TLE Eliminators",
    date: "November 2024",
    credentialID: "GHI345678",
    credentialURL: "https://drive.google.com/file/d/1fG3GtYZb_OmUO9kn4y3K6P8Fzm41QZQV/view",
    image: competitiveProgrammingImg
  },
];

const projects = [
  {
    name: "Ride Sharing Application",
    description:
      "A ride-sharing application that allows users to book rides, track their location, and pay for their rides using a secure payment gateway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://imageio.forbes.com/specials-images/imageserve/1160487949/Uber-app-shown-on-smartphone/960x0.jpg?format=jpg&width=960",
    sourceCodeLink: "https://github.com/manideep2810/Uber",
  },
  {
    name: "Chat Application",
    description:
      "A real-time messaging platform that allows users to send and receive messages, images, and videos with friends and family.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    sourceCodeLink: "https://github.com/manideep2810/Chat-Application.",
  },
  {
    name: "Railway Management API",
    description:
      "A public Railway Management API with well-documented endpoints for seamless user interaction.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://media.istockphoto.com/id/182262339/photo/high-speed-train.jpg?s=612x612&w=0&k=20&c=a_TyErbqDZKO9du0eUMHwl7lF9QRFLmMNCJyacGiZOM=",
    sourceCodeLink: "https://github.com/manideep2810/Railway-Management-API",
  },
];

export { services, technologies, experiences, certifications, projects }; 