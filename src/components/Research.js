import React, { useState } from "react";
import Navbar from "./Navbar";
import { research } from "../data/research";
import { FaExternalLinkAlt, FaFilePdf, FaAward } from "react-icons/fa";

function Research() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "AI/ML", "Ethics", "HCI", "Data Viz"];

    const filteredPublications = research.publications.filter((pub) => {
        const matchesSearch =
            pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || pub.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />
            <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">
                        Academic Contributions
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">Academic Research & Publications</h1>
                    <p className="text-lg mt-4 opacity-80 max-w-3xl mx-auto">
                        Exploring the intersection of Artificial Intelligence, Ethics, and Human-Computer
                        Interaction through rigorous academic inquiry.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search titles, keywords, or topics..."
                            className="input input-bordered w-full pr-12"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`btn btn-sm ${activeCategory === category ? "btn-primary" : "btn-outline"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Publication */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Featured Research</h2>
                    <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden border border-base-300">
                        <div className="card-body lg:w-3/5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="badge badge-primary">{research.featured.category}</span>
                                <span className="text-sm text-gray-500">{research.featured.date}</span>
                            </div>
                            <h2 className="card-title text-2xl mb-3">{research.featured.title}</h2>
                            <div className="text-sm space-y-1 mb-4">
                                <p>
                                    <span className="font-semibold">Institution:</span>{" "}
                                    {research.featured.institution}
                                </p>
                                <p>
                                    <span className="font-semibold">Status:</span>{" "}
                                    <span className="badge badge-info badge-sm">{research.featured.status}</span>
                                </p>
                            </div>
                            <p className="text-sm opacity-80 mb-4">{research.featured.abstract}</p>

                            {/* Collapsible Details */}
                            <div className="collapse collapse-arrow bg-base-200 mb-4">
                                <input type="checkbox" />
                                <div className="collapse-title font-medium">View Research Details</div>
                                <div className="collapse-content text-sm space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Research Problem:</h4>
                                        <p className="opacity-80">{research.featured.problemStatement}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Key Objectives:</h4>
                                        <ul className="list-disc list-inside space-y-1 opacity-80">
                                            {research.featured.objectives.map((obj, idx) => (
                                                <li key={idx}>{obj}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Methodology:</h4>
                                        <ul className="list-disc list-inside space-y-1 opacity-80">
                                            {research.featured.methodology.map((method, idx) => (
                                                <li key={idx}>{method}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Expected Outcomes:</h4>
                                        <ul className="list-disc list-inside space-y-1 opacity-80">
                                            {research.featured.expectedOutcomes.map((outcome, idx) => (
                                                <li key={idx}>{outcome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Timeline:</span> {research.featured.timeline}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {research.featured.tags.map((tag, idx) => (
                                    <div
                                        key={idx}
                                        className="badge badge-lg bg-grey badge-outline"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-sm gap-2">
                                    <FaFilePdf /> View Full Paper
                                </button>
                                <button className="btn btn-outline btn-sm gap-2">
                                    <FaExternalLinkAlt /> Presentation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Publications */}
                {/* <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Recent Publications</h2>
                        <a
                            href="#"
                            className="text-primary hover:underline text-sm flex items-center gap-2"
                        >
                            View Google Scholar Profile <FaExternalLinkAlt size={12} />
                        </a>
                    </div>
                    <div className="space-y-4">
                        {filteredPublications.map((pub) => (
                            <div
                                key={pub.id}
                                className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-300"
                            >
                                <div className="card-body">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">{pub.type}</span>
                                                <span className="text-xs text-gray-500">{pub.venue}</span>
                                                <span className="badge badge-sm">{pub.category}</span>
                                            </div>
                                            <h3 className="card-title text-lg mb-2">{pub.title}</h3>
                                            <p className="text-sm opacity-80 mb-3">{pub.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {pub.tags.map((tag, idx) => (
                                                    <div key={idx} className="badge badge-outline badge-sm">
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 md:items-end">
                                            <span className="text-xs text-gray-500">{pub.date}</span>
                                            <button className="btn btn-primary btn-sm gap-2">
                                                <FaFilePdf /> View PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPublications.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl opacity-60">No publications found matching your search.</p>
                        </div>
                    )}

                    {filteredPublications.length > 0 && (
                        <div className="text-center mt-8">
                            <button className="btn btn-outline">Load More Publications</button>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    );
}

export default Research;
