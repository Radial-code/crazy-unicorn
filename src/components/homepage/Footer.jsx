import React from "react";
import FooterLogo from "../../assets/image/footer/footer-logo.png";
import twitter from "../../assets/image/svg/twitter.svg";
import insta from "../../assets/image/svg/insta.svg";
import discord from "../../assets/image/svg/discord.svg";
const Footer = () => {
  return (
    <>
      <section className="py-5">
        <div className="container pt-md-5">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="text-center">
                <h4 className="main_heading">Sign up for the latest news</h4>
                <p className="main_para">
                  Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet
                  sed
                  <span className="d-md-block">aenean egestas ut sit.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-xxl-5 pt-lg-5">
            <div className="col-8 m-auto pt-lg-5">
              <div className="text-center mt-sm-5 pt-5">
                <img src={FooterLogo} alt="footer-logo" />
                <div className="mt-sm-5 pt-4">
                  <a href="https://twitter.com/i/flow/login" target={"_blank"}>
                    <img className="footer_icon" src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target={"_blank"}
                  >
                    <img className="mx-4 footer_icon" src={insta} alt="insta" />
                  </a>
                  <a
                    href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login"
                    target={"_blank"}
                  >
                    <img className="footer_icon" src={discord} alt="discord" />
                  </a>
                </div>
                <p className="font-sm fw-normal opacity_07 mt-4 mt-sm-5 mb-0">
                  Copyright@CrazyUnicorn.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
