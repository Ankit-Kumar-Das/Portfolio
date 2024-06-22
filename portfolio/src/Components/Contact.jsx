import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import  { useState } from "react"


const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.email && formValues.message) {
      alert("Message sent!");
      console.log(e.target.value);
      // Here you can add the logic to send the form data to your backend or an email service
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div className=" flex justify-center mx-5 mt-24 items-center  lg:mx-[150px] ">
      <div className="w-full mx-5 bg-gray-700 text-white p-8 rounded-lg shadow-lg lg:w-[70%] lg:mx-auto ">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            
            <input 
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              value={formValues.name}
              onChange={handleChange}
              className="mt-5 block w-full p-2 border border-gray-300 rounded-md shadow-sm  text-black font-semibold focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
           
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Emali'
              value={formValues.email}
              onChange={handleChange}
              className="mt-5 block w-full p-2 border text-black font-semibold border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            
            <textarea
              id="message"
              name="message"
              placeholder='Message'
              value={formValues.message}
              onChange={handleChange}
              rows="4"
              className="mt-5 block w-full p-2 border border-gray-300 text-black font-semibold rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full h-auto py-2 px-4  bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact