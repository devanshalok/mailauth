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
      <div className="flex space-x-6 mt-6">
        <a href="https://linkedin.com/in/devanshalok" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-highlight text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/devanshalok" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-highlight text-2xl">
          <FaGithub />
        </a>
        <a href="mailto:devanshalok@gmail.com" className="text-secondary hover:text-highlight text-2xl">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Contact;
