import {
  ADD_JOB_ERROR,
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  GET_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
} from "./actionTypes";

const init = { loading: false, addErr: false, jobdata: [] };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_JOB_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobdata: payload,
      };
    case GET_JOB_ERROR:
      return {
        ...state,
        addErr: true,
      };
    case ADD_JOB_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ADD_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_JOB_ERROR:
      return {
        ...state,
        addErr: true,
      };
    default:
      return state;
  }
};
