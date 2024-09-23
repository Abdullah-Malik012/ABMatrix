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

  const loadResources = () => {
    const images = Array.from(document.querySelectorAll("img"));
    const videos = Array.from(document.querySelectorAll("video"));

    const loadImage = (img) => {
      return new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          resolve();
        } else {
          img.addEventListener("load", resolve);
          img.addEventListener("error", resolve);
        }
      });
    };

    const loadVideo = (video) => {
      return new Promise((resolve) => {
        const onLoadedData = () => {
          video.removeEventListener("loadeddata", onLoadedData);
          resolve();
        };

        if (video.readyState >= 3) { // ReadyState 3: Metadata is loaded
          onLoadedData();
        } else {
          video.addEventListener("loadeddata", onLoadedData);
          video.addEventListener("error", () => {
            video.removeEventListener("loadeddata", onLoadedData);
            resolve(); // Resolve on error to not block loading
          });
        }
      });
    };

    const resourcePromises = [...images.map(loadImage), ...videos.map(loadVideo)];

    Promise.all(resourcePromises).then(() => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 600);
      }, 300);
    });
  };

  useEffect(() => {
    setLoading(true);
    setFadeOut(false);

    setTimeout(() => {
      loadResources();
    }, 100);

    return () => {
      const images = Array.from(document.querySelectorAll("img"));
      const videos = Array.from(document.querySelectorAll("video"));
      images.forEach((img) => img.removeEventListener("load", loadResources));
      videos.forEach((video) => video.removeEventListener("loadeddata", loadResources));
    };
  }, [location]);

  return (
    <div className="app-container">
      <TopNavbar />
      <ScrollToTop />

      {loading ? (
        <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
          <div className="loader-container">
            <div className="loader-ring"></div>
            <div className="loader-text">Loading...</div>
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

          .loader-ring {
            width: 80px;
            height: 80px;
            border: 12px solid rgba(0, 0, 0, 0.1);
            border-top: 12px solid #3498db; /* Blue for a modern look */
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
          }

          .loader-text {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
            font-weight: 600;
            letter-spacing: 1px;
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
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
