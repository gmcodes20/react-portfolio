// import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
