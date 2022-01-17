import { useState } from "react";

export const Signup = () => {
  const [input, setIN] = useState({});

  async function subData() {
    try {
      await fetch("http://localhost:8000/users", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
        method: "POST",
      });
    } catch {}
  }
  function setFunc(e) {
    const { name, value } = e.target;
    setIN({
      ...input,
      [name]: value,
    });
  }
  return (
    <>
      <h1>SIGN UP FORM</h1>
      <div id="login_form">
        <input
          onChange={setFunc}
          name="name"
          type="text"
          placeholder="ENTER NAME"
        />
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
      <button onClick={subData}>SIGN UP</button>
    </>
  );
};
