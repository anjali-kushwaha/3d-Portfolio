import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { Style } from '../style';
import { github } from "../assets";
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-10 rounded-sm sm:w-[510px] w-full'
      >
        <div className='relative w-[420px] h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className='flex flex-wrap gap-4 mt-5'>
          <button className="text-white px-5 py-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-pink-500 font-bold hover:scale-105 duration-200 hover:bg-purple-100">
            <a href={demo_code_link} target='_blank'>Live</a>
          </button>
          <button className="text-black px-3 py-2 flex items-center rounded-md bg-white border-2 border-gradient-to-r border-purple-600 font-bold hover:scale-105 duration-200 hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white">
            <a href={source_code_link} target='_blank'>Source code</a>
          </button>
        </div>

      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${Style.sectionSubText} `}>My work</p>
        <h2 className={`${Style.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 gap-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");