import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="flex flex-col items-center my-10 animate-fadeIn">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-primary text-center">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full border p-2 rounded h-32"
          ></textarea>
          <button className="w-full px-4 py-2 bg-[#865d36] text-white rounded hover:bg-[#AC8968]">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#865d36]"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#865d36]"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-[#865d36]"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
