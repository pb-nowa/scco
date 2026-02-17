import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SiteFooter from "./sections/SiteFooter/SiteFooter";
import SiteHeader from "./sections/SiteHeader/SiteHeader";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return null;
}

function App() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" && state?.fromLogo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/", { replace: true, state: {} });
    }
  }, [pathname, state?.fromLogo, navigate]);

  return (
    <div className="layout">
      <SiteHeader />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <SiteFooter />
    </div>
  );
}

export default App;
