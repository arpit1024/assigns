import { GET_TOKEN } from "./actionTypes";

const init = { token: null };
export const tokenReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_TOKEN:
      return {
        ...state,
        token: payload,
      };

    default:
      return state;
  }
};
