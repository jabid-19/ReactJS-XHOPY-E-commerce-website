import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Best extends Component {
  render() {
    return (
      <div className="trending mt-5">
        <h1>Best Seller Products</h1>
        <h3 className="mt-4">Top view in this week</h3>

        <div className="trending-products mt-3">
          <Card className="trending-card">
            <Card.Img variant="top" src="images/p8.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p9.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p10.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p11.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p12.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p13.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
