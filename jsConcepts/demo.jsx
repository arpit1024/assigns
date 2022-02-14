import { useEffect, useReducer, useState } from "react";

//react hooks
export const Demo = () => {
  const [counter, setCounter] = useState(0); // use to keep track of state of ui and app
  useEffect(() => {
    // fetching api on mount
  }, []);
  return (
    <>
      <div onClick={() => setCounter(counter + 1)}>{counter}</div>
    </>
  );
};
