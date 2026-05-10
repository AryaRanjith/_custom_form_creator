import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import "./App.css";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/builder" element={<Builder />} />

    </Routes>

  );
}

export default App;