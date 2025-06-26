import React from 'react';
import { FileText } from 'lucide-react';

const templates = [
  {
    title: 'Classic Professional',
    description: 'Clean, traditional layout perfect for corporate roles',
    tag: 'FREE',
    placement: '99%',
    action: 'Use Template',
    filled: true,
  },
  {
    title: 'Modern Creative',
    description: 'Contemporary design with subtle color accents',
    tag: 'PREMIUM',
    placement: '95%',
    action: 'Preview Template',
    filled: false,
  },
  {
    title: 'Executive Premium',
    description: 'Sophisticated layout for senior-level positions',
    tag: 'PREMIUM',
    placement: '97%',
    action: 'Preview Template',
    filled: false,
  },
  {
    title: 'Tech Specialist',
    description: 'Optimized for technology and engineering roles',
    tag: 'PREMIUM',
    placement: '98%',
    action: 'Preview Template',
    filled: false,
  },
  {
    title: 'Minimalist Pro',
    description: 'Ultra-clean design that passes all ATS',
    tag: 'PREMIUM',
    placement: '99%',
    action: 'Preview Template',
    filled: false,
  },
];

const TemplateCard = ({ title, description, tag, placement, action, filled }) => (
  <div className="border rounded-xl p-5 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition w-full max-w-sm">
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <div className="flex flex-col items-end text-sm">
          <span className="text-green-600 font-semibold">{placement} placement rate</span>
          <span className={`text-xs font-medium mt-1 px-2 py-0.5 rounded-full ${tag === 'FREE' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>{tag}</span>
        </div>
      </div>

      <div className="bg-gray-100 rounded-md h-36 mt-6 flex items-center justify-center">
        <FileText className="text-gray-400 w-10 h-10" />
      </div>
    </div>

    <button className={`mt-6 w-full text-sm font-medium rounded-md px-4 py-2 border ${filled ? 'bg-gray-900 text-white' : 'border-gray-300 text-gray-900'}`}>
      {action}
    </button>
  </div>
);

const TemplatesSection = () => (
  <section className="py-10 px-4 md:px-10 bg-[#f9fafb]">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900">Professional Templates</h2>
      <p className="text-center text-gray-600 mt-2 text-sm">Choose from our collection of ATS-optimized templates designed by hiring professionals.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {templates.map((template, index) => (
          <TemplateCard key={index} {...template} />
        ))}
      </div>
    </div>
  </section>
);

export default TemplatesSection;
