import React, { useState } from 'react';
import JobForm from './JobForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Job = ({ jobs, completeJob, removeJob, updateJob }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateJob(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <JobForm edit={edit} onsubmit={submitUpdate} />;
  }

  return jobs.map((job, index) => {
    <div className={job.isAdded ? 'job-row added' : 'job-row'} key={index}>
      <div key={job.id} onClick={() => completeJob(job.id)}>
        {job.text}
      </div>

      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeJob(job.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: job.id, value: job.text })}
          className='edit-icon'
        />
      </div>
    </div>;
  });
};
export default Job;
// Failed to compile
// src/components/Job.js
//   Line 25:40:  'completeJob' is not defined  no-undef

// src/components/JobForm.js
//   Line 6:20:  'useRef' is not defined     no-undef
//   Line 8:3:   'useEffect' is not defined  no-undef

// Search for the keywords to learn more about each error.
// This error occurred during the build time and cannot be dismissed.
