import React, { useState } from 'react';
import JobForm from './JobForm';

import Job from 'src / components / Job.js';

function JobList() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    if (!job.text || /^\s*$/.test(job.text)) {
      return;
    }

    const newJobs = [job, ...jobs];

    setJobs(newJobs);
    console.log(...jobs);
  };

  const updateJob = (jobId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setJobs((prev) =>
      prev.map((item) => (item.id === jobId ? newValue : item))
    );
  };

  const removeJob = (id) => {
    const removeArr = [...jobs].filter((job) => job.id !== id);
    setJobs(removeArr);
  };

  const completeJob = (id) => {
    let updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        job.isAdded = !job.isAdded;
      }
      return job;
    });
    setJobs(updatedJobs);
  };

  return (
    <div>
      <h1>Add Your Favorite Jobs Here!</h1>
      <JobForm onSubmit={addJob} />
      <Job
        jobs={jobs}
        completeJob={completeJob}
        removeJob={removeJob}
        updatedJob={updateJob}
      />
    </div>
  );
}

export default JobList;
