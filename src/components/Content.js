import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Content() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "norefrrer");
  };
  return (
    <div className="gap-8 columns-1 sm:columns-2 mt-20 sm:flex sm:justify-center ">
      <div className="card w-80 sm:w-96 bg-base-100 shadow-xl mx-auto sm:ml-0 sm:mr-4 mb-8 sm:mb-0">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl">👋Hello, It's Me</h2>
          <div className="card-title text-xl italic"> Amaya Wickramasinghe</div>
          <p>
            An Undergraduate software Engineer at the Open University of Sri
            Lanka. I possess a strong aptitude for adapting to various
            technologies and enjoy navigating the ever-evolving world of
            technology. I'm excited to share my projects and experiences with
            you.
          </p>
          <Link to="/contact">
            <div className="flex justify-center mt-5 space-x-4">
              <button class="btn rounded-full  btn-primary btn-outline">
                <FaLinkedin size="25" />
                <MdEmail size="25" />
                <FaFacebook size="25" />
              </button>
            </div>
          </Link>

          <div className="card-actions mt-5">
            <button
              className="btn btn-primary"
              role="link"
              onClick={() =>
                openInNewTab(
                  "https://drive.google.com/file/d/1r9JyQp1USHrXQ6ccGrxNqqWZOPqVWo5h/view?usp=sharing"
                )
              }
            >
              Download My Resume
            </button>
          </div>
        </div>
      </div>

      <div className="aspect-w-16 aspect-h-9 sm:w-96 sm:ml-4 sm:mr-0">
        <iframe
          className="w-full h-full"
          title="myself iframe"
          src="https://www.youtube.com/embed/tAbcTOTMhs0"
        ></iframe>
      </div>
    </div>
  );
}

export default Content;
