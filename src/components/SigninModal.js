import React, { useState } from 'react';

const SigninModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('signin');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab && !isAnimating) {
      setIsAnimating(true);
      setActiveTab(tab);
      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="mb-4">
          <div className="flex justify-center relative">
            <button
              className={`px-4 py-2 relative transition-all duration-300 ease-in-out ${
                activeTab === 'signin' ? 'text-[#865d36]' : 'text-gray-500'
              }`}
              onClick={() => handleTabChange('signin')}
            >
              Sign In
              {activeTab === 'signin' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#865d36] transition-all duration-300 ease-in-out transform scale-x-100" />
              )}
            </button>
            <button
              className={`px-4 py-2 relative transition-all duration-300 ease-in-out ${
                activeTab === 'signup' ? 'text-[#865d36]' : 'text-gray-500'
              }`}
              onClick={() => handleTabChange('signup')}
            >
              Sign Up
              {activeTab === 'signup' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#865d36] transition-all duration-300 ease-in-out transform scale-x-100" />
              )}
            </button>
          </div>
        </div>
        <div className="mt-4 relative overflow-hidden">
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              activeTab === 'signin'
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0 absolute inset-0'
            }`}
          >
            <div key="signin">
              <h2 className="text-2xl mb-4 text-center">Sign In</h2>
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full mb-2 p-2 border rounded"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full mb-4 p-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#865d36] text-white rounded hover:bg-[#AC8968] transition duration-300"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              activeTab === 'signup'
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0 absolute inset-0'
            }`}
          >
            <div key="signup">
              <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="block w-full mb-2 p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full mb-2 p-2 border rounded"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full mb-4 p-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#865d36] text-white rounded hover:bg-[#AC8968] transition duration-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;