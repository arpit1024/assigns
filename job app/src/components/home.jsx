import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  get_job_error,
  get_job_loading,
  get_job_success,
} from "../features/actions";

export const Home = () => {
  const { loading, error, jobs } = useSelector((state) => ({
    loading: state.loading,
    error: state.addErr,
    jobs: state.jobdata,
  }));
  useEffect(() => {
    getJobs();
  }, []);
  const dispatch = useDispatch();
  const getJobs = async () => {
    dispatch(get_job_loading());
    try {
      let data = await fetch("http://localhost:8000/jobs");
      let res = await data.json();
      console.log("res", res);
      dispatch(get_job_success(res));
    } catch {
      dispatch(get_job_error());
    }
  };
  async function applyForJob(e) {
    try {
      await fetch(`http://localhost:8000/jobs/${e}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ applied: true }),
        method: "PATCH",
      });
      getJobs();
    } catch {
      dispatch(get_job_error());
    }
  }
  console.log(jobs);
  return (
    <>
      <h1>APPLY FOBS JOBS FROM HERE</h1>
      {loading ? (
        <div>Loading data...</div>
      ) : error ? (
        <div>ERROR!</div>
      ) : (
        <div id="jobs_cont">
          {jobs.map((e, i) => {
            return (
              <div key={nanoid()}>
                <div>company name :{e.company_name}</div>
                <div>job title : {e.job_title}</div>
                <div>salary range : {e.salary_range}</div>
                <div>job description : {e.job_description}</div>
                <div>location : {e.location}</div>
                <div>Job Type : {e.job_type}</div>
                {e.applied ? null : (
                  <button onClick={() => applyForJob(e.id)}>
                    APPLY FOR THIS JOB
                  </button>
                )}
                <div>
                  {e.applied ? <div>Applied</div> : <div>Not Applied</div>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}; //company name, job title, salary range, job description, location, job type (remote)
