import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Hero extends Component {
  render() {
    return (
      <div
        className="hero"
        style={{
          backgroundImage: "url(" + "images/model.png" + ")",
          backgroundPosition: "right",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="hero-img">
                {/* <img className="model" src="images/model.png" alt="" /> */}
                <div id="heroText">
                  <h3 className="mb-4">Quick parcel delivery,</h3>
                  <h1>New Season Women’s Fashion</h1>
                  <h1>Up to 70% off now!</h1>
                  <Button className="mt-3" variant="outline-primary" size="lg">
                    Start Shopping
                  </Button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
