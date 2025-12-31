import React from "react";
import { profile } from "../data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{profile.name}</h3>
            <p className="opacity-80 text-sm">{profile.headline}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="link link-hover text-sm">Home</NavLink>
              <NavLink to="/project" className="link link-hover text-sm">Projects</NavLink>
              <NavLink to="/articles" className="link link-hover text-sm">Articles</NavLink>
              <NavLink to="/contact" className="link link-hover text-sm">Contact</NavLink>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-sm">
                <FaLinkedin size={20} />
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-sm">
                <FaGithub size={20} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-circle btn-ghost btn-sm">
                <MdEmail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
