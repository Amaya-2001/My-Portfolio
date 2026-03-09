import React, { useState } from "react";
import { experience } from "../data/profile";

function Experience() {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleProject = (expIndex, projIndex) => {
        const key = `${expIndex}-${projIndex}`;
        setExpandedProjects(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <section id="experience" className="w-full max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 bg-base-100">
            <div className="flex flex-col gap-10">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Career Path</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
                </div>
                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-base-300 hidden md:block" />
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8">
                                <div className="md:w-1/4 flex-shrink-0">
                                    <div className="text-sm font-semibold text-primary">{exp.period}</div>
                                    <div className="text-xs text-gray-500 mt-1">{exp.company}</div>
                                </div>
                                <div className="relative flex-1 md:pl-8">
                                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-base-100 hidden md:block -ml-10" />
                                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-300">
                                        <div className="card-body p-6">
                                            <h3 className="card-title text-xl">{exp.role}</h3>
                                            <p className="text-sm opacity-70 mb-3">{exp.company} • {exp.period}</p>

                                            {!exp.projects && (
                                                <ul className="space-y-2">
                                                    {exp.description.map((desc, idx) => (
                                                        <li key={idx} className="flex gap-2 text-sm">
                                                            <span className="text-primary mt-1">▸</span>
                                                            <span>{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {exp.projects && (
                                                <div className="space-y-1">
                                                    <p className="text-sm font-semibold text-gray-600 mb-2">Projects:</p>
                                                    {exp.projects.map((project, projIndex) => {
                                                        const key = `${index}-${projIndex}`;
                                                        const isExpanded = expandedProjects[key];

                                                        return (
                                                            <div key={projIndex} className="border border-base-300 rounded-lg overflow-hidden">
                                                                <button
                                                                    onClick={() => toggleProject(index, projIndex)}
                                                                    className="w-full px-4 py-3 bg-base-200 hover:bg-base-300 transition-colors flex justify-between items-center text-left"
                                                                >
                                                                    <div>
                                                                        <h4 className="font-semibold text-base">{project.name}</h4>
                                                                    </div>
                                                                    <span className={`text-xl transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                                                        ▼
                                                                    </span>
                                                                </button>

                                                                {isExpanded && (
                                                                    <div className="px-4 py-3 bg-base-100">
                                                                        <ul className="space-y-2 mb-3">
                                                                            {project.description.map((desc, idx) => (
                                                                                <li key={idx} className="flex gap-2 text-sm">
                                                                                    <span className="text-primary mt-1">▸</span>
                                                                                    <span>{desc}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                        {project.technologies && project.technologies.length > 0 && (
                                                                            <div className="flex flex-wrap gap-2 mt-3">
                                                                                {project.technologies.map((tech, idx) => (
                                                                                    <span
                                                                                        key={idx}
                                                                                        className="badge badge-sm badge-outline"
                                                                                    >
                                                                                        {tech}
                                                                                    </span>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
