import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ScrollToTop from "./pages/ScrollToTop";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const header = document.querySelector("header");
    const menu = document.querySelector("#menu-icon");
    const navlist = document.querySelector(".navlist");

    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 80);
    };

    const handleMenuClick = () => {
      menu.classList.toggle("bx-x");
      navlist.classList.toggle("open");
    };

    const handleWindowScroll = () => {
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
    };

    window.addEventListener("scroll", handleScroll);
    menu.onclick = handleMenuClick;
    window.onscroll = handleWindowScroll;

    const sr = ScrollReveal({
      origin: "top",
      distance: "85px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".home-text", { delay: 300 });
    sr.reveal(".home-img", { delay: 400 });
    sr.reveal(".container", { delay: 400 });

    sr.reveal(".about-img", {});
    sr.reveal(".about-text", { delay: 300 });

    sr.reveal(".middle-text", {});
    sr.reveal(".row-btn, .shop-content", { delay: 300 });
    sr.reveal(".review-content, .contact", { delay: 300 });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menu.onclick = null;
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Home />
        <Info />
        <About />
        <Shop />
        <Reviews />
        <Contact />
        <ScrollToTop />
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
