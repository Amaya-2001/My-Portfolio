import React, { useState } from "react";
import Navbar from "./Navbar";
import profile from "../assets/Capture2.PNG";
import email from "../assets/gmail_icon-icons.com_62758.png";
import linkedin from "../assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import facebook from "../assets/Facebook-logo.png";

function Contact() {
  //const [active, setActive] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div>
      <Navbar />
      <div className="card w-80 mt-5 mb-10 ml-20" data-theme="light">
        <div className="card-title text-4xl font-medium">
          Thank you for visiting my portfolio!
        </div>
        <div className="card-content">
          <p className="text-l mt-5">
            {" "}
            If you are seeking a talented professional who is eager to take
            their career to the next level, I would be thrilled to connect with
            you. I welcome the opportunity to discuss how my skills, passion,
            and dedication can contribute to your organization's success. Please
            feel free to reach out to me via email or phone if you would like to
            explore ways we can collaborate and help each other climb new
            heights on the career ladder. I'm excited about the potential that
            awaits, and I can't wait to hear from you!
          </p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="card lg:card-side bg-base-100  shadow-xl image-full mt-40">
          <figure>
            <img src={profile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">Contact Me</h2>
          </div>
        </div>
        {/* <p className="mt-5 ml-20 mr-20">amawickramasinghe2001@gmail.com</p> */}
        {/* <div className="btn-group  mt-5 ml-20 mr-20">
          <button
            className="btn btn-outline btn-primary"
            role="link"
            onClick={() =>
              openInNewTab(
                "mailto:amawickramasinghe2001@gmail.com?subject=Subject&body=Body%20goes%20here"
              )
            }
          >
            Email
          </button>
          <button
            className="btn btn-outline btn-primary"
            role="link"
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/amaya-wickramasinghe-6378a6231/"
              )
            }
          >
            Linkedin
          </button>
          <button
            className="btn btn-outline btn-primary"
            role="link"
            onClick={() =>
              openInNewTab(
                "https://www.facebook.com/profile.php?id=100090623790910"
              )
            }
          >
            Facebook
          </button>
        </div> */}
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          <div
            className="avatar placeholder mt-10 ml-10"
            role="link"
            onClick={() =>
              openInNewTab(
                "mailto:amawickramasinghe2001@gmail.com?subject=Subject&body=Body%20goes%20here"
              )
            }
          >
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <button className="btn btn-outline">
                <img src={email} alt="email" />
              </button>
            </div>
          </div>

          <div
            className="avatar placeholder mt-10"
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/amaya-wickramasinghe-6378a6231/"
              )
            }
          >
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <button className="btn btn-outline">
                <img src={linkedin} alt="email" />
              </button>
            </div>
          </div>
          <div
            className="avatar placeholder mt-10"
            role="link"
            onClick={() =>
              openInNewTab(
                "https://www.facebook.com/profile.php?id=100090623790910"
              )
            }
          >
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <button className="btn btn-outline">
                <img src={facebook} alt="email" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
