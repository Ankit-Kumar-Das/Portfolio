import React from 'react';

const skillsData = {
  HTML: ['Semantic HTML', 'Forms and Validations'],
  CSS: ['Flexbox', 'Grid', 'Responsive Design', 'Animations'],
  TailwindCSS: ['Utility-First', 'Responsive Design', 'Custom Themes', 'Plugins'],
  React: ['JSX', 'Components', 'State Management', 'Hooks'],
};

const Skills = () => {
  return (
    <>
      <div className="h-auto mx-5  sm:py-16 lg:px-20 lg:mx-[150px] md:mx-5">
        <h1 className="text-3xl font-semibold text-center text-white ">Skills</h1>
        <div className="flex flex-col justify-center items-center py-8 px-4 space-y-6">
          {Object.keys(skillsData).map((category) => (
            <div key={category} className="p-6 mt-3  border-2 mx-2 rounded-lg shadow-lg w-full max-w-xl">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <ul className="list-disc list-inside space-y-1">
                {skillsData[category].map((skill) => (
                  <li key={skill} className="text-white">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
