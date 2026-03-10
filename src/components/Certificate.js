import React from "react";
import pythonDS from "../assets/python DS.png";
import web from "../assets/webCertificate.PNG";
import python from "../assets/pythonCertificate.PNG";
import sql from "../assets/sql.png";
import php from "../assets/php.png";
import pythonBeginner from "../assets/python beginner.png";
import java from "../assets/java.png";

const certificates = [
  { id: 1, name: "Web Development", image: web },
  { id: 2, name: "Python Programming", image: python },
  { id: 3, name: "SQL Database", image: sql },
  { id: 4, name: "PHP Development", image: php },
  { id: 5, name: "Python Beginner", image: pythonBeginner },
  { id: 6, name: "Python Data Science", image: pythonDS },
  { id: 7, name: "Java Programming", image: java },
];

function Certificate() {
  return (
    <section id="certificates" className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <figure className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-base">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
