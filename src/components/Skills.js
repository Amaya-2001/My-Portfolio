import React from "react";
import { technicalSkills, keySkills } from "../data/profile";

function Skills() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8 bg-base-200">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">What I Bring</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="badge badge-lg badge-outline hover:badge-primary hover:scale-105 transition-all duration-200 cursor-pointer">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">Key Skills</h3>
              <ul className="space-y-3">
                {keySkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

