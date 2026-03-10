import React, { useState } from "react";
import Navbar from "./Navbar";
import { profile } from "../data/profile";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profile.email}?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Contact Me</h1>
        </div>
        <div className="grid  gap-10">
          <div className="flex flex-col gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="card-title text-2xl mb-2">Let's Connect</h2>
                    <p className="opacity-80">
                      Feel free to reach out for collaborations, freelance opportunities, or just a friendly chat about technology and software development.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/schedule-call")}
                    className="btn btn-primary btn-sm md:btn-md gap-2 whitespace-nowrap self-start md:self-auto"
                  >
                    <FaCalendarAlt />
                    Book a Free Call
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MdEmail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${profile.email}`} className="text-sm hover:text-primary transition-colors">
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MdLocationOn className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm">{profile.location}</p>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex gap-4">
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-circle btn-outline hover:btn-primary">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-circle btn-outline hover:btn-primary">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
