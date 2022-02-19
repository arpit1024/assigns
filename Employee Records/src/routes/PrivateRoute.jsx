import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("todo_user_token"));
  if (!token) {
    return <Navigate to="/employerLogin" />;
  }

  return <>{children}</>;
};
