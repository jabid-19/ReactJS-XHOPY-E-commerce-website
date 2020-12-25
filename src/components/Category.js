import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Category extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div className="category">
                <h2>Shop by Categories</h2>
                <h5 className="mt-4">Top categories in this week</h5>
                <div className="category-div mt-4">
                  <div className="category-item-div box1">
                    <img src="images/woman.jpg" alt="" />
                    <div className="category-child-div">
                      <h6>Womens</h6>
                      <h6>(17 items)</h6>
                    </div>
                  </div>
                  <div className="category-item-div box2">
                    <img src="images/shoe.jpg" alt="" />

                    <div className="category-child-div">
                      <h6>Shoes</h6>
                      <h6>(20 items)</h6>
                    </div>
                  </div>
                  <div className="category-item-div box3">
                    <img src="images/man.jpg" alt="" />

                    <div className="category-child-div">
                      <h6>Mens</h6>
                      <h6>(27 items)</h6>
                    </div>
                  </div>
                  <div className="category-item-div box4">
                    <img src="images/watch.jpg" alt="" />

                    <div className="category-child-div">
                      <h6>Accessories</h6>
                      <h6>(15 items)</h6>
                    </div>
                  </div>
                  <div className="category-item-div box5">
                    <img src="images/bag.jpg" alt="" />

                    <div className="category-child-div">
                      <h6>Backpacks</h6>
                      <h6>(9 items)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
