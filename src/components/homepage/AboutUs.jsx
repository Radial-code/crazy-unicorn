import React from "react";
import AboutUsHorse from "../../assets/image/aboutus/AboutUsHorse.png";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
import Position from "../../assets/image/aboutus/position-one.png";
import OurPositionOne from "../../assets/image/ourstory/position-one.png";
const AboutUs = () => {
  return (
    <>
      <div className="pb-5  position-relative margin_top_minus" id="STORY">
        {/* <div className="position-absolute top-0">
          <img
            className="moving_annimation"
            src={OurPositionOne}
            alt="position-one"
          />
        </div>
        <div className="container">
          <div
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <div class="pt-4 position-relative">
              <h1 class="main_heading h-80">OUR STORY</h1>
              <img
                className="position-absolute center_horse moving_annimation_horse"
                src={TextHorse}
                alt="text-upper-horse"
              />
            </div>
            <div className="row">
              <div
                className="col-12 col-lg-10 m-auto z_index_1"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <p class="main_para">
                  Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi,
                  sit. Sagittis, ac velit gravida a nullam lobortis in
                  malesuada. Cras pellentesque convallis semper dolor at velit
                  diam odio. Nullam quam sollicitudin urna eget. In gravida
                  maecenas amet tincidunt feugiat tellus, pulvinar nulla.
                  Ultricies eu lectus consequat et imperdiet eget elementum.
                  Euismod placerat amet nisl sagittis arcu, et, sodales velit.
                  Pretium elit volutpat orci accumsan, a ac id rutrum enim.
                  Tellus luctus eget elit vitae eget nisl ante.
                </p>
                <p class="main_para">
                  Sed lectus ut elit id lectus diam massa nisl pretium. Vel
                  amet, sagittis, adipiscing maecenas lorem ullamcorper.
                  Faucibus netus sed varius lobortis. Morbi sit sit magna lorem
                  arcu facilisi ipsum sed amet. At bibendum egestas in maecenas.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="position-relative pt-5 mt-5" id="ABOUT">
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
                data-aos-duration="3000"
              >
                <img className="w-100" src={AboutUsHorse} alt="AboutUsHorse" />
              </div>
              <div
                className="col-lg-5 m-auto z_index_1"
                data-aos="fade-left"
                data-aos-duration="3000"
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
