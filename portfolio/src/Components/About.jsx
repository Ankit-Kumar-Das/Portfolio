import React from "react";

const About = () => {
  return (
    <>
      <div className="h-[100vh] mx-5  flex flex-col text-white items-center justify-center py-12 px-4 sm:mx-5 md:mx-5 sm:py-20 sm:px-6 lg:px-20 lg:py-32 lg:mx-[150px]">
        <div className="w-full max-w-4xl space-y-8 p-8 sm:p-10 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Tailwind CSS</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="mt-2">
              Master of Computer Applications (MCA) at the College of IT and
              Management Education under Biju Patnaik University of Technology
              (BPUT).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Interests</h3>
            <p className="mt-2">
              Apart from coding, I enjoy reading tech blogs and content writing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
