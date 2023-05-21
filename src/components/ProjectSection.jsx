import React from 'react'
import { Projects } from '../Projects';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProjectSection = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section name="projects" className='mb-24'>
        <h2 className='text-white font-semibold text-2xl text-center uppercase mb-5'>Projects</h2>
        <Carousel responsive={responsive} className='py-4 px-1'>
          {Projects.map((project) => (
            <div key={project.id} className="mr-2 rounded-2xl backdrop-blur-xl bg-white/10 p-3 shadow shadow-slate-200">
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-52 object-cover rounded-md hover:scale-105 duration-300'
              />
              <h3 className='text-white text-lg font-bold mt-3 mb-3'>{project.title}</h3>
              <div className='flex gap-3 mb-4'>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-white border-b-2 text-xs border-emerald-500'
                >
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-white border-b-2 text-xs border-emerald-500'
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  )
}

export default ProjectSection