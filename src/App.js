import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/style/common.css";
import "./App.css";
import Home from "./views/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoImg from "./assets/image/loader/header-logo.png";
import { UpArrowIcon } from "./components/common/Icons";
import { useScreenFixedProvider } from "./components/context/ScreenFixedProvider";
const App = () => {
  const [loading, setLoading] = useState(false);
  const { showOverlay } = useScreenFixedProvider();
  const [showButton, setShowButton] = useState(false);

  AOS.init({
    once: true,
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {loading ? (
        <Home />
      ) : (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
          <img className="moving_annimation" src={LogoImg} />{" "}
        </div>
      )}{" "}
      <>
        {showButton ? (
          <div
            className="topscroll d-flex justify-content-center align-items-center cursor-pointer"
            onClick={() => scrollToTop()}
          >
            <UpArrowIcon />
          </div>
        ) : (
          ""
        )}{" "}
      </>
    </>
  );
};
export default App;
