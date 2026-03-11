import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/profile";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between border-b border-base-200 bg-base-100/90 backdrop-blur-md px-4 sm:px-10 py-4 shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
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
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">
                Services
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 hover:bg-base-200 rounded-lg transition-colors"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-base-100 shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <nav className="flex flex-col p-6 gap-2 min-h-full">{isHome ? (
          <>
            <a
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              href="#about"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              href="#skills"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              href="#experience"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              href="#services"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <NavLink
              to="/project"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/articles"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Articles
            </NavLink>
            <NavLink
              to="/research"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Research
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-2 ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-2 ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-2 ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
              onClick={closeMobileMenu}
            >
              Articles
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-2 ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
              onClick={closeMobileMenu}
            >
              Research
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors py-2 ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </>
        )}
          <div className="border-t border-base-200 pt-4 mt-2">
            <a
              className="btn btn-primary btn-sm w-full"
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
