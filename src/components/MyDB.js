import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const MyDB = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([
    {
      name: "John Doe",
      selectedEmail: "john.doe@example.com",
      company: "Example Inc",
    },
    {
      name: "Jane Smith",
      selectedEmail: "jane.smith@another.com",
      company: "Another Co",
    },
     {
      name: "Dev felix",
      selectedEmail: "dev.felix@another.com",
      company: "Another Co",
    },
     {
      name: "Paul true",
      selectedEmail: "paul.true@another.com",
      company: "Another Co",
    },
     {
      name: "Logan Smith",
      selectedEmail: "logan.smith@another.com",
      company: "Another Co",
    },
    
  ]);

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8 mt-8">
      <h1 className="text-4xl mb-4 text-center">Your Saved Email Adresses</h1>
      <input
        type="text"
        placeholder="Search by Name or Company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Selected Email</th>
              <th className="p-2 border">Company</th>
              <th className="p-2 border">Mailto</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2 border">{row.name}</td>
                <td className="p-2 border">{row.selectedEmail}</td>
                <td className="p-2 border">{row.company}</td>
                <td className="p-2 border text-center">
                  <a
                    href={`mailto:${row.selectedEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#865d36] hover:underline"
                  >
                    <FaEnvelope />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDB;
