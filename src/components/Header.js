import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Header = () => {

  const scrollDirection = useScrollDirection();

  const [toggleNav, setToggeleNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home',
      href: '#home',
    },
    {
      id: 2,
      link: 'Skills',
      href: '#skills',
    },
    {
      id: 3,
      link: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      link: 'Contact Me',
      href: '#contact',
    },
  ]

  return (
    <>
      <header className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} py-3 backdrop-blur-lg bg-white/10 overflow-hidden transition-all duration-500 z-20`}>
      <nav className='flex justify-between items-center max-w-4xl mx-auto px-5'>
        <div className='z-20'>
          <h3 className='text-3xl font-extrabold text-white'>AK.</h3>
        </div>
          <ul className='hidden md:flex gap-10'>
            {links.map(({ id, link, href })=>(
              <li
                key={id}
                className='cursor-pointer text-sm font-medium text-gray-300 hover:scale-105 duration-200'
              >
                <a href={href}>
                  {link}
              </a>
            </li>
            ))}
          </ul>

          <div onClick={() => setToggeleNav(!toggleNav)} className='cursor-pointer z-20 text-gray-300 md:hidden'>
            {toggleNav ? <CloseIcon/> : <MenuIcon/>}
          </div>

          <ul className={`flex flex-col gap-10 justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-br from-slate-700 to-black ease-in-out duration-500 ${toggleNav ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
          >

            {links.map(({ id, link }) => (
            <li
              key={id}
              className='cursor-pointer text-lg font-medium text-gray-300 hover:scale-105 duration-200'
            >
                {link}
            </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header