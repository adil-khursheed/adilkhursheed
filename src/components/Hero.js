import React from 'react'
import HeroImage from '../images/adil_khursheed.png';

const Hero = () => {
  return (
    <>
      <section id="home" className='w-full py-24 flex flex-col-reverse items-center gap-5 md:flex-row md:justify-between'>
        <div>
          <h1 className='text-white text-3xl md:text-4xl lg:text-5xl text-center font-bold md:text-left leading-snug md:leading-snug lg:leading-snug mb-6'>
            Nice to meet you! <br />
            I'm {""}
            <span className='border-b-emerald-600 border-b-4'>
              Adil Khursheed
            </span>.
          </h1>
          <p className='text-white text-center text-md md:text-left'>
            Based in India, I'm a front-end developer
            passionate about building accessible web apps
            that users love.
          </p>

        </div>
        <div className='max-w-xs bg-white/10 backdrop-blur-lg rounded-lg'>
          <img
            src={HeroImage}
            alt="Adil Khursheed"
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </section>
    </>
  )
}

export default Hero