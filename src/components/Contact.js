import React from "react";
import Navbar from "./Navbar";
import profile from "../assets/Capture2.PNG";
import email from "../assets/gmail_icon-icons.com_62758.png";
import linkedin from "../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";

function Contact() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="card lg:card-side bg-base-100  shadow-xl image-full">
          <figure>
            <img src={profile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">Contact Me</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">
                amayawickramasinghe2001@gmail.com
              </button> */}
            </div>
          </div>
        </div>
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal mt-10 ml-20 mr-20">
          <button className="btn btn-active">Email</button>
          <button className="btn">Linkedin</button>
          <button className="btn">Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
