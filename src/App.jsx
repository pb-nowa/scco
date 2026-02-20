import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LenisProvider } from "./components/LenisProvider/LenisProvider";
import LoadScreen from "./components/LoadScreen/LoadScreen";
import { FirstLoadProvider } from "./context/FirstLoadContext";
import { PageTransitionProvider } from "./context/PageTransitionContext";
import { usePageTransitionClickHandler } from "./hooks/usePageTransitionClickHandler";
import { useScrollTo } from "./context/ScrollToContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SiteFooter from "./sections/SiteFooter/SiteFooter";
import SiteHeader from "./sections/SiteHeader/SiteHeader";

function PageTransitionHandler() {
  usePageTransitionClickHandler();
  return null;
}

function ScrollToHash() {
  const { hash } = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (hash && scrollTo) {
      scrollTo(hash.slice(1));
    }
  }, [hash, scrollTo]);

  return null;
}

function ScrollToTopOnLogo() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (pathname === "/" && state?.fromLogo && scrollTo) {
      scrollTo(0);
      navigate("/", { replace: true, state: {} });
    }
  }, [pathname, state?.fromLogo, navigate, scrollTo]);

  return null;
}

function ScrollToTopOnAbout() {
  const { pathname } = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (pathname === "/about" && scrollTo) {
      scrollTo(0);
    }
  }, [pathname, scrollTo]);

  return null;
}

function App() {
  return (
    <FirstLoadProvider>
    <PageTransitionProvider>
      <PageTransitionHandler />
      <LoadScreen />
      <LenisProvider>
        <div className="layout">
          <SiteHeader />
          <ScrollToHash />
          <ScrollToTopOnLogo />
          <ScrollToTopOnAbout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <SiteFooter />
        </div>
      </LenisProvider>
    </PageTransitionProvider>
    </FirstLoadProvider>
  );
}

export default App;
