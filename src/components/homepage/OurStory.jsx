import React from "react";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
// import Position from "../../assets/image/aboutus/position-one.png";
import OurPositionOne from "../../assets/image/ourstory/position-one.png";
const OurStory = () => {
  return (
    <>
      <section className="py-5 position-relative margin_top_minus" id="story">
        <div className="position-absolute top-0">
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
            data-aos-duration="1500"
          >
            <div class="pt-4 position-relative">
              <h1 class="main_heading h-80">OUR STORY</h1>
              <img
                className="position-absolute center_horse"
                src={TextHorse}
                alt="text-upper-horse"
              />
            </div>
            <div className="row">
              <div
                className="col-12 col-lg-10 m-auto"
                data-aos="zoom-in"
                data-aos-duration="1500"
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
        </div>
      </section>
    </>
  );
};

export default OurStory;
