import React, { useRef } from "react";
import { Skills } from "../Skills";
import { useInView } from "framer-motion";

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <section
        ref={ref}
        name="skills"
        className="w-full my-24 grid place-items-center">
        <div
          className="w-full"
          style={{
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            opacity: isInView ? 1 : 0,
            transform: isInView ? "scale(1)" : "scale(0.5)",
          }}>
          <h2 className="text-white font-semibold text-2xl text-center uppercase mb-5">
            Technical Skills
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
        </div>
      </section>
    </>
  );
};

export default SkillSection;
