import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link
} from "react-router-dom";

import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import AppEditProvider from "./AddEdit";
import Counter from "./Counter";
// import Counter from "./Counter";
// import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addform" element={<AppEditProvider />} />
          <Route path="/editProduct/:index" element={<AppEditProvider />} />
          <Route path="/count" element={<Counter/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
