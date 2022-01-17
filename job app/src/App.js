import logo from "./logo.svg";
import "./App.css";
import { Admin } from "./components/admin";
import { Home } from "./components/home";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AddJob } from "./components/addjob";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { AdminLogin } from "./components/adminLogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admindashboard" element={<Admin />}></Route>
        <Route path="/admin/addjob" element={<AddJob />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
