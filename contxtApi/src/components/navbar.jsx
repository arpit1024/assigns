import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";

export const Navbar = () => {
  const { loginStatus, authController } = useContext(AuthContext);
  const toggle = () => {
    authController();
  };
  return <div className="nav">
      <h1>Navbar</h1>
      <ul>
        <li>Home</li>
        <li onClick={toggle}>{!loginStatus ? "LogIn" : "LogOut"}</li>
      </ul>
    </div>
}
