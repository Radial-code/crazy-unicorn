import React from "react";
import { Accordion } from "react-bootstrap";
import TextHorse from "../../assets/image/team/text-upper-horse.png";
import OurPositionOne from "../../assets/image/ourstory/position-one.png";
import Position from "../../assets/image/aboutus/position-one.png";

const Faq = () => {
  return (
    <>
      <section
        className="py-5 faq_bg position-relative margin_top_minus"
        id="faqs"
      >
        <div className="position-absolute top-0">
          <img
            className="moving_annimation"
            src={OurPositionOne}
            alt="position-one"
          />
        </div>
        <div className="position-absolute top-0 end-0">
          <img
            className="moving_annimation"
            src={Position}
            alt="position-one"
          />
        </div>
        <div className="container mt-5">
          <div
            className="text-center position-relative"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h5 className="main_heading h-80">FAQS</h5>
            <img
              className="position-absolute center_horse moving_annimation_horse"
              src={TextHorse}
              alt="text-upper-horse"
            />
          </div>
          <div className="row pt-sm-5">
            <div
              className="col-lg-11 m-auto z_index_1"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Q.1 Eu faucibus lorem nulla cras ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Q.2 Eu adipiscing ac felis mauris ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Q.3 Ridiculus amet gravida accumsan dis ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Q.4 Magna eu diam nec quis turpis tortor pulvinar ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Q.5 Morbi at cursus ut in augue ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Q.6 Cras pellentesque convallis semper dolor at vel ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Q.7 gravida maecenas amet tincidunt feugiat ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Pulvinar odio scelerisque suspendisse fringilla rutrum a.
                    Vestibulum etiam egestas
                    <span className="d-lg-block">
                      dictum tristique. Eu quis in eu nunc, aliquet in non elit.
                      Dis tincidunt.
                    </span>
                    <div className="border mt-4"></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
