import React from 'react';

function Services() {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded shadow-md animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4 text-primary">Our Services</h1>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Email address generation based on user input.</li>
        <li>Email validation and scoring.</li>
        <li>Profile management for saving and organizing emails.</li>
        <li>Custom solutions for enterprise clients.</li>
      </ul>
    </div>
  );
}

export default Services;
