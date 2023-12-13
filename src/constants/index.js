import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  salon,
  mocktail,
  ecom,
  java,
  python,
  linux,
  canva,
  spline,
  vscode,
  
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Experience",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX design",
    icon: mobile,
  },
  {
    title: "Content Writer",
    icon: backend,
  },
  {
    title: "Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "vscode",
    icon: vscode,
  },

  {
    name: "figma",
    icon: figma,
  },

  {
    name: "spline",
    icon: spline,
  },
  
  {
    name: "canva",
    icon: canva,
  },

  

  


  
  

  
 
];

const experiences = [
  {
    title: "Saint Joseph School",
    company_name: "Una",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2007-2018",
    points: [
      "Completed 10th grade at Saint Joseph School, Una, in 2018 with distinction, showcasing a strong academic foundation.",
      "Actively participated in sports, cultural events, and clubs, fostering a well-rounded skill set alongside academic achievements.",
      "Formed meaningful connections with educators, benefiting from mentorship that enhanced collaborative and communicative skills."
    ],
  },
  {
    title: "SS Divine School",
    company_name: "Ahmedabad",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2018-2020",
    points: [
      "Excelled in a science-intensive curriculum, with a specialized focus on mathematics, during the 11th and 12th grades at SS Divine School.",
      "Demonstrated advanced proficiency in mathematical concepts, contributing to a strong foundation in science-related subjects throughout the academic years 2018-2020.",
      "Applied mathematical skills to solve complex problems in science, showcasing a practical integration of mathematics into scientific inquiry and analysis during the study period.",
    ],
  },
  {
    title: "Silver Oak University",
    company_name: "Ahmedabad",
    icon: shopify,
    iconBg: "#383E56",
    date: "Under graduation [SPI-7.84, CPI-8.40 (Semester-6)]",
    points: [
      "Actively enrolled in the Information Technology program at Silver Oak University, commencing studies in 2021 and expected to graduate in 2024.",
      "Engaging in a comprehensive curriculum that covers various aspects of Information Technology, including programming, networking, and software development, to build a well-rounded skill set.",
      "Demonstrating commitment to academic excellence and a passion for IT through ongoing studies at Silver Oak University, with an anticipated graduation date in 2024.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Certificate of Completing Linux Training Course",
    name: "Spoken Tutorial",
    //designation: "CFO",
    //company: "Acme Co",
    image: linux,
  },
  {
    testimonial:
      "Certificate of Completing Python Training",
    name: "Spoken Tutorial",
    image: python,
  },
  {
    testimonial:
      "Certificate of Completing Java Training Course.",
    name: "Spoken Tutorial",
    
    image: java,
  },
];

const projects = [
  {
    name: "Salon de Elegance",
    description:
      "Web-based platform that allows users to brouse products, book appointment and see though the contact details to find its perfect style.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: salon,
    source_code_link: "https://github.com/Dheiryan",
  },
  {
    name: "Bite Moguls",
    description:
      "Web application that enables users to go though the menue through its images and diects you to their prices with full responsive. It also has th elocation of it branches though worldwide Geographic.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mocktail,
    source_code_link: "https://github.com/Dheiryan",
  },
  {
    name: "Closet Website with Admin Dashboard",
    description:
      "Developed a feature-rich e-commerce platform with an admin dashboard using Next.js, Tailwind CSS, Shadcn UI, PlanetScale, Prisma, Clerk, Cloudinary, Stripe, and Git. Accomplished tasks spanned from creating a sales dashboard to facilitating product management, culminating in a fully functional online payment process.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/Dheiryan",
  },
];

export { services, technologies, experiences, testimonials, projects };