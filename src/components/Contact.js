import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import profile from "../assets/Capture2.png";

function Contact() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="bg-gradient-to-r from-violet-950 via-purple-500 to-pink-500 ... sm:h-full ....">
      <Navbar />
      <div class="flex justify-center ... sm:mt-20 ">
        <div className="card lg:card-side bg-base-100 shadow-xl sm:mb-20">
          <div>
            <h1 className="text-7xl font-mono mt-5 ml-5 ">Contact Me</h1>
            <img src={profile} alt="profile" className=" ml-20" />
          </div>
          <div className="card-body">
            <div class="flex justify-center ... mt-10">
              <div>
                <button
                  className="btn btn-outline btn-primary w-96 rounded-full lowercase ..."
                  role="link"
                  onClick={() =>
                    openInNewTab(
                      "mailto:amawickramasinghe2001@gmail.com?subject=Subject&body=Body%20goes%20here"
                    )
                  }
                >
                  <MdEmail size="25px" />
                  <p>amawickramasinghe2001@gmail.com</p>
                </button>
              </div>
            </div>
            <div class="flex justify-center ... mt-10">
              <div>
                <button
                  className="btn btn-outline btn-primary w-96 rounded-full capitalize ..."
                  role="link"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/amaya-wickramasinghe-6378a6231/"
                    )
                  }
                >
                  <FaLinkedin size="25px" />
                  <p>Amaya Wickramasinghe</p>
                </button>
              </div>
            </div>
            <div class="flex justify-center ... mt-10">
              <div>
                <button
                  className="btn btn-outline btn-primary w-96 rounded-full lowercase ..."
                  role="link"
                  onClick={() =>
                    openInNewTab(
                      "https://www.facebook.com/profile.php?id=100090623790910"
                    )
                  }
                >
                  <FaFacebook size="25px" />
                  <p>https://www.facebook.com/</p>
                </button>
              </div>
            </div>
            <div class="flex justify-center ... mt-10">
              <div>
                <button
                  className="btn btn-outline btn-primary w-96 rounded-full capitalize ..."
                  role="link"
                  onClick={() =>
                    openInNewTab(" https://maps.app.goo.gl/yScKo8ULruk8CUCGA")
                  }
                >
                  <MdLocationOn size="25px" />
                  <p>Wadduwa, Kalutara</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
