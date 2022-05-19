import React from "react";
import RoadmapPosition from "../../assets/image/roadmap/roadmap.png";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
import Position from "../../assets/image/aboutus/position-one.png";
import OurPositionOne from "../../assets/image/ourstory/position-one.png";
import RoadmapSmall from "../../assets/image/roadmap/roadmap-small.png";
const Roadmap = () => {
  return (
    <>
      <section
        className="py-5 position-relative d-none d-xxl-block roadmap_bg margin_top_minus z_index_1"
        id="roadmap"
      >
        <div className="position-absolute position_img">
          <img className="w-75" src={RoadmapPosition} alt="roadmap" />
        </div>
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
        <div className="container pt-5">
          <div
            className="text-center position-relative"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h4 className="main_heading">RoadMap</h4>
            <img
              className="position-absolute center_horse moving_annimation_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row mt-5 pt-5 z_index_1">
            <div
              className="col-5 mt-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h4 className="heading mt-5">Phase 1</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row justify-content-end z_index_1">
            <div
              className="col-4"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h4 className="heading">Phase 2</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row z_index_1">
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h4 className="heading">Phase 3</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row justify-content-end z_index_1">
            <div
              className="col-4"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h4 className="heading">Phase 4</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row z_index_1">
            <div
              className="col-4 pe-5"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h4 className="heading">Phase 5</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg_img py-5 position-relative d-xxl-none roadmap_bg margin_top_minus"
        id="ROADMAP"
      >
        <div className="position-absolute h-100 end-md-50 top-10">
          <img
            className="w-100 h-100 max-width-200"
            src={RoadmapSmall}
            alt="RoadmapSmall"
          />
        </div>
        <div className="container mt-5 py-5">
          <div className="text-center position-relative">
            <h4 className="main_heading h-80">RoadMap</h4>
            <img
              className="position-absolute center_horse moving_annimation_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row pt-5 mt-sm-5 justify-content-end justify-content-md-start">
            <div className="col-4"></div>
            <div
              className="col-6 col-sm-4 col-md-8 col-lg-3"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="mb-4 margin_80 mt-5 pt-4 pt-md-5">
                <h4 className="font-sm fw-normal ff-pinky">Phase 1</h4>
                <p className="font-xs fw-normal">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper.
                </p>
              </div>
              <div className="mb-5 margin_40 mt-5 pt-4 pt-md-5">
                <h4 className="font-sm fw-normal ff-pinky">Phase 2</h4>
                <p className="font-xs fw-normal">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper.
                </p>
              </div>
              <div className="mb-5 margin_80 mt-5 pt-4 pt-md-5">
                <h4 className="font-sm fw-normal ff-pinky">Phase 3</h4>
                <p className="font-xs fw-normal">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper.
                </p>
              </div>
              <div className="mb-5 margin_4 mt-5 pt-4 pt-md-5">
                <h4 className="font-sm fw-normal ff-pinky">Phase 4</h4>
                <p className="font-xs fw-normal">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper.
                </p>
              </div>
              <div className="mb-5 margin_80 mt-5 pt-5 pb-3 pb-lg-0">
                <h4 className="font-sm fw-normal ff-pinky">Phase 5</h4>
                <p className="font-xs fw-normal">
                  Sed lectus ut elit id lectus diam massa nisl pretium.
                  Sagittis, adipiscing maecenas lorem ullamcorper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
