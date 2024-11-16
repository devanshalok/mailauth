import React from 'react';

function About() {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded shadow-md animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4 text-primary">About Us</h1>
      <p className="text-gray-700">
        Our app takes your name and company website to generate possible email address combinations.
        These emails are then checked and scored for validity. You can store these email addresses in your profile for future reference.
      </p>
    </div>
  );
}

export default About;
