import React from 'react';

const SigninModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4">Signin/Signup</h2>
        {/* Signin/Signup form fields */}
        <button
          className="mt-4 px-4 py-2 bg-[#865d36] text-white rounded hover:bg-[#AC8968]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SigninModal;
