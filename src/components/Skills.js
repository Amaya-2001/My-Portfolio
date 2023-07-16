import React from "react";
import skillImg1 from "../assets/skill-image1.PNG";
import skillImg2 from "../assets/skill-image2.PNG";
import skillImg3 from "../assets/skill-image3.PNG";
import skillImg4 from "../assets/skill-image4.PNG";
import attendyImg1 from "../assets/attendy-image1.PNG";
import attendyImg2 from "../assets/attendy-image2.PNG";
import gasAppImg from "../assets/gas-app.PNG";
import attendyImg3 from "../assets/attendy-image3.PNG";
import attendyImg4 from "../assets/attendy-image4.PNG";
import programming1 from "../assets/javascript.png";
import programming2 from "../assets/react.js-img.png";
import programming3 from "../assets/nodejs-1-logo.png";
import programming4 from "../assets/javaPro.png";
function Skills() {
  return (
    <div className="grid justify-items-center ... mt-10 mb-10">
      <h1 className="text-7xl mt-10 mb-10 font-mono">Skills</h1>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl ml-5 h-full">
            <div className="card-body ">
              <h2 className="card-title font-bold">UX/UI Design</h2>
              <p>
                I have honed my UI/UX design skills through extensive work on
                various academic projects, allowing me to offer a wealth of
                experience in this field. To provide a visual representation of
                my expertise with the{" "}
                <b>
                  <i>Figma tool</i>
                </b>
                , I have included a collection of captivating design images for
                your perusal.
              </p>
            </div>
            <figure>
              {/* <img src={display} alt="Shoes" /> */}
              <div className="carousel w-full h-64">
                <div id="image1" className="carousel-item relative w-full">
                  <img src={skillImg1} alt="skillImg" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#image4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#image2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="image2" className="carousel-item relative w-full">
                  <img src={skillImg2} alt="skillImg2" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#image1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#image3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="image3" className="carousel-item relative w-full">
                  <img src={skillImg3} alt="skillImg3" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#image2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#image4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="image4" className="carousel-item relative w-full">
                  <img src={skillImg4} alt="skillImg4" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#image3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#image5" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="image5" className="carousel-item relative w-full">
                  <img src={gasAppImg} alt="gasAppImg" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#image4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#image1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-100 shadow-xl ml-10 h-full">
            <div className="card-body">
              <h2 className="card-title font-bold">Web Design</h2>
              <p>
                I am thrilled to inform you that my university colleagues and I
                have accomplished a remarkable feat by successfully completing
                our academic project, the{" "}
                <b>
                  <i>Attendance Management System</i>
                </b>{" "}
                .It brings me great joy to share this achievement with you, as
                our dedication and teamwork have resulted in a robust and
                efficient solution.
              </p>
            </div>
            <figure>
              <div className="carousel w-full h-64">
                <div id="attendyImg1" className="carousel-item relative w-full">
                  <img src={attendyImg1} alt="attendyImg1" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#attendyImg4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#attendyImg2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="attendyImg2" className="carousel-item relative w-full">
                  <img src={attendyImg2} alt="attendyImg2" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#attendyImg1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#attendyImg3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="attendyImg3" className="carousel-item relative w-full">
                  <img src={attendyImg3} alt="attendyImg3" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#attendyImg2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#attendyImg4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="attendyImg4" className="carousel-item relative w-full">
                  <img src={attendyImg4} alt="attendyImg4" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#attendyImg3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#attendyImg1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl ml-5 h-full">
            <div className="card-body">
              <h2 className="card-title font-bold">Programming Languages</h2>
              <p>
                I am delighted to have the opportunity to share with you a
                glimpse of the programming languages, I have acquired expertise
                in. However,{" "}
                <b>
                  <i>
                    my hunger for knowledge knows no bounds as I eagerly explore
                    various technologies,
                  </i>
                </b>{" "}
                constantly seeking new avenues for learning and growth. Rest
                assured, I am committed to expanding my skill set and staying
                up-to-date with the latest advancements in the field.
              </p>
            </div>
            <figure>
              <div className="carousel w-full h-64">
                <div id="pro1" className="carousel-item relative w-full ">
                  <img src={programming1} alt="pro1" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#pro4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#pro2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="pro2" className="carousel-item relative w-full">
                  <img src={programming2} alt="pro2" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#pro1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#pro3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="pro3" className="carousel-item relative w-full">
                  <img src={programming3} alt="pro3" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#pro2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#pro4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="pro4" className="carousel-item relative w-full">
                  <img src={programming4} alt="pro4" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#pro3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#pro1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
