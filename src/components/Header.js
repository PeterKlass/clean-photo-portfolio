import React, {useContext} from 'react';

//import component
import Socials from './Socials'; 
import Logo from '../img/header/logo.svg'; 
import MobileNav from './MobileNav';

// import link
import { Link } from 'react-router-dom';

// import context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'} 
          className='max-w-[200px]'
        >
          <img src={Logo} alt='Logo' className='h-10 lg:h-12' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='hidden xl:flex gap-x-12 font-semibold'
        >
          <Link 
            to={'/'} 
            className='text-[#696c6d] hover:text-primary transition'>
              Startseite
          </Link>
          <Link 
            to={'/about'} 
            className='text-[#696c6d] hover:text-primary transition'>
              Über Mich
          </Link>
          <Link 
            to={'/portfolio'} 
            className='text-[#696c6d] hover:text-primary transition'>
              Portfolio
          </Link>
          <Link 
            to={'/contact'} 
            className='text-[#696c6d] hover:text-primary transition'>
              Kontakt
          </Link>
        </nav>
      </div>
        {/* socials */}
        <Socials />
        {/* mobile nav */}
        <MobileNav />
    </header>
  );
};

export default Header;
