import React from 'react';

const EmailList = ({ emails }) => {
  // Assign colors randomly for demonstration
  const colors = ['text-green-500', 'text-red-500', 'text-yellow-500'];

  return (
    <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl mb-4">Generated Emails</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>
            <div className="flex items-center justify-between py-2">
              <span className={`${colors[index % 3]}`}>{email}</span>
              <button className="px-2 py-1 bg-[#865d36] text-white rounded hover:bg-[#AC8968]">
                Save
              </button>
            </div>
            {index < emails.length - 1 && (
              <hr className="border-t border-[#865d36]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
