import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";
import CourseDetail from "./Components/CourseDetail";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />}/>
        <Route path="/Courses" element={<Courses />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/courses/:id" element={<CourseDetail />} />


      </Routes>
    </Router>
  );
}

export default App;
