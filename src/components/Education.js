import React from "react";
import { education } from "../data/profile";

function Education() {
    return (
        <section id="education" className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8">
            <div className="flex flex-col gap-10">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Academic Background</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Education</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-base-300">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="card-title text-lg">{edu.degree}</h3>
                                        <p className="text-primary font-semibold text-sm mt-1">{edu.institution}</p>
                                        <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
                                        {edu.achievement && (
                                            <div className="badge badge-outline badge-sm mt-3">{edu.achievement}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
