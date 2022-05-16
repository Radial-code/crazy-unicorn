import React from "react";
import { Accordion } from "react-bootstrap";
// import FaqIcon from "../../assets/image/faq/faq-icon.png";

const Faq = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h5 className="main_heading">FAQS</h5>
          </div>
          <div className="row mt-5">
            <div className="col-lg-11 m-auto">
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
