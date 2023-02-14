import React from 'react'
import { socials } from '../Socials'

const SocialLinks = () => {

  return (
      <>
          <ul className='fixed z-20 flex justify-between items-center h-16 w-full bottom-0 left-0 gap-3 p-3 backdrop-blur-lg bg-black/40 lg:hidden'>
              {socials.map((social) => (
                  <li
                      key={social.name}
                  >
                      <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex justify-between items-center gap-3'
                      >
                          <span className='hidden text-white md:block lg:hidden'>{social.name}</span>
                          <span className='text-emerald-500 hover:scale-110 transition-all duration-300'>{social.icon}</span>
                      </a>
                  </li>
              ))}
          </ul>
      </>
  )
}

export default SocialLinks