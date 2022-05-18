import React from "react";
import { useMediaQuery } from "react-responsive";
import { DiscordIcon, InstaIcon, TwitterIcon } from "../common/Icons";
import logo from "../../assets/image/header/header-logo.png";
import HeroRainbow from "../../assets/image/hero/hero-rainbow.png";
import HeroPositionOne from "../../assets/image/hero/hero-position-one.png";
import HeroPositionTwo from "../../assets/image/hero/hero-position-two.png";
import Hero from "./Hero";

const Header = () => {
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <section className="position-relative hero_bg" id="home">
        <div className="position-absolute top-20 ">
          <img
            className="w-100 moving_annimation"
            src={HeroPositionOne}
            alt="hero-position-one"
          />
        </div>
        <div className="position-absolute end-0 bottom-0">
          <img
            className="w-100 moving_annimation"
            src={HeroPositionTwo}
            alt="hero-position-two"
          />
        </div>
        <div className="navbar-wrapper w-100 position-relative z-5 header_bg">
          <Desktop>
            <div className="container d-flex justify-content-between align-items-center">
              <div className="nav-logo w-100 cursor_pointer ">
                <img src={logo} alt="logo" />
              </div>
              <div className="nav-list-items w-100">
                <ul className="list-unstyled d-flex align-items-center m-0">
                  <li className=" ">
                    <a
                      className="text-decoration-none navbar-link main_para ff-pinky"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      className="text-decoration-none navbar-link text-nowrap main_para ff-pinky"
                      href="#story"
                    >
                      Story
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      className="text-decoration-none navbar-link main_para ff-pinky"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      className="text-decoration-none navbar-link main_para ff-pinky"
                      href="#roadmap"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      className="text-decoration-none navbar-link main_para ff-pinky"
                      href="#team"
                    >
                      team
                    </a>
                  </li>
                  <li className=" ">
                    <a
                      className="text-decoration-none navbar-link main_para ff-pinky"
                      href="#faqs"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-100 d-flex justify-content-end  ">
                <a
                  target="_blank"
                  href="https://twitter.com/i/flow/login"
                  className="px-2 footer_icon"
                >
                  <TwitterIcon />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  className="px-2 footer_icon"
                >
                  <InstaIcon />
                </a>
                <a
                  target="_blank"
                  href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login"
                  className="px-2 footer_icon"
                >
                  <DiscordIcon />
                </a>
              </div>
            </div>
          </Desktop>
          <BeforeDesktop>
            <div className="px-3 d-flex justify-content-between align-items-center">
              <div className="nav-logo">
                <img
                  className="nav-logo-small cursor_pointer"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className=" d-flex justify-content-end  ">
                <a
                  target="_blank"
                  href="https://twitter.com/Bullishlybred"
                  className="px-sm-2 px-1 header-svg footer_icon"
                >
                  <TwitterIcon />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/Bullishlybred/"
                  className="px-sm-2 px-1 header-svg footer_icon"
                >
                  <InstaIcon />
                </a>
                <a
                  target="_blank"
                  href="https://discord.com/invite/VVxUnu5mUS"
                  className="px-sm-2 px-1 header-svg footer_icon"
                >
                  <DiscordIcon />
                </a>
              </div>
              <div
                id="nav-icon1"
                className={`hamburger-menu`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className={`navbar-overlay  `}>
              <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none text-white main_para ff-pinky "
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none text-white text-nowrap main_para ff-pinky "
                    href="#story"
                  >
                    Story
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none text-white main_para ff-pinky "
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none text-white main_para ff-pinky "
                    href="#roadmap"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="" onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none text-white main_para ff-pinky "
                    href="#team"
                  >
                    team
                  </a>
                </li>
                <li className=" " onClick={() => handldeOverlayActive()}>
                  <a
                    className="text-decoration-none text-white main_para ff-pinky"
                    href="#faqs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </BeforeDesktop>
        </div>
        <Hero />
      </section>
    </>
  );
};

export default Header;
