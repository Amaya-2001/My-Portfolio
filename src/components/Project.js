import React, { useState } from "react";
import Navbar from "./Navbar";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">My Work</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Technical Experiments</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`btn btn-sm ${activeFilter === category ? "btn-primary" : "btn-outline"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <figure className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-circle btn-sm btn-primary"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-circle btn-sm btn-primary"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">{project.title}</h2>
                <p className="text-sm opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="badge badge-sm badge-outline">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
