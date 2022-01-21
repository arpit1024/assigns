import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "../store/actions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => ({
    token: state.tokenReducer.token,
  }));
  const logOutUser = () => {
    dispatch(getToken(null));
    localStorage.setItem("todo_user_token", null);
  };
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
          {token ? (
            <button className="link_TAG" onClick={logOutUser}>
              Log Out
            </button>
          ) : (
            <li className="link_TAG">
              <Link to={"/login"} className="linkTag">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
