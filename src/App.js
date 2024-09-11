import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Screens
import Landing from "./screens/Landing.jsx";
import Services from "./components/Sections/Services.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Pricing from "./components/Sections/Pricing.jsx";
import Blog from "./components/Sections/Blog.jsx";
import Contact from "./components/Sections/Contact.jsx";
import Footer from "./components/Sections/Footer.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <TopNavbar />
      <ScrollToTop />
      <main className="content">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <div className="page">
              <Routes location={location}>
                <Route path="/" element={<Landing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
      <style>
        {`
          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .content {
            flex: 1;
            position: relative;
            padding-bottom: 60px; /* Adjust based on footer height */
          }

          .page {
            position: relative;
            width: 100%;
          }

          .fade-enter {
            opacity: 0;
            transform: translateY(20px);
          }

          .fade-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 300ms, transform 300ms;
          }

          .fade-exit {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-exit-active {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 300ms, transform 300ms;
          }

          footer {
            position: relative;
            width: 100%;
            background: #f1f1f1; /* Adjust to match footer design */
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
