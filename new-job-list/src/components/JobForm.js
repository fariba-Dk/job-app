import React, { useState } from 'react';
import JobLists from './JobLists'


function JobForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  function useEffect(){
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='job-form'>
      {props.edit ? (
        <>
          <input
            placeholder='update job'
            type='text'
            value={input}
            onChange={handleChange}
            name='text'
            className='job-input edit'
            ref={inputRef}
          />

          <button onClick={handleSubmit} className='job-button edit'>
            Update Jobs
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a Job'
            value={input}
            onChange={handleChange}
            className='job-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} classNaFme='job-button'>
            Add Your 💥 Job
          </button>
        </>
      )}
    </form>
  );
}
export default JobForm;
