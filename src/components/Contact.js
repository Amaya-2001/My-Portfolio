import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import profile from "../assets/Capture2.PNG";
// import email from "../assets/gmail_icon-icons.com_62758.png";
// import linkedin from "../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";
// import facebook from "../assets/Facebook-logo.png";

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="flex justify-center ... mt-20 mb-20">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div>
            <h1 className="text-7xl font-mono mt-5 ml-5 ">Contact Me</h1>
          </div>
          <div className="card-body">
            {/* <h2 className="card-title">Shoes!</h2> */}
            <div class="flex justify-center ... mt-10">
              <div>
                <button className="btn btn-outline btn-primary w-96 rounded-full lowercase ...">
                  <MdEmail size="25px" />
                  <p>amawickramasinghe2001@gmail.com</p>
                </button>
              </div>
            </div>
            <div class="flex justify-center ... mt-10">
              <div>
                <button className="btn btn-outline btn-primary w-96 rounded-full capitalize ...">
                  <FaLinkedin size="25px" />
                  <p>Amaya Wickramasinghe</p>
                </button>
              </div>
            </div>
            <div class="flex justify-center ... mt-10">
              <div>
                <button className="btn btn-outline btn-primary w-96 rounded-full lowercase ...">
                  <FaFacebook size="25px" />
                  <p>https://www.facebook.com/</p>
                </button>
              </div>
            </div>
            <div class="flex justify-center ... mt-10">
              <div>
                <button className="btn btn-outline btn-primary w-96 rounded-full capitalize ...">
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
