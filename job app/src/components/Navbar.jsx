import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div id="nav">
        <h1>Job Application</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>{" "}
          </li>
          <li>
            <Link to="/user/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/admin/login">Admin Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
