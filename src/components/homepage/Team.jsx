import React from "react";
import TeamHorse from "../../assets/image/team/TeamHorse.png";
import TeamUpperHorse from "../../assets/image/team/text-upper-horse.png";
const Team = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            {/* <div>
              <img
                className="small_horse"
                src={TeamUpperHorse}
                alt="text-upper-horse"
              />
            </div> */}
            <h4 className="main_heading">Team</h4>
          </div>
          <div className="row pt-sm-5 justify-content-center">
            <div className="col-sm-6 col-lg-4 pt-5">
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
            <div className="col-sm-6 col-lg-4 pt-5">
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
            <div className="col-sm-6 col-lg-4 pt-5">
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
