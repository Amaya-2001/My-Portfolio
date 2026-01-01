import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/profile";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-base-200 bg-base-100/90 backdrop-blur-md px-4 sm:px-10 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 text-primary">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold">{profile.name}</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-6 lg:gap-9">
          {isHome ? (
            <>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">
                About
              </a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">
                Skills
              </a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">
                Experience
              </a>
              <NavLink
                to="/project"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </NavLink>
              <NavLink
                to="/articles"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Articles
              </NavLink>
              <NavLink
                to="/research"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Research
              </NavLink>
              <NavLink
                to="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
                }
              >
                Articles
              </NavLink>
              <NavLink
                to="/research"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
                }
              >
                Research
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
                }
              >
                Contact
              </NavLink>
            </>
          )}
        </nav>
        <a
          className="btn btn-primary btn-sm"
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <button className="md:hidden p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}

export default Navbar;
