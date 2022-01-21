import logo from "./logo.svg";
import "./App.css";
import { Todos } from "./components/Todos";
import { Route, Routes } from "react-router-dom";
import { Details } from "./components/TodosDetails";
import { Total } from "./components/Total";
import { Edit } from "./components/EditTodos";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/login";
import { PrivateRoute } from "./components/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route
          path="/todo/:id"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/Total"
          element={
            <PrivateRoute>
              <Total />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/todo/:id/edit"
          element={
            <PrivateRoute>
              <Edit />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
