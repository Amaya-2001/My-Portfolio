import React from "react";
import Navbar from "./Navbar";
import display from "../assets/3243637.jpg";
import { FaGithub } from "react-icons/fa";
import todoapp from "../assets/todo-app.webp";
import chatapp from "../assets/chatApp.png";
import attendy from "../assets/attedny.png";
function Project() {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4 ... mt-5">
          <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={attendy} alt="attendy" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Attendy</h2>
              <p>
                An attendance management system made with React JS, Node JS -
                Express and MONGODB. My Contributions: Student Management, UI
                improvements and documentation.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <FaGithub size="25px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-3 ... ml-10">
          <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={todoapp} alt="todo-app" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Todo App</h2>
              <p>
                Task Management web app made with Next JS, Typescript and
                Json-server API.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <FaGithub size="25px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-end-6 col-span-2 ...">
          <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img src={chatapp} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Chat App</h2>
              <p>
                {" "}
                Implemented Functions are search people, chat with each other
                and share files with contact list made with React JS and
                Firebase Cloud Database.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <FaGithub size="25px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-start-1 col-end-7 ... ml-10">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={display} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Acedamic Time Table</h2>
              <p>
                Create a timetable according to the academic schedule; the user
                can edit, delete, and add academic activities. These are the
                functions of this web app.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <FaGithub size="25px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
