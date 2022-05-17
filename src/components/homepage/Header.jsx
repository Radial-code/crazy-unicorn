import React from "react";
import { useMediaQuery } from "react-responsive";
import { DiscordIcon, InstaIcon, TwitterIcon } from "../common/Icons";
import logo from "../../assets/image/header/header-logo.png";

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
      <div className="navbar-wrapper w-100 position-relative header_bg">
        <Desktop>
          <div className="container d-flex justify-content-between align-items-center">
            <div className="nav-logo w-100 cursor_pointer ">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-list-items w-100">
              <ul className="list-unstyled d-flex align-items-center m-0">
                <li>
                  <a
                    className="text-decoration-none navbar-link main_para ff-pinky"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none navbar-link text-nowrap main_para ff-pinky"
                    href="#proof"
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none navbar-link main_para ff-pinky"
                    href="#adopt-now"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none navbar-link main_para ff-pinky"
                    href="#roadmap"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none navbar-link main_para ff-pinky"
                    href="#roadmap"
                  >
                    team
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none navbar-link main_para ff-pinky"
                    href="#faq"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-100 d-flex justify-content-end  ">
              <a
                target="_blank"
                href="https://twitter.com/Bullishlybred"
                className="px-2"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/Bullishlybred/"
                className="px-2"
              >
                <InstaIcon />
              </a>
              <a
                target="_blank"
                href="https://discord.com/invite/VVxUnu5mUS"
                className="px-2"
              >
                <DiscordIcon />
              </a>
            </div>
          </div>
        </Desktop>
        <BeforeDesktop>
          <div className="px-3 d-flex justify-content-between align-items-center">
            <div className="nav-logo">
              <img className="nav-logo-small" src={logo} alt="logo" />
            </div>
            <div className=" d-flex justify-content-end  ">
              <a
                target="_blank"
                href="https://twitter.com/Bullishlybred"
                className="px-sm-2 px-1 header-svg"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/Bullishlybred/"
                className="px-sm-2 px-1 header-svg"
              >
                <InstaIcon />
              </a>
              <a
                target="_blank"
                href="https://discord.com/invite/VVxUnu5mUS"
                className="px-sm-2 px-1 header-svg"
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
              <li onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none text-white main_para ff-pinky"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none text-white text-nowrap main_para ff-pinky"
                  href="#proof"
                >
                  Story
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none text-white main_para ff-pinky"
                  href="#adopt-now"
                >
                  About
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none text-white main_para ff-pinky"
                  href="#roadmap"
                >
                  Roadmap
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none text-white main_para ff-pinky"
                  href="#roadmap"
                >
                  team
                </a>
              </li>
              <li onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none text-white main_para ff-pinky"
                  href="#faq"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </BeforeDesktop>
      </div>
    </>
  );
};

export default Header;
