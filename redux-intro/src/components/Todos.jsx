import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../store/actions";

export const Todos = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [upID, setUpdateId] = useState("");

  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);
  async function updateStatus(id, status) {
    try {
      await fetch(`http://localhost:8000/Todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: !status }),
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  }
  const updateTodo = async () => {
    try {
      await fetch(`http://localhost:8000/Todos/${upID}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: text }),
      });
      setShow(false);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };
  function setUpdates(id) {
    setUpdateId(id);
    setShow(true);
  }
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:8000/Todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      let res = await fetch("http://localhost:8000/Todos");
      let data = await res.json();
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }
  return loading ? (
    <div>LOADING...</div>
  ) : error ? (
    <div>Something went wrong!</div>
  ) : (
    <div>
      <h1>TODO APPLICATION- Enter new tasks to do, update or delete</h1>
      <input
        value={text}
        type="text"
        placeholder="ENTER TODO"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          fetch("http://localhost:8000/Todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: false, title: text, id: nanoid() }),
          })
            .then((res) => res.json())
            .then((res) => {
              //success
              dispatch(addTodoSuccess(res));
            })
            .catch((e) => dispatch(addTodoError(e)));
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <>
          <div className="titleWrapper">
            <div key={e.id} id={e.id}>
              TITLE: {e.title}
            </div>
            <div className="lists">
              <button onClick={() => setUpdates(e.id)}>Update Todo</button>
              <button onClick={() => deleteTodo(e.id)}>Delete Todo</button>
              {e.status ? (
                <button
                  key={nanoid()}
                  onClick={() => updateStatus(e.id, e.status)}
                  className="completed_Status"
                >
                  COMPLETED
                </button>
              ) : (
                <button
                  key={nanoid()}
                  onClick={() => updateStatus(e.id, e.status)}
                  className="uncom_status"
                >
                  MARK AS COMPLETED
                </button>
              )}
            </div>
          </div>
        </>
      ))}
      {show ? (
        <div className="update_form">
          <input
            value={text}
            type="text"
            placeholder="ENTER UPDATE TODO"
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => updateTodo()}>Update TODO</button>
        </div>
      ) : null}
    </div>
  );
};
