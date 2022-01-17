import {
  ADD_JOB_ERROR,
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  GET_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
} from "./actionTypes";

export const add_job_loading = () => {
  return {
    type: ADD_JOB_LOADING,
  };
};
export const add_job_success = () => {
  return {
    type: ADD_JOB_SUCCESS,
  };
};
export const add_job_error = () => {
  return {
    type: ADD_JOB_ERROR,
  };
};

export const get_job_loading = () => {
  return {
    type: GET_JOB_LOADING,
  };
};
export const get_job_success = (data) => {
  return {
    type: GET_JOB_SUCCESS,
    payload: data,
  };
};
export const get_job_error = () => {
  return {
    type: GET_JOB_ERROR,
  };
};
