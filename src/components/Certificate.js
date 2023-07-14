import React from "react";
import pythonDS from "../assets/python DS.png";
import web from "../assets/webCertificate.PNG";
import python from "../assets/pythonCertificate.PNG";
import sql from "../assets/sql.png";
import php from "../assets/php.png";
import pythonBeginner from "../assets/python beginner.png";
import java from "../assets/java.png";

function Certificate() {
  return (
    <div className="grid justify-items-center ... mt-10 mb-10">
      <h1 className="text-7xl mt-10 mb-10 font-mono">Certificates</h1>
      <div
        className="artboard artboard-horizontal phone-5 mb-60"
        data-theme="dracula"
      >
        <div className="grid justify-items-center ...">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={web} className="w-full" alt="web" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide7" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={python} alt="python" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={sql} alt="sql" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={php} alt="php" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
              <img
                src={pythonBeginner}
                alt="python beginner"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
              <img src={pythonDS} alt="pytho-DS" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide7" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
              <img src={java} alt="java" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
