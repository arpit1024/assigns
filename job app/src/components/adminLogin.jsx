import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const AdminLogin = () => {
  const [input, setIN] = useState({});
  const [user, setUser] = useState(null);
  const [isLog, setLog] = useState(false);
  function logUser() {
    fetch(`http://localhost:8000/admins/?_email=${input.email}`)
      .then((res) => res.json())
      .then((res) => setUser(res[0]));
    if (user.password == input.password) {
      alert("LOGGED IN");
      setLog(true);
    } else {
      alert("INVALID");
    }
  }
  function setFunc(e) {
    const { name, value } = e.target;
    setIN({
      ...input,
      [name]: value,
    });
  }
  console.log(input);
  return (
    <>
      <h1>ADMIN LOGIN FORM</h1>
      <div id="login_form">
        <input
          onChange={setFunc}
          name="email"
          type="text"
          placeholder="ENTER EMAIL"
        />
        <input
          onChange={setFunc}
          name="password"
          type="text"
          placeholder="ENTER PASSWORD"
        />
      </div>
      <button onClick={logUser}>LOGIN</button>
      {isLog ? <Link to="/admindashboard">Go To Dashboard</Link> : null}
    </>
  );
};
