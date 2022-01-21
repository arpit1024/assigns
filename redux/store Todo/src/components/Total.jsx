import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { reducer1 } from "../store/TodoReducer";

export const Total = () => {
  const { totalTask, completedTasks } = useSelector((state) => ({
    totalTask: state.reducer1.totalTask,
    completedTasks: state.reducer1.completedTasks,
  }));

  return (
    <>
      <h1>Total Todos Page: You Can see All and Completed Tasks</h1>
      <p>
        <p>
          Total tasks : <b>{totalTask}</b>
        </p>
        <p>
          Completed tasks : <b>{completedTasks}</b>
        </p>
      </p>
    </>
  );
};
