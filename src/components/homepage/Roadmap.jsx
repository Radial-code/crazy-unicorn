import React from "react";
import RoadmapPosition from "../../assets/image/roadmap/roadmap.png";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
const Roadmap = () => {
  return (
    <>
      <section className="bg_img py-5 position-relative d-none d-xxl-block  header_bg">
        <div className="position-absolute position_img">
          <img className="w-75" src={RoadmapPosition} alt="roadmap" />
        </div>
        <div className="container pt-5">
          <div className="text-center position-relative">
            <h4 className="main_heading">RoadMap</h4>
            <img
              className="position-absolute center_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-5 mt-5">
              <h4 className="heading mt-5">Phase 1</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-4">
              <h4 className="heading">Phase 2</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h4 className="heading">Phase 3</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-4">
              <h4 className="heading">Phase 4</h4>
              <p className="main_para">
                Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius
                loborti orbi sit sit magna lorem arcu.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pe-5">
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
      <section className="bg_img py-5 position-relative d-xxl-none">
        <div className="container mt-5">
          <div className="text-center position-relative">
            <h4 className="main_heading h-80">RoadMap</h4>
            <img
              className="position-absolute center_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row mt-5 pt-sm-5">
            <div className="col-4">
              <img
                className="w-100 h-100"
                src={RoadmapPosition}
                alt="roadmap"
              />
            </div>
            <div className="col-8 col-lg-6">
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
