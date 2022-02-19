import { Link, Navigate, useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem("todo_user_token"));

  const logOut = () => {
    localStorage.setItem("todo_user_token", null);
    return navigate("/employerLogin");
  };
  return (
    <>
      <div id="nav">
        <h1>Company Employee Records</h1>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            {token ? (
              <button onClick={logOut}>Log Out</button>
            ) : (
              <Link to="/employerLogin">Admin Login</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
