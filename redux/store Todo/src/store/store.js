import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer, reducer1 } from "./TodoReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tokenReducer } from "./tokenReducer";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// export const store = createStore(reducer, composedEnhancer);
const redu = combineReducers({
  reducer: reducer,
  reducer1: reducer1,
  tokenReducer: tokenReducer,
});
export const store = createStore(redu, composedEnhancer);
console.log(store.getState());
