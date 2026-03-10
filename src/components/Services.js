import React, { useState } from "react";
import { services } from "../data/services";
import { FaCode, FaPaintBrush, FaServer, FaHeadset, FaLightbulb, FaMobileAlt, FaCheckCircle, FaStar } from "react-icons/fa";

function Services() {
    const [expandedService, setExpandedService] = useState(null);

    const getIcon = (iconName) => {
        const icons = {
            code: <FaCode className="w-8 h-8" />,
            design: <FaPaintBrush className="w-8 h-8" />,
            server: <FaServer className="w-8 h-8" />,
            support: <FaHeadset className="w-8 h-8" />,
            consulting: <FaLightbulb className="w-8 h-8" />,
            mobile: <FaMobileAlt className="w-8 h-8" />
        };
        return icons[iconName] || icons.code;
    };

    const isExpanded = (serviceId) => {
        console.log("Checking if service is expanded:", serviceId, "Current expanded:", expandedService);
        return expandedService === serviceId;
    };

    return (
        <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-8 bg-base-100">
            <div className="flex flex-col gap-10">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">What I Offer</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Services & Packages</h2>
                    <p className="text-base-content/70 mt-4 max-w-2xl mx-auto">
                        Professional development services tailored to your needs. Choose from flexible packages designed for projects of any scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const serviceExpanded = isExpanded(service.id);

                        return (
                            <div
                                key={service.id}
                                data-service-id={service.id}
                                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-base-300"
                            >
                                <div className="card-body">
                                    {/* Service Header */}
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-content transition-colors duration-300 flex-shrink-0">
                                            {getIcon(service.icon)}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                                            <p className="text-xs opacity-70">{service.description}</p>
                                        </div>
                                    </div>

                                    <div
                                        id={`packages-${service.id}`}
                                        className="mt-4 space-y-3 overflow-hidden transition-all duration-300 ease-in-out animate-in"
                                    >
                                        {service.packages.map((pkg, index) => (
                                            <div
                                                key={index}
                                                className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md ${pkg.popular
                                                    ? "border-primary bg-primary/5 shadow-sm"
                                                    : "border-base-300 hover:border-primary"
                                                    }`}
                                            >
                                                {/* Package Header */}
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-bold text-base">{pkg.name}</h4>
                                                    {pkg.popular && (
                                                        <div className="badge badge-primary badge-sm gap-1">
                                                            <FaStar className="w-3 h-3" />
                                                            Popular
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Price */}
                                                <div className="text-lg font-bold text-primary mb-3">
                                                    {pkg.price}
                                                </div>

                                                {/* Features List */}
                                                <ul className="space-y-2">
                                                    {pkg.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs">
                                                            <FaCheckCircle className="w-3.5 h-3.5 text-success mt-0.5 flex-shrink-0" />
                                                            <span className="leading-relaxed">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                        {/* Get Started Button */}
                                        <a
                                            href="/contact"
                                            className="btn btn-primary btn-sm w-full mt-3"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom Quote CTA */}
                <div className="text-center mt-6">
                    <p className="text-base-content/70 mb-4">
                        Need a custom solution? Let's discuss your specific requirements.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                        Contact Me for Custom Quote
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;
