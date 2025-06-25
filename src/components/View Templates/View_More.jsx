import React from "react";

const ViewMore = () => {
    const templates = [
        {
            title: "Classic Professional",
            description: "Clean, traditional layout perfect for corporate roles",
            badge: "FREE",
            placement: "99% placement rate",
            btn: "Preview Template",
            btnStyle: "bg-white text-gray-900 border",
        },
        {
            title: "Modern Creative",
            description: "Contemporary design with subtle color accents",
            badge: "PREMIUM",
            placement: "95% placement rate",
            btn: "Preview Template",
            btnStyle: "bg-white text-gray-900 border",
        },
        {
            title: "Executive Premium",
            description: "Sophisticated layout for senior-level positions",
            badge: "PREMIUM",
            placement: "97% placement rate",
            btn: "Preview Template",
            btnStyle: "bg-white text-gray-900 border",
        },
        {
            title: "Tech Specialist",
            description: "Optimized for technology and engineering roles",
            badge: "PREMIUM",
            placement: "98% placement rate",
            btn: "Preview Template",
            btnStyle: "bg-white text-gray-900 border",
        },
        {
            title: "Minimalist Pro",
            description: "Ultra-clean design that passes all ATS systems",
            badge: "PREMIUM",
            placement: "99% placement rate",
            btn: "Preview Template",
            btnStyle: "bg-white text-gray-900 border",
        },
        {
            title: "Creative Portfolio",
            description: "Perfect for designers and creative professionals",
            badge: "PREMIUM",
            placement: "94% placement rate",
            btn: "Preview Template",
            btnStyle: "bg-white text-gray-900 border",
        },
    ];

    return (
        <div className="bg-blue-50 min-h-screen py-12 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center mb-10">
                {/* <div className="inline-block mb-2 px-4 py-1 text-xs font-semibold bg-white text-blue-600 rounded-full border border-blue-200">
          ATS-Optimized Templates
        </div> */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Choose Your Perfect Template</h1>
                <p className="text-gray-600 text-sm sm:text-base">
                    Professional resume templates designed by hiring experts and optimized to pass <br className="hidden sm:block" />
                    Applicant Tracking Systems (ATS).
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {templates.map((template, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col items-center justify-between"
                    >
                        <div className="w-full">
                            <div className="flex justify-between items-center mb-1">
                                <h2 className="font-semibold text-lg text-gray-900">{template.title}</h2>
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${template.badge === "FREE"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {template.badge}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                            <p className="text-sm text-green-600 font-medium">{template.placement}</p>
                        </div>

                        <div className="my-4 h-40 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v12a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>

                        <button
                            className={`w-full py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-900 hover:text-white duration-150 ease-in-out ${template.btnStyle}`}
                        >
                            {template.btn}
                        </button>
                    </div>
                ))}
            </div>


            <div className="w-full bg-blue-50 py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Ready to Build Your Resume?
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
                    Start with our free template or upgrade to access premium designs that will make
                    your resume stand out from the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 hover:text-black border transition duration-200">
                        Start Building Now
                    </button>
                    <button className="border border-gray-300 text-gray-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 hover:text-white transition duration-200">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewMore;
