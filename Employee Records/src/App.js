import logo from "./logo.svg";
import "./App.css";
import { EmployerLogin } from "./components/employerlogin";
import { LandingPage } from "./components";
import { Route, Routes } from "react-router-dom";
import { Employees } from "./components/getAllEmployees";
import { Navbar } from "./components/navbar";
import { PrivateRoute } from "./routes/PrivateRoute";
import { DetailsEmployee } from "./components/employeeDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<EmployerLogin />} path="/employerLogin"></Route>
        {/* <Route path="/:page" element={<Employees />}></Route> */}
        <Route
          path="/:page"
          element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        ></Route>
        {/* //Details */}
        <Route
          path="/employeeDetail"
          element={
            <PrivateRoute>
              <DetailsEmployee />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
