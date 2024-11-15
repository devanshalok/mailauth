import React, { useState } from 'react';
import EmailList from './EmailList';

const MainForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    website: '',
  });
  const [emails, setEmails] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate delay with setTimeout
    setTimeout(() => {
      const generatedEmails = generateEmails(formData);
      setEmails(generatedEmails);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ firstName: '', lastName: '', website: '' });
    setEmails([]);
    setSubmitted(false);
  };

  // Email generation logic
  const generateEmails = ({ firstName, lastName, website }) => {
    const domain = website.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
    const companyName = domain;

    const emailPatterns = [
      `${firstName}.${lastName}@${companyName}`,
      `${firstName}${lastName}@${companyName}`,
      `${firstName.charAt(0)}${lastName}@${companyName}`,
      `${firstName}${lastName.charAt(0)}@${companyName}`,
      `${lastName}${firstName}@${companyName}`,
      `${firstName}@${companyName}`,
      `${firstName.substring(0, 4)}${lastName.substring(0, 4)}@${companyName}`,
      `${lastName.substring(0, 4)}${firstName.substring(0, 4)}@${companyName}`,
    ];

    return emailPatterns;
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`flex ${submitted ? 'justify-between' : 'justify-center'} items-start w-full max-w-5xl mt-4`}>
        <form
          className={`p-8 bg-white rounded shadow-md transition-all duration-500 ${
            submitted ? 'w-1/2' : 'w-full max-w-md'
          }`}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl mb-4">Generate Email Combinations</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Company Website"
            value={formData.website}
            onChange={handleChange}
            className="block w-full mb-4 p-2 border rounded"
            required
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#865d36] text-white rounded hover:bg-[#AC8968]"
            >
              Generate
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        {submitted && emails.length > 0 && (
          <EmailList emails={emails} />
        )}
      </div>
      {/* Loading indicator */}
      {submitted && emails.length === 0 && (
        <div className="mt-4">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default MainForm;
