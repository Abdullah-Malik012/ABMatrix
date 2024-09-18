import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Screens
import Landing from "./screens/Landing.jsx";
import Services from "./components/Sections/Services.jsx";
import Projects from "./components/Sections/Projects.jsx";
import Pricing from "./components/Sections/Pricing.jsx";
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
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleResourceLoad = () => {
    const images = Array.from(document.querySelectorAll("img"));
    const videos = Array.from(document.querySelectorAll("video"));

    const checkLoadedResources = () => {
      const imagesLoaded = images.every((img) => img.complete && img.naturalHeight !== 0);
      const videosLoaded = videos.every((video) => video.readyState === 4); // ReadyState 4: video is fully loaded
      return imagesLoaded && videosLoaded;
    };

    if (checkLoadedResources()) {
      setTimeout(() => {
        setFadeOut(true); // Begin fade-out animation
        setTimeout(() => setLoading(false), 600); // 600ms delay for smooth fade-out
      }, 300); // Add small delay for smoother transition
    } else {
      images.forEach((img) => img.addEventListener("load", checkLoadedResources));
      videos.forEach((video) => video.addEventListener("loadeddata", checkLoadedResources));
    }
  };

  useEffect(() => {
    setLoading(true);
    setFadeOut(false);

    setTimeout(() => {
      handleResourceLoad();
    }, 100);

    return () => {
      const images = Array.from(document.querySelectorAll("img"));
      const videos = Array.from(document.querySelectorAll("video"));
      images.forEach((img) => img.removeEventListener("load", handleResourceLoad));
      videos.forEach((video) => video.removeEventListener("loadeddata", handleResourceLoad));
    };
  }, [location]);

  return (
    <div className="app-container">
      <TopNavbar />
      <ScrollToTop />

      {loading ? (
        <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <>
        <main className="content">
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <div className="page">
                <Routes location={location}>
                  <Route path="/" element={<Landing />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </main>
              <Footer />
              </>
      )}

     

      <style>
        {`
          /* App Container */
          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .content {
            flex: 1;
            position: relative;
            padding-bottom: 60px;
          }

          /* Page transition effect */
          .fade-enter {
            opacity: 0;
            transform: translateY(20px);
          }

          .fade-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
          }

          .fade-exit {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-exit-active {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
          }

          /* Loading screen */
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 1;
            transition: opacity 600ms ease-in-out;
          }

          /* Fade out effect for loading screen */
          .loading-screen.fade-out {
            opacity: 0;
          }

          /* Loader spinner */
          .loader-container {
            text-align: center;
          }

          .loader {
            width: 60px;
            height: 60px;
            border: 8px solid rgba(0, 0, 0, 0.1);
            border-top: 8px solid #3498db; /* Blue for a professional look */
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          /* Loader text */
          .loader-text {
            margin-top: 10px;
            font-size: 16px;
            color: #333;
            font-weight: 500;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
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
