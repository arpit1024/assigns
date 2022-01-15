import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>TODO APPLICATION</h1>
        <ul>
          <li className="link_TAG">
            <Link to="/" className="linkTag">
              HOME
            </Link>
          </li>
          <li className="link_TAG">
            <Link to={`/Total`} className="linkTag">
              See Total/Completed task{" "}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
