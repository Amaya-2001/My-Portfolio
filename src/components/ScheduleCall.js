import React from "react";
import Navbar from "./Navbar";
import { profile } from "../data/profile";
import { InlineWidget } from "react-calendly";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ScheduleCall() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />
            <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <button
                        onClick={() => navigate("/contact")}
                        className="btn btn-ghost btn-sm mb-4 hover:btn-primary"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Contact
                    </button>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <FaCalendarAlt className="text-primary text-2xl" />
                        <h1 className="text-3xl md:text-4xl font-bold">Schedule a Free Call</h1>
                    </div>
                    <p className="text-base-content/70 mt-3 max-w-2xl mx-auto">
                        Book a 30-minute consultation to discuss your project, ask questions, or explore collaboration opportunities.
                    </p>
                </div>

                {/* Calendly Embedded Widget */}
                <div className="bg-base-100 rounded-lg shadow-xl overflow-hidden">
                    <InlineWidget
                        url={profile.calendlyUrl}
                        styles={{
                            height: "700px",
                            minWidth: "320px"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScheduleCall;
