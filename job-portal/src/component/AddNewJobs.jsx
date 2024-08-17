import React, { useState } from 'react';
import JobDetail from './JobDetail';

const jobsData = [
  { id: 1, title: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', description: 'Develop and maintain web applications.' },
  { id: 2, title: 'Data Scientist', company: 'Facebook', location: 'Menlo Park, CA', description: 'Analyze and interpret complex data sets.' },
  { id: 3, title: 'Product Manager', company: 'Apple', location: 'Cupertino, CA', description: 'Lead product development teams.' },
  // Add more job data here
];

const AddNewJobs = () =>{
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setJobs(
      jobsData.filter((job) =>
        job.title.toLowerCase().includes(value) ||
        job.company.toLowerCase().includes(value) ||
        job.location.toLowerCase().includes(value)
      )
    );
  };

  const handleDetailClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseDetail = () => {
    setSelectedJob(null);
  };
    return (
        <>
      <section className="bg-white dark:bg-gray-900">
        <div className="w-9/12 mx-auto p-4 py-40">
      <h1 className="text-2xl font-bold mb-4">Job Search</h1>
       <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for jobs"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div>
        {jobs.map((job) => (
          <div key={job.id} className="p-4 mb-4 border border-gray-200 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button onClick={() => handleDetailClick(job)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Detail
            </button>
          </div>
        ))}
      </div>
      {selectedJob && <JobDetail job={selectedJob} onClose={handleCloseDetail} />}
    </div>

      </section>
        </>
    )
}

export default AddNewJobs;