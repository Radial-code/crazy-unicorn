import React from "react";
import AboutUsHorse from "../../assets/image/aboutus/AboutUsHorse.png";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
import Position from "../../assets/image/aboutus/position-one.png";
import OurPositionOne from "../../assets/image/ourstory/position-one.png";
const AboutUs = () => {
  return (
    <>
      <div className="py-5  position-relative margin_top_minus" id="about">
        <div className="position-relative pt-sm-5 mt-sm-5" id="ABOUT">
          <div className="position-absolute top-0 end-0">
            <img
              className="moving_annimation"
              src={Position}
              alt="position-one"
            />
          </div>
          <div className="position-absolute top-50">
            <img
              className="moving_annimation"
              src={OurPositionOne}
              alt="position-one"
            />
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 z_index_1"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <img className="w-100" src={AboutUsHorse} alt="AboutUsHorse" />
              </div>
              <div
                className="col-lg-5 m-auto z_index_1"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="position-relative mt-lg-0 mt-5">
                  <h1 className="font-xxl ff-pinky pt-5">ABOUT US</h1>
                  <img
                    className="position-absolute left_73 moving_annimation_horse"
                    src={TextHorse}
                    alt="text-upper-horse"
                  />
                </div>
                <p className="main_para">
                  Tortor suscipit non habitant natoque elementum, lectus turpis.
                  Maecenas viverra habitasse ut sit eleifend aenean. Egestas
                  platea bibendum tempor non tempus egestas. Rhoncus sit est
                  risus tellus lorem convallis. Amet pellentesque viverra
                  euismod eget dignissim ullamcorper. In et ac amet, habitant
                  erat fermentum eget aliquet lectus. Condimentum congue nibh
                  nisl sed quis justo, senectus egestas.
                </p>
                <p className="main_para">
                  In in ut scelerisque quam purus, quam. Porttitor aenean elit
                  blandit gravida potenti sed. Mauris.
                </p>
                <button className="mint_btn bg-white font-lg  fw-bold bg-white mt-4">
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
