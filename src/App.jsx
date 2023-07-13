import React, { useEffect, useState, useRef } from "react";
import data from "./data";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const sectionsRefs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    experienceRef: useRef(null),
    servicesRef: useRef(null),
    contactRef: useRef(null),
  };
  const {
    about,
    experienceFrontend,
    experienceBackend,
    services,
    portfolios,
    testimonials,
    contactOptions,
    socials,
  } = data;
  const [darkTheme, setDarkTheme] = useState(true);
  // update colors on theme change
  const toggleDarkMode = () => {
    updateColors(!darkTheme);
    setDarkTheme(!darkTheme);
  };

  const updateColors = (d) => {
    const root = document.documentElement;
    if (d) {
      root.style.setProperty("--color-bg", "#1f1f38");
      root.style.setProperty("--color-bg-variant", "#2c2c6c");
      root.style.setProperty("--color-primary", "#4db5ff");
      root.style.setProperty(
        "--color-priamry-variant",
        "rgba(77, 181, 255, 0.4)"
      );
      root.style.setProperty("--color-white", "#fff");
      root.style.setProperty("--color-light", "rgba(255, 255, 255, 0.6)");
    } else {
      root.style.setProperty("--color-bg", "#ffffff");
      root.style.setProperty("--color-bg-variant", "#f2f2f2");
      root.style.setProperty("--color-primary", "#1969ff");
      root.style.setProperty(
        "--color-priamry-variant",
        "rgba(25, 105, 255, 0.4)"
      );
      root.style.setProperty("--color-white", "#1f1f38");
      root.style.setProperty("--color-light", "rgba(31, 31, 56, 0.6)");
    }
  };

  useEffect(() => {
    updateColors(darkTheme);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1400}
        theme={darkTheme ? "dark" : "light"}
        className="toast-container"
      />
      <button
        style={{ margin: "0.1rem" }}
        className="btn "
        id="toggle-mode"
        onClick={toggleDarkMode}
      >
        {darkTheme ? "light mode " : "dark mode "}
      </button>
      <Header name="Brahim" job="full stack developper" socials={socials} ref={sectionsRefs.homeRef} />
      <Nav
        aboutRef={sectionsRefs.aboutRef}
        experienceRef={sectionsRefs.experienceRef}
        contactRef={sectionsRefs.contactRef}
        servicesRef={sectionsRefs.servicesRef}
        homeRef={sectionsRefs.homeRef}
      />
      <About about={about} ref={sectionsRefs.aboutRef} />
      <Experience
        frontend={experienceFrontend}
        backend={experienceBackend}
        ref={sectionsRefs.experienceRef}
      />
      <Services services={services} ref={sectionsRefs.servicesRef} />
      <Portfolio portfolios={portfolios} />
      <Testimonials testimonials={testimonials} />
      <Contact contactOptions={contactOptions} ref={sectionsRefs.contactRef} />
      <Footer socials={socials} />
    </>
  );
};

export default App;
