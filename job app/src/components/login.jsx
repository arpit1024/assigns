import { useState } from "react";

export const Login = () => {
  const [input, setIN] = useState({});
  const [user, setUser] = useState(null);
  function logUser() {
    fetch(`http://localhost:8000/users/?_email=${input.email}`)
      .then((res) => res.json())
      .then((res) => setUser(res[0]));
    if (user.password == input.password) {
      alert("LOGGED IN");
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
      <h1>USER LOGIN FORM</h1>
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
    </>
  );
};
