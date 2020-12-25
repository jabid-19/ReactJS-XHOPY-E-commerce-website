import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Best extends Component {
  render() {
    return (
      <div className="trending mt-5">
        <h2>Best Seller Products</h2>
        <h5 className="mt-4">Top view in this week</h5>

        <div className="trending-products mt-3">
          <Card className="trending-card">
            <Card.Img variant="top" src="images/p8.jpg" />
            <Card.Body>
              <Card.Title>Bling Glass</Card.Title>
              <Card.Text>$89.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p9.jpg" />
            <Card.Body>
              <Card.Title>Gameboy 20</Card.Title>
              <Card.Text>$59.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p10.jpg" />
            <Card.Body>
              <Card.Title>Hand Bag</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p11.jpg" />
            <Card.Body>
              <Card.Title>Febreze</Card.Title>
              <Card.Text>$19.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p12.jpg" />
            <Card.Body>
              <Card.Title>Cling Glass</Card.Title>
              <Card.Text>$39.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p13.jpg" />
            <Card.Body>
              <Card.Title>Ovef Bag</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
