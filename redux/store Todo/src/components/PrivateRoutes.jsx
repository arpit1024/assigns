import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => ({
    token: state.tokenReducer.token,
  }));
  console.log("THIE", token);
  if (token === null) {
    return <Navigate to="/login" />;
  }
  return children;
};
