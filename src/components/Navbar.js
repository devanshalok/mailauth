import React, { useState } from 'react';
import SigninModal from './SigninModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#3e362e] text-white">
      <img src="/logo.png" alt="Logo" className="h-16 w-31 mr-2" />
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-[#AC8968]">Home</a></li>
        <li><a href="#" className="hover:text-[#AC8968]">About</a></li>
        <li><a href="#" className="hover:text-[#AC8968]">Services</a></li>
        <li><a href="#" className="hover:text-[#AC8968]">Contact</a></li>
      </ul>
      <button
        className="ml-4 px-4 py-2 bg-[#865d36] rounded hover:bg-[#AC8968]"
        onClick={() => setIsModalOpen(true)}
      >
        Sign In
      </button>
      {isModalOpen && <SigninModal onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
};

export default Navbar;
