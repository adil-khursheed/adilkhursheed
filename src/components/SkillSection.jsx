import React from "react";
import { Skills } from "../Skills";

const SkillSection = () => {
  return (
    <>
      <section name="skills" className="mb-24">
        <h2 className="text-white font-semibold text-2xl text-center uppercase mb-5">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="card bg-white/10 backdrop-blur-lg flex flex-col items-center p-4 rounded-lg shadow shadow-slate-200">
              <img src={skill.image} className="w-11" alt={skill.title} />
              <h4 className="text-sm mt-2 text-white font-medium">
                {skill.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillSection;
