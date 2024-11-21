import React, {useContext} from 'react';

// import images
import WomanImg from '../img/about/woman.png';

// import link
import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

// import transition
import { transition1 } from '../transitions';

// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }} 
      transition={transition1}
      className='section'
    >
      <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ transition1 }}
              src={WomanImg} alt='Portrait des Fotografen' 
            />
          </div>
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: '-80%' }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }} 
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>Über mich</h1>
            <p className='mb-12 max-w-sm'>
            Hallo, ich bin Petja, 34 Jahre alt und mit über 13 Jahren Erfahrung in der Fotografie. In all diesen Jahren habe ich gelernt, dass die Vielfalt nicht nur in meinem Wesen, sondern auch in meiner Arbeit liegt. Ob lebendige Porträts, emotionale Momente oder spannende Ereignisse – ich liebe es, verschiedene Motive einzufangen und ihre einzigartige Schönheit zu entdecken. Fotografie ist für mich mehr als nur ein Hobby; es ist meine Leidenschaft, mit der ich Geschichten erzähle und besondere Augenblicke festhalte.
            <br />
            <br />
            Lass uns gemeinsam Momente schaffen, die in Erinnerung bleiben!
            </p>
            <Link to={'/portfolio'} className='btn'>
              Schau meine Arbeit an
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
