import React from 'react'
import {Skills} from '../Skills';

const SkillSection = () => {
  return (
    <>
      <section id="skills">
        <h2 className='text-white font-semibold text-2xl text-center uppercase mb-5'>Skills</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 mb-24'>
        {Skills.map((skill) => (
          <div
            key={skill.id}
            className='card bg-white/10 backdrop-blur-lg flex flex-col items-center p-4 rounded-lg shadow shadow-slate-200'
          >
            <img src={skill.image} className='w-24' />
            <h4 className='text-lg text-white font-medium'>
              {skill.title}
            </h4>
            <h6 className='text-emerald-500 text-xs'>
              {skill.level}
            </h6>
          </div>
        ))}
        </div>
      </section>
    </>
  )
}

export default SkillSection