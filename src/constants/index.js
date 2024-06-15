import sass from '../assets/tech/sass.png';
import mysql from '../assets/tech/mysql.png';
import  bootstrap from '../assets/tech/bootstrap.png';
import c from  '../assets/tech/c.png';
import cplus from '../assets/tech/cplus.png';
import vite from '../assets/tech/vite.png';
import spline from '../assets/tech/spline.png';
import tour from '../assets/project-1.jpeg'

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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      image: jobit,
      source_code_link: "https://github.com/anjali-kushwaha/Tour-and-Travel-website",
      demo_code_link: 'https://anjali-kushwaha.github.io/Tour-and-Travel-website/',
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/anjali-kushwaha/Tour-and-Travel-website",
      demo_code_link: 'https://anjali-kushwaha.github.io/Tour-and-Travel-website/',
    },
  ];
  
  export { services, technologies, experiences, projects };