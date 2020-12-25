import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Trending extends Component {
  render() {
    return (
      <div className="trending mt-5">
        <h2>Trending Products</h2>
        <h5 className="mt-4">Top view in this week</h5>

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
              <Card.Title>Nike Shoe</Card.Title>
              <Card.Text>$109.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p3.jpg" />
            <Card.Body>
              <Card.Title>One Minus</Card.Title>
              <Card.Text>$49.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p4.jpg" />
            <Card.Body>
              <Card.Title>Crew Bag</Card.Title>
              <Card.Text>$49.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p5.jpg" />
            <Card.Body>
              <Card.Title>Bling Glass</Card.Title>
              <Card.Text>$29.00</Card.Text>
            </Card.Body>
          </Card>

          <Card className="trending-card">
            <Card.Img variant="top" src="images/p6.jpg" />
            <Card.Body>
              <Card.Title>Checked Camera</Card.Title>
              <Card.Text>$179.00</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
