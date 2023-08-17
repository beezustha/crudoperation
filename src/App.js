import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import AddUser from "./Components/users/AddUser";
import NavBar from "./Components/Layout/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import EditUser from "./Components/users/EditUser";
import EditUSer from "./Components/users/EditUser";
import User from "./Components/users/User";
import { useState } from "react";

function App() {
  const [baseFilter, setFilter] = useState("");

  return (
    <Router>
      <div className="App">
        <NavBar setfilter={setFilter} />
        <Routes>
          <Route path="/" element={<Home searchThis={baseFilter} />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUSer />} />
          <Route exact path="/users/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
