import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getToken } from "../store/actions";

export const Login = () => {
  const [form, setForm] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => ({
    token: state.tokenReducer.token,
  }));
  console.log("token", token);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const logUser = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("todo_user_token", JSON.stringify(res.token));
        dispatch(getToken(res.token));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="formCont">
        <input
          name="email"
          type="text"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </div>
      <button onClick={logUser}>Login</button>
    </>
  );
};
