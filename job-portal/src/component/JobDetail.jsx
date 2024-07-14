// src/JobDetail.js
import React from 'react';

const JobDetail = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
        <p className="text-lg mb-2">{job.company}</p>
        <p className="text-lg mb-4">{job.location}</p>
        <p className="mb-4">{job.description}</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
