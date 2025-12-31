import React from "react";
import { profile } from "../data/profile";
import profileImg from "../assets/Capture2.png";

function Content() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
      <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
          <div className="flex flex-col gap-4 text-left">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              {profile.headline}
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {profile.tagline}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl opacity-80">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#experience" className="btn btn-primary shadow-lg">
              View Work
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="flex flex-col">
              <span className="font-bold text-2xl">2.5+</span>
              <span className="text-sm opacity-70">Years Exp.</span>
            </div>
            <div className="w-px h-10 bg-base-300" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">4+</span>
              <span className="text-sm opacity-70">Projects</span>
            </div>
            <div className="w-px h-10 bg-base-300" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">5</span>
              <span className="text-sm opacity-70">Companies</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl bg-base-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${profileImg})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
