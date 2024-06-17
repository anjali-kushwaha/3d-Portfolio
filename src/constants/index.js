import sass from '../assets/tech/sass.png';
import mysql from '../assets/tech/mysql.png';
import  bootstrap from '../assets/tech/bootstrap.png';
import c from  '../assets/tech/c.png';
import cplus from '../assets/tech/cplus.png';
import vite from '../assets/tech/vite.png';
import spline from '../assets/tech/spline.png';
import tour from '../assets/tour.png';
import ecom from '../assets/ecom.png';
import space from '../assets/space.png';
import scaner from '../assets/scaner.png';
import hospital from '../assets/hospital.png';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
 
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sass CSS",
      icon: sass,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
        name: "MySQL",
        icon: mysql,
      },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
   

  const experiences = [
    {
      title: "Education",
      company_name: "IIMT College of   Engineering, Greater Noida",
      // icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2019 - Aug 2023",
      points: [
        "B.Tech. in Computer Science & Engg.",
        "pass out with 8.6 CGPA",
        "Achivements :- Scholarship for excellent performance in B.Tech 1st year ",
        "Postion of responsiblity :- Member of Women grievance cell ",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Osmosys software solutions ",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Feb 2024",
      points: [
        "Updated JSX code to meet the specific requirements of the industry and company, focusing on making websites more visible in search engines and easier to use for all.",
        "Used HTML, CSS ,React  to build a webpage that adjusts well to different screen sizes, ensuring it looks good on computers, tablets, and phones.",	     
        "Setup GitHub Pages to easily share and work on projects with others.",
        "Created 6+ advanced Javascript projects, making them work more efficiently by using certain programming techniques.",
        "Learned new languages like C and C++ to expand programming skills",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    }
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    { 
      name: "Space Tourism",
      description:
        "Space Tourism is an immersive website that showcases diverse moons of planets, features cabin crew profiles, and highlights the latest advancements in space exploration technologies. Explore celestial wonders, meet the crew, and stay informed about cutting-edge innovations in the captivating realm of space travel.",
        tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Sass css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: space,
      source_code_link: "https://github.com/anjali-kushwaha/Space-Tourism",
      demo_code_link: "https://github.com/anjali-kushwaha/Space-Tourism",

    },
    {
      name: "E-commerce",
      description:
        "E-commerce website Engage with a visually appealing landing page . Explore categorized products like headphones, watches, speakers, and earbuds. Find related items easily, navigate with a comprehensive footer, and use dynamic search for quick product access. Manage your cart effortlessly for a seamless shopping experience.",
        tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Sass",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Strapi",
          color: "blue-text-gradient",
        },
        {
          name: "Full stack project",
          color: "green-text-gradient",
        },
        
      ],
      image: ecom,
      source_code_link: "https://github.com/anjali-kushwaha/E-commers-website",
      demo_code_link: 'https://drive.google.com/file/d/1hOgQsJSdeNO9RFM3nHk1SmYjLrDjx-o2/view?usp=drivesdk',

    },
    {
      name: "Tour and Travel",
      description:
        "Travel and Tourism website, where users can easily book their dream holiday trips. it contain a range of services provided by top tour providers, ensuring a seamless experience for the customers. Explore our curated selection of hotels and accommodations, each offering exceptional amenities and experiences.",
        tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tour,
      source_code_link: "https://github.com/anjali-kushwaha/Tour-and-Travel-website",
      demo_code_link: 'https://anjali-kushwaha.github.io/Tour-and-Travel-website/',
    },
    {
      name: "Hospital",
      description:
        "Hospital website offers a seamless introduction to hospital services. Discover insights and experiences shared by the patients and doctors on the Reviews Page. schedule appointments conveniently through our Contact Page's form. Stay informed with our informative and engaging Blog, where hospital share articles and updates on healthcare topics.",
        tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/anjali-kushwaha/hospital-website",
      demo_code_link: "https://anjali-kushwaha.github.io/hospital-website/",
    },
    {
      name: "QR Code Generator",
      description:
        "QR Code Generator is a versatile website that effortlessly generates QR codes for any desired website. By scanning these codes, users are seamlessly redirected to their designated websites, simplifying access and enhancing user experience. Experience streamlined navigation through the power of QR technology.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: scaner,
      source_code_link: "https://github.com/anjali-kushwaha/QR-Code-Generator",
      demo_code_link: "https://anjali-kushwaha.github.io/QR-Code-Generator/",
    },
  ];
  
  export { services, technologies, experiences, projects };