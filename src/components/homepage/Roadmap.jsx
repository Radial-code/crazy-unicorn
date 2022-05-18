import React from "react";
import RoadmapPosition from "../../assets/image/roadmap/roadmap.png";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
import Position from "../../assets/image/aboutus/position-one.png";
import OurPositionOne from "../../assets/image/ourstory/position-one.png";
import RoadmapSmall from "../../assets/image/roadmap/roadmap-small.png";
import SmallImgHorse from "../../assets/image/roadmap/small-img-horse.png";
const Roadmap = () => {
  return (
    <>
      <section
        className="py-5 position-relative d-none d-xxl-block roadmap_bg margin_top_minus z_index_1"
        id="ROADMAP"
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
            data-aos-duration="3000"
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
              data-aos-duration="3000"
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
              data-aos-duration="3000"
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
              data-aos-duration="3000"
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
              data-aos-duration="3000"
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
              data-aos-duration="3000"
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
        <div className="position-absolute">
          <img src={RoadmapSmall} alt="RoadmapSmall" />
        </div>
        <div className="position-absolute bottom-0">
          <img src={SmallImgHorse} alt="RoadmapSmall" />
        </div>
        <div className="container mt-5">
          <div className="text-center position-relative">
            <h4 className="main_heading h-80">RoadMap</h4>
            <img
              className="position-absolute center_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row mt-5 pt-sm-5 justify-content-end">
            {/* <div className="col-6">
              <img className="w-100 h-100" src={RoadmapSmall} alt="roadmap" />
            </div> */}
            <div className="col-6">
              <h4 className="heading">Phase 1</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
              <h4 className="heading">Phase 2</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
              <h4 className="heading">Phase 3</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
              <h4 className="heading">Phase 4</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
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
    </>
  );
};

export default Roadmap;
