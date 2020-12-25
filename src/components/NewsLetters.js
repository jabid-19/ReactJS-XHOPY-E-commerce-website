import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class NewsLetters extends Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col md={12}>
              <div className="news-letter">
                <div className="news-div">
                  <h2>Subcribe To Our Newsletter</h2>
                  <p>
                    Sign up for the weekly newsletter and build better ecommerce
                    stores.
                  </p>
                  <div className="pt-5">
                    <input className="news-input" type="text"></input>
                    <Button variant="outline-primary">Subscription</Button>{" "}
                  </div>
                  <p className="pt-5">
                    We respect your privacy, so we never share your info.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
