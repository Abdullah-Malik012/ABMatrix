import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

// Screens
import Landing from "./screens/Landing.jsx";
import Services from "./components/Sections/Services.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Pricing from "./components/Sections/Pricing.jsx";
import Blog from "./components/Sections/Blog.jsx";
import Contact from "./components/Sections/Contact.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}
