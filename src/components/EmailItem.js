import React from 'react';

function EmailItem({ email, status }) {
  const getColor = () => {
    if (status === 'valid') return 'text-green-500';
    if (status === 'invalid') return 'text-red-500';
    return 'text-yellow-500';
  };

  return (
    <div className={`flex items-center justify-between ${getColor()} animate-fadeIn`}>
      <span>{email}</span>
      <button className="bg-secondary text-white px-2 py-1 rounded hover:bg-highlight">
        Save
      </button>
    </div>
  );
}

export default EmailItem;
