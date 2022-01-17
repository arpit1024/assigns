import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  add_job_error,
  add_job_loading,
  add_job_success,
} from "../features/actions";

export const AddJob = () => {
  const [job, setjob] = useState({});

  const dispatch = useDispatch();
  const addJob = async () => {
    dispatch(add_job_loading());
    try {
      await fetch("http://localhost:8000/jobs", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
        method: "POST",
      });
      dispatch(add_job_success());
    } catch {
      dispatch(add_job_error());
    }
  };
  const setJobFunc = (e) => {
    let { name, value } = e.target;
    setjob({
      ...job,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Add Job Page</h1>
      <div id="job_add_form">
        <input
          onChange={setJobFunc}
          name="company_name"
          type="text"
          placeholder="Add company name"
        />
        <input
          onChange={setJobFunc}
          name="job_title"
          type="text"
          placeholder="Add job title"
        />
        <input name="salary range" type="text" placeholder="Add salary range" />
        <input
          onChange={setJobFunc}
          name="job_description"
          type="text"
          placeholder="Add job description"
        />
        <input
          onChange={setJobFunc}
          name="location"
          type="text"
          placeholder="Add location"
        />
        <input
          onChange={setJobFunc}
          name="job_type"
          type="text"
          placeholder="job type"
        />
      </div>
      <button onClick={() => addJob()}>Add Job</button>
    </>
  );
};
// company name, job title, salary range, job description, location, job type (remote)
