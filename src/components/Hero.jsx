import React from 'react';
import { motion } from 'framer-motion';
import { Style } from '../style';
import SplineComponent from './canvas/SplineComponent';
import SocailLinks from '../components/SocailLinks';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${Style.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Side circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          {/* Side line */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div> 
          <h1 className={`${Style.heroHeadText} text-white`}>HEY, I'M <br/><span className='text-[#915eff]'>ANJALI KUSHAWHA</span></h1>
          <p className={`${Style.heroSubText} mt-2 text-white-100`}>A frontend developer focused on web development, building the frontend of websites and web applications that leads to the success of the overall product.</p> 
          <SocailLinks/> 
        </div>
      
          
      {/* SplineComponent with background */}
       <SplineComponent />
      
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-left items-left ml-[40px]'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex  items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
