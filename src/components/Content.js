import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import display from "../assets/3243637.jpg";
import { Link } from "react-router-dom";

function Content() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "norefrrer");
  };
  return (
    <div className="flex">
      <div className="card w-96 bg-base-100 shadow-xl ml-60 mt-20">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xcl">👋Hello, It's Me</h2>
          <div className="card-title text-2xl italic">
            {" "}
            Amaya Wickramasinghe
          </div>
          <p>
            An Undergraduate software Engineer at the Open University of Sri
            Lanka. I possess a strong aptitude for adapting to various
            technologies and enjoy navigating the ever-evolving world of
            technology. I'm excited to share my projects and experiences with
            you.
          </p>
          <Link to="/contact">
            <button class="btn rounded-full mt-5 btn-primary btn-outline">
              <FaLinkedin size="25" />
              <MdEmail size="25" />
              <FaFacebook size="25" />
            </button>
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
      <div className="carousel carousel-end rounded-box mt-20 ml-10 mr-5">
        <div className="carousel-item">
          <img src={display} alt="Drink" width="300 px" />
        </div>
        <div className="carousel-item">
          <img src={display} alt="Drink" width="300 px" />
        </div>
        <div className="carousel-item">
          <img src={display} alt="Drink" width="300 px" />
        </div>
      </div>
      {/* <img
        className="mt-40 ml-20"
        src={display}
        alt="Album"
        width="565 px"
        // height="765 px"
      /> */}
    </div>
  );
}

export default Content;
