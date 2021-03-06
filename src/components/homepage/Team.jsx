import React from "react";
import TeamHorse from "../../assets/image/team/TeamHorse.png";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
import Position from "../../assets/image/aboutus/position-one.png";
const Team = () => {
  return (
    <>
      <section
        className="py-5 team_bg  position-relative margin_top_minus"
        id="team"
      >
        <div className="position-absolute top-0 end-0">
          <img
            className="moving_annimation"
            src={Position}
            alt="position-one"
          />
        </div>
        <div className="container mt-5 pt-5">
          <div
            className="text-center mt-5 pt-5 position-relative"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h4 className="main_heading mt-5 pt-5 h-80">Team</h4>
            <img
              className="position-absolute team_horse moving_annimation_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row pt-sm-5 justify-content-center">
            <div
              className="col-sm-6 col-lg-4 pt-5 z_index_1"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="team_card_bg text-center h-100">
                <img
                  className="w-100 horse_img"
                  src={TeamHorse}
                  alt="TeamHorse"
                />
                <h3 className="heading mt-4">Jerome Bell</h3>
                <p className="main_para mb-0">(CEO)</p>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 pt-5 z_index_1"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="team_card_bg text-center h-100">
                <img
                  className="w-100 horse_img"
                  src={TeamHorse}
                  alt="TeamHorse"
                />
                <h3 className="heading mt-4">Jenny Wilson</h3>
                <p className="main_para mb-0">(Founder)</p>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 pt-5 z_index_1"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="team_card_bg text-center h-100">
                <img
                  className="w-100 horse_img"
                  src={TeamHorse}
                  alt="TeamHorse"
                />
                <h3 className="heading mt-4">Ralph Edwards</h3>
                <p className="main_para mb-0">(Team Member)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
