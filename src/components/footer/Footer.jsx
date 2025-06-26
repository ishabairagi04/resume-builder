import React from "react";
import { FileText } from 'lucide-react';
export default function Footer(){
    return(
        <>
<section className="w-full h-80  text-center p-28 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
    <div><h2 className="text-4xl text-white">Ready to Launch Your Dream Job?</h2>
    <p className="w-full px-44 mt-2 text-white ">Join thousands of job seekers who've successfully landed interviews using our ATS-friendly resume builder.</p>
    <button className="bg-white border-black rounded-[10px] px-4 py-2  text-2xl mt-5 font-semibold">start building your resume now</button>
    </div>
</section>
 <footer className="bg-[#0F172A] text-white py-4 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-white" />
          <span className="font-semibold text-lg">ResumeBuilder Pro</span>
        </div>
        <div className="text-sm text-white/70 mt-2 md:mt-0">
          © 2024 ResumeBuilder Pro. All rights reserved.
        </div>
      </div>
    </footer>

        </>
    )
}