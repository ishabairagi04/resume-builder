import React from "react";

export default function HeroSection() {

     const features = [
    {
      title: "ATS-Friendly Format",
      description: "Export resumes in ATS-safe format with proper semantic structure",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
    {
      title: "Multiple Export Options",
      description: "Export to PDF and plain text formats optimized for job applications",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
        </svg>
      ),
    },
    {
      title: "Share & Collaborate",
      description: "Share your resume via public/private links with recruiters",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 14.828a4 4 0 000-5.656M10.172 9.172a4 4 0 000 5.656M14.828 9.172a4 4 0 01-5.656 0M9.172 14.828a4 4 0 015.656 0" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Features",
      description: "Generate professional summaries and optimize content with AI",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
    <section className=" mt-12 bg-cover bg-center bg-no-repeat px-4 sm:px-6 py-12 sm:py-16 text-center" style={{ backgroundImage: "url('/main bg.avif')" }}>
      <div className="max-w-4xl mx-auto">
       
        {/* <div className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4 sm:mb-6">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.968c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.968a1 1 0 00-.364-1.118L2.49 9.395c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.968z" />
          </svg>
          99% Job Placement Success Rate
        </div> */}

        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-tight">
          Build Your Perfect <span className="text-blue-600">ATS-Friendly</span> Resume in Minutes
        </h1>

     
        <p className="text-gray-800 text-base sm:text-lg mb-8 sm:px-6">
          Create professional resumes that pass Applicant Tracking Systems (ATS) and land you interviews.
          Choose from AI-powered templates designed by hiring experts.
        </p>

       
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 px-4 sm:px-0">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
            Start Building Your Resume
          </button>
          <button className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            View Templates
          </button>
        </div>

      
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-sm text-gray-700 px-2 sm:px-0">
          <span className="flex items-center justify-center gap-1">
            ✅ Free template included
          </span>
          <span className="flex items-center justify-center gap-1">
            ✅ No credit card required
          </span>
          <span className="flex items-center justify-center gap-1">
            ✅ Export immediately
          </span>
        </div>
      </div>
    </section>
     <section className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Why Choose ResumeBuilder Pro?
        </h2>
        <p className="text-gray-600 mb-10 text-base sm:text-lg">
          Our platform combines cutting-edge AI technology with proven hiring insights to help you create resumes that get results.
        </p>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6  rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-full flex items-center justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-3">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}

