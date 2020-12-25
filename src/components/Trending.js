import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Trending extends Component {
  render() {
    return (
      <div className="trending mt-5">
        <h1>Trending Products</h1>
        <h3 className="mt-4">Top view in this week</h3>

        <div className="trending-products mt-3">
          <Card className="trending-card">
            <Card.Img variant="top" src="images/p7.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p2.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p3.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p4.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p5.jpg" />
            <Card.Body>
              <Card.Title>Piqué Watch</Card.Title>
              <Card.Text>$79.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p6.jpg" />
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
