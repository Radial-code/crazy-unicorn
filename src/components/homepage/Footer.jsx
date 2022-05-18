import React from "react";
import FooterLogo from "../../assets/image/footer/footer-logo.png";
// import { DiscordIcon } from "../common/Icons";
import { DiscordIcon, InstaIcon, TwitterIcon } from "../common/Icons";
import Input from "../../assets/image/footer/Input.png";
import FooterPosition from "../../assets/image/footer/position.png";
import FooterRainbow from "../../assets/image/footer/footer-rainbow.png";
const Footer = () => {
  return (
    <>
      <section className="py-5 all_bg_img position-relative">
        <div className="position-absolute bottom-0">
          <img
            className="moving_annimation w-100"
            src={FooterPosition}
            alt="position-one"
          />
        </div>
        <div className="position-absolute bottom-0 end-0">
          <img
            className="moving_annimation"
            src={FooterRainbow}
            alt="position-one"
          />
        </div>
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
          <div class="row">
            <div class="col-12">
              <div class="subscribe_now mt-4">
                <div class="subscribe_form">
                  <div class="input-group">
                    <div class="d-flex align-items-center">
                      <img src={Input} alt="input.png" />
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <span className="input-group-btn">
                      <button className="footer_btn">subscribe</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xxl-5 pt-lg-5">
            <div className="col-8 m-auto pt-lg-5">
              <div className="text-center mt-sm-5 pt-5">
                <img src={FooterLogo} alt="footer-logo" />
                <div className="mt-sm-5 pt-4">
                  <a
                    className="footer_icon"
                    href="https://twitter.com/i/flow/login"
                    target={"_blank"}
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="mx-3 footer_icon"
                    href="https://www.instagram.com/accounts/login/"
                    target={"_blank"}
                  >
                    <InstaIcon />
                  </a>
                  <a
                    className="footer_icon"
                    href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login"
                    target={"_blank"}
                  >
                    <DiscordIcon />
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
