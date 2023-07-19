import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="mt-20">
      <footer
        className="footer footer-center p-10 bg-base-200 text-base-content rounded"
        data-theme="pastel"
      >
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="articles">
            <Link to="/articles">Articles</Link>
          </a>
          <a className="link link-hover" href="projects">
            <Link to="/project">Projects</Link>
          </a>
          <a className="link link-hover" href="contact">
            <Link to="/contact">Contact</Link>
          </a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <button
              className="btn btn-outline   rounded-full "
              role="link"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/amaya-wickramasinghe-6378a6231/"
                )
              }
            >
              <FaLinkedin size="25px" />
              {/* <p>Amaya Wickramasinghe</p> */}
            </button>
            <button
              className="btn btn-outline  rounded-full"
              role="link"
              onClick={() =>
                openInNewTab(
                  "mailto:amawickramasinghe2001@gmail.com?subject=Subject&body=Body%20goes%20here"
                )
              }
            >
              <MdEmail size="25px" />
            </button>
            <button
              className="btn btn-outline  rounded-full"
              role="link"
              onClick={() =>
                openInNewTab(
                  "https://www.facebook.com/profile.php?id=100090623790910"
                )
              }
            >
              <FaFacebook size="25px" />
            </button>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Amaya Wickramasinghe</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
