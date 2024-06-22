import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-5 border-t-2 text-white py-8 mx-5 lg:mx-[150px] ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h1 className="text-2xl font-bold">Ankit Kumar</h1>
                <p className="text-sm">Frontend Developer</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Ankit-Kumar-Das/"
                  className="hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/imankitkumardas/"
                  className="hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:ankitkumardas599@gmail.com"
                  className="hover:text-gray-400"
                >
                  Email
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )
    };

export default Footer

