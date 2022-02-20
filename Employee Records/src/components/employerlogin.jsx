import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const EmployerLogin = () => {
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <div>
        Use Email: "eve.holt@reqres.in" and password: "cityslicka" to login
      </div>
      <h1>Employer Login Page</h1>
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
